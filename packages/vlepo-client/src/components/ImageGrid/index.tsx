import { ImageCell_image$key } from 'src/__generated__/ImageCell_image.graphql';

import styled from '@emotion/styled';

import ImageCell from './ImageCell';

type ImageGridProps<T> = {
  images: T;
};

const BaseImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-gap: 1rem;
  align-items: center;
`;

const ImageGrid = <T extends ReadonlyArray<ImageCell_image$key>>(props: ImageGridProps<T>) => {
  const { images } = props;

  return (
    <BaseImageGrid>
      {images.map((image, idx) => (
        <ImageCell
          key={(image as ImageCell_image$key & { __id: string }).__id}
          image={image}
          idx={idx}
        />
      ))}
    </BaseImageGrid>
  );
};

export default ImageGrid;
