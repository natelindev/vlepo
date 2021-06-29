import Image from 'next/image';
import { a } from 'react-spring';
import {
  flexbox,
  FlexboxProps,
  height,
  HeightProps,
  margin,
  MarginProps,
  padding,
  PaddingProps,
  TextShadowProps,
  width,
  WidthProps,
} from 'styled-system';
import { match } from 'ts-pattern';

import styled from '@emotion/styled';

export type CardImgProps = {
  variant?: 'top' | 'left' | 'right' | 'bottom';
};

export const CardImage = styled(Image)<CardImgProps & TextShadowProps>`
  border-radius: ${(props) =>
    match(props.variant)
      .with('top', () => `${props.theme.radii.default}px ${props.theme.radii.default}px 0 0`)
      .with('bottom', () => `0 0 ${props.theme.radii.default}px ${props.theme.radii.default}px`)
      .with('left', () => `${props.theme.radii.default}px 0 0 ${props.theme.radii.default}px`)
      .with('right', () => `0 ${props.theme.radii.default}px ${props.theme.radii.default}px 0`)
      .otherwise(
        () =>
          `${props.theme.radii.default}px ${props.theme.radii.default}px ${props.theme.radii.default}px ${props.theme.radii.default}px`,
      )};
`;

type BaseCardProps = { direction?: string } & WidthProps &
  HeightProps &
  PaddingProps &
  MarginProps &
  FlexboxProps;

export const BaseCard = styled(a.div)<BaseCardProps>`
  background-color: ${(props) => props.theme.colors.backgroundSecondary};
  border-radius: ${(props) => `${props.theme.radii.default}px`};
  box-shadow: ${(props) => props.theme.shadows.Card};
  display: flex;
  will-change: transform;
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
