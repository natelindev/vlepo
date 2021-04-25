import { format, parseISO } from 'date-fns';
import React from 'react';
import { graphql } from 'react-relay';
import { useFragment } from 'relay-hooks';
import { Comment_comment$key } from 'src/__generated__/Comment_comment.graphql';
import { Comment_user$key } from 'src/__generated__/Comment_user.graphql';
import { H4, H5, H6 } from 'src/components/Typography';
import { useCurrentUser } from 'src/hooks/useCurrentUser';

import Avatar from '../Avatar';
import Badge from '../Badge';
import { Row } from '../Layout/style';
import { BaseComment } from './style';

const Comment = () => {
  return <></>;
};

const commentFragment = graphql`
  fragment Comment_comment on Comment {
    content
    post {
      title
    }
    owner {
      id
      name
      profileImageUrl
    }
    createdAt
  }
`;

const Comment_user = graphql`
  fragment Comment_user on User {
    id
  }
`;

type ProfileCommentProps = {
  comment: Comment_comment$key;
} & React.ComponentProps<typeof BaseComment>;

export const PostComment = (props: ProfileCommentProps) => {
  const { comment: fullComment, ...rest } = props;
  const currentUser = useCurrentUser<Comment_user$key>(Comment_user);
  const comment = useFragment(commentFragment, fullComment);
  return (
    <BaseComment {...rest}>
      <Row alignItems="center">
        <Avatar src={comment.owner.profileImageUrl} size={32} />
        <H5 mx="0.5rem">{comment.owner.name}</H5>
        <H6>{format(parseISO(comment.createdAt), 'MMM d')}</H6>
        {currentUser && currentUser.id === comment.owner.id && (
          <Badge ml="0.3rem" variant="secondary">
            me
          </Badge>
        )}
      </Row>
      <Row>{comment.content}</Row>
    </BaseComment>
  );
};

export const ProfileComment = (props: ProfileCommentProps) => {
  const { comment: fullComment, ...rest } = props;
  const comment = useFragment(commentFragment, fullComment);
  return (
    <BaseComment {...rest}>
      {comment.post && <H6 color="muted">{comment.post.title}</H6>}
      <Row>
        <H4>{comment.content}</H4>
        <H4 ml="auto" mr="1rem">
          {format(parseISO(comment.createdAt), 'MMM d')}
        </H4>
      </Row>
    </BaseComment>
  );
};

export default Comment;
