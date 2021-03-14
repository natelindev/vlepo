import { Session } from 'koa-session';
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

type ModelType =
  | AuthorizationCodeModel
  | ClientCredentialsModel
  | ExtensionModel
  | PasswordModel
  | RefreshTokenModel;

const prisma = new PrismaClient();
const oauth = koaOauth2({
  model: (model as unknown) as ModelType,
  accessTokenLifetime: 3600, // 1 hour
  refreshTokenLifetime: 604800,
});

export type ExtendedContext = {
  prisma: PrismaClient;
  session: Session | null;
  oauth: KoaOauth2Context;
};

export const createContext = () => ({
  prisma,
  oauth,
});
