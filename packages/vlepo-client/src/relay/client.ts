import RelaySSR from 'react-relay-network-modern-ssr/node8/client';
import {
  authMiddleware,
  batchMiddleware,
  cacheMiddleware,
  errorMiddleware,
  RelayNetworkLayer,
  uploadMiddleware,
  urlMiddleware,
} from 'react-relay-network-modern/node8';
import { Environment, RecordSource, Store } from 'relay-runtime';
import { getCookie } from 'src/hooks/useCookie';

import { UserSession } from '@vlepo/shared';

import type { SSRCache } from 'react-relay-network-modern-ssr/node8/server';

const source = new RecordSource();
const store = new Store(source);

let storeEnvironment: Environment | null = null;

export function createEnvironment(relayData: SSRCache): Environment {
  if (storeEnvironment) return storeEnvironment;

  storeEnvironment = new Environment({
    store,
    network: new RelayNetworkLayer([
      cacheMiddleware({
        size: 100,
        ttl: 60 * 1000,
      }),
      new RelaySSR(relayData).getMiddleware({
        lookup: false,
      }),
      urlMiddleware({
        url: () => {
          if (!process.env.NEXT_PUBLIC_API_ENDPOINT) {
            throw new Error('please add NEXT_PUBLIC_API_ENDPOINT in your .env file');
          }
          return `${process.env.NEXT_PUBLIC_API_ENDPOINT}/graphql`;
        },
      }),
      authMiddleware({
        token: getCookie<UserSession>('koa.sess', {
          accessToken: '',
        })?.accessToken,
        allowEmptyToken: true,
      }),
      batchMiddleware({
        batchUrl: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/graphql/batch`,
      }),
      errorMiddleware(),
      uploadMiddleware(),
    ]),
  });

  return storeEnvironment;
}
