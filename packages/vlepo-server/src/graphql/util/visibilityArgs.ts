import { __, match } from 'ts-pattern';

import { ExtendedContext } from '../../app';

export const getVisibilityArgs = async (ctx: ExtendedContext) => {
  const accessToken = await ctx.oauth.extractAccessToken(ctx, true);
  const currentUser = accessToken?.user;

  return match<typeof currentUser>(currentUser)
    .with({ id: __.string }, (u) => {
      return {
        OR: [
          {
            ownerId: u.id,
          },
          {
            visibility: 'PUBLISHED' as const,
          },
        ],
      };
    })
    .with(undefined, () => ({
      visibility: 'PUBLISHED' as const,
    }))
    .run();
};
