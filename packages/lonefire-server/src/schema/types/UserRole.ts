import { objectType } from 'nexus';

import { findManyCursorConnection } from '@devoxa/prisma-relay-cursor-connection';

import { User } from './User';

export const UserRole = objectType({
  name: 'UserRole',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.value();
    t.model.users();
    t.model.createdAt();
    t.model.updatedAt();
    t.connectionField('usersConnection', {
      type: User,
      async resolve(_, args, ctx) {
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
