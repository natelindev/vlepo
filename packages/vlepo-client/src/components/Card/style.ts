import Image from 'next/image';
import {
  flexbox,
  FlexboxProps,
  height,
  HeightProps,
  margin,
  MarginProps,
  padding,
  PaddingProps,
  width,
  WidthProps,
} from 'styled-system';

import styled from '@emotion/styled';

export const CardImage = styled(Image, {
  shouldForwardProp: (propName) =>
    propName !== 'top' && propName !== 'bottom' && propName !== 'left' && propName !== 'right',
})<CardImgProps>`
  border-top-left-radius: ${(props) =>
    props.left || props.top ? `${props.theme.radii.default}px` : `0`};
  border-top-right-radius: ${(props) =>
    props.right || props.top ? `${props.theme.radii.default}px` : `0`};
  border-bottom-right-radius: ${(props) =>
    props.right || props.bottom ? `${props.theme.radii.default}px` : `0`};
  border-bottom-left-radius: ${(props) =>
    props.left || props.bottom ? `${props.theme.radii.default}px` : `0`};
`;

type BaseCardProps = { direction?: string } & WidthProps &
  HeightProps &
  PaddingProps &
  MarginProps &
  FlexboxProps;
export const BaseCard = styled.div<BaseCardProps>`
  background-color: ${(props) => props.theme.colors.backgroundSecondary};
  border-radius: ${(props) => `${props.theme.radii.default}px`};
  box-shadow: ${(props) => props.theme.shadows.Card};
  display: flex;
  ${width}
  ${height}
  ${margin}
  ${padding}
  ${flexbox}

  ${CardImage} {
    filter: ${(props) => props.theme.filter.cardImage};
  }
`;

export const CardBody = styled.div`
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1.25rem;
`;

export const OverlayLink = styled.a`
  font-size: 0;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: ${(props) => props.theme.zIndices.CardLink};
`;

export type CardImgProps = {
  left?: boolean;
  right?: boolean;
  top?: boolean;
  bottom?: boolean;
};
