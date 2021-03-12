import argon2 from 'argon2';
import { inputObjectType, mutationField, nonNull, objectType } from 'nexus';
import { match } from 'ts-pattern';

export const LoginInput = inputObjectType({
  name: 'LoginInput',
  definition(t) {
    t.nonNull.string('username');
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
        username: args.LoginInput.username,
      },
    });

    return match(
      user &&
        (await argon2.verify(user.password, args.LoginInput.password, {
          type: argon2.argon2id,
        })),
    )
      .with(null, () => ({
        ok: false,
        error: 'user not found',
      }))
      .with(false, () => ({
        ok: false,
        error: 'username or password incorrect',
      }))
      .with(true, () => ({
        ok: true,
        error: '',
        loggedInUserName: user?.name,
      }))
      .run();
  },
});
