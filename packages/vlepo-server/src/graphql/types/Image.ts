import { objectType } from 'nexus';

export const Image = objectType({
  name: 'Image',
  definition(t) {
    t.implements('Node');
    t.id('id', {
      resolve: (root) => root.id,
    });
    t.model.owner();
    t.model.mainColor();
    t.model.secondaryColor();
    t.model.url();
    t.model.height();
    t.model.width();
    t.model.createdAt();
    t.model.updatedAt();
  },
});
