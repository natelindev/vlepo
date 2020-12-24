import type { AppProps /*, AppContext */ } from 'next/app';
import './index.css';

// import { globalStyles } from '../shared/styles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* {globalStyles} */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
