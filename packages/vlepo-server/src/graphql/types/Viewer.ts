import { queryField } from 'nexus';

export const node = queryField((t) => {
  t.nullable.field('viewer', {
    type: 'User',
    description: 'Current logged in user',
    authentication: true,
    resolve: async (_root, _args, ctx) => {
      const user = (await ctx.oauth.extractAccessToken(ctx, true))?.user;
      // remove password hash
      if (user) {
        user.password = null;
      }
      return user || null;
    },
  });
});
