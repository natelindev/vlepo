import { objectType } from 'nexus';

import { findManyCursorConnection } from '@devoxa/prisma-relay-cursor-connection';

import { User } from './User';

export const UserRole = objectType({
  name: 'UserRole',
  definition(t) {
    t.implements('Node');
    t.nonNull.id('id', {
      resolve: (root) => root.id,
    });
    t.model.name();
    t.model.value();
    t.model.users();
    t.model.createdAt();
    t.model.updatedAt();
    t.connectionField('usersConnection', {
      type: User,
      async resolve(_root, args, ctx) {
        const result = await findManyCursorConnection(
          (args) => ctx.prisma.user.findMany(args),
          () => ctx.prisma.user.count(),
          args,
        );
        return result;
      },
    });
  },
});
