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

export const PaperCardTitle = styled(H3)`
  padding: 0;
  margin-left: auto;
  margin-right: auto;
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  font-family: ${(props) => props.theme.fonts.heading};
  transition: all 0.3s ease-in-out;
`;

export const IndexImageOverlay = styled(ImageOverlay)`
  display: flex;
  align-items: center;
  opacity: 0;
  transition: all 0.3s ease-in-out;
`;

type BasePaperCardProps = HeightProps &
  WidthProps &
  MinHeightProps &
  MinWidthProps &
  MaxHeightProps &
  MaxWidthProps;
export const BasePaperCard = styled(Card)<BasePaperCardProps>`
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
  margin-left: auto;
  margin-right: auto;

  ${PaperCardTitle} {
    margin-top: auto;
    margin-bottom: auto;
  }

  @media only screen and (max-width: ${(props) => `${props.theme.breakpoints[0]}`}) {
    ${IndexImageOverlay} {
      opacity: 1;
    }
  }

  &:hover {
    ${IndexImageOverlay} {
      opacity: 1;
    }
  }
`;
