import { useState } from 'react';

import { envDetect } from '@vlepo/shared';

export const nativeType = (value: string, decode: (s: string) => unknown): unknown => {
  // number
  const nValue = Number(value);
  if (!Number.isNaN(nValue)) {
    return nValue;
  }
  const bValue = value.toLowerCase();
  // boolean
  if (bValue === 'true') {
    return true;
  }
  if (bValue === 'false') {
    return false;
  }
  try {
    return decode(value);
  } catch (err) {
    // string
    return value;
  }
};

type GetCookieOptions<T> = {
  initValue?: T;
  decode: (s: string) => T;
};

export const getCookie = <T = unknown>(name: string, options?: GetCookieOptions<T>) => {
  const { initValue, decode = JSON.parse } = options ?? {};
  if (!envDetect.isBrowser) {
    return undefined;
  }

  const cookieValue = window.document.cookie
    .split('; ')
    .find((cookieValue: string) => cookieValue.split('=')[0] === name)
    ?.split('=')[1];

  const result = cookieValue ? decodeURIComponent(cookieValue) : undefined;

  return result ? (nativeType(result, decode) as T) : initValue;
};

type SetCookieOptions = {
  days?: number;
  path?: string;
  encode?: (o: unknown) => string;
};

export const deleteCookie = (name: string) => {
  setCookie('', name, { days: 0 });
};

export const setCookie = <T = unknown>(value: T, name: string, options?: SetCookieOptions) => {
  const { days = 7, path = '/', encode = JSON.stringify } = options || {};

  const expires = new Date(Date.now() + days * 864e5).toUTCString();

  document.cookie = `${name}=${encodeURIComponent(
    typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean'
      ? value
      : encode(value),
  )}; expires=${expires}; path=${path}`;
};

export const useCookie = <T = unknown>(
  name: string,
  options?: GetCookieOptions<T>,
): [T | undefined, (value: T, options: SetCookieOptions) => void] => {
  const [cookieValue, setCookieValue] = useState<T | undefined>(getCookie(name, options));

  const setCookieAndState = (value: T, options: SetCookieOptions) => {
    setCookie(value, name, options);
    setCookieValue(value);
  };
  return [cookieValue, setCookieAndState];
};
