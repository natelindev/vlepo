import { queryField } from 'nexus';

export const Query = queryField((t) => {
  t.crud.blogs({
    pagination: false,
  });
  t.crud.users({ ordering: true, filtering: true });
  t.crud.posts({ ordering: true, filtering: true });
  t.crud.tags({ ordering: true, filtering: true });
  t.crud.comments({ ordering: true, filtering: true });
});
