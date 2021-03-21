import Head from 'next/head';
import React from 'react';

import Footbar from '../Footbar';
import Navbar from '../Navbar';
import ScrollToTop from '../ScrollToTop';
import { Footer, Header, Main } from './style';

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
