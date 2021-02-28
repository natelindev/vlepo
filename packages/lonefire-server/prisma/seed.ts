import argon2 from 'argon2';
import debugInit from 'debug';
// eslint-disable-next-line import/no-extraneous-dependencies
import { lorem, name } from 'faker';

import { PostStatus, PrismaClient } from '@prisma/client';

const debug = debugInit('seed');

(async () => {
  const prisma = new PrismaClient();
  const blogWithAuthor = await prisma.post.create({
    data: {
      title: name.title(),
      content: lorem.paragraphs(5),
      status: PostStatus.PUBLISHED,
      author: {
        create: {
          username: 'admin',
          password: await argon2.hash('admin', { type: argon2.argon2id }),
          name: `${name.firstName()} ${name.lastName()}`,
        },
      },
    },
  });

  debug('added seed post with author:\n', blogWithAuthor);
  await prisma.$disconnect();
})();
