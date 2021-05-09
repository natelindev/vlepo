import { format, parseISO } from 'date-fns';
import { MDXRemote } from 'next-mdx-remote';
import React from 'react';
import { graphql } from 'react-relay';
import { useFragment } from 'relay-hooks';
import { Comment_comment$key } from 'src/__generated__/Comment_comment.graphql';
import { CommentSection_user } from 'src/__generated__/CommentSection_user.graphql';
import mdxComponents from 'src/components/MDXComponents';
import { H4, H5, H6 } from 'src/components/Typography';
import { match } from 'ts-pattern';

import Avatar from '../Avatar';
import Badge from '../Badge';
import { Row } from '../Layout/style';
import { BaseComment, CommentContent } from './style';

const commentFragment = graphql`
  fragment Comment_comment on Comment {
    content
    renderedContent
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

const Comment = (props: CommentProps) => {
  const { comment: fullComment, variant, currentUser, ...rest } = props;

  const comment = useFragment(commentFragment, fullComment);
  return (
    <BaseComment variant={variant} {...rest}>
      {match(variant)
        .with('post', () => (
          <>
            <Row alignItems="center">
              <Avatar variant="round" src={comment.owner.profileImageUrl} size={32} />
              <H5 mx="0.5rem">{comment.owner.name}</H5>

              {currentUser && currentUser.id === comment.owner.id && (
                <Badge ml="0.3rem" variant="secondary">
                  me
                </Badge>
              )}
              <H6 ml="auto">{format(parseISO(comment.createdAt), 'MMM d')}</H6>
            </Row>
            <CommentContent>
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              <MDXRemote
                {...JSON.parse(comment.renderedContent ?? 'null')}
                components={mdxComponents}
              />
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
