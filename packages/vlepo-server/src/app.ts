import debugInit from 'debug';
import grant from 'grant';
import depthLimit from 'graphql-depth-limit';
import koaPlayground from 'graphql-playground-middleware-koa';
import { graphqlUploadKoa } from 'graphql-upload';
import Koa, { Context } from 'koa';
import bodyParser from 'koa-bodyparser';
import graphqlHTTP from 'koa-graphql';
import graphqlBatchHTTPWrapper from 'koa-graphql-batch';
import Router from 'koa-router';
import session from 'koa-session';

import cors from '@koa/cors';
import { envDetect } from '@vlepo/shared';

import prisma from './db';
import schema from './graphql';
import { Oauth2Config } from './oauth2/config';
import { authenticate, authorize } from './oauth2/middleware';
import authRouter from './oauth2/router';

import type { PrismaClient } from '@prisma/client';

const debug = debugInit('vlepo:app');

export type ExtendedContext = {
  prisma: PrismaClient;
  koaContext: Context;
};

const app = new Koa();

if (!process.env.SECRET_KEY) {
  throw new Error('You need SECRET_KEY env variable in order to run');
}

app.keys = [process.env.SECRET_KEY];
app.context.prisma = prisma;

app.use(bodyParser());
app.use(
  envDetect.isProd
    ? (_ctx, next) => next()
    : cors({
        origin: '*',
        allowMethods: ['GET', 'HEAD', 'POST', 'OPTIONS'],
        credentials: true,
        allowHeaders: [
          'Access-Control-Allow-Headers',
          'X-CSRF-Token',
          'X-Requested-With',
          'Origin',
          'Authorization',
          'Access-Control-Request-Method',
          'Access-Control-Request-Headers',
          'Accept',
          'Accept-Version',
          'Content-Length',
          'Content-MD5',
          'Content-Type',
          'Date',
          'X-Api-Version',
        ],
      }),
);

app.use(session(app));
app.use(grant.koa()(Oauth2Config));
app.use(authRouter.routes());

const router = new Router();

const graphqlServer = graphqlHTTP((_req, _res, ctx) => ({
  schema,
  context: {
    prisma,
    koaContext: ctx,
  },
  validationRules: [depthLimit(10)],
  formatError: (error: Error) => ({
    // better errors for development. `stack` used in `gqErrors` middleware
    message: error.message,
    stack: envDetect.isDev ? error.stack?.split('\n') : undefined,
  }),
}));

router.all('/playground', koaPlayground({ endpoint: '/graphql' }));
router.all('/graphql/batch', graphqlBatchHTTPWrapper(graphqlServer));
router.all('/graphql', graphqlServer);

router.get('/secret', authenticate(), async (ctx) => {
  ctx.body = 'secret message';
});

router.get('/super-secret', authorize(), async (ctx) => {
  ctx.body = 'super secret message';
});

app.use(graphqlUploadKoa({ maxFileSize: 100000000, maxFiles: 5 }));
app.use(router.routes());

app
  .listen(3001)
  .on('listening', () => debug('Server running on port 3001'))
  .on('error', (err) => {
    debug(err.stack);
  })
  .on('close', () => {
    prisma.$disconnect();
  });
