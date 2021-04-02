import { idArg, interfaceType, list, nonNull, queryField } from 'nexus';

import { entities } from '@vlepo/shared';

export const NodeInterface = interfaceType({
  name: 'Node',
  definition(t) {
    t.nonNull.id('id', { description: 'UUID for a resource' });
  },
});

export const node = queryField((t) => {
  t.nullable.field('node', {
    type: 'Node',
    args: {
      // defaults to nonNull to keep it backward compatible
      id: nonNull(
        idArg({
          description: 'The global ID of an object',
        }),
      ),
    },
    description: 'Fetches an object given its global ID',
    resolve: async (_obj, { id }, ctx) => {
      const result = await Promise.all(
        entities.map((et) =>
          // @ts-expect-error prisma client workaround
          ctx.prisma[et].findFirst({
            where: {
              id,
            },
          }),
        ),
      );
      return result.find((r) => r !== null);
    },
  });
});

export const nodes = queryField((t) => {
  t.nonNull.list.field('nodes', {
    type: 'Node',
    args: {
      ids: nonNull(
        list(
          nonNull(
            idArg({
              description: 'The global IDs of objects',
            }),
          ),
        ),
      ),
    },
    description: 'Fetches objects given their global IDs',
    resolve: async (_obj, { ids }, ctx) => {
      const result = await Promise.all(
        entities.map((et) =>
          // @ts-expect-error prisma client workaround
          ctx.prisma[et].findMany({
            where: {
              id: {
                in: ids,
              },
            },
          }),
        ),
      );
      return result.find((r) => r.length > 0);
    },
  });
});
