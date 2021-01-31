/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-bitwise */

const serializer = (
  replacer: (this: unknown, key: string, value: unknown) => unknown,
  cycleReplacer: (this: unknown, key: string, value: unknown) => unknown,
) => {
  const stack = [];
  const keys = [];

  if (cycleReplacer == null) {
    cycleReplacer = (key: string, value: unknown) => {
      if (stack[0] === value) return '[Circular ~]';
      return `[Circular ~.${keys.slice(0, stack.indexOf(value)).join('.')}]`;
    };
  }

  return (key: string, value: unknown) => {
    if (stack.length > 0) {
      const thisPos = stack.indexOf(this);
      ~thisPos ? stack.splice(thisPos + 1) : stack.push(this);
      ~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key);
      if (~stack.indexOf(value)) value = cycleReplacer.call(this, key, value);
    } else stack.push(value);

    return replacer == null ? value : replacer.call(this, key, value);
  };
};

export const circularStringify = (
  obj: unknown,
  replacer?: ReturnType<typeof serializer>,
  spaces?: string | number,
  cycleReplacer?: (this: unknown, key: string, value: unknown) => unknown,
): string => JSON.stringify(obj, serializer(replacer, cycleReplacer), spaces);
