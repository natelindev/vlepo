import { format, parseISO } from 'date-fns';
import { graphql } from 'react-relay';
import { useFragment } from 'relay-hooks';
import { Comment_profileComment$key } from 'src/__generated__/Comment_profileComment.graphql';
import { H3, H5, H6 } from 'src/components/Typography';

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
};

export const ProfileComment = (props: ProfileCommentProps) => {
  const { comment: fullComment } = props;
  const comment = useFragment(profileCommentFragment, fullComment);
  return (
    <BaseProfileComment>
      {comment.post && <H3>{comment.post.title}</H3>}
      <Row>
        <H5>{comment.content}</H5>
        <H6>{format(parseISO(comment.createdAt), 'MMM d')}</H6>
      </Row>
    </BaseProfileComment>
  );
};

export default Comment;
