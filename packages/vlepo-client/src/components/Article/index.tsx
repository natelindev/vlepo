import { format, parseISO } from 'date-fns';
import { MDXRemote } from 'next-mdx-remote';
import { NextSeo } from 'next-seo';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useFragment } from 'relay-hooks';
import { graphql } from 'relay-runtime';
import { Article_post$key } from 'src/__generated__/Article_post.graphql';
import Image from 'src/components/Image';
import { Column, Row } from 'src/components/Layout/style';
import mdxComponents from 'src/components/MDXComponents';
import { Loading } from 'src/components/PlaceHolder';
import { H5 } from 'src/components/Typography';

import { KeyboardBackspace } from '@emotion-icons/material-outlined';
import { css, useTheme } from '@emotion/react';

import { ArticleBody, Back, Content, Header, Title } from './style';

const CommentSection = dynamic(() => import('src/components/Comment/CommentSection'), {
  loading: Loading,
});
const HoverShare = dynamic(() => import('src/components/HoverShare'), {
  loading: Loading,
});
const Avatar = dynamic(() => import('src/components/Avatar'), {
  loading: Loading,
});

const articleFragment = graphql`
  fragment Article_post on Post {
    title
    abstract
    slug
    renderedContent
    owner {
      id
      name
      profileImageUrl
    }
    tags {
      name
    }
    images {
      url
      width
      height
      alt
    }
    minuteRead
    headerImageUrl
    editedAt
    createdAt
    ...CommentSection_commendable
  }
`;

type ArticleProps = {
  post: Article_post$key;
};

const Article = (props: ArticleProps) => {
  const { post: fullPost } = props;
  const router = useRouter();
  const data = useFragment(articleFragment, fullPost);

  const theme = useTheme();

  const {
    headerImageUrl,
    title,
    abstract,
    slug,
    renderedContent,
    owner,
    tags,
    editedAt,
    createdAt,
    minuteRead,
    images,
  } = data;

  const fullUrl = new URL(`posts/${slug}`, process.env.NEXT_PUBLIC_SITE_URL).href;

  return (
    <>
      <NextSeo
        title={title}
        description={abstract ?? undefined}
        canonical={fullUrl}
        openGraph={{
          url: fullUrl,
          title,
          description: abstract ?? undefined,
          type: 'article',
          article: {
            publishedTime: createdAt,
            modifiedTime: editedAt ?? undefined,
            authors: [new URL(`/user/${owner.id}/profile`, process.env.NEXT_PUBLIC_SITE_URL).href],
            tags: tags.map((t) => t.name),
          },
          images: [
            { url: headerImageUrl ?? owner.profileImageUrl ?? '', alt: title ?? undefined },
            ...images.map((i) => ({
              url: i.url ?? undefined,
              width: i.width ?? undefined,
              height: i.height ?? undefined,
              alt: i.alt ?? undefined,
            })),
          ],
          site_name: process.env.NEXT_PUBLIC_DEFAULT_BLOG_NAME,
        }}
        twitter={{
          handle: process.env.NEXT_PUBLIC_TWITTER_HANDLE,
          site: process.env.NEXT_PUBLIC_TWITTER_HANDLE,
          cardType: 'summary_large_image',
        }}
      />
      <Header height={['18rem', '20rem', '22rem']}>
        <Image
          objectFit="cover"
          width="100%"
          filter={theme.filter.headerImage}
          height={['18rem', '20rem', '22rem']}
          mt={theme.heights.navbar}
          css={css`
            margin-top: 0;
          `}
          src={headerImageUrl}
          textShadow={
            headerImageUrl && theme.name === 'light' ? 'rgba(0,0,0, 0.3) 0 0 8px' : 'none'
          }
        >
          <Column width="100%" mb="auto">
            <Back onClick={() => router.push('/')}>
              <KeyboardBackspace size={24} />
              <H5 ml="0.5rem">Back</H5>
            </Back>
            <Title fontSize={[3, 4, 5]} mx="auto" mt="2rem">
              {title}
            </Title>
            <H5 fontWeight="normal" mx="auto" mt="2rem">
              {format(parseISO(createdAt), 'eee, MMM dd yyyy')}
              {' • '}
              {`${minuteRead ?? 1} min read`}
            </H5>
            <Row mx="auto" mt="0.5rem">
              {owner.profileImageUrl && (
                <Avatar variant="round" size={28} mr="0.5rem" src={owner.profileImageUrl} />
              )}
              {owner.name && (
                <H5 fontWeight="normal" my="auto">
                  {owner.name}
                </H5>
              )}
            </Row>
          </Column>
        </Image>
      </Header>
      <HoverShare title={title} url={fullUrl} tags={tags.map((t) => t.name)} />
      <Column mb="2rem" mx="auto" width={[0.9, 0.9, 0.85, 0.8]}>
        <Row>
          <ArticleBody>
            <Content>
              <MDXRemote {...JSON.parse(renderedContent)} components={mdxComponents} />
            </Content>
          </ArticleBody>
        </Row>
        <CommentSection variant="post" parent={data} />
      </Column>
    </>
  );
};

export default Article;
