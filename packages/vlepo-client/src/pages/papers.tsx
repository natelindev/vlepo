import { GetServerSidePropsContext } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { usePagination, useQuery } from 'relay-hooks';
import { fetchQuery, graphql } from 'relay-runtime';
import { PaperRefetchQuery } from 'src/__generated__/PaperRefetchQuery.graphql';
import { papers_BlogQuery } from 'src/__generated__/papers_BlogQuery.graphql';
import { papers_Papers$key } from 'src/__generated__/papers_Papers.graphql';
import { ErrorText } from 'src/components/Input';
import { Column, Row } from 'src/components/Layout/style';
import PlaceHolder, { Loading } from 'src/components/PlaceHolder';
import { Slogan, SloganContainer } from 'src/components/Slogan';
import { initEnvironment } from 'src/relay';

import { ExpandMore } from '@emotion-icons/material-outlined';

const PaperCard = dynamic(() => import('src/components/PaperCard'), { loading: Loading });
const GradientButton = dynamic(() => import('src/components/GradientButton'), { loading: Loading });

const paperFragmentSpec = graphql`
  fragment papers_Papers on Blog
  @argumentDefinitions(count: { type: "Int", defaultValue: 10 }, cursor: { type: "String" })
  @refetchable(queryName: "PaperRefetchQuery") {
    papersConnection(first: $count, after: $cursor, orderBy: { key: "createdAt", order: desc })
      @connection(key: "papers_papersConnection") {
      edges {
        node {
          id
          ...PaperCard_paper
        }
      }
    }
  }
`;

const blogQuery = graphql`
  query papers_BlogQuery($id: String!) {
    blog(where: { id: $id }) {
      ...papers_Papers
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

const Papers = () => {
  const { error, data, isLoading } = useQuery<papers_BlogQuery>(blogQuery, {
    id: process.env.NEXT_PUBLIC_DEFAULT_BLOG_ID,
  });

  if (error) {
    return <ErrorText>{error.message}</ErrorText>;
  }
  if (!data || isLoading) return <PlaceHolder />;

  return (
    <>
      <Head>
        <title key="title">Papers</title>
      </Head>

      <SloganContainer
        cursor={{ show: false }}
        mt={['5rem', '4rem', '3rem']}
        mb={['4rem', '5rem', '6rem']}
        fontSize={[2, 3, 4]}
      >
        <Slogan>Papers</Slogan>
      </SloganContainer>
      <PaperList blog={data!.blog!} />
    </>
  );
};

type PaperListProps = {
  blog: papers_Papers$key;
};
const PaperList = (props: PaperListProps) => {
  const { blog: fullBlog } = props;
  const {
    data: paper,
    isLoadingNext,
    hasNext,
    loadNext,
  } = usePagination<PaperRefetchQuery, papers_Papers$key>(paperFragmentSpec, fullBlog);

  return (
    <Column mx={['0.3rem', '6rem', '12rem']} my="3rem">
      {paper &&
        paper.papersConnection &&
        paper.papersConnection.edges &&
        paper.papersConnection.edges.map(
          (e) => e && e.node && e.node.id && <PaperCard key={e.node.id} mb="1rem" paper={e.node} />,
        )}
      {isLoadingNext && <>{Array(5).fill(<PaperCard paper={null} />)}</>}
      {hasNext && !isLoadingNext && (
        <Row>
          <GradientButton width="100%" mt="0.5rem" onClick={() => loadNext(5)}>
            <ExpandMore size={24} />
          </GradientButton>
        </Row>
      )}
    </Column>
  );
};

export default Papers;
