import Image from 'next/image';
import React from 'react';
import HoverShare from 'src/components/HoverShare';
import Layout from 'src/components/Layout';
import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';
import * as components from 'src/components/MDXComponents';
import { fetchQuery, graphql } from 'react-relay';

import styled from '@emotion/styled';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { initEnvironment } from 'src/relay';

import { PostIdQuery } from '../../__generated__/PostIdQuery.graphql';
import { useQuery } from 'relay-hooks';

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

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const { query, res } = context;
  const { environment, relaySSR } = initEnvironment();

  if (!query.postId || Array.isArray(query.postId)) {
    return {
      props: {
        relayData: undefined,
        source: undefined,
      },
    };
  }

  await fetchQuery<PostIdQuery>(environment, postIdQuery, { id: query.postId });

  const [relayData] = await relaySSR.getCache();
  const [queryString, queryPayload] = relayData;

  res.setHeader('Cache-Control', 's-maxage=604800, stale-while-revalidate');

  // @ts-expect-error relay typing inaccurate, json needed
  const renderedMDX = await renderToString(JSON.parse(queryPayload.json).post.content, {
    components,
  });

  return {
    props: {
      // @ts-expect-error relay typing inaccurate, json needed
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

const Post = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { renderedMDX } = props;
  const { error, data } = useQuery<PostIdQuery>(postIdQuery);
  if (error) return <div>{error.message}</div>;

  if (!renderedMDX) return <div>mdx render failed</div>;
  if (!data || !data.post) return <components.PlaceHolder />;

  const { headerImageUrl, title, owner } = data.post;

  const mdxContent = hydrate(renderedMDX, { components });

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
