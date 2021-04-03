import { format, parseISO } from 'date-fns';
import { createFragmentContainer, RelayProp } from 'react-relay';
import { graphql } from 'relay-runtime';
import { PostCard_post } from 'src/__generated__/PostCard_post.graphql';
import { Row, Section } from 'src/components/Layout/style';

import {
  Create,
  Delete,
  FavoriteBorder,
  ModeComment,
  Visibility,
} from '@emotion-icons/material-outlined';

import { BasePostCard, Time, Title } from './style';

export type PostCardProps = { relay: RelayProp; post: PostCard_post };

const PostCard = (props: PostCardProps) => {
  const {
    post: { title, reactionCount, commentCount, viewCount, createdAt, editedAt },
  } = props;
  return (
    <BasePostCard>
      <Section mr="auto" my="auto" flexDirection="column" justifyContent="center">
        <Title>{title}</Title>
        <Row mt="auto">
          <Time>Published: {format(parseISO(createdAt), 'MMM d')}</Time>
          {editedAt && <Time>Edited: {format(parseISO(editedAt), 'MMM d')}</Time>}
        </Row>
      </Section>
      <Section mx="auto" my="auto" width="10rem" justifyContent="space-between">
        <FavoriteBorder size={24} />
        {reactionCount}
        <ModeComment size={24} />
        {commentCount}
        <Visibility size={24} />
        {viewCount}
      </Section>
      <Section ml="auto" my="auto" width="3rem" justifyContent="space-between">
        <Create size={24} />
        <Delete size={24} />
      </Section>
    </BasePostCard>
  );
};

export default createFragmentContainer(PostCard, {
  post: graphql`
    fragment PostCard_post on Post {
      id
      title
      createdAt
      editedAt
      viewCount
      reactionCount
      commentCount
      viewCount
    }
  `,
});
