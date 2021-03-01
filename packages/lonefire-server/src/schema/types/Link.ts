import { objectType } from 'nexus';

export const Link = objectType({
  name: 'Link',
  definition(t) {
    t.model.id();
    t.model.url();
    t.model.iconUrl();
    t.model.createdAt();
    t.model.updatedAt();
  },
});
