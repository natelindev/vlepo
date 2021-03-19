import base64 from 'base-64';
import { atom } from 'recoil';
import { getCookie } from 'src/hooks/useCookie';

import { UserSession } from '@vlepo/shared';

export const currentUserState = atom({
  key: 'currentUser',
  default: getCookie<UserSession>('koa.sess', {
    decode: (v: string) => JSON.parse(base64.decode(v)),
  })?.currentUser,
});
