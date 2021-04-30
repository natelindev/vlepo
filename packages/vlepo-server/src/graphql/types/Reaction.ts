import { objectType } from 'nexus';

export const Reaction = objectType({
  name: 'Reaction',
  definition(t) {
    t.implements('Node');
    t.relayGlobalId('id', { description: 'ID for a resource' });
    t.model.name();
    t.model.iconUrl();
    t.model.createdAt();
    t.model.updatedAt();
  },
});
