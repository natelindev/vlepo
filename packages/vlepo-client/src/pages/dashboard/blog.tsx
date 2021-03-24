import Card from 'src/components/Card';
import Layout from 'src/components/Layout';
import Sidebar from 'src/components/Sidebar';

import styled from '@emotion/styled';

const DashboardCard = styled(Card)`
  padding: 1rem;
`;

const Container = styled.div`
  display: flex;
`;

const DashboardMain = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  width: 100%;
`;

const Numbers = styled.div`
  display: flex;
  font-size: ${(props) => props.theme.fontSizes[5]}px;
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
`;

const NumbersLabel = styled.div`
  color: ${(props) => props.theme.colors.muted};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  font-size: ${(props) => props.theme.fontSizes[2]}px;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
`;

const Dashboard = () => (
  <Layout>
    <Container>
      <Sidebar />
      <DashboardMain>
        <Row>
          <DashboardCard width={[1, 1 / 2, 1 / 4]} m={[0, 3]}>
            <Numbers>12</Numbers>
            <NumbersLabel>Total post views</NumbersLabel>
          </DashboardCard>

          <DashboardCard width={[1, 1 / 2, 1 / 4]} m={[0, 3]}>
            <Numbers>32</Numbers>
            <NumbersLabel>Total post reactions</NumbersLabel>
          </DashboardCard>

          <DashboardCard width={[1, 1 / 2, 1 / 4]} m={[0, 3]}>
            <Numbers>44</Numbers>
            <NumbersLabel>Total comments</NumbersLabel>
          </DashboardCard>

          <DashboardCard width={[1, 1 / 2, 1 / 4]} m={[0, 3]}>
            <Numbers>23</Numbers>
            <NumbersLabel>Total users</NumbersLabel>
          </DashboardCard>
        </Row>
      </DashboardMain>
    </Container>
  </Layout>
);
export default Dashboard;
