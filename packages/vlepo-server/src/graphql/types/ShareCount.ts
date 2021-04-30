import { objectType } from 'nexus';

export const ShareCount = objectType({
  name: 'ShareCount',
  definition(t) {
    t.implements('Node');
    t.relayGlobalId('id', { description: 'ID for a resource' });
    t.model.count();
    t.model.createdAt();
    t.model.updatedAt();
  },
});
