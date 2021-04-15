import debugInit from 'debug';
import grant from 'grant';
import depthLimit from 'graphql-depth-limit';
import koaPlayground from 'graphql-playground-middleware-koa';
import { graphqlUploadKoa } from 'graphql-upload';
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import graphqlHTTP from 'koa-graphql';
import graphqlBatchHTTPWrapper from 'koa-graphql-batch';
import mount from 'koa-mount';
import Router from 'koa-router';
import session from 'koa-session';
import serve from 'koa-static';

import cors from '@koa/cors';
import { envDetect } from '@vlepo/shared';
import { findMissingFieldNames, hasFields } from '@vlepo/shared/build/utilTypes';

import db from './db';
import schema from './graphql';
import { grantConfig } from './oauth2/grantConfig';
import * as oauth from './oauth2/model';
import authRouter from './oauth2/router';

import type { PrismaClient, User } from '@prisma/client';
import type { Knex } from 'knex';

const debug = debugInit('vlepo:app');

export type ExtendedContext = {
  prisma: PrismaClient;
  oauth: typeof oauth;
  knex: Knex;
  currentUser?: User;
} & Koa.Context &
  Koa.BaseContext;

const app = new Koa();

const requiredEnv = ['SECRET_KEY', 'IMAGE_PATH'];
if (!hasFields(process.env, requiredEnv)) {
  throw new Error(
    `You need ${findMissingFieldNames(process.env, requiredEnv)} env variable in order to run`,
  );
}

app.keys = [process.env.SECRET_KEY];
app.context.prisma = db.prisma;
app.context.oauth = oauth;
app.context.knex = db.knexConnection;

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
app.use(grant.koa()(grantConfig));
app.use(authRouter.routes());

const router = new Router();

const graphqlServer = graphqlHTTP((_req, _res, ctx) => ({
  schema,
  context: ctx,
  validationRules: [depthLimit(10)],
  formatError: (error: Error) => {
    debug(error.stack);
    return {
      // better errors for development. `stack` used in `gqErrors` middleware
      message: error.message,
      stack: envDetect.isDev ? error.stack?.split('\n') : undefined,
    };
  },
}));

router.all('/playground', koaPlayground({ endpoint: '/graphql' }));
router.all('/graphql/batch', graphqlBatchHTTPWrapper(graphqlServer));
router.all('/graphql', graphqlServer);

app.use(graphqlUploadKoa({ maxFileSize: 100000000, maxFiles: 5 }));
app.use(router.routes());
app.use(mount('/images/user-upload/', serve(process.env.IMAGE_PATH, { brotli: true })));

app
  .listen(process.env.API_PORT)
  .on('listening', () => debug(`Server running on port ${process.env.API_PORT}`))
  .on('error', (err) => {
    debug(err.stack);
  })
  .on('close', () => {
    db.prisma.$disconnect();
    db.knexConnection.destroy();
  });
