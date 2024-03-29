import { GetServerSideProps } from 'next';
import { getServerSideSitemap } from 'next-sitemap';
import { fetchQuery, graphql } from 'relay-runtime';
import {
  serverSitemapXml_BlogQuery,
  serverSitemapXml_BlogQueryResponse,
} from 'src/__generated__/serverSitemapXml_BlogQuery.graphql';
import { initEnvironment } from 'src/relay';

const blogQuery = graphql`
  query serverSitemapXml_BlogQuery($id: String!) {
    blog(where: { id: $id }) {
      posts {
        slug
        visibility
        updatedAt
      }
    }
  }
`;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { environment, relaySSR } = initEnvironment(ctx.req.cookies.accessToken);
  await new Promise((resolve, reject) => {
    fetchQuery<serverSitemapXml_BlogQuery>(environment, blogQuery, {
      id: process.env.NEXT_PUBLIC_DEFAULT_BLOG_ID,
    }).subscribe({
      next: (data) => resolve(data),
      complete: () => resolve(undefined),
      error: (err: Error) => reject(err),
    });
  });
  const [relayData] = await relaySSR.getCache();
  const [, queryPayload] = relayData ?? [];

  const posts: serverSitemapXml_BlogQueryResponse['blog']['posts'] =
    queryPayload.data?.blog.posts ?? [];

  const fields = posts
    .filter((p) => p.visibility === 'PUBLISHED')
    .map((p) => ({
      loc: new URL(`posts/${p.slug}`, process.env.NEXT_PUBLIC_SITE_URL).href,
      lastmod: p.updatedAt,
      changefreq: 'monthly' as const,
      priority: 0.5,
    }));

  return getServerSideSitemap(ctx, fields);
};

// Default export to prevent next.js errors
const siteMap = () => {};
export default siteMap;
