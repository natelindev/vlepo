import { queryField } from 'nexus';

import { defaultIds } from '@vlepo/shared';

export const node = queryField((t) => {
  t.nullable.field('viewer', {
    type: 'User',
    description: 'Current logged in user',
    resolve: async (_root, _args, ctx) => {
      return ctx.prisma.user.findFirst({
        where: {
          id: defaultIds.admin,
        },
      });
    },
  });
});
