import Image from 'next/image';
import { useCallback } from 'react';
import { useToasts } from 'react-toast-notifications';
import { graphql, useFragment } from 'relay-hooks';
import { ImageCell_image$key } from 'src/__generated__/ImageCell_image.graphql';
import { H5 } from 'src/components/Typography';

import styled from '@emotion/styled';

import { ImageOverlay } from '../Image/style';

type BaseImageCellProps = { idx: number };
const BaseImageCell = styled.div<BaseImageCellProps>`
  position: relative;
`;

const BaseImage = styled(Image)`
  border-radius: ${(props) => `${props.theme.radii.default}px`};
  filter: ${(props) => props.theme.filter.cardImage};
`;

type ImageCellProps = { image: ImageCell_image$key; idx: number };

const fragmentSpec = graphql`
  fragment ImageCell_image on Image {
    alt
    url
  }
`;

const ImageCell = (props: ImageCellProps) => {
  const { image: fullImage, idx, ...rest } = props;
  const { addToast } = useToasts();

  const image = useFragment(fragmentSpec, fullImage);

  const copyImageMarkdown = useCallback(() => {
    if (navigator.clipboard && image) {
      navigator.clipboard.writeText(`![${image.alt}](${image.url})`);
    }
    addToast(`${image.alt} markdown copied`, {
      appearance: 'info',
    });
  }, [image, addToast]);

  return (
    <BaseImageCell onClick={copyImageMarkdown} idx={idx} {...rest}>
      <BaseImage layout="fixed" objectFit="cover" width="130px" height="130px" src={image.url} />
      <ImageOverlay>
        <H5>{image.alt}</H5>
      </ImageOverlay>
    </BaseImageCell>
  );
};

export default ImageCell;
