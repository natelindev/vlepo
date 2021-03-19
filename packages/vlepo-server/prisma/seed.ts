import argon2 from 'argon2';
import cryptoRandomString from 'crypto-random-string';
import debugInit from 'debug';
// eslint-disable-next-line import/no-extraneous-dependencies
import { lorem, name } from 'faker';

import { PostStatus, PrismaClient } from '@prisma/client';
import { OAuthConsts } from '@vlepo/shared';

const debug = debugInit('vlepo:db:seed');

(async () => {
  const prisma = new PrismaClient();

  try {
    const admin = await prisma.user.create({
      data: {
        email: 'admin@admin.com',
        password: await argon2.hash('default-password'),
        name: `${name.firstName()} ${name.lastName()}`,
        roles: {
          create: {
            name: 'Administrator',
            value: 'administrator',
          },
        },
        posts: {
          createMany: {
            data: Array(5).fill({
              title: name.title(),
              content: lorem.paragraphs(5),
              status: PostStatus.PUBLISHED,
            }),
          },
        },
      },
    });
    debug(`seeded admin user`);

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
      },
    });
    debug(`seeded default oauth client`);
  } catch (err) {
    debug(err);
    await Promise.all([
      prisma.user.deleteMany(),
      prisma.userRole.deleteMany(),
      prisma.post.deleteMany(),
      prisma.oAuthScope.deleteMany(),
      prisma.oAuthClient.deleteMany(),
    ]);
  }
  await prisma.$disconnect();
})();
