/* eslint-disable jsx-a11y/heading-has-content */

import type { AppProps } from 'next/app';
import React from 'react';
import { SSRCache } from 'react-relay-network-modern-ssr/node8/server';
import { RelayEnvironmentProvider } from 'relay-hooks';

import { createEnvironment } from '../relay';
import { globalStyles } from '../shared/styles';

interface PageProps extends AppProps<any> {
  pageProps: {
    relayData: SSRCache;
  };
}

function App({ Component, pageProps }: PageProps): React.ReactElement {
  return (
    <React.StrictMode>
      <RelayEnvironmentProvider environment={createEnvironment(pageProps.relayData)}>
        {globalStyles}
        <Component {...pageProps} />
      </RelayEnvironmentProvider>
    </React.StrictMode>
  );
}

export default App;
