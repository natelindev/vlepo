import Link from 'next/link';
import React from 'react';

import { RemoveRedEye } from '@emotion-icons/material-outlined';
import styled from '@emotion/styled';

import { CardBody, CardImgOverlay, Row } from './base';
import Card from './Card';
import CardImg from './CardImg';
import Tag from './Tag';
import { ZIndex } from './zIndex';

export interface ArticleCardProps {
  title: string;
  headerImage: string;
  abstract: string;
  date: Date;
  href: string;
  tags: string[];
  viewCount: number;
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

const ArticleCard: React.FC<ArticleCardProps> = (props: ArticleCardProps) => {
  const { title, headerImage, abstract, date, href, tags, viewCount } = props;
  return (
    <Card href={href} className="my-3 mx-auto mx-md-3 border-0 animated--shadow-translate">
      <CardImg src={headerImage} alt={title} />
      <CardImgOverlay>
        {tags.map((t) => (
          <Tag name={t} href={`/Tag/${t}`} />
        ))}
      </CardImgOverlay>
      <CardBody>
        <Row>
          <ArticleCardTitle>{title}</ArticleCardTitle>
        </Row>
        <Abstract>{abstract}</Abstract>
        <ArticleCardFooter>
          <ArticleDate>{date}</ArticleDate>
          <Link href={href} passHref>
            <ArticleLink>More</ArticleLink>
          </Link>
          <RemoveRedEye />
        </ArticleCardFooter>
      </CardBody>
    </Card>
  );
};

export default ArticleCard;
