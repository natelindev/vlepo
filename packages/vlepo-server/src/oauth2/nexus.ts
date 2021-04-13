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

export const OAuthResolve = (scope: string | string[]) => async (
  root: unknown,
  args: unknown,
  ctx: ExtendedContext,
  info: unknown,
  originalResolve: (root: unknown, args: unknown, ctx: ExtendedContext, info: unknown) => unknown,
) => {
  const token = await ctx.oauth.extractAccessToken(ctx, true);
  if (token) {
    const authorized = await ctx.oauth.verifyScope(token, scope);
    if (authorized) {
      return originalResolve(root, args, ctx, info);
    }
  }
  ctx.response.status = 403;
  return null;
};
