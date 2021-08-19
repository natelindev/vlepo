import { parseISO } from 'date-fns';
import { Feed } from 'feed';
import { GetServerSideProps } from 'next';
import { fetchQuery, graphql } from 'relay-runtime';
import {
  rssXml_BlogQuery,
  rssXml_BlogQueryResponse,
} from 'src/__generated__/rssXml_BlogQuery.graphql';
import { initEnvironment } from 'src/relay';

const blogQuery = graphql`
  query rssXml_BlogQuery($id: String!) {
    blog(where: { id: $id }) {
      ownerId
      posts {
        id
        owner {
          id
          name
          email
        }
        title
        abstract
        slug
        headerImageUrl
        visibility
        content
        updatedAt
        createdAt
      }
    }
  }
`;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { environment, relaySSR } = initEnvironment(ctx.req.cookies.accessToken);
  await new Promise((resolve, reject) => {
    fetchQuery<rssXml_BlogQuery>(environment, blogQuery, {
      id: process.env.NEXT_PUBLIC_DEFAULT_BLOG_ID,
    }).subscribe({
      next: (data) => resolve(data),
      complete: () => resolve(undefined),
      error: (err: Error) => reject(err),
    });
  });
  const [relayData] = await relaySSR.getCache();
  const [, queryPayload] = relayData ?? [];

  const posts: rssXml_BlogQueryResponse['blog']['posts'] = queryPayload.data?.blog.posts ?? [];

  const feed = new Feed({
    title: process.env.NEXT_PUBLIC_DEFAULT_BLOG_NAME,
    description: process.env.NEXT_PUBLIC_DEFAULT_BLOG_SLOGAN,
    id: process.env.NEXT_PUBLIC_DEFAULT_BLOG_ID,
    link: process.env.NEXT_PUBLIC_SITE_URL,
    language: 'en',
    image: new URL('/logo.svg', process.env.NEXT_PUBLIC_SITE_URL).href,
    favicon: new URL('/favicon.ico', process.env.NEXT_PUBLIC_SITE_URL).href,
    copyright: `© 2016-
    ${new Date().getFullYear()} ${process.env.NEXT_PUBLIC_DEFAULT_BLOG_NAME}. CC-BY 4.0`,
    updated: parseISO(posts[0].updatedAt),
    generator: 'vlepo',
    feedLinks: {
      json: new URL(`/json`, process.env.NEXT_PUBLIC_SITE_URL).href,
      atom: new URL(`/atom`, process.env.NEXT_PUBLIC_SITE_URL).href,
    },
    author: {
      name: process.env.NEXT_PUBLIC_DEFAULT_BLOG_NAME,
      email: process.env.NEXT_PUBLIC_USER_EMAIL,
      link: new URL(
        `user/${queryPayload.data?.blog.ownerId}/profile`,
        process.env.NEXT_PUBLIC_SITE_URL,
      ).href,
    },
  });
  posts
    .filter((p) => p.visibility === 'PUBLISHED')
    .forEach((post) => {
      feed.addItem({
        title: post.title,
        id: post.id ?? '',
        link: new URL(`/posts/${post.slug}`, process.env.NEXT_PUBLIC_SITE_URL).href,
        description: post.abstract ?? '',
        content: post.content,
        author: [
          {
            name: post.owner.name ?? '',
            email: post.owner.email ?? '',
            link: new URL(`user/${post.owner.id}/profile`, process.env.NEXT_PUBLIC_SITE_URL).href,
          },
        ],
        contributor: [
          {
            name: post.owner.name ?? '',
            email: post.owner.email ?? '',
            link: new URL(`user/${post.owner.id}/profile`, process.env.NEXT_PUBLIC_SITE_URL).href,
          },
        ],
        date: parseISO(post.createdAt),
        image: post.headerImageUrl ?? '',
      });
    });

  ctx.res.statusCode = 200;
  ctx.res.setHeader('content-type', 'text/xml');
  ctx.res.write(feed.rss2());
  ctx.res.end();
  return {
    props: {},
  };
};

const RSS = () => {};
export default RSS;
