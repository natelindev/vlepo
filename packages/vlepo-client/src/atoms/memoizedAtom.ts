import memoize from 'fast-memoize';
import { atom } from 'recoil';

export const memoizedAtom = memoize(atom, {
  serializer: (args: any) => args.key,
});
