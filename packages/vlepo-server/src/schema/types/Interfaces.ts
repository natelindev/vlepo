import { interfaceType } from 'nexus';

export const Node = interfaceType({
  name: 'Node',
  resolveType() {
    return null;
  },
  definition(t) {
    t.nonNull.id('id', { description: 'UUID for a resource' });
  },
});
