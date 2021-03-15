import argon2 from 'argon2';
import { inputObjectType, mutationField, nonNull, objectType } from 'nexus';
import { __, match, not } from 'ts-pattern';

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
    t.string('loggedInUserName');
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
      select: {
        name: true,
        password: true,
      },
      where: {
        email: args.LoginInput.email,
      },
    });

    return match(user)
      .with(null, async () => ({
        ok: false,
        error: 'user not found',
      }))
      .with({ password: __.string }, async (u) => {
        const result = await argon2.verify(u.password, args.LoginInput.password, {
          type: argon2.argon2id,
        });
        return result
          ? { ok: true, error: '', loggedInUserName: u.name }
          : {
              ok: false,
              error: 'username or password incorrect',
            };
      })
      .with({ password: not(__.string) }, async () => ({
        ok: false,
        error: 'cannot login using password, please use third party login',
      }))
      .run();
  },
});
