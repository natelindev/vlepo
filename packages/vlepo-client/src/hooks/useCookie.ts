import { useState } from 'react';

const nativeType = (value: string): unknown => {
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
    return JSON.parse(value);
  } catch (err) {
    // string
    return value;
  }
};

export const getCookie = <T = unknown>(name: string, initValue: T) => {
  const cookieValue = document.cookie
    .split('; ')
    .find((cookieValue: string) => cookieValue.split('=')[0] === name);

  const result = cookieValue ? decodeURIComponent(cookieValue) : undefined;

  return result ? (nativeType(result) as T) : initValue;
};

const setCookie = <T = unknown>(value: T, name: string, options?: cookieOptions) => {
  const { days = 7, path = '/' } = options || {};

  const expires = new Date(Date.now() + days * 864e5).toUTCString();

  document.cookie = `${name}=${encodeURIComponent(
    typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean'
      ? value
      : JSON.stringify(value),
  )}; expires=${expires}; path=${path}`;
};

type cookieOptions = { days?: number; path?: string };

export const useCookie = <T = unknown>(
  name: string,
  initValue: T,
): [T, (value: T, options: cookieOptions) => void] => {
  const [cookieValue, setCookieValue] = useState<T | undefined>(getCookie(name, initValue));

  const setCookieAndState = (value: T, options: cookieOptions) => {
    setCookie(value, name, options);
    setCookieValue(value);
  };
  return [cookieValue ?? initValue, setCookieAndState];
};
