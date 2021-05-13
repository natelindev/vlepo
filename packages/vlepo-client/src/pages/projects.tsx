import { GetServerSidePropsContext } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { fetchQuery, graphql } from 'react-relay';
import { usePagination, useQuery } from 'relay-hooks';
import { ProjectRefetchQuery } from 'src/__generated__/ProjectRefetchQuery.graphql';
import { projects_BlogQuery } from 'src/__generated__/projects_BlogQuery.graphql';
import { projects_Projects$key } from 'src/__generated__/projects_Projects.graphql';
import { ErrorText } from 'src/components/Input';
import { Column, Row } from 'src/components/Layout/style';
import PlaceHolder, { Loading } from 'src/components/PlaceHolder';
import { H1 } from 'src/components/Typography';
import { initEnvironment } from 'src/relay';

import { ExpandMore } from '@emotion-icons/material-outlined';

const ProjectCard = dynamic(() => import('src/components/ProjectCard'), { loading: Loading });
const GradientButton = dynamic(() => import('src/components/GradientButton'), { loading: Loading });

const projectFragmentSpec = graphql`
  fragment projects_Projects on Blog
  @argumentDefinitions(count: { type: "Int", defaultValue: 10 }, cursor: { type: "String" })
  @refetchable(queryName: "ProjectRefetchQuery") {
    projectsConnection(first: $count, after: $cursor)
      @connection(key: "projects_projectsConnection") {
      edges {
        node {
          ...ProjectCard_project
        }
      }
    }
  }
`;

const blogQuery = graphql`
  query projects_BlogQuery($id: String!) {
    blog(where: { id: $id }) {
      ...projects_Projects
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

const Projects = () => {
  const { error, data, isLoading } = useQuery<projects_BlogQuery>(blogQuery, {
    id: process.env.NEXT_PUBLIC_DEFAULT_BLOG_ID,
  });

  if (error) {
    return <ErrorText>{error.message}</ErrorText>;
  }
  if (!data || isLoading) return <PlaceHolder />;

  return (
    <>
      <Head>
        <title key="title">Projects</title>
      </Head>
      <H1 mx="auto" mt="5rem" mb="6rem">
        Projects
      </H1>
      <ProjectList blog={data!.blog!} />
    </>
  );
};

type ProjectListProps = {
  blog: projects_Projects$key;
};
const ProjectList = (props: ProjectListProps) => {
  const { blog: fullBlog } = props;
  const {
    data: project,
    isLoadingNext,
    hasNext,
    loadNext,
  } = usePagination<ProjectRefetchQuery, projects_Projects$key>(projectFragmentSpec, fullBlog);

  return (
    <Column mx={['0.3rem', '2rem', '6rem']} my="3rem">
      {project &&
        project.projectsConnection &&
        project.projectsConnection.edges &&
        project.projectsConnection.edges.map(
          (e) => e && e.node && <ProjectCard project={e.node} />,
        )}
      {isLoadingNext && <>{Array(5).fill(<ProjectCard project={null} />)}</>}
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

export default Projects;
