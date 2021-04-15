import { width, WidthProps } from 'styled-system';

import styled from '@emotion/styled';

export const BasePostCard = styled.div<WidthProps>`
  display: flex;
  flex-direction: column;
  ${width}
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  padding: 1.5rem 2rem;

  border-radius: ${(props) => `${props.theme.radii.default}px`};
  box-shadow: ${(props) => props.theme.shadows.Card};
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.backgroundSecondary};
`;

export const Title = styled.a`
  text-decoration: none;
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  margin: 0;
  padding: 0;
  color: ${(props) => props.theme.colors.link};
  font-size: ${(props) => `${props.theme.fontSizes[3]}px`};
`;

export const Time = styled.h5`
  margin: 0;
  padding: 0;
  font-size: ${(props) => `${props.theme.fontSizes[1]}px`};
`;
