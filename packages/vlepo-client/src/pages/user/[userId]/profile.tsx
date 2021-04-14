import { graphql } from 'react-relay';
import { profile_user$key } from 'src/__generated__/profile_user.graphql';
import Avatar from 'src/components/Avatar';
import Card from 'src/components/Card';
import CommentSection from 'src/components/Comment/CommentSection';
import { Column, Row } from 'src/components/Layout/style';
import PlaceHolder from 'src/components/PlaceHolder';
import { H2, H4 } from 'src/components/Typography';
import { useCurrentUser } from 'src/hooks/useCurrentUser';

import styled from '@emotion/styled';

const UserCard = styled(Card)``;

const profileUserFragment = graphql`
  fragment profile_user on User {
    name
    description
    profileImageUrl
    ...CommentSection_user
  }
`;

const Profile = () => {
  const currentUser = useCurrentUser<profile_user$key>(profileUserFragment);
  return (
    <Column mx="auto" width={[0.9, 0.8, 0.7, 0.5]}>
      {currentUser ? (
        <>
          <UserCard p="2rem" mt="10rem">
            <Row mt="-5rem">
              <Avatar
                size={96}
                mx="auto"
                src={currentUser.profileImageUrl ?? '/images/avatar/bot.svg'}
              />
            </Row>
            <Row mt="2rem">{currentUser.name && <H2 mx="auto">{currentUser.name}</H2>}</Row>
            <Row>{currentUser.description && <H4 mx="auto">{currentUser.description}</H4>}</Row>
          </UserCard>
          <Card my="2rem">
            <CommentSection comments={currentUser} />
          </Card>
        </>
      ) : (
        <PlaceHolder />
      )}
    </Column>
  );
};

export default Profile;
