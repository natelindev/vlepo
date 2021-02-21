import debugInit from 'debug';
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import Router from 'koa-router';

import { PrismaClient } from '@prisma/client';

import authRouter from './auth';

const debug = debugInit('app');
const prisma = new PrismaClient();

const app = new Koa();

app.use(bodyParser());
const router = new Router();

router.get('/', async (ctx) => {
  ctx.body = 'hello world';
});

app.use(router.routes());
app.use(authRouter.routes());

app
  .listen(3001)
  .on('listening', () => debug('Server running on port 3001'))
  .on('error', (err) => {
    debug(err.stack);
  })
  .on('close', () => {
    prisma.$disconnect();
  });
