import { objectType } from 'nexus';

export const User = objectType({
  name: 'User',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.email();
    t.model.website();
    t.model.profileImageUrl();
    t.model.description();
    t.model.posts();
    t.model.roles();
    t.model.comments();
    t.model.images();
    t.model.createdAt();
    t.model.updatedAt();
  },
});
