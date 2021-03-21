import React from 'react';
import Layout from 'src/components/Layout';
import Sidebar from 'src/components/Sidebar';
import Table from 'src/components/Table';

import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
`;

const DashboardMain = styled.div`
  display: flex;
  flex-direction: column;
`;

const Dashboard = (): React.ReactElement => (
  <Layout>
    <Container>
      <Sidebar />
      <DashboardMain>
        <Table />
      </DashboardMain>
    </Container>
  </Layout>
);
export default Dashboard;
