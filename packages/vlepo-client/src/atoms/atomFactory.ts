import { memoizedAtom } from './memoizedAtom';

export const atomFactory = <T>(key: string, value?: T) =>
  memoizedAtom({
    key,
    default: value,
  });
