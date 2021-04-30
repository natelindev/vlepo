import { objectType } from 'nexus';

export const Translation = objectType({
  name: 'Translation',
  definition(t) {
    t.implements('Node');
    t.relayGlobalId('id', { description: 'ID for a resource' });
    t.model.type();
    t.model.language();
    t.model.content();
    t.model.editedAt();
    t.model.createdAt();
    t.model.updatedAt();
  },
});
