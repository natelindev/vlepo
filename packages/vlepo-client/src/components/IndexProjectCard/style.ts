import {
  height,
  HeightProps,
  maxHeight,
  MaxHeightProps,
  maxWidth,
  MaxWidthProps,
  minHeight,
  MinHeightProps,
  minWidth,
  MinWidthProps,
  width,
  WidthProps,
} from 'styled-system';

import styled from '@emotion/styled';

import Card from '../Card';
import { ImageOverlay } from '../Image/style';
import { H3 } from '../Typography';

export const ProjectCardTitle = styled(H3)`
  padding: 0;
  margin-left: auto;
  margin-right: auto;
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  font-family: ${(props) => props.theme.fonts.heading};
  transition: all 0.3s ease-in-out;
`;

export const IndexImageOverlay = styled(ImageOverlay)`
  opacity: 0;
  display: flex;
  align-items: center;
  transition: all 0.3s ease-in-out;
`;

export const BaseProjectCard = styled(Card)<
  HeightProps & WidthProps & MinHeightProps & MinWidthProps & MaxHeightProps & MaxWidthProps
>`
  flex-direction: column;

  ${height}
  ${width}
  ${minWidth}
  ${minHeight}
  ${maxHeight}
  ${maxWidth}

  border-radius: ${(props) => `${props.theme.radii.default}px`};
  box-shadow: ${(props) => props.theme.shadows.Card};
  background-color: ${(props) => props.theme.colors.backgroundSecondary};

  ${ProjectCardTitle} {
    margin-top: auto;
    margin-bottom: auto;
  }

  @media only screen and (max-width: ${(props) => `${props.theme.breakpoints[0]}`}) {
    ${IndexImageOverlay} {
      opacity: 1;
    }
  }

  &:hover {
    ${ProjectCardTitle} {
      margin-top: unset;
      margin-bottom: unset;
    }

    ${IndexImageOverlay} {
      opacity: 1;
    }
  }
`;
