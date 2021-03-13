import debugInit from 'debug';
import Router from 'koa-router';
import { match } from 'ts-pattern';

import { OAuthProviders, PrismaClient } from '@prisma/client';

const router = new Router({
  prefix: '/api',
});

const prisma = new PrismaClient();
const debug = debugInit('vlepo:oauth');

type GrantGoogleResponse = {
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

type GrantGithubResponse = {
  access_token: string;
  profile: {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: false;
    name: string;
    company: string;
    blog: string;
    location: string;
    email: string;
    hireable: boolean;
    bio: string;
    twitter_username: string;
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    created_at: string;
    updated_at: string;
  };
};
type GrantErrorResponse = {
  access_token: undefined;
  error: string;
};

router.get('/oauth-callback', async (ctx) => {
  const response: GrantGoogleResponse | GrantGithubResponse | GrantErrorResponse =
    ctx.session?.grant.response;
  const provider: OAuthProviders = ctx.session?.grant.provider;

  if (response.access_token) {
    ctx.redirect(`${process.env.CLIENT_URL}/oauth2-error&error=access_denied`);
  }

  await match(provider)
    .with(OAuthProviders.google, async () => {
      const { profile } = response as GrantGoogleResponse;
      await prisma.user.create({
        data: {
          email: profile.email,
          name: profile.name,
          openid: profile.sub,
          provider,
          profileImageUrl: profile.picture,
        },
      });
    })
    .with(OAuthProviders.github, async () => {
      const { profile } = response as GrantGithubResponse;
      await prisma.user.create({
        data: {
          email: profile.email,
          name: profile.name,
          openid: profile.id.toString(),
          provider,
          website: profile.blog ?? profile.url,
          profileImageUrl: profile.avatar_url,
        },
      });
    })
    .otherwise(async () => {
      const { error } = response as GrantErrorResponse;
      ctx.redirect(`${process.env.CLIENT_URL}/oauth2-error&error=${error}`);
    });

  ctx.redirect(`${process.env.CLIENT_URL}/oauth2-redirect`);
});

export default router;
