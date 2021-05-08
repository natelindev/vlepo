import { add } from 'date-fns';
import debugInit from 'debug';
import { reddit } from 'grant/config/profile.json';
import Router from 'koa-router';
import fetch from 'node-fetch';
import { ExtendedContext } from 'src/app';
import { match } from 'ts-pattern';

import { OAuthClient, OAuthProviders } from '@prisma/client';

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

type GrantRedditResponse = {
  access_token: string;
};

type RedditProfileResponse = {
  id: string;
  icon_img: string;
  name: string;
};

type GrantErrorResponse = {
  access_token: undefined;
  error: string;
};

router.get('/callback', async (ctx) => {
  debug(ctx.response);
  const response:
    | GrantGoogleResponse
    | GrantGithubResponse
    | GrantRedditResponse
    | GrantErrorResponse = ctx.session?.grant?.response;
  const provider: OAuthProviders = ctx.session?.grant?.provider;

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
              where: { value: 'visitor' },
              create: { name: 'Visitor', value: 'visitor' },
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
              where: { value: 'visitor' },
              create: { name: 'Visitor', value: 'visitor' },
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
    .with(OAuthProviders.reddit, async () => {
      const { access_token } = response;
      const profileResponse = await fetch(reddit.profile_url, {
        headers: {
          authorization: `bearer ${access_token}`,
        },
      });
      const profile: RedditProfileResponse = await profileResponse.json();
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
          name: profile.name,
          openid: profile.id.toString(),
          roles: {
            connectOrCreate: {
              where: { value: 'visitor' },
              create: { name: 'Visitor', value: 'visitor' },
            },
          },
          provider,
          profileImageUrl: profile.icon_img,
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
    const visitorRole = await ctx.prisma.userRole.findFirst({
      where: {
        value: 'visitor',
      },
      select: {
        scopes: true,
      },
    });
    if (!visitorRole) {
      throw new Error('visitor role does not exist');
    }
    await saveToken(
      {
        accessToken,
        accessTokenExpiresAt: add(new Date(), { days: 1 }),
        scope: visitorRole.scopes.map((s) => s.value),
      },
      (await ctx.prisma.oAuthClient.findFirst({
        where: {
          id: process.env.NEXT_PUBLIC_DEFAULT_CLIENT_ID,
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

    ctx.cookies.set('accessToken', accessToken, {
      secure: false,
      httpOnly: false,
    });
    return ctx.redirect(`${process.env.CLIENT_URL}/oauth2-redirect?success=true`);
  }
  return ctx.redirect(`${process.env.CLIENT_URL}/oauth2-redirect?error=invalid_provider`);
});

export default router;
