import base64 from 'base-64';
import { atom } from 'recoil';
import { getCookie } from 'src/hooks/useCookie';

import { IdToken } from '@vlepo/shared';

export const currentUserState = atom<IdToken | undefined>({
  key: 'currentUser',
  default: undefined,
  effects_UNSTABLE: [
    ({ setSelf }) => {
      setSelf(
        getCookie<IdToken>('idToken', {
          decode: (v: string) => JSON.parse(base64.decode(v)),
        }),
      );
    },
  ],
});
