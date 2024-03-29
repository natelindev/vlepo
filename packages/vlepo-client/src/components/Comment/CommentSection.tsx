import Image from 'next/image';
import React, { useState } from 'react';
import { useToasts } from 'react-toast-notifications';
import { useMutation, usePagination } from 'relay-hooks';
import { ConnectionHandler, graphql } from 'relay-runtime';
import { CommentRefetchQuery } from 'src/__generated__/CommentRefetchQuery.graphql';
import { CommentSection_commendable$key } from 'src/__generated__/CommentSection_commendable.graphql';
import { CommentSection_Mutation } from 'src/__generated__/CommentSection_Mutation.graphql';
import { OauthButton, OauthButtonSection } from 'src/components/Button';
import Comment from 'src/components/Comment';
import { useCurrentUser } from 'src/hooks/useCurrentUser';
import { usePopupWindow } from 'src/hooks/usePopupWindow';
import { match } from 'ts-pattern';

import { Markdown } from '@emotion-icons/fa-brands/Markdown';
import { ExpandMore, Send } from '@emotion-icons/material-outlined';

import Avatar from '../Avatar';
import GradientButton from '../GradientButton';
import { TextArea } from '../Input';
import { Row } from '../Layout/style';
import Loading from '../Loading';
import PlaceHolder from '../PlaceHolder';
import { H3, H4, H5 } from '../Typography';
import { BaseCommentSection, MarkdownPowered, NewComment } from './style';

const commentFragmentSpec = graphql`
  fragment CommentSection_commendable on Commendable
  @argumentDefinitions(count: { type: "Int", defaultValue: 3 }, cursor: { type: "String" })
  @refetchable(queryName: "CommentRefetchQuery") {
    commentsConnection(first: $count, after: $cursor)
      @connection(key: "CommentSection_commentsConnection") {
      edges {
        node {
          id
          ...Comment_comment
        }
      }
      totalCount
    }
  }
`;

type CommentSectionProps = {
  parent: CommentSection_commendable$key;
  variant: 'profile' | 'post';
} & React.ComponentProps<typeof BaseCommentSection>;

const CommentSection = (props: CommentSectionProps) => {
  const { parent, variant, ...rest } = props;
  const currentUser = useCurrentUser();
  const { data, isLoadingNext, hasNext, loadNext } = usePagination<
    CommentRefetchQuery,
    CommentSection_commendable$key
  >(commentFragmentSpec, parent);

  const [commentContent, setCommentContent] = useState('');

  const { addToast } = useToasts();

  const commentSection_commentsConnectionId = ConnectionHandler.getConnectionID(
    (parent as unknown as { __id: string }).__id,
    'CommentSection_commentsConnection',
  );

  const [mutate, { loading }] = useMutation<CommentSection_Mutation>(
    graphql`
      mutation CommentSection_Mutation(
        $connections: [ID!]!
        $parentId: String!
        $content: String!
      ) {
        creatCommentMutation(parentId: $parentId, content: $content) {
          createCommentEdge @appendEdge(connections: $connections) {
            cursor
            node {
              id
              ...Comment_comment
            }
          }
        }
      }
    `,
    {
      onCompleted: () => {
        addToast(`comment succeed`, {
          appearance: 'success',
        });
        setCommentContent('');
      },
      onError: (error) => {
        addToast(`comment failed, ${error}`, {
          appearance: 'error',
        });
      },
    },
  );

  const { createWindow: openOauthWindow } = usePopupWindow();

  return (
    <BaseCommentSection
      mt={match(variant)
        .with('post', () => '1rem')
        .with('profile', () => undefined)
        .run()}
      variant={variant}
      {...rest}
    >
      {match(variant)
        .with('profile', () => (
          <H3 pl="2rem" py="1rem">
            Comments({data?.commentsConnection?.totalCount ?? 0})
          </H3>
        ))
        .with('post', () => (
          <H4 py="1rem">Comments({data?.commentsConnection?.totalCount ?? 0})</H4>
        ))
        .run()}
      {data &&
      data.commentsConnection &&
      data.commentsConnection.edges &&
      data.commentsConnection.edges.length > 0
        ? data.commentsConnection.edges.map(
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
                  my={match(variant)
                    .with('profile', () => '0')
                    .with('post', () => '0.5rem')
                    .run()}
                  key={e.node.id}
                  comment={e.node}
                />
              ),
          )
        : null}
      {isLoadingNext && <PlaceHolder />}
      {hasNext && (
        <GradientButton mb="1rem" onClick={() => loadNext(5)}>
          <ExpandMore size={24} />
        </GradientButton>
      )}
      {variant === 'post' && (
        <NewComment>
          {currentUser ? (
            <>
              <Row alignItems="center" mb="0.75rem">
                <Avatar variant="round" size={32} src={currentUser.profileImageUrl} />
                <H5 mx="0.5rem">{currentUser.name}</H5>
              </Row>
              <TextArea
                value={commentContent}
                onChange={(e) => setCommentContent(e.currentTarget.value)}
              />
              <Row mt="0.5rem" alignItems="center">
                <MarkdownPowered
                  onClick={() =>
                    window.open('https://guides.github.com/features/mastering-markdown/')
                  }
                >
                  <Markdown size={24} />
                  <H5 ml="0.5rem">markdown powered</H5>
                </MarkdownPowered>
                <GradientButton
                  ml="auto"
                  mr="0.5rem"
                  onClick={() => {
                    if (commentContent.length > 0) {
                      mutate({
                        variables: {
                          connections: [commentSection_commentsConnectionId],
                          parentId: (parent as unknown as { __id: string }).__id,
                          content: commentContent,
                        },
                      });
                    }
                  }}
                >
                  {loading ? <Loading size={18} /> : <Send size={18} />}
                </GradientButton>
              </Row>
            </>
          ) : (
            <Row
              flexDirection={['column', 'row']}
              justifyContent="center"
              alignItems="center"
              height="8rem"
            >
              <H5>Continue with</H5>
              <OauthButtonSection>
                {process.env.NEXT_PUBLIC_SUPPORTED_OAUTH_PROVIDERS &&
                  process.env.NEXT_PUBLIC_SUPPORTED_OAUTH_PROVIDERS.split(',').map((provider) => (
                    <OauthButton
                      key={provider}
                      type="button"
                      onClick={() =>
                        openOauthWindow(
                          `/api/connect/${provider}`,
                          `User Oauth`,
                          provider === 'reddit' ? 1000 : 400,
                          600,
                        )
                      }
                    >
                      <Image
                        src={`/images/logo/${provider}.svg`}
                        height={24}
                        width={24}
                        layout="fixed"
                      />
                    </OauthButton>
                  ))}
              </OauthButtonSection>
              <H5>to comment</H5>
            </Row>
          )}
        </NewComment>
      )}
    </BaseCommentSection>
  );
};

export default CommentSection;
