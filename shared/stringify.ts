const serializer = (
  replacer: (this: any, key: string, value: any) => any,
  cycleReplacer: (this: any, key: string, value: any) => any
) => {
  const stack = [],
    keys = [];

  if (cycleReplacer == null)
    cycleReplacer = (key: string, value: any) => {
      if (stack[0] === value) return '[Circular ~]';
      return '[Circular ~.' + keys.slice(0, stack.indexOf(value)).join('.') + ']';
    };

  return (key: string, value: any) => {
    if (stack.length > 0) {
      var thisPos = stack.indexOf(this);
      ~thisPos ? stack.splice(thisPos + 1) : stack.push(this);
      ~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key);
      if (~stack.indexOf(value)) value = cycleReplacer.call(this, key, value);
    } else stack.push(value);

    return replacer == null ? value : replacer.call(this, key, value);
  };
};

export const circularStringify = (
  obj: any,
  replacer?,
  spaces?: string | number,
  cycleReplacer?
) => {
  return JSON.stringify(obj, serializer(replacer, cycleReplacer), spaces);
};
