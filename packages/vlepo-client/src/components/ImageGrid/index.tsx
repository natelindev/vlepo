import { graphql, useFragment } from 'react-relay';
import { ImageGrid_user$key } from 'src/__generated__/ImageGrid_user.graphql';

import styled from '@emotion/styled';

import ImageCell from './ImageCell';

type ImageGridProps = {
  user: ImageGrid_user$key;
};

const BaseImageGrid = styled.div`
  display: inline-grid;
  grid-auto-columns: repeat(4, minmax(0, 1fr));
  row-gap: 10px;
  align-items: center;
  grid-auto-flow: column;
`;

const fragmentSpec = graphql`
  fragment ImageGrid_user on User {
    imagesConnection(first: 2147483647) @connection(key: "ImageGrid_imagesConnection") {
      edges {
        node {
          id
          ...ImageCell_image
        }
      }
    }
  }
`;

const ImageGrid = (props: ImageGridProps) => {
  const { user: fullUser } = props;

  const user = useFragment(fragmentSpec, fullUser);

  return (
    <BaseImageGrid>
      {user.imagesConnection &&
        user.imagesConnection.edges &&
        user.imagesConnection.edges.map(
          (edge, idx) =>
            edge && edge.node && <ImageCell key={edge.node.id} image={edge.node} idx={idx} />,
        )}
    </BaseImageGrid>
  );
};

export default ImageGrid;
