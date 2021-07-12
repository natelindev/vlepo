import { GetServerSidePropsContext } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { usePagination, useQuery } from 'relay-hooks';
import { fetchQuery, graphql } from 'relay-runtime';
import { ProjectRefetchQuery } from 'src/__generated__/ProjectRefetchQuery.graphql';
import { projects_BlogQuery } from 'src/__generated__/projects_BlogQuery.graphql';
import { projects_Projects$key } from 'src/__generated__/projects_Projects.graphql';
import { ErrorText } from 'src/components/Input';
import { Column, Row } from 'src/components/Layout/style';
import PlaceHolder, { Loading } from 'src/components/PlaceHolder';
import { Slogan, SloganContainer } from 'src/components/Slogan';
import { initEnvironment } from 'src/relay';

import { ExpandMore } from '@emotion-icons/material-outlined';

const ProjectCard = dynamic(() => import('src/components/ProjectCard'), { loading: Loading });
const GradientButton = dynamic(() => import('src/components/GradientButton'), { loading: Loading });

const projectFragmentSpec = graphql`
  fragment projects_Projects on Blog
  @argumentDefinitions(count: { type: "Int", defaultValue: 10 }, cursor: { type: "String" })
  @refetchable(queryName: "ProjectRefetchQuery") {
    projectsConnection(first: $count, after: $cursor, orderBy: { key: "createdAt", order: desc })
      @connection(key: "projects_projectsConnection") {
      edges {
        node {
          id
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
      <SloganContainer
        cursor={{ show: false }}
        mt={['5rem', '4rem', '3rem']}
        mb={['4rem', '5rem', '6rem']}
        fontSize={[2, 3, 4]}
      >
        <Slogan>Projects</Slogan>
      </SloganContainer>
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
    <Column mx={['0.3rem', '6rem', '12rem']} my="3rem">
      {project &&
        project.projectsConnection &&
        project.projectsConnection.edges &&
        project.projectsConnection.edges.map(
          (e) =>
            e && e.node && e.node.id && <ProjectCard key={e.node.id} mb="1rem" project={e.node} />,
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
