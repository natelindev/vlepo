import argon2 from 'argon2';
import cryptoRandomString from 'crypto-random-string';
import { compareAsc } from 'date-fns';
import debugInit from 'debug';
import { __, match, when } from 'ts-pattern';

import {
  OAuthAccessToken,
  OAuthAuthorizationCode,
  OAuthClient,
  OAuthScope,
  PrismaClient,
  User,
} from '@prisma/client';

import type { Await } from '@vlepo/shared';

const prisma = new PrismaClient();
const debug = debugInit('vlepo:oauth2:model');

export const generateAccessToken = () => {
  return cryptoRandomString.async({ length: 40, type: 'alphanumeric' });
};

export const generateRefreshToken = () => {
  return cryptoRandomString.async({ length: 40, type: 'alphanumeric' });
};

export const generateAuthorizationCode = () => {
  return cryptoRandomString.async({ length: 50, type: 'alphanumeric' });
};

/**
 Performs a lookup on the provided string and returns a token object
 */
export const getAccessToken = async (accessToken: string) => {
  debug(`Get access token ${accessToken}`);
  return prisma.oAuthAccessToken.findFirst({
    where: {
      accessToken,
    },
    include: {
      user: true,
    },
  });
};

/**
  Performs a lookup on the provided string and returns a token object
 */
export const getRefreshToken = async (refreshToken: string) => {
  debug(`Get refresh token ${refreshToken}`);
  return prisma.oAuthRefreshToken.findFirst({
    where: {
      refreshToken,
    },
    include: {
      user: true,
    },
  });
};

/**
 * Retrieves an authorization code
 */
export const getAuthorizationCode = async (authorizationCode: string) => {
  debug(`Retrieving authorization code ${authorizationCode}`);
  return prisma.oAuthAuthorizationCode.findFirst({
    where: {
      authorizationCode,
    },
    include: {
      scopes: true,
      user: true,
    },
  });
};

export const getClient = async (id: string, secret: string | null) => {
  debug(`Looking up client ${id}:${secret}`);

  return match(secret)
    .with(__.string, async (s) =>
      prisma.oAuthClient.findFirst({
        where: {
          id,
          secret: s,
        },
      }),
    )
    .otherwise(async () => prisma.oAuthClient.findFirst({ where: { id } }));
};

export const getUser = async (email: string, password: string) => {
  debug(`Looking up user ${email}`);

  const user = await prisma.user.findFirst({
    select: {
      password: true,
    },
    where: {
      email,
    },
  });

  return user?.password &&
    (await argon2.verify(password, user?.password, { type: argon2.argon2id }))
    ? user
    : undefined;
};

export const getUserFromClient = async (client: OAuthClient) => {
  debug(`Looking up user for client ${client.id}`);
  return prisma.user.findFirst({
    where: {
      OAuthClients: {
        some: {
          id: client.id,
        },
      },
    },
  });
};

type SaveTokenInput = {
  accessToken: string;
  accessTokenExpiresAt: Date;
  refreshToken?: string;
  refreshTokenExpiresAt?: Date;
  scope?: string[] | string;
};

/**
 Saves the newly generated token object
 must pass in validated scopes
 */
export const saveToken = async (token: SaveTokenInput, client: OAuthClient, user: User) => {
  debug(`Save token ${token.accessToken}`);

  const processedScopes = Array.isArray(token.scope) ? token.scope : token.scope?.split(' ') ?? [];
  const tokenOnly = await match(token)
    .with(
      {
        refreshToken: __.string,
        refreshTokenExpiresAt: when((d): d is Date => d instanceof Date),
      },
      async (t) => {
        const accessToken = await prisma.oAuthAccessToken.create({
          data: {
            accessToken: token.accessToken,
            accessTokenExpiresAt: token.accessTokenExpiresAt,
            scopes: {
              connect: processedScopes.map((s) => ({
                value: s,
              })),
            },
            client: {
              connect: {
                id: client.id,
              },
            },
            user: {
              connect: {
                id: user.id,
              },
            },
          },
        });
        const refreshToken = await prisma.oAuthRefreshToken.create({
          data: {
            refreshToken: t.refreshToken,
            refreshTokenExpiresAt: t.refreshTokenExpiresAt,
            client: {
              connect: {
                id: client.id,
              },
            },
            user: {
              connect: {
                id: user.id,
              },
            },
          },
        });
        return {
          ...accessToken,
          ...refreshToken,
        };
      },
    )
    .otherwise(() =>
      prisma.oAuthAccessToken.create({
        data: {
          accessToken: token.accessToken,
          accessTokenExpiresAt: token.accessTokenExpiresAt,
          client: {
            connect: {
              id: client.id,
            },
          },
          user: {
            connect: {
              id: user.id,
            },
          },
        },
      }),
    );

  return {
    ...tokenOnly,
    user,
    client,
  };
};

/**
 Saves the newly generated authorization code object
 */
export const saveAuthorizationCode = async (
  code: OAuthAuthorizationCode,
  client: OAuthClient,
  user: User,
) => {
  debug(`Saving authorization code ${code.authorizationCode}`);

  const authorizationCodeOnly = await prisma.oAuthAuthorizationCode.create({
    data: {
      authorizationCode: code.authorizationCode,
      expiresAt: code.expiresAt,
      redirectUri: code.redirectUri,
      client: {
        connect: { id: client.id },
      },
      user: {
        connect: {
          id: user.id,
        },
      },
    },
  });
  return {
    ...authorizationCodeOnly,
    user,
  };
};

type revokeTokenInput = NonNullable<Exclude<Await<ReturnType<typeof getRefreshToken>>, undefined>>;
export const revokeToken = async (token: revokeTokenInput) => {
  debug(`Revoke token ${token.refreshToken}`);
  return prisma.oAuthRefreshToken.delete({
    where: {
      refreshToken: token.refreshToken,
    },
  });
};

type revokeAuthorizationCodeInput = NonNullable<
  Exclude<Await<ReturnType<typeof getAuthorizationCode>>, undefined>
>;
export const revokeAuthorizationCode = async (code: revokeAuthorizationCodeInput) => {
  debug(`Revoking authorization code ${code.authorizationCode}`);
  return prisma.oAuthAuthorizationCode.delete({
    where: {
      authorizationCode: code.authorizationCode,
    },
  });
};

type RecursiveOAuthScope = Array<
  OAuthScope & {
    childScopes: RecursiveOAuthScope;
  }
>;

const flattenScopes = (scopes: RecursiveOAuthScope): string[] =>
  scopes.reduce(
    (prev, curr) => [...prev, curr.value, ...flattenScopes(curr.childScopes)],
    [] as string[],
  );

export const validateScope = async (_user: User, client: OAuthClient, scope: string) => {
  debug(`Validating requested scope: ${scope}`);

  const clientScopes = (
    await prisma.oAuthClient.findFirst({
      where: {
        id: client.id,
      },
      include: {
        scopes: {
          include: {
            childScopes: {
              include: {
                childScopes: true,
              },
            },
          },
        },
      },
    })
  )?.scopes;

  if (!Array.isArray(clientScopes)) {
    return false;
  }

  const flattenedScopes = flattenScopes(clientScopes as RecursiveOAuthScope);

  return scope
    .split(' ')
    .filter((s) => flattenedScopes.includes(s))
    .join(' ');
};

export const verifyScope = async (token: OAuthAccessToken, scope: string | string[]) => {
  debug(`Verify scope ${scope} in token ${token.accessToken}`);

  const scopes = Array.isArray(scope) ? scope : scope.split(' ');
  const accessTokenScopes = (
    await prisma.oAuthAccessToken.findFirst({
      where: {
        accessToken: token.accessToken,
      },
      // currently we limit child-scope to 3 levels
      include: {
        scopes: {
          include: {
            childScopes: {
              include: {
                childScopes: true,
              },
            },
          },
        },
      },
    })
  )?.scopes;

  if (!accessTokenScopes) {
    return false;
  }

  const flattenedScopes = flattenScopes(accessTokenScopes as RecursiveOAuthScope);

  return scopes.every((s) => flattenedScopes.includes(s));
};

// not used for oauth2-server model, utility function
export const verifyAccessToken = async (
  accessToken: string | OAuthAccessToken | null | undefined,
  options?: {
    user?: User;
    client?: OAuthClient;
  },
) => {
  if (accessToken) {
    const accessTokenObject =
      typeof accessToken === 'string' ? await getAccessToken(accessToken) : accessToken;
    if (accessTokenObject && compareAsc(accessTokenObject.accessTokenExpiresAt, new Date()) === 1) {
      // optionally verify user
      if (options?.user?.id && accessTokenObject.userId !== options.user.id) {
        return false;
      }
      // optionally verify client
      if (options?.client?.id && accessTokenObject.clientId !== options.client.id) {
        return false;
      }
      return true;
    }
  }

  return false;
};

export default {
  generateAccessToken,
  generateRefreshToken,
  generateAuthorizationCode,
  getClient,
  getUser,
  getUserFromClient,
  getAccessToken,
  getRefreshToken,
  saveToken,
  revokeToken,
  getAuthorizationCode,
  saveAuthorizationCode,
  revokeAuthorizationCode,
  verifyScope,
  validateScope,
};
