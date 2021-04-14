import React from 'react';
import { graphql } from 'react-relay';
import { usePagination } from 'relay-hooks';
import { CommentRefetchQuery } from 'src/__generated__/CommentRefetchQuery.graphql';
import { CommentSection_user$key } from 'src/__generated__/CommentSection_user.graphql';
import { ProfileComment } from 'src/components/Comment';

import GradientButton from '../GradientButton';
import PlaceHolder from '../PlaceHolder';
import { H3 } from '../Typography';
import { BaseCommentSection } from './style';

const commentFragmentSpec = graphql`
  fragment CommentSection_user on User
  @argumentDefinitions(count: { type: "Int", defaultValue: 10 }, cursor: { type: "String" })
  @refetchable(queryName: "CommentRefetchQuery") {
    commentsConnection(first: $count, after: $cursor)
      @connection(key: "CommentSection_commentsConnection") {
      edges {
        node {
          id
          ...Comment_profileComment
        }
      }
    }
  }
`;

type CommentSectionProps = {
  comments: CommentSection_user$key;
} & React.ComponentProps<typeof BaseCommentSection>;
const CommentSection = (props: CommentSectionProps) => {
  const { comments: fullComments, ...rest } = props;
  const { data, isLoadingNext, hasNext, loadNext } = usePagination<
    CommentRefetchQuery,
    CommentSection_user$key
  >(commentFragmentSpec, fullComments);

  return (
    <BaseCommentSection {...rest}>
      <H3 pl="2rem" py="1rem">
        Comments
      </H3>
      {data &&
      data.commentsConnection &&
      data.commentsConnection.edges &&
      data.commentsConnection.edges.length > 0 ? (
        data.commentsConnection.edges.map(
          (e) =>
            e && e.node && <ProfileComment px="2rem" py="1rem" key={e.node.id} comment={e.node} />,
        )
      ) : (
        <PlaceHolder />
      )}
      {isLoadingNext && <PlaceHolder />}
      {hasNext && (
        <GradientButton mx="2rem" mb="1rem" onClick={() => loadNext(5)}>
          Load More
        </GradientButton>
      )}
    </BaseCommentSection>
  );
};

export default CommentSection;
