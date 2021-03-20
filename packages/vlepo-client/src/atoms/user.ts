import base64 from 'base-64';
import { getCookie } from 'src/hooks/useCookie';

import { IdToken } from '@vlepo/shared';

import { memoizedAtom } from './memoizedAtom';

export const currentUserState = memoizedAtom({
  key: 'currentUser',
  default: getCookie<IdToken>('idToken', {
    decode: (v: string) => JSON.parse(base64.decode(v)),
  }),
});
