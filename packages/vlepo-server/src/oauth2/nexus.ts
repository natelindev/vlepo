import type { ExtendedContext } from 'src/app';

export const OAuthCheckScope = (scope: string | string[]) => async (
  _root: unknown,
  _args: unknown,
  ctx: ExtendedContext,
) => {
  const token = await ctx.oauth.extractAccessToken(ctx, true);
  if (token) {
    return ctx.oauth.verifyScope(token, scope);
  }
  return false;
};
