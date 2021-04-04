/* eslint-disable import/no-extraneous-dependencies */
import argon2 from 'argon2';
import cryptoRandomString from 'crypto-random-string';
import debugInit from 'debug';
import { lorem, name } from 'faker';
import meow from 'meow';

import { OAuthGrant, PostStatus, PrismaClient } from '@prisma/client';
import { defaultIds, OAuthConsts } from '@vlepo/shared';

const debug = debugInit('vlepo:db:seed');

const cleanDB = async (prisma: PrismaClient) => {
  await prisma.$executeRaw`
  do
  $$
  declare
    l_stmt text;
  begin
    select 'truncate ' || string_agg(format('%I.%I', schemaname, tablename), ',')
      into l_stmt
    from pg_tables
    where schemaname in ('public');

    execute l_stmt;
  end;
  $$
  `;
};

const seedBD = async (prisma: PrismaClient) => {
  try {
    const admin = await prisma.user.create({
      data: {
        id: defaultIds.admin,
        email: 'admin@admin.com',
        password: await argon2.hash('default-password'),
        name: `${name.firstName()} ${name.lastName()}`,
        roles: {
          create: OAuthConsts.roles.admin,
        },
        profileImageUrl: '/images/avatar/host.svg',
      },
    });
    debug(`seeded admin user`);

    const defaultBlog = await prisma.blog.create({
      data: {
        id: defaultIds.blog,
        owner: {
          connect: {
            id: admin.id,
          },
        },
        name: "Nathaniel's Blog",
        visitorCount: 0,
      },
    });
    debug(`seeded default blog`);

    await prisma.post.createMany({
      data: Array(5).fill({
        title: name.title(),
        content: lorem.paragraphs(5),
        status: PostStatus.PUBLISHED,
        ownerId: admin.id,
        blogId: defaultBlog.id,
      }),
    });
    debug(`seeded default posts`);

    await prisma.oAuthScope.create({
      data: {
        name: 'Self',
        value: 'self',
        description: 'Create, update, delete all resources owned by you',
        childScopes: {
          createMany: {
            data: OAuthConsts.entities.map((entity) => ({
              name: `${entity.charAt(0).toUpperCase()}${entity.slice(1)}`,
              value: `self:${entity}`,
              description: `Create, update, or delete ${entity
                .charAt(0)
                .toUpperCase()}${entity.slice(1)} owned by you`,
            })),
          },
        },
      },
    });

    await Promise.all(
      [...OAuthConsts.entities].map(async (entity) => {
        await prisma.oAuthScope.create({
          data: {
            name: `${entity.charAt(0).toUpperCase()}${entity.slice(1)}`,
            value: entity,
            description: `Create, update, or delete all ${entity
              .charAt(0)
              .toUpperCase()}${entity.slice(1)}s`,
            parent: entity.includes('self')
              ? {
                  connect: {
                    value: `self:${entity}`,
                  },
                }
              : undefined,
            childScopes: {
              createMany: {
                data: [
                  {
                    name: `Create ${entity.charAt(0).toUpperCase()}${entity.slice(1)}`,
                    value: `${entity}:create`,
                    description: `Create ${entity.charAt(0).toUpperCase()}${entity.slice(1)}`,
                  },
                  {
                    name: `Update ${entity.charAt(0).toUpperCase()}${entity.slice(1)}`,
                    value: `${entity}:update`,
                    description: `Update ${entity.charAt(0).toUpperCase()}${entity.slice(1)}`,
                  },
                  {
                    name: `Delete ${entity.charAt(0).toUpperCase()}${entity.slice(1)}`,
                    value: `${entity}:delete`,
                    description: `Delete ${entity.charAt(0).toUpperCase()}${entity.slice(1)}`,
                  },
                ],
              },
            },
          },
        });
      }),
    );
    debug(`seeded default oauth scopes`);

    await prisma.oAuthClient.create({
      data: {
        id: OAuthConsts.DEFAULT_CLIENT_ID,
        secret: cryptoRandomString({ length: 20, type: 'alphanumeric' }),
        owner: {
          connect: {
            id: admin.id,
          },
        },
        scopes: {
          connect: [...OAuthConsts.entities, 'self'].map((entity) => ({
            value: entity,
          })),
        },
        grants: Object.values(OAuthGrant),
      },
    });
    debug(`seeded default oauth client`);
  } catch (err) {
    debug(err);
    await cleanDB(prisma);
  }
};

const cli = meow(
  `
	Usage
	  $ db:seed <flags>

	Options
	  --seed  -s  seed the database
    --clean -c  clean the database
`,
  {
    flags: {
      seed: {
        type: 'boolean',
        alias: 's',
      },
      clean: {
        type: 'boolean',
        alias: 'c',
      },
    },
  },
);

(async () => {
  const prisma = new PrismaClient();
  if (cli.flags.seed || !cli.flags.clean) {
    await seedBD(prisma);
    debug('db seed complete');
  }
  if (cli.flags.clean) {
    await cleanDB(prisma);
    debug('db cleanup complete');
  }
  prisma.$disconnect();
})();
