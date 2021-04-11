import { Masonry } from 'masonic';
import React from 'react';
import { graphql } from 'react-relay';
import Typist from 'react-typist';
import { usePagination, useQuery } from 'relay-hooks';
import { fetchQuery, FragmentRefs } from 'relay-runtime';
import { IndexPostRefetchQuery } from 'src/__generated__/IndexPostRefetchQuery.graphql';
import { pages_Index_BlogQuery } from 'src/__generated__/pages_Index_BlogQuery.graphql';
import { pages_Index_Posts$key } from 'src/__generated__/pages_Index_Posts.graphql';
import ArticleCard from 'src/components/ArticleCard';
import GradientButton from 'src/components/GradientButton';
import { Row } from 'src/components/Layout/style';
import PlaceHolder from 'src/components/PlaceHolder';
import { initEnvironment } from 'src/relay';

import styled from '@emotion/styled';
import { defaultIds } from '@vlepo/shared';

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

const IndexRow = styled.div`
  margin-left: 6rem;
  margin-right: 6rem;
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`;

const IndexSlogan = styled(Typist)`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  margin-bottom: 7rem;
  margin-left: auto;
  margin-right: auto;
  font-size: 1.75rem;
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
      ...pages_Index_Posts
    }
  }
`;

export const getServerSideProps = async ({ res }: GetServerSidePropsContext) => {
  const { environment, relaySSR } = initEnvironment();

  await new Promise((resolve, reject) => {
    fetchQuery(environment, blogQuery, {
      id: defaultIds.blog,
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
      // @ts-expect-error relay-network-modern inaccurate typing
      relayData: relayData ? [[queryString, queryPayload.json]] : null,
    },
  };
};

type PostItem = {
  readonly ' $fragmentRefs': FragmentRefs<'ArticleCard_post'>;
};

type MasonryCardProps = { data: PostItem; width: number };

const MasonryCard: React.FC<MasonryCardProps> = (props: MasonryCardProps) => {
  const { data, width } = props;
  return <ArticleCard width={`${width}px`} post={data} />;
};

export default function Home() {
  const { error, data: blogData } = useQuery<pages_Index_BlogQuery>(blogQuery, {
    id: defaultIds.blog,
  });

  const { data, isLoadingNext, hasNext, loadNext } = usePagination<
    IndexPostRefetchQuery,
    pages_Index_Posts$key
  >(indexFragmentSpec, blogData!.blog!);

  if (error) return <div>{error.message}</div>;
  if (!data) return <PlaceHolder />;

  return (
    <>
      <IndexSlogan cursor={{ show: false }}>
        <Slogan>I code, Therefore I am</Slogan>
      </IndexSlogan>
      <IndexRow>
        <IndexMasonry<PostItem>
          columnWidth={350}
          items={data.postsConnection?.edges?.map((e) => e?.node) as PostItem[]}
          columnGutter={20}
          overscanBy={2}
          ssrWidth={1920}
          ssrHeight={1080}
          render={MasonryCard}
        />
      </IndexRow>
      {isLoadingNext && <PlaceHolder width="100%" />}
      {hasNext && !isLoadingNext && (
        <Row>
          <GradientButton width="100%" mx="6rem" mb="2rem" onClick={() => loadNext(5)}>
            Load More
          </GradientButton>
        </Row>
      )}
    </>
  );
}
