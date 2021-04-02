import argon2 from 'argon2';
import { encode } from 'base-64';
import { add } from 'date-fns';
import { inputObjectType, mutationField, nonNull, objectType } from 'nexus';
import { __, match, not } from 'ts-pattern';

import { OAuthClient } from '@prisma/client';
import { envDetect, IdToken, OAuthConsts } from '@vlepo/shared';

import { generateAccessToken, saveToken } from '../../oauth2/model';

export const LoginInput = inputObjectType({
  name: 'LoginInput',
  definition(t) {
    t.nonNull.string('email');
    t.nonNull.string('password');
  },
});

export const LoginResponse = objectType({
  name: 'LoginResponse',
  definition(t) {
    t.nonNull.boolean('ok');
    t.string('error');
  },
});

export const LoginMutation = mutationField('LoginMutation', {
  type: LoginResponse,
  args: {
    LoginInput: nonNull(LoginInput.asArg()),
  },
  resolve: async (_root, args, ctx) => {
    const user = await ctx.prisma.user.findFirst({
      where: {
        email: args.LoginInput.email,
      },
      include: {
        roles: true,
      },
    });

    return match(user)
      .with(null, async () => ({
        ok: false,
        error: 'user not found',
      }))
      .with({ password: __.string }, async (u) => {
        const validPassword = await argon2.verify(u.password, args.LoginInput.password, {
          type: argon2.argon2id,
        });

        if (validPassword) {
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
            u,
          );
          ctx.koaContext.cookies.set(
            'idToken',
            encode(
              JSON.stringify({
                id: u.id,
                name: u.name,
                roles: u.roles.map((r) => r.value).join(' '),
                profileImageUrl: u.profileImageUrl,
                scope: OAuthConsts.scope.guest.join(' '),
              } as IdToken),
            ),
            {
              secure: envDetect.isProd,
              httpOnly: false,
            },
          );
          ctx.koaContext.cookies.set('accessToken', accessToken, {
            secure: envDetect.isProd,
            httpOnly: false,
          });
        }

        return validPassword
          ? { ok: true, error: '' }
          : {
              ok: false,
              error: 'username or password incorrect',
            };
      })
      .with({ password: not(__.string) }, async () => ({
        ok: false,
        error: 'you cannot login using password, please use third party login',
      }))
      .run();
  },
});
