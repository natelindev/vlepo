import RelaySSR from 'react-relay-network-modern-ssr/node8/client';
import {
  authMiddleware,
  cacheMiddleware,
  RelayNetworkLayer,
  urlMiddleware,
} from 'react-relay-network-modern/node8';
import { Environment, RecordSource, Store } from 'relay-runtime';

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
      authMiddleware({
        token: '',
        allowEmptyToken: true,
        prefix: 'Bearer',
      }),
      urlMiddleware({
        url: () => {
          if (!process.env.NEXT_PUBLIC_API_ENDPOINT) {
            throw new Error('please add NEXT_PUBLIC_API_ENDPOINT in your .env file');
          }
          return `${process.env.NEXT_PUBLIC_API_ENDPOINT}/graphql`;
        },
      }),
    ]),
  });

  return storeEnvironment;
}
