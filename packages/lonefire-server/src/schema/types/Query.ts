import { queryField } from 'nexus';

export const Query = queryField((t) => {
  t.crud.blogs({
    pagination: false,
  });
  t.crud.users({ filtering: true, alias: 'people' });
  t.crud.posts({ ordering: true, filtering: true });
});
