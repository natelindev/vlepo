import { objectType } from 'nexus';

export const Link = objectType({
  name: 'Link',
  definition(t) {
    t.implements('Node');
    t.id('id', {
      resolve: (root) => root.id,
    });
    t.model.url();
    t.model.iconUrl();
    t.model.createdAt();
    t.model.updatedAt();
  },
});
