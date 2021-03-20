/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-mutable-exports */
import type { Environment } from 'relay-runtime';
import type { SSRCache } from 'react-relay-network-modern-ssr/node8/server';
import RelaySSR from 'react-relay-network-modern-ssr/node8/server';

import { envDetect } from '@vlepo/shared';

interface Env {
  relaySSR: RelaySSR;
  environment: Environment;
}

let initEnvironment: () => Env;
let createEnvironment: (relayData: SSRCache) => Environment;

if (envDetect.isNode) {
  const server = require('./server');
  initEnvironment = server.initEnvironment;
  createEnvironment = server.createEnvironment;
} else if (envDetect.isBrowser) {
  const client = require('./client');
  createEnvironment = client.createEnvironment;
}

export { initEnvironment, createEnvironment };
