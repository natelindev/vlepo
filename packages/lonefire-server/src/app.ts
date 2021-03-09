import debugInit from 'debug';
import depthLimit from 'graphql-depth-limit';
import koaPlayground from 'graphql-playground-middleware-koa';
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import graphqlHTTP from 'koa-graphql';
import graphqlBatchHTTPWrapper from 'koa-graphql-batch';
import Router from 'koa-router';

import cors from '@koa/cors';
import { PrismaClient } from '@prisma/client';

import authRouter from './auth';
import { createContext } from './context';
import schema from './schema';

const debug = debugInit('lonefire:app');
const prisma = new PrismaClient();

const app = new Koa();

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

router.get('/', async (ctx) => {
  ctx.body = 'hello world';
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
