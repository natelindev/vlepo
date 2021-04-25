/* eslint-disable relay/must-colocate-fragment-spreads */
import { graphql, GraphQLTaggedNode } from 'react-relay';
import { useFragment, useQuery } from 'relay-hooks';
import { Comment_user$key } from 'src/__generated__/Comment_user.graphql';
import { CreatePostModal_user$key } from 'src/__generated__/CreatePostModal_user.graphql';
import { profile_user$key } from 'src/__generated__/profile_user.graphql';
import { useCurrentUser_viewerQuery } from 'src/__generated__/useCurrentUser_viewerQuery.graphql';
import { UserSection_user$key } from 'src/__generated__/UserSection_user.graphql';

import { getCookie } from './useCookie';

const viewerQuery = graphql`
  query useCurrentUser_viewerQuery {
    viewer {
      ...CreatePostModal_user
      ...UserSection_user
      ...profile_user
      ...Comment_user
    }
  }
`;

export const useCurrentUser = <
  T extends CreatePostModal_user$key | UserSection_user$key | profile_user$key | Comment_user$key
>(
  fragmentNode: GraphQLTaggedNode,
): T[' $data'] => {
  const { data } = useQuery<useCurrentUser_viewerQuery>(
    viewerQuery,
    {},
    { skip: !getCookie<string>('accessToken')?.length },
  );
  const user = data?.viewer ?? null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const currentUser = useFragment<T>(fragmentNode, user as any);

  return currentUser;
};
