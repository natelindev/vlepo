import Layout from 'src/components/Layout';
import Sidebar from 'src/components/Sidebar';

import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
`;

const DashboardMain = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
`;

const Numbers = styled.div`
  display: flex;
  height: 7rem;
  width: auto;
  text-align: center;
  justify-content: center;
  font-size: 3rem;
  font-weight: 600;
`;

const NumbersLabel = styled.div`
  font-size: 1rem;
`;

const Row = styled.div`
  display: flex;
  margin-left: 1rem;
  margin-right: 1rem;
`;

const Dashboard = () => (
  <Layout>
    <Container>
      <Sidebar />
      <DashboardMain>
        <Row>
          <Numbers>
            12<NumbersLabel>Posts read</NumbersLabel>
          </Numbers>
          <Numbers>
            32<NumbersLabel>Reactions</NumbersLabel>
          </Numbers>
        </Row>
      </DashboardMain>
    </Container>
  </Layout>
);
export default Dashboard;
