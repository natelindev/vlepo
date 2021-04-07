import { objectType } from 'nexus';

export const ShareCount = objectType({
  name: 'ShareCount',
  definition(t) {
    t.implements('Node');
    t.id('id', {
      resolve: (root) => root.id,
    });
    t.model.count();
    t.model.createdAt();
    t.model.updatedAt();
  },
});
