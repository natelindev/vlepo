import { Masonry } from 'masonic';
import React from 'react';
import Typist from 'react-typist';
import ArticleCard, { ArticleCardProps } from 'src/components/ArticleCard';
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
