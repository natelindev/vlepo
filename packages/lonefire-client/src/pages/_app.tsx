/* eslint-disable jsx-a11y/heading-has-content */
import type { AppProps /* , AppContext */ } from 'next/app';
import React from 'react';
import { RelayEnvironmentProvider } from 'relay-hooks';

import { createEnvironment } from '../shared/createEnvironment';
import { globalStyles } from '../shared/styles';

function App({ Component, pageProps }: AppProps): React.ReactElement {
  return (
    <RelayEnvironmentProvider environment={createEnvironment(pageProps.relayData)}>
      {globalStyles}
      <Component {...pageProps} />
    </RelayEnvironmentProvider>
  );
}

export default App;
