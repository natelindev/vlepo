import { objectType } from 'nexus';

export const Rating = objectType({
  name: 'Rating',
  definition(t) {
    t.implements('Node');
    t.relayGlobalId('id', { description: 'ID for a resource' });
    t.model.score();
    t.model.comment();
    t.model.createdAt();
    t.model.updatedAt();
  },
});
