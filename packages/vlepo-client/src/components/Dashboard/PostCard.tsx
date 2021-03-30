import { format, parseISO } from 'date-fns';
import { createFragmentContainer, RelayProp } from 'react-relay';
import { graphql } from 'relay-runtime';
import { PostCard_post } from 'src/__generated__/PostCard_post.graphql';
import { margin, MarginProps, width, WidthProps } from 'styled-system';

import {
  Create,
  Delete,
  Favorite,
  ModeComment,
  Visibility,
} from '@emotion-icons/material-outlined';
import styled from '@emotion/styled';

import { Row } from '../Layout/style';

export type PostCardProps = { relay: RelayProp; post: PostCard_post };

const Section = styled.div<MarginProps>`
  ${margin}
  display: flex;
  flex-direction: column;
`;

const BasePostCard = styled.div<WidthProps>`
  display: flex;
  ${width}
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontSizes[5]};
`;

const Time = styled.h5`
  font-size: ${(props) => props.theme.fontSizes[2]};
`;

const PostCard = (props: PostCardProps) => {
  const {
    post: { title, reactionCount, commentCount, viewCount, createdAt, editedAt },
  } = props;
  return (
    <BasePostCard>
      <Section mr="auto">
        <Title>{title}</Title>
        <Row>
          Published: <Time>{format(parseISO(createdAt), 'MMM d')}</Time>
          Edited: {editedAt && <Time>{format(parseISO(editedAt), 'MMM d')}</Time>}
        </Row>
      </Section>
      <Section mx="auto">
        <Favorite size={32} />
        {reactionCount}
        <ModeComment size={32} />
        {commentCount}
        <Visibility size={32} />
        {viewCount}
      </Section>
      <Section ml="auto">
        <Create size={32} />
        <Delete size={32} />
      </Section>
    </BasePostCard>
  );
};

export default createFragmentContainer(PostCard, {
  post: graphql`
    fragment PostCard_post on Post {
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
