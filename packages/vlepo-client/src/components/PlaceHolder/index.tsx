import { height, HeightProps, margin, MarginProps, width, WidthProps } from 'styled-system';

import styled from '@emotion/styled';

const PlaceHolder = styled.div<WidthProps & HeightProps & MarginProps>`
  width: 100%;
  height: 100%;
  ${width}
  ${height}
  ${margin}
  @keyframes placeHolderShimmer {
    0% {
      background-position: 0 0;
    }
    to {
      background-position: -200% 0;
    }
  }

  animation: placeHolderShimmer 1.5s ease infinite;
  background: linear-gradient(90deg, #f6f7f8, #d4d6d8, #f6f7f8);
  background-size: 200%;
  position: relative;
  overflow: hidden;
`;

export default PlaceHolder;
