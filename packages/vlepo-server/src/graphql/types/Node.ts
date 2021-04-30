import { enumType, idArg, inputObjectType, interfaceType, list, nonNull, queryField } from 'nexus';

import { fromGlobalId } from '../plugins/relayGlobalId';

export const NodeInterface = interfaceType({
  name: 'Node',
  definition(t) {
    t.id('id', { description: 'ID for a resource' });
  },
});

export const node = queryField((t) => {
  t.nullable.field('node', {
    type: 'Node',
    args: {
      id: nonNull(
        idArg({
          description: 'The global ID of an object',
        }),
      ),
    },
    description: 'Fetches an object given its global ID',
    resolve: async (_obj, { id }, ctx) => {
      const { type: typeName, id: rawId } = fromGlobalId(id);
      // @ts-expect-error prisma client workaround
      return ctx.prisma[`${typeName[0].toLocaleLowerCase()}${typeName.slice(1)}`].findFirst({
        where: {
          id: rawId,
        },
      });
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
    resolve: async (_obj, { ids }, ctx) =>
      Promise.all(
        ids.map((id) => {
          const { type: typeName, id: rawId } = fromGlobalId(id);
          // @ts-expect-error prisma client workaround
          return ctx.prisma[`${typeName[0].toLocaleLowerCase()}${typeName.slice(1)}`].findFirst({
            where: {
              id: rawId,
            },
          });
        }),
      ),
  });
});

export const sortOrder = enumType({
  name: 'sortOrder',
  members: ['asc', 'desc'],
});

export const OrderBy = inputObjectType({
  name: 'OrderBy',
  definition(t) {
    t.nonNull.string('key');
    t.field('order', {
      type: sortOrder,
    });
  },
});
