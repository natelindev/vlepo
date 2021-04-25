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

type BaseCommentProps = { variant: 'profile' | 'post' } & WidthProps &
  HeightProps &
  MarginProps &
  PaddingProps;
export const BaseComment = styled.div<BaseCommentProps>`
  &:hover {
    background-color: ${(props) =>
      props.variant === 'profile' ? props.theme.colors.backgroundMuted : 'inherit'};
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
