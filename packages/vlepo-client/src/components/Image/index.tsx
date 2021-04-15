import React from 'react';

import { css } from '@emotion/react';

import { BaseImage, ImageContainer, ImageOverlay, Transparent } from './style';

type ImageProps = { src?: string | null; filter?: string | null } & React.ComponentProps<
  typeof ImageContainer
> &
  Omit<React.ComponentProps<typeof BaseImage>, 'width' | 'height' | 'src'>;

const Image = (props: ImageProps) => {
  const {
    src,
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
    ...rest
  } = props;
  return (
    <ImageContainer borderRadius={borderRadius} color={src ? 'whiteText' : 'text'} {...rest}>
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
