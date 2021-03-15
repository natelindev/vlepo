import { ExtendedContext } from '../context';
import { verifyScope } from './model';

export const OAuthCheckScope = (scope: string | string[]) => async (
  root: unknown,
  args: unknown,
  ctx: ExtendedContext,
  info: unknown,
  originalResolve: (root: unknown, args: unknown, ctx: ExtendedContext, info: unknown) => unknown,
) => {
  const authorized = await verifyScope(ctx.state.oauth.token, scope);
  if (authorized) {
    return originalResolve(root, args, ctx, info);
  }
  throw Error('UnAuthorized');
};
