import RelaySSR, { SSRCache } from 'react-relay-network-modern-ssr/node8/server';
import { authMiddleware, RelayNetworkLayer, urlMiddleware } from 'react-relay-network-modern/node8';
import { Environment, Network, RecordSource, Store } from 'relay-runtime';

export function initEnvironment(token?: string) {
  const source = new RecordSource();
  const store = new Store(source);
  const relaySSR = new RelaySSR();

  return {
    relaySSR,
    environment: new Environment({
      store,
      network: new RelayNetworkLayer([
        urlMiddleware({
          url: () => {
            if (!process.env.NEXT_PUBLIC_API_ENDPOINT) {
              throw new Error('please add NEXT_PUBLIC_API_ENDPOINT in your .env file');
            }
            return `${process.env.NEXT_PUBLIC_API_ENDPOINT}/graphql`;
          },
        }),
        authMiddleware({
          token,
          allowEmptyToken: true,
        }),
        relaySSR.getMiddleware(),
      ]),
    }),
  };
}

export function createEnvironment(relayData: SSRCache): Environment {
  const source = new RecordSource();
  const store = new Store(source);

  return new Environment({
    store,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    network: Network.create(() => (relayData?.[0][1] as any) || Promise.resolve()),
  });
}
