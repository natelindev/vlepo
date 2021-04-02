import { ExtendedContext } from '../app';

declare module 'koa' {
  export interface BaseContext extends ExtendedContext {}
}
