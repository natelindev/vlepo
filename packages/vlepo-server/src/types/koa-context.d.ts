import { ExtendedContext } from '../app';

declare module 'koa' {
  export interface Context extends ExtendedContext {}
}
