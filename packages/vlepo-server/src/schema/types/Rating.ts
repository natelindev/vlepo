import { objectType } from 'nexus';

export const Rating = objectType({
  name: 'Rating',
  definition(t) {
    t.model.id();
    t.model.score();
    t.model.comment();
    t.model.createdAt();
    t.model.updatedAt();
  },
});
