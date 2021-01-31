import Link from 'next/link';
import React from 'react';

import { RemoveRedEye } from '@emotion-icons/material-outlined';
import styled from '@emotion/styled';

import { CardBody, Row } from './base';
import Card from './Card';
import CardImg from './CardImg';
import Tag from './Tag';
import { ZIndex } from './ZIndex';

export interface ArticleCardProps {
  title?: string;
  headerImage?: string;
  abstract?: string;
  date?: Date;
  href?: string;
  tags?: string[];
  viewCount?: number;
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

const ArticleCardTitle = styled.h4`
  margin-left: auto;
  margin-right: auto;
  font-family: 'Economica, Titillium';
`;

const ArticleDate = styled.div`
  margin-left: auto;
  margin-right: auto;
`;

const ArticleCardFooter = styled.div`
  display: flex;
  font-family: 'Economica, Titillium';
  align-self: center;
  justify-content: space-between;
`;

const ArticleLink = styled.a`
  margin-left: auto;
  margin-right: auto;
  z-index: ${ZIndex.ArticleLink};
`;

const ViewCounts = styled.div`
  margin-top: auto;
  margin-bottom: auto;
`;

const BaseArticleCard = styled(Card)`
  border: 1px solid black;
`;

const ArticleCard: React.FC<ArticleCardProps> = (props: ArticleCardProps) => {
  const { title, headerImage, abstract, date, href, tags, viewCount, className, width } = props;
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
        {abstract && <Abstract>{abstract}</Abstract>}
        {(date || viewCount || href) && (
          <ArticleCardFooter>
            {date && <ArticleDate>{date}</ArticleDate>}
            {href && (
              <Link href={href} passHref>
                <ArticleLink>More</ArticleLink>
              </Link>
            )}
            {viewCount && (
              <ViewCounts>
                <RemoveRedEye />
                {viewCount}
              </ViewCounts>
            )}
          </ArticleCardFooter>
        )}
      </CardBody>
    </BaseArticleCard>
  );
};

export default ArticleCard;
