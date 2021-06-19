import { useRouter } from 'next/router';
import { useQuery } from 'relay-hooks';
import { graphql } from 'relay-runtime';
import { profile_userQuery } from 'src/__generated__/profile_userQuery.graphql';
import Avatar from 'src/components/Avatar';
import Card from 'src/components/Card';
import CommentSection from 'src/components/Comment/CommentSection';
import { ErrorText } from 'src/components/Input';
import { Column, Row } from 'src/components/Layout/style';
import PlaceHolder from 'src/components/PlaceHolder';
import { H2, H4 } from 'src/components/Typography';

import styled from '@emotion/styled';

const UserCard = styled(Card)`
  flex-direction: column;
`;

const profileUserQuery = graphql`
  query profile_userQuery($id: String!) {
    user(where: { id: $id }) {
      name
      description
      profileImageUrl
      ...CommentSection_commendable
    }
  }
`;

const Profile = () => {
  const router = useRouter();
  const userId = router.query.userId as string;
  const { data, isLoading, error } = useQuery<profile_userQuery>(profileUserQuery, {
    id: userId,
  });

  if (error) {
    return <ErrorText>{error.message}</ErrorText>;
  }
  return (
    <Column mx="auto" width={[0.9, 0.8, 0.7, 0.5]}>
      {!isLoading && data?.user ? (
        <>
          <UserCard p="2rem" mt="10rem">
            <Row mt="-5rem">
              <Avatar
                variant="round"
                size={96}
                mx="auto"
                src={data.user.profileImageUrl ?? '/images/avatar/bot.svg'}
              />
            </Row>
            <Row mt="2rem">{data.user.name && <H2 mx="auto">{data.user.name}</H2>}</Row>
            <Row>{data.user.description && <H4 mx="auto">{data.user.description}</H4>}</Row>
          </UserCard>
          <Card my="2rem" width="100%">
            <CommentSection variant="profile" parent={data.user} />
          </Card>
        </>
      ) : (
        <PlaceHolder />
      )}
    </Column>
  );
};

export default Profile;
