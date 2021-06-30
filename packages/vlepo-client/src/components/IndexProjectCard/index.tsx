import { graphql, useFragment } from 'relay-hooks';
import { IndexProjectCard_project$key } from 'src/__generated__/IndexProjectCard_project.graphql';
import { CardBody, CardImage } from 'src/components/Card/style';
import { Row } from 'src/components/Layout/style';
import { HeightProps, MarginProps, WidthProps } from 'styled-system';

import { BasePostCard, IndexImageOverlay, PostCardTitle } from './style';

export type ArticleCardProps = {
  project: IndexProjectCard_project$key;
} & MarginProps &
  WidthProps &
  HeightProps;

const indexProjectCardFragment = graphql`
  fragment IndexProjectCard_project on Project {
    name
    url
    headerImageUrl
  }
`;

const IndexProjectCard = (props: ArticleCardProps) => {
  const { project: fullProject, height, width, ...rest } = props;
  const project = useFragment(indexProjectCardFragment, fullProject);
  const { name, headerImageUrl, url } = project;

  return (
    <BasePostCard
      external
      minHeight={height}
      minWidth={width}
      maxHeight={height}
      maxWidth={width}
      {...rest}
      color={headerImageUrl ? 'whiteText' : 'text'}
      href={`${url}`}
    >
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

export default IndexProjectCard;
