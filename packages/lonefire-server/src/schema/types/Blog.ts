import { objectType } from 'nexus';

export const Blog = objectType({
  name: 'Blog',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.content();
    t.model.createdAt();
    t.model.updatedAt();
    t.model.visitorCount();
  },
});
