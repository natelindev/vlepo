import { User } from '@prisma/client';

import { ExtendedContext } from '../app';

declare module 'koa' {
  export interface Context extends ExtendedContext {}
  export interface BaseContext extends ExtendedContext {}
  export interface DefaultState extends DefaultStateExtends {
    user?: User;
  }
}
