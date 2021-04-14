import debugInit from 'debug';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import hydrate from 'next-mdx-remote/hydrate';
import renderToString from 'next-mdx-remote/render-to-string';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { graphql } from 'react-relay';
import { useQuery } from 'relay-hooks';
import { fetchQuery } from 'relay-runtime';
import HoverShare from 'src/components/HoverShare/HoverShare';
import ImageOverLay from 'src/components/ImageOverLay';
import { Column, Row } from 'src/components/Layout/style';
import * as components from 'src/components/MDXComponents';
import PlaceHolder from 'src/components/PlaceHolder';
import { H3 } from 'src/components/Typography';
import { initEnvironment } from 'src/relay';

import { KeyboardBackspace } from '@emotion-icons/material-outlined';

import { PostIdQuery } from '../../__generated__/PostIdQuery.graphql';
import { ArticleBody, Back, Content, FullWidthImage, Header, Title } from './style';

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const debug = debugInit('vlepo:postId');
  const { query, res } = context;
  const { environment, relaySSR } = initEnvironment();
  const PostId = query.postId as string;

  await new Promise((resolve, reject) => {
    fetchQuery<PostIdQuery>(environment, postIdQuery, {
      id: PostId,
    }).subscribe({
      complete: () => resolve(undefined),
      error: (err: Error) => reject(err),
    });
  });

  const [relayData] = await relaySSR.getCache();
  const [queryString, queryPayload] = relayData ?? [];
  debug(`${PostId} visited`);

  res.setHeader('Cache-Control', 's-maxage=604800, stale-while-revalidate');

  const renderedMDX = await renderToString(queryPayload?.data?.post.content, {
    components,
  });

  return {
    props: {
      // @ts-expect-error relay-network-modern inaccurate typing
      relayData: relayData ? [[queryString, queryPayload.json]] : null,
      renderedMDX,
    },
  };
};

const postIdQuery = graphql`
  query PostIdQuery($id: String!) {
    post(where: { id: $id }) {
      title
      owner {
        name
      }
      tags {
        name
      }
      headerImageUrl
      content
    }
  }
`;

const Post = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  const PostId = router.query.postId as string;
  const {
    renderedMDX = {
      compiledSource: '',
      renderedOutput: '',
      scope: {},
    },
  } = props;
  const { error, data } = useQuery<PostIdQuery>(postIdQuery, { id: PostId });
  const mdxContent = hydrate(renderedMDX, { components });
  const [fullUrl, setFullUrl] = useState('');
  useEffect(() => {
    setFullUrl(window.location.href);
  }, []);

  if (error) return <div>{error.message}</div>;
  if (!data || !data.post || router.isFallback) return <PlaceHolder />;

  const { headerImageUrl, title, owner, tags } = data.post;

  return (
    <>
      {headerImageUrl && (
        <Header>
          <FullWidthImage layout="responsive" src={headerImageUrl} width="16" height="5" />
          <ImageOverLay mt="3rem">
            <Column width="100%">
              <Back>
                <KeyboardBackspace size={32} />
              </Back>
              <Title mx="auto" mt="4rem">
                {title}
              </Title>

              {owner.name && <H3 mx="auto">{owner.name}</H3>}
            </Column>
          </ImageOverLay>
        </Header>
      )}
      <HoverShare title={title} url={fullUrl} tags={tags.map((t) => t.name)} />
      <Row>
        <ArticleBody>
          <Content>{mdxContent}</Content>
        </ArticleBody>
      </Row>
    </>
  );
};

export default Post;
