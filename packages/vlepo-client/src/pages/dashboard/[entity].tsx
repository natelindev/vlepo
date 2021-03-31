/* eslint-disable react/destructuring-assignment */
import { useRouter } from 'next/router';
import { graphql } from 'react-relay';
import { useQuery } from 'relay-hooks';
import {
  Entity_blogSectionQuery,
  Entity_blogSectionQueryResponse,
} from 'src/__generated__/Entity_blogSectionQuery.graphql';
import {
  Entity_postSectionQuery,
  Entity_postSectionQueryResponse,
} from 'src/__generated__/Entity_postSectionQuery.graphql';
import ClientOnly from 'src/components/ClientOnly';
import PostCard from 'src/components/Dashboard/PostCard';
import GradientButton from 'src/components/GradientButton';
import Layout from 'src/components/Layout';
import { Row } from 'src/components/Layout/style';
import PlaceHolder from 'src/components/PlaceHolder';
import Sidebar from 'src/components/Sidebar';
import { match } from 'ts-pattern';

import { DEFAULT_BLOG_ID } from '@vlepo/shared';

import { Container, DashboardCard, DashboardMain, Numbers, NumbersLabel } from './style';

const postSectionQuery = graphql`
  query Entity_postSectionQuery {
    PostsConnection(first: 5) @connection(key: "Entity_PostsConnection") {
      edges {
        node {
          ...PostCard_post
        }
      }
      pageInfo {
        hasPreviousPage
        hasNextPage
      }
    }
  }
`;

const blogSectionQuery = graphql`
  query Entity_blogSectionQuery($id: String!) {
    blog(where: { id: $id }) {
      postViewCount
      postReactionCount
      postCommentCount
      userCount
    }
  }
`;

const entityQueryMap = {
  blog: blogSectionQuery,
  post: postSectionQuery,
};

type entityQueryTypeMap = {
  blog: Entity_blogSectionQuery;
  post: Entity_postSectionQuery;
};

type entityQueryResponseMap = {
  blog: Entity_blogSectionQueryResponse;
  post: Entity_postSectionQueryResponse;
};

type entityType = keyof entityQueryTypeMap;

type BlogSectionProps = Entity_blogSectionQueryResponse;

export async function getServerSideProps() {
  return {
    props: {},
  };
}

const BlogSection = (props: BlogSectionProps) => {
  const { postViewCount, postReactionCount, postCommentCount, userCount } = props.blog
    ? props.blog
    : { postViewCount: 0, postReactionCount: 0, postCommentCount: 0, userCount: 0 };

  return (
    <Row width="100%">
      <DashboardCard width={[1, 1 / 2, 1 / 4]} m={[0, 3]}>
        <Numbers>{postViewCount}</Numbers>
        <NumbersLabel>Total post views</NumbersLabel>
      </DashboardCard>

      <DashboardCard width={[1, 1 / 2, 1 / 4]} m={[0, 3]}>
        <Numbers>{postReactionCount}</Numbers>
        <NumbersLabel>Total post reactions</NumbersLabel>
      </DashboardCard>

      <DashboardCard width={[1, 1 / 2, 1 / 4]} m={[0, 3]}>
        <Numbers>{postCommentCount}</Numbers>
        <NumbersLabel>Total post comments</NumbersLabel>
      </DashboardCard>

      <DashboardCard width={[1, 1 / 2, 1 / 4]} m={[0, 3]}>
        <Numbers>{userCount}</Numbers>
        <NumbersLabel>Total users</NumbersLabel>
      </DashboardCard>
    </Row>
  );
};

const Dashboard = () => {
  const router = useRouter();
  const entity = router.query.entity as entityType;
  const { error, data } = useQuery<entityQueryTypeMap[typeof entity]>(entityQueryMap[entity], {
    id: DEFAULT_BLOG_ID,
  });

  if (error) return <div>{error.message}</div>;
  if (!data || router.isFallback) return <PlaceHolder />;

  return (
    <Layout>
      <Container>
        <Sidebar />
        <ClientOnly>
          <DashboardMain>
            {match(entity)
              .with('blog', (e) => {
                const { blog } = data as entityQueryResponseMap[typeof e];
                return <BlogSection blog={blog} />;
              })
              .with('post', (e) => {
                const { PostsConnection } = data as entityQueryResponseMap[typeof e];
                return (
                  <>
                    <Row>
                      <GradientButton width="5rem" ml="auto" mr="1rem">
                        Create
                      </GradientButton>
                    </Row>
                    {PostsConnection?.edges?.map((e) => (
                      // @ts-expect-error relay-ts-compiler-limitation
                      <PostCard key={e?.node?.id} post={e?.node} />
                    ))}
                  </>
                );
              })
              .run()}
          </DashboardMain>
        </ClientOnly>
      </Container>
    </Layout>
  );
};

export default Dashboard;
