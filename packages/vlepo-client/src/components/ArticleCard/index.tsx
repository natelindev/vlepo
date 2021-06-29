import { addDays, compareAsc, format, parseISO } from 'date-fns';
import { graphql, useFragment } from 'relay-hooks';
import Badge from 'src/components/Badge';
import { CardBody, CardImage } from 'src/components/Card/style';
import { Column, Row } from 'src/components/Layout/style';
import { useTilt } from 'src/hooks/useTilt';
import { MarginProps } from 'styled-system';
import { match } from 'ts-pattern';

import { Article, Lock } from '@emotion-icons/material-outlined';

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

export type ArticleCardProps = {
  post: ArticleCard_post$key;
  width?: string;
  showProfile?: boolean;
} & MarginProps;

const articlePostFragment = graphql`
  fragment ArticleCard_post on Post {
    id
    title
    slug
    abstract
    visibility
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
  const { post: fullPost, width, showProfile = true, ...rest } = props;
  const post = useFragment(articlePostFragment, fullPost);
  const { title, headerImageUrl, abstract, createdAt, slug, tags, visibility, owner, minuteRead } =
    post;
  const createDate = parseISO(createdAt);

  const [ref, styles] = useTilt<HTMLDivElement>({
    scale: 150,
  });

  return (
    <BaseArticleCard {...rest} ref={ref} href={`/posts/${slug}`} width={width} {...styles}>
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
            layout="responsive"
            height={100}
            width={200}
            objectFit="cover"
            src={headerImageUrl}
            alt={title}
            variant="top"
          />
        </>
      )}

      <CardBody>
        {title && (
          <Row>
            <ArticleCardTitle mr="0.5rem">{title}</ArticleCardTitle>
          </Row>
        )}
        {owner && showProfile && (
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
              href={`/tags/${t.name}`}
            />
          ))}
        <Column ml="auto">
          {match(visibility)
            .with('DRAFT', () => <Article size={18} />)
            .with('PRIVATE', () => <Lock size={18} />)
            .with('PUBLISHED', () => null)
            .run()}
        </Column>
      </ArticleCardFooter>
    </BaseArticleCard>
  );
};

export default ArticleCard;
