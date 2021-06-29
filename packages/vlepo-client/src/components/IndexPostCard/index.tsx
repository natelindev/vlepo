import { graphql, useFragment } from 'relay-hooks';
import { IndexPostCard_post$key } from 'src/__generated__/IndexPostCard_post.graphql';
import { CardBody, CardImage } from 'src/components/Card/style';
import { Row } from 'src/components/Layout/style';
import { MarginProps } from 'styled-system';

import { ImageOverlay } from '../Image/style';
import { Abstract, ArticleCardTitle, BaseArticleCard } from './style';

export type ArticleCardProps = {
  post: IndexPostCard_post$key;
  width?: string;
  showProfile?: boolean;
} & MarginProps;

const articlePostFragment = graphql`
  fragment IndexPostCard_post on Post {
    title
    slug
    abstract
    headerImageUrl
  }
`;

const IndexPostCard = (props: ArticleCardProps) => {
  const { post: fullPost, width, ...rest } = props;
  const post = useFragment(articlePostFragment, fullPost);
  const { title, headerImageUrl, abstract, slug } = post;

  return (
    <BaseArticleCard {...rest} href={`/posts/${slug}`} width={width}>
      {headerImageUrl && (
        <>
          <CardImage
            layout="responsive"
            height={200}
            width={200}
            objectFit="cover"
            src={headerImageUrl}
            alt={title}
            textShadow={headerImageUrl ? '#000 0 0 8px' : 'none'}
          />
        </>
      )}

      <ImageOverlay>
        <CardBody>
          {title && (
            <Row>
              <ArticleCardTitle mr="0.5rem">{title}</ArticleCardTitle>
            </Row>
          )}
          {abstract && <Abstract>{abstract}</Abstract>}
        </CardBody>
      </ImageOverlay>
    </BaseArticleCard>
  );
};

export default IndexPostCard;
