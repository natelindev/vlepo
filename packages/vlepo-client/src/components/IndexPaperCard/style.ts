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

export const Abstract = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  margin-top: 1rem;
  margin-bottom: 1rem;
  transition: all 0.3s ease-in-out;
  opacity: 0;
`;

export const PaperCardTitle = styled(H3)`
  padding: 0;
  margin-left: auto;
  margin-right: auto;
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  font-family: ${(props) => props.theme.fonts.heading};
  transition: all 0.3s ease-in-out;
`;

export const IndexImageOverlay = styled(ImageOverlay)`
  top: 25%;
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

  @media only screen and (min-width: ${(props) => `${props.theme.breakpoints[0]}`}) {
    &:hover {
      ${Abstract} {
        opacity: 1;
      }

      ${PaperCardTitle} {
        margin-top: unset;
        margin-bottom: unset;
      }

      ${IndexImageOverlay} {
        top: 0;
      }
    }
  }
`;
