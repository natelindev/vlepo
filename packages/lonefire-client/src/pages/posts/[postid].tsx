import debugInit from 'debug';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import hydrate from 'next-mdx-remote/hydrate';
import renderToString from 'next-mdx-remote/render-to-string';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { fetchQuery, graphql } from 'react-relay';
import { useQuery } from 'relay-hooks';
import HoverShare from 'src/components/HoverShare';
import Layout from 'src/components/Layout';
import * as components from 'src/components/MDXComponents';
import { initEnvironment } from 'src/relay';

import styled from '@emotion/styled';

import { PostIdQuery } from '../../__generated__/PostIdQuery.graphql';

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const debug = debugInit('lonefire:postId');
  const { query, res } = context;
  const { environment, relaySSR } = initEnvironment();
  const PostId = query.postId as string;

  await fetchQuery<PostIdQuery>(environment, postIdQuery, { id: PostId });

  const [relayData] = await relaySSR.getCache();
  const [queryString, queryPayload] = relayData;
  debug(`${PostId} visited`);

  res.setHeader('Cache-Control', 's-maxage=604800, stale-while-revalidate');

  const renderedMDX = await renderToString(queryPayload.data?.post.content, {
    components,
  });

  return {
    props: {
      relayData: relayData ? [[queryString, queryPayload.json]] : null,
      renderedMDX,
    },
  };
};

const Header = styled.div`
  max-height: 30rem;
  width: 100%;
  > div {
    max-height: 30rem;
  }
`;

const FullWidthImage = styled(Image)`
  object-fit: cover;
`;

const Title = styled.h1`
  font-size: 2.75rem;
`;

const ArticleBody = styled.article`
  margin-left: 10rem;
  margin-right: 10rem;
`;

const Body = styled.div`
  display: flex;
`;

const Author = styled.div`
  font-size: 1.5rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const postIdQuery = graphql`
  query PostIdQuery($id: String!) {
    post(where: { id: $id }) {
      title
      owner {
        name
      }
      headerImageUrl
      content
    }
  }
`;

const Post = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const Router = useRouter();
  const PostId = Router.query.postId as string;
  const {
    renderedMDX = {
      compiledSource: '',
      renderedOutput: '',
      scope: {},
    },
  } = props;
  const { error, data } = useQuery<PostIdQuery>(postIdQuery, { id: PostId });
  const mdxContent = hydrate(renderedMDX, { components });

  if (error) return <div>{error.message}</div>;
  if (!data || !data.post) return <components.PlaceHolder />;

  const { headerImageUrl, title, owner } = data.post;

  return (
    <Layout>
      {headerImageUrl && (
        <Header>
          <FullWidthImage layout="responsive" src={headerImageUrl} width="16" height="5" />
        </Header>
      )}
      <HoverShare />
      <Body>
        <ArticleBody>
          <Title>{title}</Title>
          <Author>{owner?.name}</Author>
          <Content>{mdxContent}</Content>
        </ArticleBody>
      </Body>
    </Layout>
  );
};

export default Post;
