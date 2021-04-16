import { addDays, compareAsc, format, parseISO } from 'date-fns';
import { useState } from 'react';
import { graphql, useFragment } from 'react-relay';
import Badge from 'src/components/Badge';
import { CardBody, CardImage } from 'src/components/Card/style';
import { Column, Row } from 'src/components/Layout/style';

import { ImageOverlay } from '../Image/style';
import PlaceHolder from '../PlaceHolder';
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

import type { ArticleCard_post$key } from '../../__generated__/ArticleCard_post.graphql';

export type ArticleCardProps = { post: ArticleCard_post$key; width?: string };

const articlePostFragment = graphql`
  fragment ArticleCard_post on Post {
    id
    title
    abstract
    headerImageUrl
    createdAt
    minuteRead
    tags {
      id
      name
      mainColor
      secondaryColor
    }
    owner {
      name
      profileImageUrl
    }
  }
`;

const ArticleCard = (props: ArticleCardProps) => {
  const { post: fullPost, width } = props;
  const post = useFragment(articlePostFragment, fullPost);
  const { title, headerImageUrl, abstract, createdAt, id, tags, owner, minuteRead } = post;
  const createDate = parseISO(createdAt);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <BaseArticleCard href={`/posts/${id}`} width={width}>
      {compareAsc(new Date(), addDays(createDate, 1)) === -1 && (
        <Row height="0">
          <Badge height="1.2rem" variant="accent" mt="-0.5rem" ml="auto" mr="-0.5rem">
            new
          </Badge>
        </Row>
      )}
      {headerImageUrl && (
        <>
          <CardImage
            onLoad={() => setImageLoaded(true)}
            layout="responsive"
            height={100}
            width={200}
            objectFit="cover"
            src={headerImageUrl}
            alt={title}
            top
          />
          {!imageLoaded && (
            <ImageOverlay>
              <PlaceHolder />
            </ImageOverlay>
          )}
        </>
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
                    {format(createDate, 'MMM d, yyyy')}
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
            {abstract.length > 150 ? '...' : null}
          </Abstract>
        )}
      </CardBody>
      <ArticleCardFooter>
        {tags &&
          tags.length > 0 &&
          tags.map((t) => (
            <Tag
              mainColor={t.mainColor}
              secondaryColor={t.secondaryColor}
              name={t.name}
              key={t.id}
              href={`/tags/${t.id}`}
            />
          ))}
      </ArticleCardFooter>
    </BaseArticleCard>
  );
};

export default ArticleCard;
