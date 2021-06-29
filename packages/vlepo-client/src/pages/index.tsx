import dynamic from 'next/dynamic';
import { useFragment, useQuery } from 'relay-hooks';
import { fetchQuery, graphql } from 'relay-runtime';
import { pages_Index_BlogQuery } from 'src/__generated__/pages_Index_BlogQuery.graphql';
import { pages_Index_Papers$key } from 'src/__generated__/pages_Index_Papers.graphql';
import { pages_Index_Posts$key } from 'src/__generated__/pages_Index_Posts.graphql';
import { pages_Index_Projects$key } from 'src/__generated__/pages_Index_Projects.graphql';
import Card from 'src/components/Card';
import { ErrorText } from 'src/components/Input';
import { Column, Row } from 'src/components/Layout/style';
import PlaceHolder, { Loading } from 'src/components/PlaceHolder';
import { H2, H3 } from 'src/components/Typography';
import { useMetaData } from 'src/hooks/useMetaData';
import { initEnvironment } from 'src/relay';
import { fontSize, FontSizeProps } from 'styled-system';

import { East } from '@emotion-icons/material-outlined';
import styled from '@emotion/styled';

import type { GetServerSidePropsContext } from 'next';

const IndexPostCard = dynamic(() => import('src/components/IndexPostCard'), { loading: Loading });
const IndexProjectCard = dynamic(() => import('src/components/IndexProjectCard'), {
  loading: Loading,
});
const IndexPaperCard = dynamic(() => import('src/components/IndexPaperCard'), { loading: Loading });

const blogQuery = graphql`
  query pages_Index_BlogQuery($id: String!) {
    blog(where: { id: $id }) {
      ...pages_Index_Posts
      ...pages_Index_Projects
      ...pages_Index_Papers
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

const indexProjectsFragment = graphql`
  fragment pages_Index_Projects on Blog {
    projectsConnection(first: 5, orderBy: { key: "createdAt", order: desc })
      @connection(key: "Index_projectsConnection") {
      edges {
        node {
          id
          ...IndexProjectCard_project
        }
      }
    }
  }
`;

const indexPapersFragment = graphql`
  fragment pages_Index_Papers on Blog {
    papersConnection(first: 5, orderBy: { key: "createdAt", order: desc })
      @connection(key: "Index_papersConnection") {
      edges {
        node {
          id
          ...IndexPaperCard_paper
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

const IndexCardRow = styled.div`
  display: flex;
  height: 20rem;
  width: 100%;
  margin-top: 0.5rem;
  margin-bottom: 2rem;
  overflow-x: scroll;
  overflow-y: hidden;

  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const IndexViewAllArrow = styled(East)`
  position: absolute;
  opacity: 0;
  top: 46%;
  right: 15%;
  transition: all 0.3s ease-in-out;
`;

const IndexViewAllCard = styled(Card)`
  height: 20rem;
  width: 20rem;
  min-height: 20rem;
  min-width: 20rem;

  &:hover {
    ${IndexViewAllArrow} {
      opacity: 1;
      right: 10%;
    }
  }
`;

type PostSectionProps = {
  blog: pages_Index_Posts$key;
};

const PostsSection = (props: PostSectionProps) => {
  const { blog } = props;

  const data = useFragment<pages_Index_Posts$key>(indexPostsFragment, blog!);

  if (!data || !data.postsConnection)
    return (
      <IndexCardRow>
        <PlaceHolder />
      </IndexCardRow>
    );

  return (
    <IndexCardRow>
      {data.postsConnection.edges?.map(
        (e) =>
          e &&
          e.node && (
            <IndexPostCard mr="1rem" height="20rem" width="20rem" key={e.node.id} post={e.node} />
          ),
      ) ?? null}
      <IndexViewAllCard href="/posts">
        <H3 ml="4.5rem" my="auto">
          View all Posts
        </H3>
        <IndexViewAllArrow size={24} />
      </IndexViewAllCard>
    </IndexCardRow>
  );
};

type ProjectSectionProps = {
  blog: pages_Index_Projects$key;
};

const ProjectsSection = (props: ProjectSectionProps) => {
  const { blog } = props;

  const data = useFragment<pages_Index_Projects$key>(indexProjectsFragment, blog!);

  if (!data || !data.projectsConnection)
    return (
      <IndexCardRow>
        <PlaceHolder />
      </IndexCardRow>
    );

  return (
    <IndexCardRow>
      {data.projectsConnection.edges?.map(
        (e) =>
          e &&
          e.node && (
            <IndexProjectCard
              mr="1rem"
              height="20rem"
              width="20rem"
              key={e.node.id}
              project={e.node}
            />
          ),
      ) ?? null}
      <IndexViewAllCard href="/projects">
        <H3 ml="3rem" my="auto">
          View all Projects
        </H3>
        <IndexViewAllArrow size={24} />
      </IndexViewAllCard>
    </IndexCardRow>
  );
};

type PaperSectionProps = {
  blog: pages_Index_Papers$key;
};
const PapersSection = (props: PaperSectionProps) => {
  const { blog } = props;

  const data = useFragment<pages_Index_Papers$key>(indexPapersFragment, blog!);

  if (!data || !data.papersConnection) return <PlaceHolder />;

  return (
    <IndexCardRow>
      {data.papersConnection.edges?.map(
        (e) =>
          e &&
          e.node && (
            <IndexPaperCard mr="1rem" height="20rem" width="20rem" key={e.node.id} paper={e.node} />
          ),
      ) ?? null}
      <IndexViewAllCard href="/papers">
        <H3 ml="4rem" my="auto">
          View all Papers
        </H3>
        <IndexViewAllArrow size={24} />
      </IndexViewAllCard>
    </IndexCardRow>
  );
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
      <Row>
        <H2>Posts</H2>
      </Row>
      <Row>
        <PostsSection blog={data.blog} />
      </Row>
      <Row>
        <H2>Papers</H2>
      </Row>
      <Row>
        <PapersSection blog={data.blog} />
      </Row>
      <Row>
        <H2>Projects</H2>
      </Row>
      <Row>
        <ProjectsSection blog={data.blog} />
      </Row>
    </BasePage>
  );
}
