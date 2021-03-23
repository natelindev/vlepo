import React from 'react';
import { borderRadius, color, fontSize, space, variant, width } from 'styled-system';

import styled from '@emotion/styled';

import type {
  BorderRadiusProps,
  ColorProps,
  FontSizeProps,
  SpaceProps,
  WidthProps,
} from 'styled-system';

const variants = variant({
  variants: {
    small: {
      p: '0.25rem 0.5rem',
      fontSize: 0,
    },
    medium: {
      fontSize: 1,
    },
    large: {
      fontSize: 2,
      p: '0.625rem 1rem',
    },
  },
});

export type ButtonBaseProps = {
  variant?: 'small' | 'medium' | 'large';
  children?: React.ReactChild;
} & ColorProps &
  FontSizeProps &
  WidthProps &
  SpaceProps &
  BorderRadiusProps;

export const Button = styled.button<ButtonBaseProps>`
  cursor: pointer;
  font-weight: ${(props) => props.theme.fontWeights.regular};
  text-align: center;
  vertical-align: middle;
  user-select: none;
  background-color: transparent;
  border: none;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: ${(props) => props.theme.lineHeights.content};

  &:hover {
    text-decoration: none;
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    cursor: default;
  }

  &:disabled svg {
    opacity: 0.6;
  }

  ${color}
  ${borderRadius}
  ${space}
  ${width}
  ${fontSize}
  ${variants}
`;
