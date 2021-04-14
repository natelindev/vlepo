import { format, parseISO } from 'date-fns';
import React from 'react';
import { graphql } from 'react-relay';
import { useFragment } from 'relay-hooks';
import { Comment_profileComment$key } from 'src/__generated__/Comment_profileComment.graphql';
import { H4, H6 } from 'src/components/Typography';

import { Row } from '../Layout/style';
import { BaseProfileComment } from './style';

const Comment = () => {
  return <></>;
};

const profileCommentFragment = graphql`
  fragment Comment_profileComment on Comment {
    content
    post {
      title
    }
    createdAt
  }
`;

type ProfileCommentProps = {
  comment: Comment_profileComment$key;
} & React.ComponentProps<typeof BaseProfileComment>;

export const ProfileComment = (props: ProfileCommentProps) => {
  const { comment: fullComment, ...rest } = props;
  const comment = useFragment(profileCommentFragment, fullComment);
  return (
    <BaseProfileComment {...rest}>
      {comment.post && <H6 color="muted">{comment.post.title}</H6>}
      <Row>
        <H4>{comment.content}</H4>
        <H4 ml="auto" mr="1rem">
          {format(parseISO(comment.createdAt), 'MMM d')}
        </H4>
      </Row>
    </BaseProfileComment>
  );
};

export default Comment;
