import { format, parseISO } from 'date-fns';
import React, { ReactNode } from 'react';
import { graphql } from 'react-relay';
import rehype2react from 'rehype-react';
import { useFragment } from 'relay-hooks';
import parse from 'remark-parse';
import remark2rehype from 'remark-rehype';
import { Comment_comment$key } from 'src/__generated__/Comment_comment.graphql';
import { CommentSection_user } from 'src/__generated__/CommentSection_user.graphql';
import { remarkComponents } from 'src/components/MDXComponents';
import { H4, H5, H6 } from 'src/components/Typography';
import { match } from 'ts-pattern';
import unified from 'unified';

import rehypePrism from '@mapbox/rehype-prism';

import Avatar from '../Avatar';
import Badge from '../Badge';
import { Row } from '../Layout/style';
import { BaseComment, CommentContent } from './style';

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

type CommentProps = {
  comment: Comment_comment$key;
  variant: 'profile' | 'post';
  currentUser?: CommentSection_user;
} & React.ComponentProps<typeof BaseComment>;

const mdProcessor = unified().use(parse).use(remark2rehype).use(rehypePrism).use(rehype2react, {
  createElement: React.createElement,
  components: remarkComponents,
});

const Comment = (props: CommentProps) => {
  const { comment: fullComment, variant, currentUser, ...rest } = props;

  const comment = useFragment(commentFragment, fullComment);
  return (
    <BaseComment variant={variant} {...rest}>
      {match(variant)
        .with('post', () => (
          <>
            <Row alignItems="center">
              <Avatar src={comment.owner.profileImageUrl} size={32} />
              <H5 mx="0.5rem">{comment.owner.name}</H5>

              {currentUser && currentUser.id === comment.owner.id && (
                <Badge ml="0.3rem" variant="secondary">
                  me
                </Badge>
              )}
              <H6 ml="auto">{format(parseISO(comment.createdAt), 'MMM d')}</H6>
            </Row>
            <CommentContent>
              {mdProcessor.processSync(comment.content).result as ReactNode}
            </CommentContent>
          </>
        ))
        .with('profile', () => (
          <>
            {comment.post && <H6 color="muted">{comment.post.title}</H6>}
            <Row>
              <H4>{comment.content}</H4>
              <H4 ml="auto" mr="1rem">
                {format(parseISO(comment.createdAt), 'MMM d')}
              </H4>
            </Row>
          </>
        ))
        .run()}
    </BaseComment>
  );
};

export default Comment;
