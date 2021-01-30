import type { AppProps /* , AppContext */ } from 'next/app';
import React from 'react';

import { globalStyles } from '../shared/styles';

function App({ Component, pageProps }: AppProps): React.ReactElement {
  return (
    <>
      {globalStyles}
      <Component {...pageProps} />
    </>
  );
}

export default App;
