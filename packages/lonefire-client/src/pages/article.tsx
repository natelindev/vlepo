import Image from 'next/image';
import React from 'react';
import HoverShare from 'src/components/HoverShare';
import Layout from 'src/components/Layout';

import styled from '@emotion/styled';
import MDX from '@mdx-js/runtime';

const Header = styled.div`
  max-height: 30rem;
  width: 100%;
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

type ArticleProps = {
  title: string;
  headerImg: string;
  author: string;
  content: string;
};

const Article = (props: ArticleProps) => {
  const {
    title = 'test',
    headerImg = '/images/red-panda.jpg',
    author = 'nate',
    content = '# hello world',
  } = props;
  return (
    <Layout>
      {headerImg && (
        <Header>
          <FullWidthImage layout="responsive" src={headerImg} width="16" height="5" />
        </Header>
      )}
      <HoverShare />
      <Body>
        <ArticleBody>
          <Title>{title}</Title>
          <MDX>{content}</MDX>
        </ArticleBody>
      </Body>
    </Layout>
  );
};

export default Article;
