/* eslint-disable jsx-a11y/heading-has-content */

import React from 'react';
import { SSRCache } from 'react-relay-network-modern-ssr/node8/server';
import { ToastProvider } from 'react-toast-notifications';
import { RecoilRoot } from 'recoil';
import { RelayEnvironmentProvider } from 'relay-hooks';
import AppWithTheme from 'src/components/AppWithTheme';
import Layout from 'src/components/Layout';
import { Toast } from 'src/components/Toast';

import { createEnvironment } from '../relay';

import type { AppProps } from 'next/app';
// this is required since no other type fits
// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface PageProps extends AppProps<any> {
  pageProps: {
    relayData: SSRCache;
  };
}
function App({ Component, pageProps }: PageProps) {
  return (
    <React.StrictMode>
      <RelayEnvironmentProvider environment={createEnvironment(pageProps.relayData)}>
        <RecoilRoot>
          <ToastProvider
            components={{ Toast }}
            autoDismiss
            autoDismissTimeout={6000}
            placement="top-right"
          >
            <AppWithTheme>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </AppWithTheme>
          </ToastProvider>
        </RecoilRoot>
      </RelayEnvironmentProvider>
    </React.StrictMode>
  );
}

export default App;
