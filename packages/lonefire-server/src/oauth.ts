import debugInit from 'debug';
import Router from 'koa-router';

const router = new Router();
const debug = debugInit('lonefire:oauth');

type GrantResponse = {
  id_token: string;
  access_token: string;
  refresh_token?: string;
  profile: {
    sub: string;
    name: string;
    given_name: string;
    family_name: string;
    picture: string;
    email: string;
    email_verified: boolean;
    locale: string;
  };
};
router.get('/oauth-callback', async (ctx) => {
  const response: GrantResponse = ctx.session?.grant.response;
  const provider = ctx.session?.grant.provider;
  debug(provider);
  debug(response);
  ctx.redirect(`${process.env.CLIENT_URL}/oauth2-redirect`);
});

export default router;
