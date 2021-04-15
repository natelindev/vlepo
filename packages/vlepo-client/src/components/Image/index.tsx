import React from 'react';

import { BaseImage, ImageContainer, ImageOverlay, Transparent } from './style';

type ImageProps = { src?: string | null } & React.ComponentProps<typeof ImageContainer> &
  Omit<React.ComponentProps<typeof BaseImage>, 'width' | 'height' | 'src'>;

const Image = (props: ImageProps) => {
  const { width, height, maxHeight, maxWidth, children, src, ...rest } = props;
  return (
    <ImageContainer
      color={src ? 'whiteText' : 'text'}
      width={width}
      height={height}
      maxHeight={maxHeight}
      maxWidth={maxWidth}
    >
      {src ? <BaseImage src={src} layout="fill" {...rest} /> : <Transparent {...rest} />}
      {children && <ImageOverlay>{children}</ImageOverlay>}
    </ImageContainer>
  );
};

export default Image;
