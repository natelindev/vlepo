import debugInit from 'debug';
import koaPlayground from 'graphql-playground-middleware-koa';
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import graphqlHTTP from 'koa-graphql';
import graphqlBatchHTTPWrapper from 'koa-graphql-batch';
import Router from 'koa-router';

import { PrismaClient } from '@prisma/client';

import authRouter from './auth';
import myGraphqlSchema from './graphqlSchema';

const debug = debugInit('app');
const prisma = new PrismaClient();

const app = new Koa();

app.use(bodyParser());
const router = new Router();

const graphqlServer = graphqlHTTP({
  schema: myGraphqlSchema,
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
