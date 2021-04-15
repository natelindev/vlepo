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
  width,
  WidthProps,
} from 'styled-system';

import styled from '@emotion/styled';

export const ImageContainer = styled.div<
  HeightProps & WidthProps & MaxHeightProps & MaxWidthProps & ColorProps & BorderRadiusProps
>`
  > div {
    &:first-child {
      position: unset !important;
    }
    margin-top: ${(props) => props.theme.heights.navbar};
    max-height: ${(props) => props.height};
    width: ${(props) => props.width};
  }
  display: flex;
  ${color}
  ${height}
  ${width}
  ${maxHeight}
  ${maxWidth}
  ${borderRadius}
`;

export const BaseImage = styled(NextImage)<BorderRadiusProps>`
  width: 100% !important;
  position: relative !important;
  height: unset !important;
  ${borderRadius}
`;

export const Transparent = styled.div<BorderRadiusProps>`
  width: 100%;
  ${borderRadius}
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
