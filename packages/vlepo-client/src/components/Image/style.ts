import NextImage from 'next/image';
import {
  borderRadius,
  BorderRadiusProps,
  color,
  ColorProps,
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
  size,
  SizeProps,
  width,
  WidthProps,
} from 'styled-system';

import styled from '@emotion/styled';

type ImageContainerProps = SizeProps &
  HeightProps &
  WidthProps &
  MaxHeightProps &
  MaxWidthProps &
  ColorProps &
  MarginProps &
  PaddingProps &
  BorderRadiusProps;

export const ImageContainer = styled.div<ImageContainerProps>`
  display: flex;
  > div {
    &:first-of-type {
      position: unset !important;
    }
    ${color}
    ${height}
    ${width}
    ${maxHeight}
    ${maxWidth}

    ${margin}
    ${padding}
    ${size}
  }
  ${borderRadius}
`;

export const BaseImage = styled(NextImage)<BorderRadiusProps>`
  width: 100% !important;
  position: relative !important;
  height: unset !important;
  ${borderRadius}
`;

export const Transparent = styled.div`
  height: 100%;
  width: 100%;
`;

export const ImageOverlay = styled.div<PaddingProps & MarginProps & FlexboxProps>`
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
