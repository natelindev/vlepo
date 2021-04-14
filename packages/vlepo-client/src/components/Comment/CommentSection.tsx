import { graphql } from 'react-relay';
import { usePagination } from 'relay-hooks';
import { CommentRefetchQuery } from 'src/__generated__/CommentRefetchQuery.graphql';
import { CommentSection_user$key } from 'src/__generated__/CommentSection_user.graphql';
import { ProfileComment } from 'src/components/Comment';

import GradientButton from '../GradientButton';
import PlaceHolder from '../PlaceHolder';
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
};
const CommentSection = (props: CommentSectionProps) => {
  const { comments: fullComments } = props;
  const { data, isLoadingNext, hasNext, loadNext } = usePagination<
    CommentRefetchQuery,
    CommentSection_user$key
  >(commentFragmentSpec, fullComments);

  return (
    <BaseCommentSection>
      {data &&
      data.commentsConnection &&
      data.commentsConnection.edges &&
      data.commentsConnection.edges.length > 0 ? (
        data.commentsConnection.edges.map(
          (e) => e && e.node && <ProfileComment key={e.node.id} comment={e.node} />,
        )
      ) : (
        <PlaceHolder />
      )}
      {isLoadingNext && <PlaceHolder />}
      {hasNext && <GradientButton onClick={() => loadNext(5)}> More</GradientButton>}
    </BaseCommentSection>
  );
};

export default CommentSection;
