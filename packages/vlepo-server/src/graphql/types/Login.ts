import argon2 from 'argon2';
import { add } from 'date-fns';
import { inputObjectType, mutationField, nonNull, objectType } from 'nexus';
import { __, match, not } from 'ts-pattern';

import { OAuthClient } from '@prisma/client';

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
          const expiresAt = add(new Date(), { days: 1 });
          const userRole = await ctx.prisma.userRole.findFirst({
            where: {
              users: {
                some: {
                  id: u.id,
                },
              },
            },
            select: {
              scopes: true,
            },
          });
          if (!userRole) {
            throw new Error('user role does not exist');
          }
          await saveToken(
            {
              accessToken,
              accessTokenExpiresAt: expiresAt,
              scope: userRole.scopes.map((s) => s.value),
            },
            (await ctx.prisma.oAuthClient.findFirst({
              where: {
                id: process.env.DEFAULT_CLIENT_ID,
              },
            })) as OAuthClient,
            u,
          );
          ctx.cookies.set('accessToken', accessToken, {
            secure: false,
            httpOnly: false,
            expires: expiresAt,
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
