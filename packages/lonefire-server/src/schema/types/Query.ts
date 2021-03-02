import { queryField } from 'nexus';

export const Query = queryField((t) => {
  t.crud.blogs({
    pagination: false,
  });
  t.crud.users({ ordering: true, filtering: true });
  t.crud.posts({ ordering: true, filtering: true });
  t.crud.tags({ ordering: true, filtering: true });
  t.crud.comments({ ordering: true, filtering: true });
  t.crud.images({ ordering: true, filtering: true });
  t.crud.links({ ordering: true, filtering: true });
  t.crud.papers({ ordering: true, filtering: true });
  t.crud.projects({ ordering: true, filtering: true });
  t.crud.ratings({ ordering: true, filtering: true });
  t.crud.reactions({ ordering: true, filtering: true });
  t.crud.shareCounts({ ordering: true, filtering: true });
  t.crud.thoughts({ ordering: true, filtering: true });
  t.crud.translations({ ordering: true, filtering: true });
  t.crud.userRoles({ ordering: true, filtering: true });
});
