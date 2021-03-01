import { objectType } from 'nexus';

export const UserRole = objectType({
  name: 'UserRole',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.value();
    t.model.users();
    t.model.createdAt();
    t.model.updatedAt();
  },
});
