/* eslint-disable relay/unused-fields */
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { graphql } from 'react-relay';
import { useMutation, useQuery } from 'relay-hooks';
import { postViewMutation } from 'src/__generated__/postViewMutation.graphql';
import { postViewQuery } from 'src/__generated__/postViewQuery.graphql';
import Article from 'src/components/Article';
import PlaceHolder from 'src/components/PlaceHolder';

export const postQuery = graphql`
  query postViewQuery($slug: String!) {
    post(where: { slug: $slug }) {
      content
      ...Article_post
    }
  }
`;

export const postMutation = graphql`
  mutation postViewMutation($slug: String!) {
    viewPost(slug: $slug)
  }
`;

type genPostViewComponentProps = {
  mdxSource: MDXRemoteSerializeResult;
};
export const postViewComponent = (slug?: string) => (props: genPostViewComponentProps) => {
  const router = useRouter();
  const postSlug = slug ?? (router.query.postSlug as string);
  const { mdxSource } = props;
  const { error, data, isLoading } = useQuery<postViewQuery>(postQuery, { slug: postSlug });

  const [mutate] = useMutation<postViewMutation>(postMutation);

  useEffect(() => {
    mutate({ variables: { slug: postSlug } });
  }, [postSlug, mutate]);

  if (error) return <div>{error.message}</div>;
  if (!data || !mdxSource || isLoading || !data.post || router.isFallback) return <PlaceHolder />;

  return <Article post={data.post} mdxSource={mdxSource} />;
};
