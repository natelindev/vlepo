import { objectType } from 'nexus';

export const Thought = objectType({
  name: 'Thought',
  definition(t) {
    t.model.id();
    t.model.content();
    t.model.status();
    t.model.images();
    t.model.comments();
    t.model.reactions();
    t.model.shares();
    t.model.tags();
    t.model.editedAt();
    t.model.createdAt();
    t.model.updatedAt();
  },
});
