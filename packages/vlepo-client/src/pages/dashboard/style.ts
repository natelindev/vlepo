import Card from 'src/components/Card';

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

export const Numbers = styled.div`
  display: flex;
  font-size: ${(props) => props.theme.fontSizes[5]}px;
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
`;

export const NumbersLabel = styled.div`
  color: ${(props) => props.theme.colors.muted};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  font-size: ${(props) => props.theme.fontSizes[2]}px;
`;
