import { graphql, useFragment } from 'relay-hooks';
import { IndexPaperCard_paper$key } from 'src/__generated__/IndexPaperCard_paper.graphql';
import { CardBody, CardImage } from 'src/components/Card/style';
import { Row } from 'src/components/Layout/style';
import { HeightProps, MarginProps, WidthProps } from 'styled-system';

import { BasePostCard, IndexImageOverlay, PostCardTitle } from './style';

export type ArticleCardProps = {
  paper: IndexPaperCard_paper$key;
} & MarginProps &
  WidthProps &
  HeightProps;

const indexPaperCardFragment = graphql`
  fragment IndexPaperCard_paper on Paper {
    name
    url
    headerImageUrl
  }
`;

const IndexPaperCard = (props: ArticleCardProps) => {
  const { paper: fullPaper, ...rest } = props;
  const paper = useFragment(indexPaperCardFragment, fullPaper);
  const { name, headerImageUrl, url } = paper;

  return (
    <BasePostCard external {...rest} href={`${url}`}>
      {headerImageUrl && (
        <>
          <CardImage
            layout="responsive"
            height={200}
            width={200}
            objectFit="cover"
            src={headerImageUrl}
            alt={name}
          />
        </>
      )}

      <IndexImageOverlay textShadow={headerImageUrl ? 'rgba(0,0,0, 0.3) 0 0 8px' : 'none'}>
        <CardBody>
          {name && (
            <Row>
              <PostCardTitle mr="0.5rem">{name}</PostCardTitle>
            </Row>
          )}
        </CardBody>
      </IndexImageOverlay>
    </BasePostCard>
  );
};

export default IndexPaperCard;
