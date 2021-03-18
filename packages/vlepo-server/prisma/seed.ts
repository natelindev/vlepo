import argon2 from 'argon2';
import cryptoRandomString from 'crypto-random-string';
import debugInit from 'debug';
// eslint-disable-next-line import/no-extraneous-dependencies
import { lorem, name } from 'faker';

import { PostStatus, PrismaClient } from '@prisma/client';
import { OAuthConsts } from '@vlepo/shared';

const debug = debugInit('seed');

(async () => {
  const prisma = new PrismaClient();

  const admin = await prisma.user.create({
    data: {
      email: 'test@test.com',
      password: await argon2.hash(cryptoRandomString({ length: 10, type: 'alphanumeric' }), {
        type: argon2.argon2id,
      }),
      name: `${name.firstName()} ${name.lastName()}`,
    },
    select: {
      id: true,
    },
  });
  debug(`seeded admin user`);

  await Promise.all(
    Array(5).fill(
      prisma.post.create({
        data: {
          title: name.title(),
          content: lorem.paragraphs(5),
          status: PostStatus.PUBLISHED,
          owner: {
            connect: {
              id: admin.id,
            },
          },
        },
      }),
    ),
  );
  debug(`seeded 5 generated posts`);

  await prisma.oAuthClient.create({
    data: {
      id: OAuthConsts.DEFAULT_CLIENT_ID,
      secret: cryptoRandomString({ length: 20, type: 'alphanumeric' }),
      owner: {
        connect: {
          id: admin.id,
        },
      },
    },
  });
  debug(`seeded default oauth client`);

  await prisma.$disconnect();
})();
