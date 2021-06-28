import dynamic from 'next/dynamic';
import { useFragment, useQuery } from 'relay-hooks';
import { fetchQuery, graphql } from 'relay-runtime';
import { pages_Index_BlogQuery } from 'src/__generated__/pages_Index_BlogQuery.graphql';
import { pages_Index_Posts$key } from 'src/__generated__/pages_Index_Posts.graphql';
import { ErrorText } from 'src/components/Input';
import { Column, Row } from 'src/components/Layout/style';
import PlaceHolder, { Loading } from 'src/components/PlaceHolder';
import { H3 } from 'src/components/Typography';
import { useMetaData } from 'src/hooks/useMetaData';
import { initEnvironment } from 'src/relay';

import styled from '@emotion/styled';

import type { GetServerSidePropsContext } from 'next';

const ArticleCard = dynamic(() => import('src/components/ArticleCard'), { loading: Loading });

const blogQuery = graphql`
  query pages_Index_BlogQuery($id: String!) {
    blog(where: { id: $id }) {
      ...pages_Index_Posts
    }
  }
`;

const indexPostsFragment = graphql`
  fragment pages_Index_Posts on Blog {
    postsConnection(first: 5) @connection(key: "Index_postsConnection") {
      edges {
        node {
          ...ArticleCard_post
        }
      }
    }
  }
`;

const IndexSlogan = styled.h1`
  font-size: ${(props) => props.theme.fontSizes[8]};
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

const PostsSection = (props: PostSectionProps) => {
  const { blog } = props;

  const data = useFragment<pages_Index_Posts$key>(indexPostsFragment, blog!);

  if (!data) return <PlaceHolder />;

  return <></>;
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
    <>
      <IndexSlogan>{slogan}</IndexSlogan>
      <Column>
        <H3>Posts</H3>
        <PostsSection blog={data.blog} />
      </Column>
      <Column>
        <H3>Papers</H3>
        <PapersSection blog={data.blog} />
      </Column>
      <Row>Projects</Row>
      <Row>
        <ProjectsSection blog={data.blog} />
      </Row>
      <Row>Designs</Row>
      <Row>
        <DesignSection blog={data.blog} />
      </Row>
    </>
  );
}
