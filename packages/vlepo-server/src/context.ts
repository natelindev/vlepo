import {
  AuthorizationCodeModel,
  ClientCredentialsModel,
  ExtensionModel,
  PasswordModel,
  RefreshTokenModel,
} from 'oauth2-server';

import { PrismaClient } from '@prisma/client';

import { koaOauth2, KoaOauth2Context } from './oauth2/middleware';
import model from './oauth2/model';

import type { Context } from 'koa';

type ModelType =
  | AuthorizationCodeModel
  | ClientCredentialsModel
  | ExtensionModel
  | PasswordModel
  | RefreshTokenModel;

export type ExtendedContext = {
  prisma: PrismaClient;
  oauth: KoaOauth2Context;
} & Context;

export const createContext = () => {
  const prisma = new PrismaClient();
  const oauth = koaOauth2({
    model: (model as unknown) as ModelType,
    accessTokenLifetime: 3600, // 1 hour
    refreshTokenLifetime: 604800,
  });

  return {
    prisma,
    oauth,
  };
};
