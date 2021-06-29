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
  textShadow,
  TextShadowProps,
  width,
  WidthProps,
} from 'styled-system';
import { match } from 'ts-pattern';

import styled from '@emotion/styled';

type ImageContainerProps = SizeProps &
  HeightProps &
  WidthProps &
  MaxHeightProps &
  MaxWidthProps &
  ColorProps &
  MarginProps &
  PaddingProps &
  BorderRadiusProps &
  TextShadowProps;

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
    ${textShadow}
  }

  ${borderRadius}
`;

type BaseImageProps = BorderRadiusProps & { variant?: 'top' | 'left' | 'right' | 'bottom' };
export const BaseImage = styled(NextImage, {
  shouldForwardProp: (propName) => propName !== 'borderRadius',
})<BaseImageProps>`
  width: 100% !important;
  position: relative !important;
  height: unset !important;
  border-radius: ${(props) =>
    match(props.variant)
      .with('top', () => `${props.theme.radii.default}px ${props.theme.radii.default}px 0 0`)
      .with('bottom', () => `0 0 ${props.theme.radii.default}px ${props.theme.radii.default}px`)
      .with('left', () => `${props.theme.radii.default}px 0 0 ${props.theme.radii.default}px`)
      .with('right', () => `0 ${props.theme.radii.default}px ${props.theme.radii.default}px 0`)
      .otherwise(() => `0 0 0 0`)};
  ${borderRadius}
`;

export const Transparent = styled.div`
  width: 100%;
  position: relative;
`;

type ImageOverlayProps = PaddingProps & MarginProps & FlexboxProps & TextShadowProps;
export const ImageOverlay = styled.div<ImageOverlayProps>`
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
  ${textShadow}
`;
