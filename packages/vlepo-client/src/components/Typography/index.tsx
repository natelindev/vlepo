import {
  color,
  ColorProps,
  fontWeight,
  FontWeightProps,
  margin,
  MarginProps,
  padding,
  PaddingProps,
} from 'styled-system';

import styled from '@emotion/styled';

export const H1 = styled.h1<MarginProps & PaddingProps & FontWeightProps & ColorProps>`
  margin: 0;
  padding: 0;
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => `${props.theme.fontSizes[5]}px`};
  ${margin}
  ${padding}
  ${fontWeight}
  ${color}
`;

export const H2 = styled.h2<MarginProps & PaddingProps & FontWeightProps & ColorProps>`
  margin: 0;
  padding: 0;
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => `${props.theme.fontSizes[4]}px`};
  ${margin}
  ${padding}
  ${fontWeight}
  ${color}
`;

export const H3 = styled.h3<MarginProps & PaddingProps & FontWeightProps & ColorProps>`
  margin: 0;
  padding: 0;
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => `${props.theme.fontSizes[3]}px`};
  ${margin}
  ${padding}
  ${fontWeight}
  ${color}
`;

export const H4 = styled.h4<MarginProps & PaddingProps & FontWeightProps & ColorProps>`
  margin: 0;
  padding: 0;
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => `${props.theme.fontSizes[2]}px`};
  ${margin}
  ${padding}
  ${fontWeight}
  ${color}
`;

export const H5 = styled.h5<MarginProps & PaddingProps & FontWeightProps & ColorProps>`
  margin: 0;
  padding: 0;
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => `${props.theme.fontSizes[1]}px`};
  ${margin}
  ${padding}
  ${color}
  ${fontWeight}
`;

export const H6 = styled.h6<MarginProps & PaddingProps & FontWeightProps & ColorProps>`
  margin: 0;
  padding: 0;
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => `${props.theme.fontSizes[0]}px`};
  ${margin}
  ${padding}
  ${fontWeight}
  ${color}
`;
