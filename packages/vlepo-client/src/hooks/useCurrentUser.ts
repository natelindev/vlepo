/* eslint-disable relay/must-colocate-fragment-spreads */
import { graphql, GraphQLTaggedNode } from 'react-relay';
import { useFragment, useQuery } from 'relay-hooks';
import { CreatePostModal_user$key } from 'src/__generated__/CreatePostModal_user.graphql';
import { useCurrentUser_viewerQuery } from 'src/__generated__/useCurrentUser_viewerQuery.graphql';
import { UserSection_user$key } from 'src/__generated__/UserSection_user.graphql';

const viewerQuery = graphql`
  query useCurrentUser_viewerQuery {
    viewer {
      ...CreatePostModal_user
      ...UserSection_user
    }
  }
`;

export const useCurrentUser = <T extends CreatePostModal_user$key | UserSection_user$key>(
  fragmentNode: GraphQLTaggedNode,
) => {
  const { data } = useQuery<useCurrentUser_viewerQuery>(viewerQuery);
  const user = data!.viewer!;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const currentUser = useFragment<T>(fragmentNode, user as any);

  return currentUser;
};
