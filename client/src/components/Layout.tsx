import Head from 'next/head';
import React from 'react';

import { css } from '@emotion/react';

import Footbar from './Footbar';
import Navbar from './Navbar';
import ScrollToTop from './ScrollToTop';

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
      <header
        css={css`
          flex: none;
        `}
      >
        <Navbar />
      </header>
      <main
        css={css`
          flex: 1 0 auto;
          width: 100%;
        `}
      >
        {children}
        <ScrollToTop />
      </main>
      <footer
        css={css`
          flex: none;
        `}
      >
        <Footbar />
      </footer>
    </>
  );
};
export default Layout;
