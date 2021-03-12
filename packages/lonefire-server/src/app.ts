import debugInit from 'debug';
import depthLimit from 'graphql-depth-limit';
import koaPlayground from 'graphql-playground-middleware-koa';
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import session from 'koa-session';
import graphqlHTTP from 'koa-graphql';
import graphqlBatchHTTPWrapper from 'koa-graphql-batch';
import Router from 'koa-router';
import grant from 'grant';

import cors from '@koa/cors';
import { PrismaClient } from '@prisma/client';

import authRouter from './oauth';
import { createContext } from './context';
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
debug(process.env.GOOGLE_OAUTH_CLIENT_ID);
app.use(
  grant({
    defaults: {
      origin: process.env.BASE_URL,
      transport: 'session',
      state: true,
    },
    google: {
      key: process.env.GOOGLE_OAUTH_CLIENT_ID,
      secret: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
      scope: ['openid'],
      nonce: true,
      custom_params: { access_type: 'offline', prompt: 'consent' },
      response: ['tokens'],
      callback: '/oauth-callback',
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
