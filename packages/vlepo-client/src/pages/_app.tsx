/* eslint-disable jsx-a11y/heading-has-content */

import base64 from 'base-64';
import React, { useState } from 'react';
import { SSRCache } from 'react-relay-network-modern-ssr/node8/server';
import { ToastProvider } from 'react-toast-notifications';
import { RelayEnvironmentProvider } from 'relay-hooks';
import Layout from 'src/components/Layout';
import { Toast } from 'src/components/Toast';
import { useCookie } from 'src/hooks/useCookie';
import { createEnvironment } from 'src/relay';
import { globalStyles } from 'src/shared/styles';
import { defaultTheme, ThemeType } from 'src/shared/theme';

import { ThemeProvider } from '@emotion/react';
import { IdToken } from '@vlepo/shared';

import type { AppProps } from 'next/app';
// this is required since no other type fits
// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface PageProps extends AppProps<any> {
  pageProps: {
    relayData: SSRCache;
  };
}

export const ThemeContext = React.createContext<
  | { theme: ThemeType; setTheme: React.Dispatch<React.SetStateAction<ThemeType>> }
  | Record<string, never>
>({});

export const CurrentUserContext = React.createContext<
  { currentUser?: IdToken } | Record<string, never>
>({});

function App({ Component, pageProps }: PageProps) {
  const [theme, setTheme] = useState(defaultTheme);
  const [currentUser] = useCookie<IdToken | undefined>('idToken', {
    decode: (v: string) => JSON.parse(base64.decode(v)),
  });

  return (
    <React.StrictMode>
      <RelayEnvironmentProvider environment={createEnvironment(pageProps.relayData)}>
        <ThemeContext.Provider value={{ theme: defaultTheme, setTheme }}>
          <CurrentUserContext.Provider value={{ currentUser }}>
            <ThemeProvider theme={theme}>
              {globalStyles}
              <ToastProvider
                components={{ Toast }}
                autoDismiss
                autoDismissTimeout={6000}
                placement="top-right"
              >
                <Layout>
                  <Component {...pageProps} />
                </Layout>
              </ToastProvider>
            </ThemeProvider>
          </CurrentUserContext.Provider>
        </ThemeContext.Provider>
      </RelayEnvironmentProvider>
    </React.StrictMode>
  );
}

export default App;
