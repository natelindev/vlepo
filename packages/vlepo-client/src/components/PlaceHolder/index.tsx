import {
  borderRadius,
  BorderRadiusProps,
  height,
  HeightProps,
  margin,
  MarginProps,
  width,
  WidthProps,
} from 'styled-system';

import styled from '@emotion/styled';

const PlaceHolder = styled.div<WidthProps & HeightProps & MarginProps & BorderRadiusProps>`
  width: 100%;
  height: 100%;
  ${width}
  ${height}
  ${margin}
  ${borderRadius}
  @keyframes placeHolderShimmer {
    0% {
      background-position: 0 0;
    }
    to {
      background-position: -200% 0;
    }
  }

  animation: placeHolderShimmer 1.5s ease infinite;
  background: ${(props) =>
    `linear-gradient(90deg, ${props.theme.colors.backgroundMuted}, ${props.theme.colors.backgroundDarker}, ${props.theme.colors.backgroundMuted})`};
  background-size: 200%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  z-index: ${(props) => props.theme.zIndices.PlaceHolder};
`;

export const Loading = () => <PlaceHolder />;

export default PlaceHolder;
