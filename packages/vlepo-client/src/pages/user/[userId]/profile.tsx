import { graphql } from 'react-relay';
import { profile_user$key } from 'src/__generated__/profile_user.graphql';
import Avatar from 'src/components/Avatar';
import CommentSection from 'src/components/Comment/CommentSection';
import { Column } from 'src/components/Layout/style';
import PlaceHolder from 'src/components/PlaceHolder';
import { H3, H4 } from 'src/components/Typography';
import { useCurrentUser } from 'src/hooks/useCurrentUser';

import styled from '@emotion/styled';

const UserCard = styled.div``;

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
    <>
      {currentUser ? (
        <>
          <Column mx="auto">
            <UserCard>
              <Avatar mt="-50%" src={currentUser.profileImageUrl ?? '/images/avatar/bot.svg'} />
              {currentUser.name && <H3>{currentUser.name}</H3>}
              {currentUser.description && <H4>{currentUser.description}</H4>}
            </UserCard>
            <CommentSection comments={currentUser} />
          </Column>
        </>
      ) : (
        <PlaceHolder />
      )}
    </>
  );
};

export default Profile;
