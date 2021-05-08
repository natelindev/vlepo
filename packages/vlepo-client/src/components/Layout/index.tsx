import Head from 'next/head';
import React from 'react';
import { useProgressBar } from 'src/hooks/useProgressBar';
import { useTitle } from 'src/hooks/useTitle';

import Footbar from '../Footbar';
import Navbar from '../Navbar';
import ProgressBar from '../ProgressBar';
import ScrollToTop from '../ScrollToTop';
import { Footer, Header, Main } from './style';

type LayoutProps = {
  children?: React.ReactNode;
};
const Layout = (props: LayoutProps) => {
  const { children } = props;
  const widthLoading = useProgressBar({ loading: true });
  // const widthScrolling = useProgressBar({ scrolling: true });
  const { title } = useTitle();

  return (
    <>
      <Head>
        <title key="title">{title}</title>
      </Head>
      <Header>
        <Navbar />
        {widthLoading !== 101 && <ProgressBar width={widthLoading} />}
        {/* <ProgressBar width={widthScrolling} top="3.5rem" /> */}
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
