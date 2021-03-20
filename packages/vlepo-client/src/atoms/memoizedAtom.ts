import memoize from 'fast-memoize';
import { atom } from 'recoil';

export const memoizedAtom = memoize(atom, {
  // incorrect typing of fast-memoize, so have to use any here
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  serializer: (args: any) => args.key,
});
