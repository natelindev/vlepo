import { Masonry } from 'masonic';
import React, { useEffect } from 'react';
import { graphql } from 'react-relay';
import Typist from 'react-typist';
import { usePagination, useQuery } from 'relay-hooks';
import { fetchQuery } from 'relay-runtime';
import { ArticleCard_post$key } from 'src/__generated__/ArticleCard_post.graphql';
import { IndexPostRefetchQuery } from 'src/__generated__/IndexPostRefetchQuery.graphql';
import { pages_Index_BlogQuery } from 'src/__generated__/pages_Index_BlogQuery.graphql';
import { pages_Index_Posts$key } from 'src/__generated__/pages_Index_Posts.graphql';
import ArticleCard from 'src/components/ArticleCard';
import ClientOnly from 'src/components/ClientOnly';
import GradientButton from 'src/components/GradientButton';
import { Row } from 'src/components/Layout/style';
import PlaceHolder from 'src/components/PlaceHolder';
import { useTitle } from 'src/hooks/useTitle';
import { initEnvironment } from 'src/relay';
import { fontSize, FontSizeProps, margin, MarginProps } from 'styled-system';

import { ExpandMore } from '@emotion-icons/material-outlined';
import styled from '@emotion/styled';

import type { GetServerSidePropsContext } from 'next';

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

const IndexRow = styled.div<MarginProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 3rem;
  ${margin}
`;

const IndexSlogan = styled(Typist)<FontSizeProps & MarginProps>`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  margin-bottom: 6rem;
  margin-left: auto;
  margin-right: auto;
  ${fontSize}
  ${margin}
  color: ${(props) => props.theme.colors.text};
`;

const Slogan = styled.h1`
  color: ${(props) => props.theme.colors.text};
`;

const indexFragmentSpec = graphql`
  fragment pages_Index_Posts on Blog
  @argumentDefinitions(count: { type: "Int", defaultValue: 10 }, cursor: { type: "String" })
  @refetchable(queryName: "IndexPostRefetchQuery") {
    postsConnection(first: $count, after: $cursor) @connection(key: "Index_postsConnection") {
      edges {
        node {
          ...ArticleCard_post
        }
      }
    }
  }
`;

const blogQuery = graphql`
  query pages_Index_BlogQuery($id: String!) {
    blog(where: { id: $id }) {
      name
      ...pages_Index_Posts
    }
  }
`;

export const getServerSideProps = async ({ res, req }: GetServerSidePropsContext) => {
  const { environment, relaySSR } = initEnvironment(req.cookies.accessToken);
  await new Promise((resolve, reject) => {
    fetchQuery(environment, blogQuery, {
      id: process.env.NEXT_PUBLIC_DEFAULT_BLOG_ID,
    }).subscribe({
      complete: () => resolve(undefined),
      error: (err: Error) => reject(err),
    });
  });
  const [relayData] = await relaySSR.getCache();
  const [queryString, queryPayload] = relayData ?? [];

  res.setHeader('Cache-Control', 's-maxage=604800, stale-while-revalidate');

  return {
    props: {
      relayData: relayData && 'json' in queryPayload ? [[queryString, queryPayload.json]] : null,
    },
  };
};

type MasonryCardProps = { data: ArticleCard_post$key; width: number };

const MasonryCard: React.FC<MasonryCardProps> = (props: MasonryCardProps) => {
  const { data, width } = props;
  return <ArticleCard width={`${width}px`} post={data} />;
};

type PostSectionProps = {
  blog: pages_Index_Posts$key;
};
const PostsSection = (props: PostSectionProps) => {
  const { blog } = props;
  const { data, isLoadingNext, hasNext, loadNext } = usePagination<
    IndexPostRefetchQuery,
    pages_Index_Posts$key
  >(indexFragmentSpec, blog!);

  if (!data) return <PlaceHolder />;

  return (
    <IndexRow mx={['0.3rem', '2rem', '6rem']}>
      <ClientOnly>
        <IndexMasonry<ArticleCard_post$key>
          columnWidth={350}
          items={
            data && data.postsConnection && data.postsConnection.edges
              ? data.postsConnection.edges
                  .filter((e) => e !== null && e.node !== null)
                  .map((e) => e!.node!)
              : []
          }
          columnGutter={20}
          overscanBy={2}
          render={MasonryCard}
        />
        {isLoadingNext && <PlaceHolder width="100%" />}
        {hasNext && !isLoadingNext && (
          <Row>
            <GradientButton width="100%" mb="2rem" onClick={() => loadNext(5)}>
              <ExpandMore size={24} />
            </GradientButton>
          </Row>
        )}
      </ClientOnly>
    </IndexRow>
  );
};

export default function Home() {
  const { error, data } = useQuery<pages_Index_BlogQuery>(
    blogQuery,
    {
      id: process.env.NEXT_PUBLIC_DEFAULT_BLOG_ID,
    },
    {
      fetchPolicy: 'store-and-network',
    },
  );

  const { setTitle } = useTitle();

  useEffect(() => {
    if (data?.blog?.name) {
      setTitle?.(data?.blog?.name);
    }
  }, [data?.blog?.name, setTitle]);

  if (error) return <div>{error.message}</div>;

  return (
    <>
      <IndexSlogan
        cursor={{ show: false }}
        mt={['5rem', '4rem', '3rem']}
        mb={['4rem', '5rem', '6rem']}
        fontSize={[2, 3, 4]}
      >
        <Slogan>I code, Therefore I am</Slogan>
      </IndexSlogan>
      {data && <PostsSection blog={data.blog!} />}
    </>
  );
}
