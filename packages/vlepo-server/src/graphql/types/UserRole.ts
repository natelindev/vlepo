import { objectType } from 'nexus';

import { findManyCursorConnection } from '@devoxa/prisma-relay-cursor-connection';

import { User } from './User';

export const UserRole = objectType({
  name: 'UserRole',
  definition(t) {
    t.implements('Node');
    t.relayGlobalId('id', { description: 'ID for a resource' });
    t.model.name();
    t.model.value();
    t.model.users();
    t.model.createdAt();
    t.model.updatedAt();
    t.connectionField('usersConnection', {
      type: User,
      async resolve({ id }, args, ctx) {
        const customArgs = {
          where: {
            roles: {
              some: {
                id,
              },
            },
          },
        };
        const result = await findManyCursorConnection(
          (args) => ctx.prisma.user.findMany({ ...args, ...customArgs }),
          () => ctx.prisma.user.count(customArgs),
          args,
        );
        return result;
      },
    });
  },
});
