import { Masonry, useInfiniteLoader } from 'masonic';
import dynamic from 'next/dynamic';
import React from 'react';
import { usePagination, useQuery } from 'relay-hooks';
import { fetchQuery, graphql } from 'relay-runtime';
import { ArticleCard_post$key } from 'src/__generated__/ArticleCard_post.graphql';
import { posts_BlogQuery } from 'src/__generated__/posts_BlogQuery.graphql';
import { posts_Posts$key } from 'src/__generated__/posts_Posts.graphql';
import { postsPostRefetchQuery } from 'src/__generated__/postsPostRefetchQuery.graphql';
import { ErrorText } from 'src/components/Input';
import PlaceHolder, { Loading } from 'src/components/PlaceHolder';
import { Slogan, SloganContainer } from 'src/components/Slogan';
import { initEnvironment } from 'src/relay';
import { margin, MarginProps } from 'styled-system';

import styled from '@emotion/styled';

import type { GetServerSidePropsContext } from 'next';

const ArticleCard = dynamic(() => import('src/components/ArticleCard'), { loading: Loading });

const PostMasonry = styled(Masonry)`
  width: 100%;
  align-self: center;
  margin-left: auto;
  margin-right: auto;
  &:focus {
    border: none;
    outline: none;
  }
` as typeof Masonry;

const PostRow = styled.div<MarginProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 3rem;
  ${margin}
`;

const postFragmentSpec = graphql`
  fragment posts_Posts on Blog
  @argumentDefinitions(count: { type: "Int", defaultValue: 10 }, cursor: { type: "String" })
  @refetchable(queryName: "postsPostRefetchQuery") {
    postsConnection(first: $count, after: $cursor) @connection(key: "posts_postsConnection") {
      edges {
        node {
          ...ArticleCard_post
        }
      }
    }
  }
`;

const blogQuery = graphql`
  query posts_BlogQuery($id: String!) {
    blog(where: { id: $id }) {
      ...posts_Posts
    }
  }
`;

export const getServerSideProps = async ({ req, res }: GetServerSidePropsContext) => {
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

  if (req.cookies.accessToken) {
    res.setHeader('Cache-Control', 'no-cache');
  } else {
    res.setHeader('Cache-Control', 'max-age=0,s-maxage=604800, stale-while-revalidate');
  }

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
  blog: posts_Posts$key;
};
const PostsSection = (props: PostSectionProps) => {
  const { blog } = props;

  const { data, hasNext, loadNext } = usePagination<postsPostRefetchQuery, posts_Posts$key>(
    postFragmentSpec,
    blog!,
  );

  const maybeLoadMore = useInfiniteLoader(() => hasNext && loadNext(10), {
    isItemLoaded: (index) => (data?.postsConnection?.edges?.length ?? 0) - 1 > index,
  });

  if (!data) return <PlaceHolder />;

  return (
    <PostRow mx={['0.3rem', '2rem', '6rem']}>
      <PostMasonry<ArticleCard_post$key>
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
        onRender={maybeLoadMore}
      />
    </PostRow>
  );
};

export default function Home() {
  const { error, data } = useQuery<posts_BlogQuery>(blogQuery, {
    id: process.env.NEXT_PUBLIC_DEFAULT_BLOG_ID,
  });

  if (error) {
    return <ErrorText>{error.message}</ErrorText>;
  }

  return (
    <>
      <SloganContainer
        cursor={{ show: false }}
        mt={['5rem', '4rem', '3rem']}
        mb={['4rem', '5rem', '6rem']}
        fontSize={[2, 3, 4]}
      >
        <Slogan>Posts</Slogan>
      </SloganContainer>
      {data && <PostsSection blog={data.blog!} />}
    </>
  );
}
