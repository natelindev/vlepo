import { objectType } from 'nexus';

export const ShareCount = objectType({
  name: 'ShareCount',
  definition(t) {
    t.model.id();
    t.model.count();
    t.model.source();
    t.model.createdAt();
    t.model.updatedAt();
  },
});
