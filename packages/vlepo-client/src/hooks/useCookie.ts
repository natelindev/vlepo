import { useEffect, useState } from 'react';

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

export const useCookie = <T = unknown>(name: string, initValue: T) => {
  const [cookieValue, setCookieValue] = useState<T | undefined>();

  const setCookie = (value: T, options: { days?: number; path?: string }) => {
    const { days = 7, path = '/' } = options;

    const expires = new Date(Date.now() + days * 864e5).toUTCString();

    document.cookie = `${name}=${encodeURIComponent(
      typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean'
        ? value
        : JSON.stringify(value),
    )}; expires=${expires}; path=${path}`;
  };

  useEffect(() => {
    const cookieValue = document.cookie
      .split('; ')
      .find((cookieValue: string) => cookieValue.split('=')[0] === name);

    const result = cookieValue ? decodeURIComponent(cookieValue) : undefined;

    setCookieValue(result ? (nativeType(result) as T) : undefined);
  }, [name]);

  return [cookieValue ?? initValue, setCookie];
};
