import dynamic from 'next/dynamic';
import { useFragment, useQuery } from 'relay-hooks';
import { fetchQuery, graphql } from 'relay-runtime';
import { pages_Index_BlogQuery } from 'src/__generated__/pages_Index_BlogQuery.graphql';
import { pages_Index_Posts$key } from 'src/__generated__/pages_Index_Posts.graphql';
import { ErrorText } from 'src/components/Input';
import { Column, Row } from 'src/components/Layout/style';
import PlaceHolder, { Loading } from 'src/components/PlaceHolder';
import { H2 } from 'src/components/Typography';
import { useMetaData } from 'src/hooks/useMetaData';
import { initEnvironment } from 'src/relay';
import { fontSize, FontSizeProps } from 'styled-system';

import styled from '@emotion/styled';

import type { GetServerSidePropsContext } from 'next';

const IndexPostCard = dynamic(() => import('src/components/IndexPostCard'), { loading: Loading });

const blogQuery = graphql`
  query pages_Index_BlogQuery($id: String!) {
    blog(where: { id: $id }) {
      ...pages_Index_Posts
    }
  }
`;

const indexPostsFragment = graphql`
  fragment pages_Index_Posts on Blog {
    postsConnection(first: 5, orderBy: { key: "createdAt", order: desc })
      @connection(key: "Index_postsConnection") {
      edges {
        node {
          id
          ...IndexPostCard_post
        }
      }
    }
  }
`;

const IndexSlogan = styled.h1<FontSizeProps>`
  margin-left: auto;
  margin-right: auto;
  margin-top: 10rem;
  height: 60vh;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  font-size: ${(props) => `${props.theme.fontSizes[7]}px`};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  ${fontSize}
`;

export const BasePage = styled.div`
  display: flex;

  flex-direction: column;
  padding: 5rem;
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

type PostSectionProps = {
  blog: pages_Index_Posts$key;
};

const IndexPostRow = styled.div`
  display: flex;
  height: 20rem;
  margin-top: 0.5rem;
  margin-bottom: 2rem;
`;

const PostsSection = (props: PostSectionProps) => {
  const { blog } = props;

  const data = useFragment<pages_Index_Posts$key>(indexPostsFragment, blog!);

  if (!data || !data.postsConnection)
    return (
      <IndexPostRow>
        <PlaceHolder />
      </IndexPostRow>
    );

  return (
    <IndexPostRow>
      {data.postsConnection.edges?.map(
        (e) =>
          e &&
          e.node && (
            <IndexPostCard
              mr="1rem"
              showProfile={false}
              width="20rem"
              key={e.node.id}
              post={e.node}
            />
          ),
      ) ?? null}
    </IndexPostRow>
  );
};

const ProjectsSection = (props: PostSectionProps) => {
  const { blog } = props;

  const data = useFragment<pages_Index_Posts$key>(indexPostsFragment, blog!);

  if (!data) return <PlaceHolder />;

  return <></>;
};

const PapersSection = (props: PostSectionProps) => {
  const { blog } = props;

  const data = useFragment<pages_Index_Posts$key>(indexPostsFragment, blog!);

  if (!data) return <PlaceHolder />;

  return <></>;
};

const DesignSection = (props: PostSectionProps) => {
  const { blog } = props;

  const data = useFragment<pages_Index_Posts$key>(indexPostsFragment, blog!);

  if (!data) return <PlaceHolder />;

  return <></>;
};

export default function Home() {
  const { error, data } = useQuery<pages_Index_BlogQuery>(blogQuery, {
    id: process.env.NEXT_PUBLIC_DEFAULT_BLOG_ID,
  });

  const { slogan } = useMetaData();

  if (error) {
    return <ErrorText>{error.message}</ErrorText>;
  }

  if (!data || !data.blog) {
    return <PlaceHolder />;
  }

  return (
    <BasePage>
      <IndexSlogan fontSize={[5, 6, 6, 7]}>{slogan}</IndexSlogan>
      <Column>
        <H2>Posts</H2>
        <PostsSection blog={data.blog} />
      </Column>
      <Column>
        <H2>Papers</H2>
        <PapersSection blog={data.blog} />
      </Column>
      <Row>
        <H2>Projects</H2>
      </Row>
      <Row>
        <ProjectsSection blog={data.blog} />
      </Row>
      <Row>
        <H2>Designs</H2>
      </Row>
      <Row>
        <DesignSection blog={data.blog} />
      </Row>
    </BasePage>
  );
}
