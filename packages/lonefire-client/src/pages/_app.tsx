/* eslint-disable jsx-a11y/heading-has-content */
import type { AppProps /* , AppContext */ } from 'next/app';
import React from 'react';

import { MDXProvider } from '@mdx-js/react';

import { globalStyles } from '../shared/styles';

const mdComponents = {
  h1: (props: unknown) => <h1 style={{ color: 'tomato' }} {...props} />,
};

function App({ Component, pageProps }: AppProps): React.ReactElement {
  return (
    <MDXProvider components={mdComponents}>
      {globalStyles}
      <Component {...pageProps} />
    </MDXProvider>
  );
}

export default App;
