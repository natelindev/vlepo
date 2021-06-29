import styled from '@emotion/styled';

import Card from '../Card';
import { H3 } from '../Typography';

export const Abstract = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  word-break: break-all;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const ArticleCardTitle = styled(H3)`
  padding: 0;
  margin-block-start: 0;
  margin-block-end: 0.5rem;
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  font-family: ${(props) => props.theme.fonts.heading};
`;

export const BaseArticleCard = styled(Card)`
  flex-direction: column;
  border-radius: ${(props) => `${props.theme.radii.default}px`};
  box-shadow: ${(props) => props.theme.shadows.Card};
  color: ${(props) => props.theme.colors.whiteText};
  background-color: ${(props) => props.theme.colors.backgroundSecondary};

  ${ArticleCardTitle} {
    transition: all 0.3s ease-in-out;
    margin-top: auto;
    margin-bottom: auto;
  }

  ${Abstract} {
    transition: all 0.3s ease-in-out;
    opacity: 0;
  }

  &:hover {
    ${Abstract} {
      opacity: 1;
    }
    ${ArticleCardTitle} {
      margin-top: unset;
      margin-bottom: unset;
    }
  }
`;
