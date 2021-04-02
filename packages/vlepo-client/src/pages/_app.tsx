/* eslint-disable jsx-a11y/heading-has-content */

import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import React from 'react';
import { SSRCache } from 'react-relay-network-modern-ssr/node8/server';
import { a, Transition } from 'react-spring';
import { ToastProvider } from 'react-toast-notifications';
import { RecoilRoot } from 'recoil';
import { RelayEnvironmentProvider } from 'relay-hooks';
import AppWithTheme from 'src/components/AppWithTheme';
import { Toast } from 'src/components/Toast';

import { createEnvironment } from '../relay';

// this is required since no other type fits
// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface PageProps extends AppProps<any> {
  pageProps: {
    relayData: SSRCache;
  };
}
function App({ Component, pageProps }: PageProps) {
  const router = useRouter();
  const items = [
    {
      id: router.route,
      Component,
      pageProps,
    },
  ];

  return (
    <React.StrictMode>
      <RelayEnvironmentProvider
        environment={createEnvironment(pageProps.relayData)}
      >
        <RecoilRoot>
          <ToastProvider
            components={{ Toast }}
            autoDismiss
            autoDismissTimeout={6000}
            placement="top-right"
          >
            <AppWithTheme>
              <Transition
                items={items}
                keys={(item) => item.id}
                from={{ opacity: 0 }}
                initial={{ opacity: 0 }}
                enter={{ opacity: 1, position: 'relative' }}
                leave={{ opacity: 0, position: 'absolute' }}
              >
                {(styles, { pageProps, Component }) => (
                  <a.div style={{ ...styles, width: '100%' }}>
                    <Component {...pageProps} />
                  </a.div>
                )}
              </Transition>
            </AppWithTheme>
          </ToastProvider>
        </RecoilRoot>
      </RelayEnvironmentProvider>
    </React.StrictMode>
  );
}

export default App;
