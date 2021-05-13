import React from 'react';

import { css } from '@emotion/react';

import { BaseImage, ImageContainer, ImageOverlay, Transparent } from './style';

type ImageProps = {
  src?: string | null;
  filter?: string | null;
  textShadow?: string | null;
} & React.ComponentProps<typeof ImageContainer> &
  Omit<React.ComponentProps<typeof BaseImage>, 'width' | 'height' | 'src'>;

const Image = (props: ImageProps) => {
  const {
    src,
    variant,
    unoptimized,
    priority,
    loading,
    quality,
    objectFit,
    objectPosition,
    loader,
    children,
    filter,
    borderRadius,
    className,
    width,
    height,
    textShadow,
    ...rest
  } = props;
  return (
    <ImageContainer
      width={width}
      height={height}
      borderRadius={borderRadius}
      color={src ? 'whiteText' : 'text'}
      textShadow={textShadow}
      {...rest}
    >
      {src ? (
        <BaseImage
          src={src}
          className={className}
          unoptimized={unoptimized}
          priority={priority}
          loading={loading}
          quality={quality}
          objectFit={objectFit}
          objectPosition={objectPosition}
          loader={loader}
          borderRadius={borderRadius}
          css={css`
            filter: ${filter};
          `}
          variant={variant}
          layout="fill"
        />
      ) : (
        <Transparent />
      )}
      {children && <ImageOverlay>{children}</ImageOverlay>}
    </ImageContainer>
  );
};

export default Image;
