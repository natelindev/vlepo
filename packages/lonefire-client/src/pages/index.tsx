import { Masonry } from 'masonic';
import React from 'react';
import Typist from 'react-typist';
import ArticleCard, { ArticleCardProps } from 'src/components/ArticleCard';
import Card from 'src/components/Card';
import Layout from 'src/components/Layout';

import styled from '@emotion/styled';

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

const IndexCard = styled(Card)`
  margin-left: auto;
  margin-right: auto;
  backdrop-filter: saturate(180%) blur(5px);
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
  font-size: 1.5rem;
`;

const MasonryCard = ({ data, width }: { data: unknown; width: number }) => (
  <ArticleCard width={width} {...data} />
);

export default function Home(): React.ReactElement {
  const items: ArticleCardProps[] = [
    {
      title: 'hello',
      tags: ['nodejs', 'note'],
      headerImage: 'https://placeholder.pics/svg/300',
      abstract: 'This is an test article',
    },
    { title: 'hello' },
    { title: 'hello', headerImage: 'https://placeholder.pics/svg/300' },
    { title: 'hello' },
    { title: 'hello' },
    { title: 'hello', headerImage: 'https://placeholder.pics/svg/300' },
    { title: 'hello' },
    { title: 'hello', headerImage: 'https://placeholder.pics/svg/300' },
    { title: 'hello' },
    { title: 'hello', headerImage: 'https://placeholder.pics/svg/300' },
    { title: 'hello' },
    { title: 'hello' },
    { title: 'hello', headerImage: 'https://placeholder.pics/svg/300' },
    { title: 'hello' },
    { title: 'hello', headerImage: 'https://placeholder.pics/svg/300' },
    { title: 'hello' },
    { title: 'hello', headerImage: 'https://placeholder.pics/svg/300' },
    { title: 'hello' },
    { title: 'hello' },
    { title: 'hello', headerImage: 'https://placeholder.pics/svg/300' },
    { title: 'hello' },
    { title: 'hello', headerImage: 'https://placeholder.pics/svg/300' },
    { title: 'hello' },
    { title: 'hello', headerImage: 'https://placeholder.pics/svg/300' },
    { title: 'hello' },
    { title: 'hello' },
    { title: 'hello', headerImage: 'https://placeholder.pics/svg/300' },
    { title: 'hello' },
    { title: 'hello', headerImage: 'https://placeholder.pics/svg/300' },
    { title: 'hello' },
    { title: 'hello', headerImage: 'https://placeholder.pics/svg/300' },
    { title: 'hello' },
    { title: 'hello' },
    { title: 'hello', headerImage: 'https://placeholder.pics/svg/300' },
    { title: 'hello' },
    { title: 'hello', headerImage: 'https://placeholder.pics/svg/300' },
    { title: 'hello' },
    { title: 'hello', headerImage: 'https://placeholder.pics/svg/300' },
    { title: 'hello' },
    { title: 'hello' },
    { title: 'hello', headerImage: 'https://placeholder.pics/svg/300' },
    { title: 'hello' },
    { title: 'hello', headerImage: 'https://placeholder.pics/svg/300' },
    { title: 'hello' },
    { title: 'hello', headerImage: 'https://placeholder.pics/svg/300' },
    { title: 'hello' },
    { title: 'hello' },
    { title: 'hello', headerImage: 'https://placeholder.pics/svg/300' },
    { title: 'hello' },
    { title: 'hello', headerImage: 'https://placeholder.pics/svg/300' },
    { title: 'hello' },
    { title: 'hello', headerImage: 'https://placeholder.pics/svg/300' },
    { title: 'hello' },
  ];
  return (
    <Layout>
      <IndexCard width="30rem" href="/">
        <IndexSlogan cursor={{ show: false }}>
          <h1>I code, Therefore I am</h1>
        </IndexSlogan>
      </IndexCard>
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
