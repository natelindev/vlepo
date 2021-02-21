import argon2 from 'argon2';
import Router from 'koa-router';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const router = new Router();

router.post('/register', async (ctx) => {
  const data: { username: string; password: string } = ctx.request.body;
  await prisma.user.create({
    data: {
      username: data.username,
      password: await argon2.hash(data.password, { type: argon2.argon2id }),
    },
  });

  ctx.body = { ok: true };
  ctx.status = 200;
});

router.post('/login', async (ctx) => {
  const data: { username: string; password: string } = ctx.request.body;
  const user = await prisma.user.findFirst({
    select: {
      password: true,
    },
    where: {
      username: data.username,
    },
  });

  if (user && argon2.verify(user.password, data.password, { type: argon2.argon2id })) {
    ctx.body = { ok: true };
    ctx.status = 200;
  }
});

export default router;
