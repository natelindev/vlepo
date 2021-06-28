import { format, parseISO } from 'date-fns';
import Link from 'next/link';
import { useFragment } from 'relay-hooks';
import { graphql } from 'relay-runtime';
import { PostCard_post$key } from 'src/__generated__/PostCard_post.graphql';
import Badge from 'src/components/Badge';
import { Row, Section } from 'src/components/Layout/style';

import {
  Create,
  Delete,
  FavoriteBorder,
  ModeComment,
  Visibility,
} from '@emotion-icons/material-outlined';

import { BasePostCard, Time, Title } from './style';

export type PostCardProps = { post: PostCard_post$key };

const fragmentSpec = graphql`
  fragment PostCard_post on Post {
    slug
    title
    visibility
    createdAt
    editedAt
    viewCount
    reactionCount
    commentCount
    viewCount
  }
`;
const PostCard = (props: PostCardProps) => {
  const { post: fullPost } = props;

  const post = useFragment(fragmentSpec, fullPost);
  const { slug, title, visibility, reactionCount, commentCount, viewCount, createdAt, editedAt } =
    post;
  return (
    <BasePostCard>
      <Row mb="auto">
        {visibility === 'DRAFT' && (
          <Badge variant="secondary" ml="auto" mr="-2.5rem" mt="-2rem" mb="auto">
            Draft
          </Badge>
        )}
        {visibility === 'PRIVATE' && (
          <Badge variant="accent" ml="auto" mr="-2.5rem" mt="-2rem" mb="auto">
            Private
          </Badge>
        )}
      </Row>
      <Row>
        <Section mr="auto" my="auto" flexDirection="column" justifyContent="center">
          <Link href={`/posts/${slug}`} passHref>
            <Title>{title}</Title>
          </Link>
          <Row mt="auto">
            <Time>Published: {format(parseISO(createdAt), 'MMM d')}</Time>
            {editedAt && <Time>Edited: {format(parseISO(editedAt), 'MMM d')}</Time>}
          </Row>
        </Section>
        <Section mr="12rem" my="auto" width="8rem" justifyContent="space-between">
          <FavoriteBorder size={24} />
          {reactionCount}
          <ModeComment size={24} />
          {commentCount}
          <Visibility size={24} />
          {viewCount}
        </Section>
        <Section my="auto" width="3rem" justifyContent="space-between">
          <Create size={24} />
          <Delete size={24} />
        </Section>
      </Row>
    </BasePostCard>
  );
};

export default PostCard;
