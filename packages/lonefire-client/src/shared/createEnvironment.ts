import ClientRelaySSR from 'react-relay-network-modern-ssr/node8/client';
import ServerRelaySSR from 'react-relay-network-modern-ssr/node8/server';
import {
  cacheMiddleware,
  RelayNetworkLayer,
  urlMiddleware,
} from 'react-relay-network-modern/node8';
import { Environment, GraphQLSingularResponse, Network, RecordSource, Store } from 'relay-runtime';

import type { SSRCache } from 'react-relay-network-modern-ssr/node8/server';
import type RelayModernEnvironment from 'relay-runtime/lib/store/RelayModernEnvironment';

const source = new RecordSource();
const store = new Store(source);

let storeEnvironment: RelayModernEnvironment | undefined;

const client = {
  initEnvironment: () => {
    const source = new RecordSource();
    const store = new Store(source);
    const relaySSR = new ServerRelaySSR();

    return {
      relaySSR,
      environment: new Environment({
        store,
        network: new RelayNetworkLayer([
          urlMiddleware({
            url: () => process.env.NEXT_PUBLIC_RELAY_ENDPOINT ?? '',
          }),
          relaySSR.getMiddleware(),
        ]),
      }),
    };
  },
  createEnvironment: (relayData: SSRCache) => {
    if (storeEnvironment) return storeEnvironment;

    storeEnvironment = new Environment({
      store,
      network: new RelayNetworkLayer([
        cacheMiddleware({
          size: 100,
          ttl: 60 * 1000,
        }),
        new ClientRelaySSR(relayData).getMiddleware({
          lookup: false,
        }),
        urlMiddleware({
          url: () => process.env.NEXT_PUBLIC_RELAY_ENDPOINT ?? '',
        }),
      ]),
    });

    return storeEnvironment;
  },
};

const server = {
  initEnvironment: () => {
    const source = new RecordSource();
    const store = new Store(source);
    const relaySSR = new ServerRelaySSR();

    return {
      relaySSR,
      environment: new Environment({
        store,
        network: new RelayNetworkLayer([
          urlMiddleware({
            url: () => process.env.NEXT_PUBLIC_RELAY_ENDPOINT ?? 'http://localhost:3001/graphql',
          }),
          relaySSR.getMiddleware(),
        ]),
      }),
    };
  },
  createEnvironment: (relayData: SSRCache) => {
    const source = new RecordSource();
    const store = new Store(source);

    return new Environment({
      store,
      network: Network.create(
        () =>
          (relayData?.[0]?.[1] as Promise<readonly GraphQLSingularResponse[]>) ?? Promise.resolve(),
      ),
    });
  },
};

export const { initEnvironment, createEnvironment } =
  typeof window === 'undefined' ? server : client;
