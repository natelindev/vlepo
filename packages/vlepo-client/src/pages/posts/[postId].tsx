import { format, parseISO } from 'date-fns';
import debugInit from 'debug';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import hydrate from 'next-mdx-remote/hydrate';
import renderToString from 'next-mdx-remote/render-to-string';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { graphql } from 'react-relay';
import { useMutation, useQuery } from 'relay-hooks';
import { fetchQuery } from 'relay-runtime';
import { PostIdViewMutation } from 'src/__generated__/PostIdViewMutation.graphql';
import Avatar from 'src/components/Avatar';
import HoverShare from 'src/components/HoverShare/HoverShare';
import Image from 'src/components/Image';
import { Column, Row } from 'src/components/Layout/style';
import * as components from 'src/components/MDXComponents';
import PlaceHolder from 'src/components/PlaceHolder';
import { H5 } from 'src/components/Typography';
import { initEnvironment } from 'src/relay';

import { KeyboardBackspace } from '@emotion-icons/material-outlined';
import { css, useTheme } from '@emotion/react';

import { PostIdQuery } from '../../__generated__/PostIdQuery.graphql';
import { ArticleBody, Back, Content, Header, Title } from './style';

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const debug = debugInit('vlepo:postId');
  const { query, res } = context;
  const { environment, relaySSR } = initEnvironment();
  const PostId = query.postId as string;

  await new Promise((resolve, reject) => {
    fetchQuery<PostIdQuery>(environment, postIdQuery, {
      id: PostId,
    }).subscribe({
      complete: () => resolve(undefined),
      error: (err: Error) => reject(err),
    });
  });

  const [relayData] = await relaySSR.getCache();
  const [queryString, queryPayload] = relayData ?? [];
  debug(`${PostId} visited`);

  res.setHeader('Cache-Control', 's-maxage=604800, stale-while-revalidate');

  const renderedMDX = await renderToString(queryPayload?.data?.post.content, {
    components,
  });

  return {
    props: {
      // @ts-expect-error relay-network-modern inaccurate typing
      relayData: relayData ? [[queryString, queryPayload.json]] : null,
      renderedMDX,
    },
  };
};

const postIdQuery = graphql`
  query PostIdQuery($id: String!) {
    post(where: { id: $id }) {
      title
      owner {
        name
        profileImageUrl
      }
      tags {
        name
      }
      minuteRead
      headerImageUrl
      content
      createdAt
    }
  }
`;

const postIdViewMutation = graphql`
  mutation PostIdViewMutation($id: String!) {
    viewPost(id: $id)
  }
`;

const Post = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  const PostId = router.query.postId as string;
  const {
    renderedMDX = {
      compiledSource: '',
      renderedOutput: '',
      scope: {},
    },
  } = props;
  const { error, data } = useQuery<PostIdQuery>(postIdQuery, { id: PostId });
  const mdxContent = hydrate(renderedMDX, { components });
  const [fullUrl, setFullUrl] = useState('');
  const theme = useTheme();

  const [mutate] = useMutation<PostIdViewMutation>(postIdViewMutation);

  useEffect(() => {
    setFullUrl(window.location.href);
    mutate({ variables: { id: PostId } });
  }, [PostId, mutate]);

  if (error) return <div>{error.message}</div>;
  if (!data || !data.post || router.isFallback) return <PlaceHolder />;

  const { headerImageUrl, title, owner, tags, createdAt, minuteRead } = data.post;

  return (
    <>
      <Header height={['18rem', '20rem', '22rem']}>
        <Image
          objectFit="cover"
          width="100%"
          filter={theme.filter.headerImage}
          height={['18rem', '20rem', '22rem']}
          mt={theme.heights.navbar}
          css={css`
            margin-top: 0;
          `}
          src={headerImageUrl}
          textShadow={
            headerImageUrl && theme.name === 'light' ? 'rgba(0,0,0, 0.3) 0 0 8px' : 'none'
          }
        >
          <Column width="100%" mb="auto">
            <Back onClick={() => router.back()}>
              <KeyboardBackspace size={24} />
              <H5 ml="0.5rem">Back</H5>
            </Back>
            <Title fontSize={[3, 4, 5]} mx="auto" mt="2rem">
              {title}
            </Title>
            <H5 fontWeight="normal" mx="auto" mt="2rem">
              {format(parseISO(createdAt), 'eee, MMM dd yyyy')}
              {' • '}
              {`${minuteRead ?? 1} min read`}
            </H5>
            <Row mx="auto" mt="0.5rem">
              {owner.profileImageUrl && (
                <Avatar size={28} mr="0.5rem" src={owner.profileImageUrl} />
              )}
              {owner.name && (
                <H5 fontWeight="normal" my="auto">
                  {owner.name}
                </H5>
              )}
            </Row>
          </Column>
        </Image>
      </Header>
      <HoverShare title={title} url={fullUrl} tags={tags.map((t) => t.name)} />
      <Row>
        <ArticleBody mx="auto" width={[0.95, 0.9, 0.85, 0.8]}>
          <Content>{mdxContent}</Content>
        </ArticleBody>
      </Row>
    </>
  );
};

export default Post;
