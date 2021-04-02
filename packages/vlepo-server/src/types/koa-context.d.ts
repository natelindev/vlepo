import { PrismaClient } from '@prisma/client';

declare module 'koa' {
  export interface BaseContext {
    prisma: PrismaClient;
  }
}
