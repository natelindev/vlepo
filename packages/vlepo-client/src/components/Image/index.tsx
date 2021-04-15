import NextImage from 'next/image';
import React from 'react';
import {
  flexbox,
  FlexboxProps,
  height,
  HeightProps,
  margin,
  MarginProps,
  maxHeight,
  MaxHeightProps,
  maxWidth,
  MaxWidthProps,
  padding,
  PaddingProps,
  width,
  WidthProps,
} from 'styled-system';

import styled from '@emotion/styled';

const ImageContainer = styled.div<HeightProps & WidthProps & MaxHeightProps & MaxWidthProps>`
  > div {
    &:first-child {
      position: unset !important;
    }
    margin-top: ${(props) => props.theme.heights.navbar};
    max-height: ${(props) => props.height};
    width: ${(props) => props.width};
  }
  display: flex;
  ${height}
  ${width}
  ${maxHeight}
  ${maxWidth}
`;

const BaseImage = styled(NextImage)`
  object-fit: cover;
  width: 100% !important;
  position: relative !important;
  height: unset !important;
`;

const ImageOverlay = styled.div<PaddingProps & MarginProps & FlexboxProps>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1.25rem;
  color: ${(props) => props.color};
  text-decoration: none;
  ${padding}
  ${margin}
  ${flexbox}
`;

type ImageProps = React.ComponentProps<typeof ImageContainer> &
  Omit<React.ComponentProps<typeof NextImage>, 'width' | 'height'>;

const Image = (props: ImageProps) => {
  const { width, height, maxHeight, maxWidth, children, ...rest } = props;
  return (
    <ImageContainer width={width} height={height} maxHeight={maxHeight} maxWidth={maxWidth}>
      <BaseImage layout="fill" {...rest} />
      {children && <ImageOverlay>{children}</ImageOverlay>}
    </ImageContainer>
  );
};

export default Image;
