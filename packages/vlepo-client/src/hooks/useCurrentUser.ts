/* eslint-disable relay/unused-fields */
/* eslint-disable relay/must-colocate-fragment-spreads */
import { graphql } from 'react-relay';
import { useQuery } from 'relay-hooks';
import { useCurrentUser_viewerQuery } from 'src/__generated__/useCurrentUser_viewerQuery.graphql';

import { getCookie } from './useCookie';

const viewerQuery = graphql`
  query useCurrentUser_viewerQuery {
    viewer {
      id
      name
      profileImageUrl
      roles {
        value
      }
    }
  }
`;

export const useCurrentUser = () => {
  const { data } = useQuery<useCurrentUser_viewerQuery>(
    viewerQuery,
    {},
    { skip: !getCookie<string>('accessToken')?.length },
  );

  return data?.viewer ?? null;
};
