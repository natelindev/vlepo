/* eslint-disable react/destructuring-assignment */
import { useRouter } from 'next/router';
import { useState } from 'react';
import { graphql } from 'react-relay';
import { usePagination, useQuery } from 'relay-hooks';
import { Entity_blogSectionQuery } from 'src/__generated__/Entity_blogSectionQuery.graphql';
import { Entity_user$key } from 'src/__generated__/Entity_user.graphql';
import { Entity_viewerQuery } from 'src/__generated__/Entity_viewerQuery.graphql';
import { PostRefetchQuery } from 'src/__generated__/PostRefetchQuery.graphql';
import ClientOnly from 'src/components/ClientOnly';
import PostCard from 'src/components/Dashboard/PostCard';
import GradientButton from 'src/components/GradientButton';
import { Column, Row } from 'src/components/Layout/style';
import CreatePostModal from 'src/components/Modals/CreatePostModal';
import PlaceHolder from 'src/components/PlaceHolder';
import Sidebar from 'src/components/Sidebar';
import { match } from 'ts-pattern';

import { defaultIds } from '@vlepo/shared';

import { Container, DashboardCard, DashboardMain, Numbers, NumbersLabel } from './style';

const fragmentSpec = graphql`
  fragment Entity_user on User
  @argumentDefinitions(count: { type: "Int", defaultValue: 5 }, cursor: { type: "String" })
  @refetchable(queryName: "PostRefetchQuery") {
    postsConnection(first: $count, after: $cursor) @connection(key: "Entity_postsConnection") {
      edges {
        node {
          ...PostCard_post
        }
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

const viewerQuery = graphql`
  query Entity_viewerQuery {
    viewer {
      ...Entity_user
    }
  }
`;

export const getServerSideProps = () => {
  return {
    props: {},
  };
};

const BlogSection = () => {
  const { error, data, isLoading } = useQuery<Entity_blogSectionQuery>(blogSectionQuery, {
    id: defaultIds.blog,
  });

  if (error) return <div>{error.message}</div>;
  if (!data || isLoading) return <PlaceHolder />;

  const { postViewCount, postReactionCount, postCommentCount, userCount } = data.blog
    ? data.blog
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

type PostSectionProps = {
  user: Entity_user$key;
};

const PostSection = (props: PostSectionProps) => {
  const { data: user, isLoadingNext, hasNext, loadNext } = usePagination<
    PostRefetchQuery,
    Entity_user$key
  >(fragmentSpec, props.user);
  const [showCreatePostModal, setShowCreatePostModal] = useState(false);

  return (
    <>
      <CreatePostModal open={showCreatePostModal} onClose={() => setShowCreatePostModal(false)} />
      <Row>
        <GradientButton
          width="5rem"
          ml="auto"
          mr="1rem"
          onClick={() => setShowCreatePostModal(true)}
        >
          Create
        </GradientButton>
      </Row>
      <Column mt="1rem">
        {user &&
          user.postsConnection?.edges?.length &&
          user.postsConnection.edges.map(
            (e) =>
              e &&
              e.node && (
                <PostCard key={((e.node as unknown) as { __id: string }).__id} post={e.node} />
              ),
          )}
      </Column>
      {isLoadingNext && <PlaceHolder width="100%" />}
      {hasNext && !isLoadingNext && (
        <Row>
          <GradientButton width="100%" mt="0.5rem" mx="1rem" onClick={() => loadNext(5)}>
            Load More
          </GradientButton>
        </Row>
      )}
    </>
  );
};

const Dashboard = () => {
  const router = useRouter();
  const entity = router.query.entity as string;

  const { error, data, isLoading } = useQuery<Entity_viewerQuery>(viewerQuery, {});

  if (error) {
    router.replace('/401');
  }

  if (!data || isLoading || !data.viewer) {
    return <PlaceHolder />;
  }

  return (
    <>
      <Container>
        <Sidebar />
        <ClientOnly>
          <DashboardMain>
            {match(entity)
              .with('blog', () => <BlogSection />)
              .with('post', () => data.viewer && <PostSection user={data.viewer} />)
              .otherwise(() => null)}
          </DashboardMain>
        </ClientOnly>
      </Container>
    </>
  );
};

export default Dashboard;
