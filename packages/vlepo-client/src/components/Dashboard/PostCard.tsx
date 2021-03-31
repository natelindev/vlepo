import { format, parseISO } from 'date-fns';
import { createFragmentContainer, RelayProp } from 'react-relay';
import { graphql } from 'relay-runtime';
import { PostCard_post } from 'src/__generated__/PostCard_post.graphql';
import { flexbox, FlexboxProps, margin, MarginProps, width, WidthProps } from 'styled-system';

import {
  Create,
  Delete,
  FavoriteBorder,
  ModeComment,
  Visibility,
} from '@emotion-icons/material-outlined';
import styled from '@emotion/styled';

import { Row } from '../Layout/style';

export type PostCardProps = { relay: RelayProp; post: PostCard_post };

const Section = styled.div<MarginProps & WidthProps & FlexboxProps>`
  ${margin}
  ${width}
  ${flexbox}
  display: flex;
`;

const BasePostCard = styled.div<WidthProps>`
  display: flex;
  ${width}
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  padding: 1.5rem 2rem;
  border-radius: ${(props) => props.theme.radii.default};
  border: 1px solid ${(props) => props.theme.colors.text};
`;

const Title = styled.h1`
  margin: 0;
  padding: 0;
  color: ${(props) => props.theme.colors.link};
  font-size: ${(props) => `${props.theme.fontSizes[3]}px`};
`;

const Time = styled.h5`
  margin: 0;
  padding: 0;
  font-size: ${(props) => `${props.theme.fontSizes[1]}px`};
`;

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
