import { GetServerSidePropsContext } from 'next';
/* eslint-disable react/destructuring-assignment */
import { useRouter } from 'next/router';
import { useState } from 'react';
import { usePagination, useQuery } from 'relay-hooks';
import { fetchQuery, graphql } from 'relay-runtime';
import { Entity_blogSectionQuery } from 'src/__generated__/Entity_blogSectionQuery.graphql';
import { Entity_user$key } from 'src/__generated__/Entity_user.graphql';
import { Entity_viewerQuery } from 'src/__generated__/Entity_viewerQuery.graphql';
import { PostRefetchQuery } from 'src/__generated__/PostRefetchQuery.graphql';
import ClientOnly from 'src/components/ClientOnly';
import PostCard from 'src/components/Dashboard/PostCard';
import GradientButton from 'src/components/GradientButton';
import { ErrorText } from 'src/components/Input';
import { Column, Row } from 'src/components/Layout/style';
import CreatePostModal from 'src/components/Modals/CreatePostModal';
import PlaceHolder from 'src/components/PlaceHolder';
import Sidebar from 'src/components/Sidebar';
import { initEnvironment } from 'src/relay';
import { match } from 'ts-pattern';

import { AddCircle, ExpandMore } from '@emotion-icons/material-outlined';
import { envDetect } from '@vlepo/shared';

import { Container, DashboardCard, DashboardMain, Numbers, NumbersLabel } from './style';

const fragmentSpec = graphql`
  fragment Entity_user on User
  @argumentDefinitions(count: { type: "Int", defaultValue: 5 }, cursor: { type: "String" })
  @refetchable(queryName: "PostRefetchQuery") {
    postsConnection(first: $count, after: $cursor) @connection(key: "Entity_postsConnection") {
      edges {
        node {
          id
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
      id
      scopes
      ...Entity_user
    }
  }
`;

export const getServerSideProps = async ({ req, res }: GetServerSidePropsContext) => {
  if (!req.cookies.accessToken) {
    return {
      redirect: {
        destination: '/401',
        permanent: false,
      },
    };
  }

  if (res?.statusCode >= 400) {
    const statusCode = res?.statusCode;
    return { statusCode };
  }

  const { environment, relaySSR } = initEnvironment(req.cookies.accessToken);
  await new Promise((resolve, reject) => {
    fetchQuery(environment, viewerQuery, {}).subscribe({
      complete: () => resolve(undefined),
      error: (err: Error) => reject(err),
    });
  });
  const [relayData] = await relaySSR.getCache();
  const [queryString, queryPayload] = relayData ?? [];

  return {
    props: {
      relayData: relayData && 'json' in queryPayload ? [[queryString, queryPayload.json]] : null,
    },
  };
};

const Dashboard = () => {
  const router = useRouter();
  const entity = router.query.entity as string;

  const { data, isLoading } = useQuery<Entity_viewerQuery>(viewerQuery);

  if (!data || isLoading || !data.viewer) {
    return <PlaceHolder />;
  }

  if (envDetect.isBrowser && !data.viewer.scopes.includes('blog')) {
    router.replace('/403');
  }

  return (
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
  );
};

const BlogSection = () => {
  const { error, data, isLoading } = useQuery<Entity_blogSectionQuery>(blogSectionQuery, {
    id: process.env.NEXT_PUBLIC_DEFAULT_BLOG_ID,
  });

  if (error) return <ErrorText>{error.message}</ErrorText>;
  if (!data || !data.blog || isLoading) return <PlaceHolder />;

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
  const {
    data: user,
    isLoadingNext,
    hasNext,
    loadNext,
  } = usePagination<PostRefetchQuery, Entity_user$key>(fragmentSpec, props.user);
  const [showCreatePostModal, setShowCreatePostModal] = useState(false);

  if (!user) {
    return <PlaceHolder />;
  }
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
          <AddCircle size={24} />
        </GradientButton>
      </Row>
      <Column mt="1rem">
        {user &&
          user.postsConnection &&
          user.postsConnection.edges &&
          user.postsConnection.edges?.length > 0 &&
          user.postsConnection.edges.map(
            (e) => e && e.node && <PostCard key={e.node.id} post={e.node} />,
          )}
      </Column>
      {isLoadingNext && (
        <Column mt="1rem">
          {Array(5).fill(
            <PlaceHolder
              variant="inline"
              ml="1rem"
              mr="2.5rem"
              height="105px"
              my="0.5rem"
              borderRadius="default"
            />,
          )}
        </Column>
      )}
      {hasNext && !isLoadingNext && (
        <Row>
          <GradientButton width="100%" mt="0.5rem" mx="1rem" onClick={() => loadNext(5)}>
            <ExpandMore size={24} />
          </GradientButton>
        </Row>
      )}
    </>
  );
};

export default Dashboard;
