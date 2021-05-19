import { GetServerSidePropsContext } from 'next';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { fetchQuery, graphql } from 'react-relay';
import { useMutation, useQuery } from 'relay-hooks';
import { postViewUtilMutation } from 'src/__generated__/postViewUtilMutation.graphql';
import { postViewUtilQuery } from 'src/__generated__/postViewUtilQuery.graphql';
import Article from 'src/components/Article';
import PlaceHolder from 'src/components/PlaceHolder';
import { initEnvironment } from 'src/relay';

const postViewQuery = graphql`
  query postViewUtilQuery($slug: String!) {
    post(where: { id: $slug }) {
      content
      ...Article_post
    }
  }
`;

const postViewUtilMutation = graphql`
  mutation postViewUtilMutation($slug: String!) {
    viewPost(slug: $slug)
  }
`;

export const genPostViewGetServerSideProps =
  (slug?: string) => async (context: GetServerSidePropsContext) => {
    const { query, res } = context;
    const { environment, relaySSR } = initEnvironment();
    const postSlug = slug ?? (query.postSlug as string);

    await new Promise((resolve, reject) => {
      fetchQuery<postViewUtilQuery>(environment, postViewQuery, {
        slug: postSlug,
      }).subscribe({
        complete: () => resolve(undefined),
        error: (err: Error) => reject(err),
      });
    });

    const [relayData] = await relaySSR.getCache();
    const [queryString, queryPayload] = relayData ?? [];

    res.setHeader('Cache-Control', 's-maxage=604800, stale-while-revalidate');

    const mdxSource = await serialize(queryPayload?.data?.post?.content);

    return {
      props: {
        relayData: relayData && 'json' in queryPayload ? [[queryString, queryPayload.json]] : null,
        mdxSource,
      },
    };
  };

type genPostViewComponentProps = {
  mdxSource: MDXRemoteSerializeResult;
};
export const genPostViewComponent = (slug?: string) => (props: genPostViewComponentProps) => {
  const router = useRouter();
  const postSlug = slug ?? (router.query.postSlug as string);
  const { mdxSource } = props;
  const { error, data, isLoading } = useQuery<postViewUtilQuery>(postViewQuery, { slug: postSlug });

  const [mutate] = useMutation<postViewUtilMutation>(postViewUtilMutation);

  useEffect(() => {
    mutate({ variables: { slug: postSlug } });
  }, [postSlug, mutate]);

  if (error) return <div>{error.message}</div>;
  if (!data || !mdxSource || isLoading || !data.post || router.isFallback) return <PlaceHolder />;

  return <Article post={data.post} mdxSource={mdxSource} />;
};
