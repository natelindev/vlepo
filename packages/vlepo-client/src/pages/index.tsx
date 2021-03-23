import { Masonry } from 'masonic';
import { GetServerSideProps } from 'next';
import React from 'react';
import { fetchQuery, graphql } from 'react-relay';
import Typist from 'react-typist';
import { useQuery } from 'relay-hooks';
import ArticleCard from 'src/components/ArticleCard';
import Layout from 'src/components/Layout';
import PlaceHolder from 'src/components/PlaceHolder';
import { initEnvironment } from 'src/relay';

import styled from '@emotion/styled';
import { Mutable } from '@vlepo/shared';

import {
  pages_indexQuery,
  pages_indexQueryResponse,
} from '../__generated__/pages_indexQuery.graphql';

const IndexMasonry = styled(Masonry)`
  width: 100%;
  align-self: center;
  margin-left: auto;
  margin-right: auto;
  &:focus {
    border: none;
    outline: none;
  }
` as typeof Masonry;

const IndexRow = styled.div`
  margin-left: 6rem;
  margin-right: 6rem;
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  margin-bottom: 2rem;
`;

const IndexSlogan = styled(Typist)`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  margin-bottom: 7rem;
  margin-left: auto;
  margin-right: auto;
  font-size: 1.75rem;
`;

const IndexQuery = graphql`
  query pages_indexQuery {
    posts {
      ...ArticleCard_post
    }
  }
`;

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const { environment, relaySSR } = initEnvironment();

  await fetchQuery(environment, IndexQuery, {});
  const [relayData] = await relaySSR.getCache();
  const [queryString, queryPayload] = relayData ?? [];

  res.setHeader('Cache-Control', 's-maxage=604800, stale-while-revalidate');

  return {
    props: {
      relayData: relayData ? [[queryString, queryPayload.json]] : null,
    },
  };
};

type PostItem = Mutable<pages_indexQueryResponse['posts'][number]>;
type MasonryCardProps = { data: PostItem; width: number };

const MasonryCard: React.FC<MasonryCardProps> = (props: MasonryCardProps) => {
  const { data, width } = props;
  return <ArticleCard width={`${width}px`} post={data} />;
};

export default function Home() {
  const { error, data } = useQuery<pages_indexQuery>(IndexQuery);

  if (error) return <div>{error.message}</div>;
  if (!data) return <PlaceHolder />;

  return (
    <Layout>
      <IndexSlogan cursor={{ show: false }}>
        <h1>I code, Therefore I am</h1>
      </IndexSlogan>
      <IndexRow>
        <IndexMasonry<PostItem>
          columnWidth={350}
          items={data.posts as PostItem[]}
          columnGutter={20}
          overscanBy={2}
          render={MasonryCard}
        />
      </IndexRow>
    </Layout>
  );
}
