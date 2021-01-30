const isBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined';

const isWebWorker =
  typeof self === 'object' &&
  self.constructor &&
  self.constructor.name === 'DedicatedWorkerGlobalScope';

const isNode =
  typeof process !== 'undefined' && process.versions != null && process.versions.node != null;

export { isBrowser, isWebWorker, isNode };
