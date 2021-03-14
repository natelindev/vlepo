declare module 'koa-graphql-batch' {
  export default function graphqlBatchHTTPWrapper(
    args: import('koa').Middleware,
  ): import('koa').Middleware;
}
