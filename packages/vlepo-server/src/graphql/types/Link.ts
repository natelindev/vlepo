import { objectType } from 'nexus';

export const Link = objectType({
  name: 'Link',
  definition(t) {
    t.implements('Node');
    t.relayGlobalId('id', { description: 'ID for a resource' });
    t.model.url();
    t.model.iconUrl();
    t.model.createdAt();
    t.model.updatedAt();
  },
});
