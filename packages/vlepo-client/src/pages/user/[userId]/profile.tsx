import { useRouter } from 'next/router';
import { graphql, useFragment } from 'react-relay';
import { useQuery } from 'relay-hooks';
import { profile_user$key } from 'src/__generated__/profile_user.graphql';
import { profile_userQuery } from 'src/__generated__/profile_userQuery.graphql';
import Avatar from 'src/components/Avatar';
import Card from 'src/components/Card';
import { ProfileCommentSection } from 'src/components/Comment/CommentSection';
import { ErrorText } from 'src/components/Input';
import { Column, Row } from 'src/components/Layout/style';
import PlaceHolder from 'src/components/PlaceHolder';
import { H2, H4 } from 'src/components/Typography';

import styled from '@emotion/styled';

const UserCard = styled(Card)`
  flex-direction: column;
`;

const profileUserFragment = graphql`
  fragment profile_user on User {
    name
    description
    profileImageUrl
    ...CommentSection_commendable
  }
`;

const profileUserQuery = graphql`
  query profile_userQuery($id: String!) {
    user(where: { id: $id }) {
      ...profile_user
    }
  }
`;

const Profile = () => {
  const router = useRouter();
  const userId = router.query.userId as string;
  const { data, isLoading, error } = useQuery<profile_userQuery>(profileUserQuery, {
    id: userId,
  });

  const profileUser = useFragment<profile_user$key>(profileUserFragment, data?.user ?? null);
  if (error) {
    return <ErrorText>{error}</ErrorText>;
  }
  return (
    <Column mx="auto" width={[0.9, 0.8, 0.7, 0.5]}>
      {!isLoading && profileUser ? (
        <>
          <UserCard p="2rem" mt="10rem">
            <Row mt="-5rem">
              <Avatar
                size={96}
                mx="auto"
                src={profileUser.profileImageUrl ?? '/images/avatar/bot.svg'}
              />
            </Row>
            <Row mt="2rem">{profileUser.name && <H2 mx="auto">{profileUser.name}</H2>}</Row>
            <Row>{profileUser.description && <H4 mx="auto">{profileUser.description}</H4>}</Row>
          </UserCard>
          <Card my="2rem" width="100%">
            <ProfileCommentSection parent={profileUser} />
          </Card>
        </>
      ) : (
        <PlaceHolder />
      )}
    </Column>
  );
};

export default Profile;
