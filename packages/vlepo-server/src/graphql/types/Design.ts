import { objectType } from 'nexus';

export const Design = objectType({
  name: 'Design',
  definition(t) {
    t.implements('Node');
    t.relayGlobalId('id', { description: 'ID for a resource' });
    t.model.content();
    t.model.owner();
    t.model.visibility();
    t.model.reactions();
    t.model.tags();
    t.model.images();
    t.model.comments();

    t.model.editedAt();
    t.model.createdAt();
    t.model.updatedAt();
  },
});
