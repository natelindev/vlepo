import { margin, MarginProps, padding, PaddingProps } from 'styled-system';

import styled from '@emotion/styled';

export const H1 = styled.h1<MarginProps & PaddingProps>`
  ${margin}
  ${padding}
  margin: 0;
  padding: 0;
  font-size: ${(props) => `${props.theme.fontSizes[5]}px`};
`;

export const H2 = styled.h2<MarginProps & PaddingProps>`
  ${margin}
  ${padding}
  margin: 0;
  padding: 0;
  font-size: ${(props) => `${props.theme.fontSizes[4]}px`};
`;

export const H3 = styled.h3<MarginProps & PaddingProps>`
  ${margin}
  ${padding}
  margin: 0;
  padding: 0;
  font-size: ${(props) => `${props.theme.fontSizes[3]}px`};
`;

export const H4 = styled.h4<MarginProps & PaddingProps>`
  ${margin}
  ${padding}
  margin: 0;
  padding: 0;
  font-size: ${(props) => `${props.theme.fontSizes[2]}px`};
`;

export const H5 = styled.h5<MarginProps & PaddingProps>`
  ${margin}
  ${padding}
  margin: 0;
  padding: 0;
  font-size: ${(props) => `${props.theme.fontSizes[1]}px`};
`;

export const H6 = styled.h6<MarginProps & PaddingProps>`
  ${margin}
  ${padding}
  margin: 0;
  padding: 0;
  font-size: ${(props) => `${props.theme.fontSizes[0]}px`};
`;