import { encode } from 'base-64';
import { add } from 'date-fns';
import debugInit from 'debug';
import Router from 'koa-router';
import { ExtendedContext } from 'src/app';
import { match } from 'ts-pattern';

import { OAuthClient, OAuthProviders } from '@prisma/client';
import { envDetect, IdToken, OAuthConsts } from '@vlepo/shared';

import { token } from './middleware';
import { generateAccessToken, saveToken } from './model';

import type { DefaultState } from 'koa';

const router = new Router<DefaultState, ExtendedContext>({
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
  debug(ctx.response);
  const response: GrantGoogleResponse | GrantGithubResponse | GrantErrorResponse =
    ctx.session?.grant?.response;
  const provider: OAuthProviders = ctx.session?.grant?.provider;

  debug(response);
  debug(provider);

  if (!response.access_token) {
    const { error } = response as GrantErrorResponse;
    return ctx.redirect(`${process.env.CLIENT_URL}/oauth2-redirect&error=${error}`);
  }

  const connectedUser = await match(provider)
    .with(OAuthProviders.google, async () => {
      const { profile } = response as GrantGoogleResponse;
      const existingUser = await ctx.prisma.user.findFirst({
        where: {
          provider: OAuthProviders.google,
          openid: profile.sub,
        },
        include: {
          roles: true,
        },
      });
      if (existingUser) {
        return existingUser;
      }
      return ctx.prisma.user.create({
        data: {
          email: profile.email,
          name: profile.name,
          openid: profile.sub,
          roles: {
            connectOrCreate: {
              where: { value: 'guest' },
              create: OAuthConsts.roles.guest,
            },
          },
          provider,
          profileImageUrl: profile.picture,
        },
        include: {
          roles: true,
        },
      });
    })
    .with(OAuthProviders.github, async () => {
      const { profile } = response as GrantGithubResponse;
      const existingUser = await ctx.prisma.user.findFirst({
        where: {
          provider: OAuthProviders.github,
          openid: profile?.id.toString(),
        },
        include: {
          roles: true,
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
          roles: {
            connectOrCreate: {
              where: { value: 'guest' },
              create: OAuthConsts.roles.guest,
            },
          },
          provider,
          website: profile.blog ?? profile.url,
          profileImageUrl: profile.avatar_url,
        },
        include: {
          roles: true,
        },
      });
    })
    .otherwise(async () => undefined);

  if (connectedUser) {
    // create accessToken
    const accessToken = await generateAccessToken();
    await saveToken(
      {
        accessToken,
        accessTokenExpiresAt: add(new Date(), { days: 1 }),
        scope: OAuthConsts.scope.guest.join(' '),
      },
      (await ctx.prisma.oAuthClient.findFirst({
        where: {
          id: OAuthConsts.DEFAULT_CLIENT_ID,
        },
      })) as OAuthClient,
      connectedUser,
    );

    if (ctx.session) {
      ctx.session = null;
    }

    if (!process.env.SECRET_KEY) {
      throw new Error('Cannot sign jwt, missing SECRET_KEY');
    }
    ctx.cookies.set(
      'idToken',
      encode(
        JSON.stringify({
          id: connectedUser.id,
          name: connectedUser.name,
          roles: connectedUser.roles.map((r) => r.value).join(' '),
          profileImageUrl: connectedUser.profileImageUrl,
          scope: OAuthConsts.scope.guest.join(' '),
        } as IdToken),
      ),
      {
        secure: envDetect.isProd,
        httpOnly: false,
      },
    );
    ctx.cookies.set('accessToken', accessToken, {
      secure: envDetect.isProd,
      httpOnly: false,
    });
    return ctx.redirect(`${process.env.CLIENT_URL}/oauth2-redirect?success=true`);
  }
  return ctx.redirect(`${process.env.CLIENT_URL}/oauth2-redirect?error=invalid_provider`);
});

router.post(
  '/token',
  token({
    requireClientAuthentication: {
      password: false,
    },
  }),
);

export default router;
