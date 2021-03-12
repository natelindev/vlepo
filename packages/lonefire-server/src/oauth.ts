import Router from 'koa-router';
import debugInit from 'debug';

const router = new Router();
const debug = debugInit('oauth');

router.post('/oauth-callback', async (ctx) => {
  debug(ctx.session?.grant.response);

  ctx.body = { ok: true };
  ctx.status = 200;
});

export default router;
