import { objectType } from 'nexus';

export const Tag = objectType({
  name: 'Tag',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.posts();
    t.model.thoughts();
    t.model.projects();
    t.model.papers();
    t.model.createdAt();
    t.model.updatedAt();
  },
});
