import { objectType } from 'nexus';

export const Translation = objectType({
  name: 'Translation',
  definition(t) {
    t.implements('Node');
    t.id('id', {
      resolve: (root) => root.id,
    });
    t.model.type();
    t.model.language();
    t.model.content();
    t.model.editedAt();
    t.model.createdAt();
    t.model.updatedAt();
  },
});
