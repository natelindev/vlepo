import {
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

export const BaseProfileComment = styled.div<WidthProps & HeightProps & MarginProps & PaddingProps>`
  &:hover {
    background-color: ${(props) => props.theme.colors.backgroundMuted};
  }
  ${width}
  ${height}
  ${margin}
  ${padding}
`;

export const BaseCommentSection = styled.div<WidthProps & HeightProps & MarginProps & PaddingProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${width}
  ${height}
  ${margin}
  ${padding}
`;
