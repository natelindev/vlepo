import Card from 'src/components/Card';
import { margin, MarginProps, padding, PaddingProps } from 'styled-system';

import styled from '@emotion/styled';

export const DashboardCard = styled(Card)`
  padding: 1rem;
`;

export const Container = styled.div`
  display: flex;
`;

export const DashboardMain = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  width: 100%;
  margin-right: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const Numbers = styled.div<MarginProps & PaddingProps>`
  display: flex;
  font-size: ${(props) => props.theme.fontSizes[5]}px;
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  ${margin}
  ${padding}
`;

export const NumbersLabel = styled.div<MarginProps & PaddingProps>`
  color: ${(props) => props.theme.colors.muted};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  font-size: ${(props) => props.theme.fontSizes[2]}px;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 1rem;
  ${margin}
  ${padding}
`;
