import type { AppProps /*, AppContext */ } from 'next/app';

import { globalStyles } from '../shared/styles';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {globalStyles}
      <Component {...pageProps} />
    </>
  );
}

export default App;
