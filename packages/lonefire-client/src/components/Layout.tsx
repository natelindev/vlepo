import Head from 'next/head';
import React from 'react';

import styled from '@emotion/styled';

import Footbar from './Footbar';
import Navbar from './Navbar';
import ScrollToTop from './ScrollToTop';

const Header = styled.header`
  flex: none;
`;

const Main = styled.main`
  margin-top: 3.5rem;
  flex: 1 0 auto;
  width: 100%;
`;

const Footer = styled.footer`
  flex: none;
`;

interface LayoutProps {
  title?: string;
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {
  const { children, title } = props;
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header>
        <Navbar />
      </Header>
      <Main>
        {children}
        <ScrollToTop />
      </Main>
      <Footer>
        <Footbar />
      </Footer>
    </>
  );
};
export default Layout;
