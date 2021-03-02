import { Masonry } from 'masonic';
import React from 'react';
import { fetchQuery, graphql } from 'react-relay';
import Typist from 'react-typist';
import { useQuery } from 'relay-hooks';
import ArticleCard, { ArticleCardProps } from 'src/components/ArticleCard';
import Layout from 'src/components/Layout';
import { initEnvironment } from 'src/shared/createEnvironment';

import styled from '@emotion/styled';

import { pages_indexQuery as pageIndexQuery } from '../__generated__/pages_indexQuery.graphql';

const IndexMasonry = styled(Masonry)`
  width: 100%;
  align-self: center;
  margin-left: auto;
  margin-right: auto;
  &:focus {
    border: none;
    outline: none;
  }
`;

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

const query = graphql`
  query pages_indexQuery {
    posts {
      title
      headerImageUrl
      createdAt
    }
  }
`;

export async function getStaticProps() {
  const { environment, relaySSR } = initEnvironment();

  await fetchQuery(environment, query, {});

  const relayData = (await relaySSR.getCache())?.[0];

  return {
    props: {
      relayData: !relayData ? null : [[relayData[0], relayData[1].data]],
    },
  };
}

const MasonryCard = ({ data, width }: { data: unknown; width: number }) => (
  <ArticleCard width={width} {...data} />
);

export default function Home(): React.ReactElement {
  const { error, data } = useQuery<pageIndexQuery>(query);
  if (error) return <div>{error.message}</div>;

  if (!data) return <div>Loading</div>;

  const items: ArticleCardProps[] = data.posts.map((p) => ({
    title: p.title,
    date: p.createdAt as Date,
  }));

  return (
    <Layout>
      <IndexSlogan cursor={{ show: false }}>
        <h1>I code, Therefore I am</h1>
      </IndexSlogan>
      <IndexRow>
        <IndexMasonry
          columnWidth={350}
          items={items}
          columnGutter={20}
          overscanBy={2}
          render={MasonryCard}
        />
      </IndexRow>
    </Layout>
  );
}
