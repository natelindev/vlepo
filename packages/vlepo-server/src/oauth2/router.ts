import { add } from 'date-fns';
/* eslint-disable class-methods-use-this */
import debugInit from 'debug';
import Router from 'koa-router';
import { AbstractGrantType, Client, Request } from 'oauth2-server';
import { match } from 'ts-pattern';

import { OAuthProviders, User } from '@prisma/client';

import { ExtendedContext } from '../context';
import { token } from './middleware';

const router = new Router<unknown, ExtendedContext>({
  prefix: '/api/oauth2',
});

const debug = debugInit('vlepo:oauth2:callback');

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

router.get('/callback', async (ctx) => {
  const response: GrantGoogleResponse | GrantGithubResponse | GrantErrorResponse =
    ctx.session?.grant.response;
  const provider: OAuthProviders = ctx.session?.grant.provider;

  debug(response);
  debug(provider);

  if (response.access_token) {
    ctx.redirect(`${process.env.CLIENT_URL}/oauth2-error&error=access_denied`);
  }

  const result = await match<OAuthProviders, Promise<User | undefined>>(provider)
    .with(OAuthProviders.google, async () => {
      const { profile } = response as GrantGoogleResponse;
      const existingUser = await ctx.prisma.user.findFirst({
        where: {
          provider: OAuthProviders.google,
          openid: profile.sub,
        },
      });
      if (existingUser) {
        return existingUser;
      }
      return ctx.prisma?.user.create({
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
      const existingUser = await ctx.prisma.user.findFirst({
        where: {
          provider: OAuthProviders.github,
          openid: profile.id.toString(),
        },
      });
      if (existingUser) {
        return existingUser;
      }
      return ctx.prisma.user.create({
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
    .otherwise(async () => undefined);

  if (result) {
    if (ctx.session) {
      delete ctx.session.grant;
      ctx.session.userId = result.id;
    }
    ctx.redirect(`${process.env.CLIENT_URL}/oauth2-redirect?success=true`);
  } else {
    const { error } = response as GrantErrorResponse;
    ctx.redirect(`${process.env.CLIENT_URL}/oauth2-redirect?error=${error}`);
  }
});

class ImplicitCsrfGrant extends AbstractGrantType {
  handle(request: Request, client: Client) {
    return Promise.resolve({
      accessToken: 'abcd',
      accessTokenExpiresAt: add(new Date(), { days: 7 }),
      scope: ['comment:create', 'image:create', 'self'],
      client,
      user: request.body.id,
    });
  }
}

router.post(
  '/token',
  token({
    requireClientAuthentication: {
      password: false,
      'urn:vlepo:implicit:csrf': false,
    },
    extendedGrantTypes: {
      'urn:vlepo:implicit:csrf': ImplicitCsrfGrant,
    },
  }),
);

export default router;
