import { objectType } from 'nexus';

export const Rating = objectType({
  name: 'Rating',
  definition(t) {
    t.implements('Node');
    t.nonNull.id('id', {
      resolve: (root) => root.id,
    });
    t.model.score();
    t.model.comment();
    t.model.createdAt();
    t.model.updatedAt();
  },
});
