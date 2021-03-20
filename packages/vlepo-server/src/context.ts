import { PrismaClient } from '@prisma/client';

import type { Context } from 'koa';

export type ExtendedContext = {
  prisma: PrismaClient;
  koaContext: Context;
};

export const createContext = () => {
  const prisma = new PrismaClient();
  return {
    prisma,
  };
};
