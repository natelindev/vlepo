import React from 'react';
import {
  border,
  BorderProps,
  borderRadius,
  color,
  fontSize,
  margin,
  MarginProps,
  space,
  variant,
  width,
} from 'styled-system';

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
  children?: React.ReactChild | React.ReactChild[];
} & ColorProps &
  FontSizeProps &
  WidthProps &
  SpaceProps &
  BorderProps &
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
  border-radius: ${(props) => `${props.theme.radii.default}px`};
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
  ${border}
`;

export const OauthButtonSection = styled.div<MarginProps>`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  justify-content: flex-start;
  display: flex;
  flex-wrap: wrap;
  ${margin}
`;

export const OauthButton = styled(Button)`
  display: flex;
  width: 2.5rem;
  height: 2.5rem;
  padding: 0.25rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  margin-left: 0.5rem;
  &:last-of-type {
    margin-right: 0.5rem;
  }
  background-color: ${(props) => props.theme.colors.backgroundMuted};
  border-radius: 0.25rem;
  transition: all 0.3s ease-in-out;
  box-shadow: ${(props) => props.theme.shadows.Card};
  align-items: center;
  justify-content: center;
  z-index: ${(props) => props.theme.zIndices.GradientButton};

  &:hover {
    box-shadow: ${(props) => props.theme.shadows.OauthButton};
  }
`;
