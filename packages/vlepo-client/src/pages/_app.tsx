import React, { useState } from 'react';
import { SSRCache } from 'react-relay-network-modern-ssr/node8/server';
import { ToastProvider } from 'react-toast-notifications';
import { RelayEnvironmentProvider } from 'relay-hooks';
import Layout from 'src/components/Layout';
import { Toast } from 'src/components/Toast';
import { createEnvironment } from 'src/relay';
import { globalStyles } from 'src/shared/globalStyles';
import { defaultTheme, ThemeType } from 'src/shared/theme';

import { ThemeProvider } from '@emotion/react';

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

export const TitleContext = React.createContext<
  | {
      title?: string | null | undefined;
      setTitle?: React.Dispatch<React.SetStateAction<string | undefined | null>>;
    }
  | Record<string, never>
>({});

function App({ Component, pageProps }: PageProps) {
  const [theme, setTheme] = useState(defaultTheme);
  const [title, setTitle] = useState<string | undefined | null>(
    process.env.NEXT_PUBLIC_DEFAULT_BLOG_NAME,
  );

  return (
    <React.StrictMode>
      <RelayEnvironmentProvider environment={createEnvironment(pageProps.relayData)}>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <TitleContext.Provider value={{ title, setTitle }}>
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
          </TitleContext.Provider>
        </ThemeContext.Provider>
      </RelayEnvironmentProvider>
    </React.StrictMode>
  );
}

export default App;
