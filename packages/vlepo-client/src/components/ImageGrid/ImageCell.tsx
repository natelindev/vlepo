import Image from 'next/image';
import { useCallback } from 'react';
import { graphql, useFragment } from 'react-relay';
import { useToasts } from 'react-toast-notifications';
import { ImageCell_image$key } from 'src/__generated__/ImageCell_image.graphql';

import styled from '@emotion/styled';

type BaseImageCellProps = { idx: number };
const BaseImageCell = styled.div<BaseImageCellProps>``;

const BaseImage = styled(Image)`
  border-radius: ${(props) => props.theme.radii.default};
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
    addToast(`image markdown copied`, {
      appearance: 'info',
    });
  }, [image, addToast]);

  return (
    <BaseImageCell onClick={copyImageMarkdown} idx={idx} {...rest}>
      <BaseImage objectFit="cover" layout="fixed" width="130px" height="130px" src={image.url} />
    </BaseImageCell>
  );
};

export default ImageCell;
