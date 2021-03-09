import { objectType } from 'nexus';

export const Image = objectType({
  name: 'Image',
  definition(t) {
    t.model.id();
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