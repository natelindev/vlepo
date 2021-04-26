import React from 'react';
import { graphql } from 'react-relay';
import { usePagination } from 'relay-hooks';
import { CommentRefetchQuery } from 'src/__generated__/CommentRefetchQuery.graphql';
import { CommentSection_commendable$key } from 'src/__generated__/CommentSection_commendable.graphql';
import Comment from 'src/components/Comment';
import { match } from 'ts-pattern';

import GradientButton from '../GradientButton';
import PlaceHolder from '../PlaceHolder';
import { H3 } from '../Typography';
import { BaseCommentSection } from './style';

const commentFragmentSpec = graphql`
  fragment CommentSection_commendable on Commendable
  @argumentDefinitions(count: { type: "Int", defaultValue: 10 }, cursor: { type: "String" })
  @refetchable(queryName: "CommentRefetchQuery") {
    commentsConnection(first: $count, after: $cursor)
      @connection(key: "CommentSection_commentsConnection") {
      edges {
        node {
          id
          ...Comment_comment
        }
      }
    }
  }
`;

type CommentSectionProps = {
  parent: CommentSection_commendable$key;
  variant: 'profile' | 'post';
} & React.ComponentProps<typeof BaseCommentSection>;

const CommentSection = (props: CommentSectionProps) => {
  const { parent, variant, ...rest } = props;
  const { data, isLoadingNext, hasNext, loadNext } = usePagination<
    CommentRefetchQuery,
    CommentSection_commendable$key
  >(commentFragmentSpec, parent);

  return (
    <BaseCommentSection {...rest}>
      {match(variant)
        .with('profile', () => (
          <H3 pl="2rem" py="1rem">
            Comments({data?.commentsConnection?.edges?.length ?? 0})
          </H3>
        ))
        .run()}
      {data &&
      data.commentsConnection &&
      data.commentsConnection.edges &&
      data.commentsConnection.edges.length > 0 ? (
        data.commentsConnection.edges.map(
          (e) =>
            e &&
            e.node && (
              <Comment
                variant={variant}
                px={match(variant)
                  .with('profile', () => '2rem')
                  .with('post', () => '1rem')
                  .run()}
                py="1rem"
                key={e.node.id}
                comment={e.node}
              />
            ),
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
