import { format, parseISO } from 'date-fns';
import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';

import { CardBody, Column, Row } from '../base';
import CardImg from '../Card/CardImg';
import Tag from '../Tag';
import {
  Abstract,
  ArticleCardFooter,
  ArticleCardTitle,
  ArticleDate,
  AuthorName,
  AuthorProfileImage,
  AuthorProfileImageContainer,
  AuthorSection,
  BaseArticleCard,
} from './style';

import type { RelayProp } from 'react-relay';
import type { ArticleCard_post } from '../../__generated__/ArticleCard_post.graphql';

export type ArticleCardProps = { relay: RelayProp; post: ArticleCard_post } & {
  width?: string;
};

const ArticleCard = (props: ArticleCardProps): React.ReactElement => {
  const { post, width } = props;
  const { title, headerImageUrl, content, createdAt, id, tags, owner, minuteRead } = post;

  const abstract = content && content.length > 150 ? content.slice(0, 150) : content;
  return (
    <BaseArticleCard href={`/posts/${id}`} width={width}>
      {headerImageUrl && (
        <CardImg src={headerImageUrl} alt={title} top>
          {tags &&
            tags.length &&
            tags.map((t) => <Tag name={t.name} key={t.id} href={`/tags/${t.id}`} />)}
        </CardImg>
      )}
      <CardBody>
        {title && (
          <Row>
            <ArticleCardTitle>{title}</ArticleCardTitle>
          </Row>
        )}
        {owner && (
          <AuthorSection>
            <AuthorProfileImageContainer>
              <AuthorProfileImage
                src={owner.profileImageUrl ?? '/images/avatar/bot.svg'}
                layout="fixed"
                height="36"
                width="36"
              />
            </AuthorProfileImageContainer>
            <Column>
              <AuthorName>{owner.name}</AuthorName>
              <AuthorName>
                {createdAt && (
                  <ArticleDate>
                    {format(parseISO(createdAt), 'MMM d, yyyy')}
                    {' • '}
                    {`${minuteRead ?? 1} min read`}
                  </ArticleDate>
                )}
              </AuthorName>
            </Column>
          </AuthorSection>
        )}
        {abstract && (
          <Abstract>
            {abstract}
            ...
          </Abstract>
        )}
      </CardBody>
      <ArticleCardFooter />
    </BaseArticleCard>
  );
};

export default createFragmentContainer(ArticleCard, {
  post: graphql`
    fragment ArticleCard_post on Post {
      id
      title
      content
      headerImageUrl
      createdAt
      minuteRead
      tags {
        id
        name
      }
      owner {
        name
        profileImageUrl
      }
    }
  `,
});
