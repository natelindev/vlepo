import { format } from 'date-fns';
import Image from 'next/image';
import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import readingTime from 'reading-time';

import styled from '@emotion/styled';

import { CardBody, Column, Row } from './base';
import Card from './Card';
import CardImg from './CardImg';
import Tag from './Tag';

export interface ArticleCardProps {
  title?: string;
  author?: {
    userId?: string;
    name?: string;
    profileImageUrl?: string;
  };
  headerImage?: string;
  abstract?: string;
  date?: Date;
  href?: string;
  tags?: string[];
  className?: string;
  width?: number;
  height?: number;
}

const Abstract = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  word-break: break-all;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const ArticleCardTitle = styled.h1`
  padding: 0;
  margin-block-start: 0;
  margin-block-end: 0.5rem;
  font-weight: 400;
  font-family: Economica, Titillium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol', 'Noto Color Emoji';
`;

const ArticleDate = styled.div`
  margin-right: auto;
`;

const ArticleCardFooter = styled.div`
  display: flex;
  font-family: 'Economica, Titillium';
  align-self: center;
  justify-content: space-between;
`;

const AuthorProfileImageConatanier = styled.div`
  margin-top: 0.5rem;
  margin-left: 0.2rem;
  margin-right: 0.5rem;
`;

const AuthorName = styled(Row)`
  font-size: 0.9rem;
`;

const AuthorProfileImage = styled(Image)`
  object-fit: contain;
`;

const AuthorSection = styled(Row)`
  justify-content: flex-start;
  align-items: center;
`;

const BaseArticleCard = styled(Card)`
  border-radius: 0.5rem;
  border: 1px solid black;
`;

const ArticleCard: React.FC<ArticleCardProps> = (props: ArticleCardProps) => {
  const { title, headerImage, abstract, date, href, tags, author, className, width } = props;
  return (
    <BaseArticleCard href={href} width={width} className={className}>
      {headerImage && (
        <CardImg src={headerImage} alt={title} top>
          {tags && tags.length && tags.map((t) => <Tag name={t} href={`/tags/${t}`} />)}
        </CardImg>
      )}
      <CardBody>
        {title && (
          <Row>
            <ArticleCardTitle>{title}</ArticleCardTitle>
          </Row>
        )}
        {author && (
          <AuthorSection>
            <AuthorProfileImageConatanier>
              <AuthorProfileImage
                src={author.profileImageUrl ?? '/images/avatar.jpg'}
                layout="fixed"
                height="36"
                width="36"
              />
            </AuthorProfileImageConatanier>
            <Column>
              <AuthorName>{author.name}</AuthorName>
              <AuthorName>
                {date && (
                  <ArticleDate>
                    {format(date, 'MMM d, yyyy')}
                    {' • '}
                    {readingTime(abstract ?? '').text}
                  </ArticleDate>
                )}
              </AuthorName>
            </Column>
          </AuthorSection>
        )}
        {abstract && <Abstract>{abstract}</Abstract>}
      </CardBody>
    </BaseArticleCard>
  );
};

export default createFragmentContainer(ArticleCard, {
  post: graphql`
    fragment ArticleCard_post on Viewer {
      allBlogPosts(first: 10, orderBy: { createdAt: desc }) {
        edges {
          node {
            ...BlogPostPreview_post
            id
          }
        }
      }
    }
  `,
});
