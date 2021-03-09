import Image from 'next/image';
import React from 'react';
import HoverShare from 'src/components/HoverShare';
import Layout from 'src/components/Layout';
import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';
import * as components from 'src/components/MDXComponents';

import styled from '@emotion/styled';
import { InferGetServerSidePropsType } from 'next';

export const getServerSideProps = async () => {
  // MDX text - can be from a local file, database, anywhere
  const source = 'Some **mdx** text, with a component <PlaceHolder />';
  const mdxSource = await renderToString(source, { components });
  return { props: { source: mdxSource } };
};

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

const Author = styled.div`
  font-size: 1.5rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

type ArticleProps = {
  title: string;
  headerImg: string;
  author: string;
  source: InferGetServerSidePropsType<typeof getServerSideProps>['source'];
};

const Article = (props: ArticleProps) => {
  const { title = 'test', headerImg = '/images/red-panda.jpg', author = 'nate', source } = props;

  const content = hydrate(source, { components });
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
          <Author>{author}</Author>
          <Content>{content}</Content>
        </ArticleBody>
      </Body>
    </Layout>
  );
};

export default Article;
