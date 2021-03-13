import debugInit from 'debug';
import grant from 'grant';
import depthLimit from 'graphql-depth-limit';
import koaPlayground from 'graphql-playground-middleware-koa';
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import graphqlHTTP from 'koa-graphql';
import graphqlBatchHTTPWrapper from 'koa-graphql-batch';
import Router from 'koa-router';
import session from 'koa-session';

import cors from '@koa/cors';
import { PrismaClient } from '@prisma/client';

import { createContext } from './context';
import authRouter from './oauth';
import schema from './schema';

const debug = debugInit('lonefire:app');
const prisma = new PrismaClient();

const app = new Koa();

app.keys = ['grant'];
app.use(bodyParser());
app.use(
  cors({
    origin: '*',
    allowMethods: ['GET', 'POST', 'OPTIONS'],
    credentials: true,
    allowHeaders:
      'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
  }),
);

app.use(session(app));
app.use(
  grant.koa()({
    defaults: {
      origin: process.env.API_URL,
      transport: 'session',
      nonce: true,
      callback: '/oauth-callback',
    },
    google: {
      key: process.env.GOOGLE_OAUTH_CLIENT_ID,
      secret: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
      scope: [
        'openid',
        'https://www.googleapis.com/auth/userinfo.email',
        'https://www.googleapis.com/auth/userinfo.profile',
      ],
      response: ['tokens', 'profile'],
    },
    github: {
      key: process.env.GITHUB_OAUTH_CLIENT_ID,
      secret: process.env.GITHUB_OAUTH_CLIENT_SECRET,
      scope: ['openid', 'user:email'],
      response: ['tokens', 'profile'],
    },
    reddit: {
      key: process.env.REDDIT_OAUTH_CLIENT_ID,
      secret: process.env.REDDIT_OAUTH_CLIENT_SECRET,
      custom_params: { duration: 'temporary' },
      state: 'some state',
      nonce: false,
      scope: ['identity'],
      response: ['tokens', 'profile'],
    },
  }),
);

const router = new Router();

const graphqlServer = graphqlHTTP({
  schema,
  context: createContext(),
  validationRules: [depthLimit(10)],
  formatError: (error: Error) => ({
    // better errors for development. `stack` used in `gqErrors` middleware
    message: error.message,
    stack: process.env.NODE_ENV === 'development' ? error.stack?.split('\n') : undefined,
  }),
});

router.all('/playground', koaPlayground({ endpoint: '/graphql' }));
router.all('/graphql/batch', graphqlBatchHTTPWrapper(graphqlServer));
router.all('/graphql', graphqlServer);

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
