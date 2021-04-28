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
      props.variant === 'profile'
        ? props.theme.colors.backgroundMuted
        : props.theme.colors.backgroundSecondary};
  }
  background-color: ${(props) =>
    props.variant === 'profile' ? undefined : props.theme.colors.backgroundSecondary};
  box-shadow: ${(props) => props.theme.shadows.Card};
  border-radius: ${(props) => `${props.theme.radii.default}px`};
  overflow-x: hidden;
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

export const NewComment = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: ${(props) => props.theme.shadows.Card};
  border-radius: ${(props) => `${props.theme.radii.default}px`};
  background-color: ${(props) => props.theme.colors.backgroundSecondary};
  width: 100%;
  height: auto;
  overflow: visible;
  margin-top: 1em;
  padding-top: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 0.5rem;
`;
