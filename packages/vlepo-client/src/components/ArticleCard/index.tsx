import { format, parseISO } from 'date-fns';
import { createFragmentContainer, graphql } from 'react-relay';
import CardImg from 'src/components/Card/CardImage';
import { CardBody } from 'src/components/Card/style';
import { Column, Row } from 'src/components/Layout/style';

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

const ArticleCard = (props: ArticleCardProps) => {
  const { post, width } = props;
  const { title, headerImageUrl, abstract, createdAt, id, tags, owner, minuteRead } = post;

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
      abstract
      headerImageUrl
      createdAt
      minuteRead
      owner {
        name
        profileImageUrl
      }
    }
  `,
});
