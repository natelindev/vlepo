import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useQuery } from 'relay-hooks';
import { graphql } from 'relay-runtime';
import { tags_BlogQuery } from 'src/__generated__/tags_BlogQuery.graphql';
import ClientOnly from 'src/components/ClientOnly';
import { ErrorText } from 'src/components/Input';
import PlaceHolder, { Loading } from 'src/components/PlaceHolder';

const blogQuery = graphql`
  query tags_BlogQuery($id: String!) {
    blog(where: { id: $id }) {
      ...tagsScene_Tags
    }
  }
`;

const TagsScene = dynamic(() => import('src/scenes/tags'), { loading: Loading, ssr: false });
const Tags = () => {
  const { error, data, isLoading } = useQuery<tags_BlogQuery>(blogQuery, {
    id: process.env.NEXT_PUBLIC_DEFAULT_BLOG_ID,
  });

  if (error) {
    return <ErrorText>{error.message}</ErrorText>;
  }

  if (!data || isLoading) return <PlaceHolder />;
  return (
    <>
      <Head>
        <title key="title">Tags</title>
      </Head>

      <ClientOnly>
        <TagsScene blog={data.blog} />
      </ClientOnly>
    </>
  );
};
export default Tags;
