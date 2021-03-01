import { objectType } from 'nexus';

export const Comment = objectType({
  name: 'Comment',
  definition(t) {
    t.model.id();
    t.model.owner();
    t.model.parent();
    t.model.childComments();
    t.model.images();
    t.model.language();
    t.model.editedAt();
    t.model.createdAt();
    t.model.updatedAt();
  },
});
