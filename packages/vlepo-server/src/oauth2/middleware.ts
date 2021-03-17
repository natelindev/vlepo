import debugInit from 'debug';
import koa from 'koa';
import OAuth2, {
  AccessDeniedError,
  AuthorizationCodeModel,
  ClientCredentialsModel,
  ExtensionModel,
  PasswordModel,
  RefreshTokenModel,
  Request,
  Response,
  TokenOptions,
  UnauthorizedRequestError,
} from 'oauth2-server';

import model from './model';

const debug = debugInit('vlepo:oauth2:middleware');

export type KoaOauth2Context = {
  authenticate: () => koa.Middleware;
  authorize: () => koa.Middleware;
  token: () => koa.Middleware;
  scope: (requiredScope: string | string[]) => koa.Middleware;
};

type ModelType =
  | AuthorizationCodeModel
  | ClientCredentialsModel
  | ExtensionModel
  | PasswordModel
  | RefreshTokenModel;

const oauth = new OAuth2({
  model: (model as unknown) as ModelType,
  accessTokenLifetime: 3600, // 1 hour
  refreshTokenLifetime: 604800,
});

export const authenticate = () => async (ctx: koa.DefaultContext, next: koa.Next) => {
  const request = new Request(ctx.request);
  const response = new Response(ctx.response);

  try {
    ctx.state.oauth = {
      token: await oauth.authenticate(request, response),
    };
  } catch (err) {
    debug('error: ', err);
    if (err instanceof UnauthorizedRequestError) {
      ctx.status = err.code;
    } else {
      ctx.body = { error: err.name, error_description: err.message };
      ctx.status = err.code;
    }

    return ctx.app.emit('error', err, ctx);
  }

  return next();
};

export const authorize = () => async (ctx: koa.DefaultContext, next: koa.Next) => {
  const request = new Request(ctx.request);
  const response = new Response(ctx.response);

  try {
    ctx.state.oauth = {
      code: await oauth.authorize(request, response),
    };

    ctx.body = response.body;
    ctx.status = response.status;

    ctx.set(response.headers);
  } catch (err) {
    if (response) {
      ctx.set(response.headers);
    }

    if (err instanceof UnauthorizedRequestError) {
      ctx.status = err.code;
    } else {
      ctx.body = { error: err.name, error_description: err.message };
      ctx.status = err.code;
    }

    return ctx.app.emit('error', err, ctx);
  }

  return next();
};

export const token = (options: TokenOptions) => async (ctx: koa.DefaultContext, next: koa.Next) => {
  const request = new Request(ctx.request);
  const response = new Response(ctx.response);

  try {
    ctx.state.oauth = {
      token: await oauth.token(request, response, options),
    };

    ctx.body = response.body;
    ctx.status = response.status;

    ctx.set(response.headers);
  } catch (err) {
    if (response) {
      ctx.set(response.headers);
    }

    if (err instanceof UnauthorizedRequestError) {
      ctx.status = err.code;
    } else {
      ctx.body = { error: err.name, error_description: err.message };
      ctx.status = err.code;
    }

    return ctx.app.emit('error', err, ctx);
  }

  return next();
};

export const scope = (requiredScope: string | string[]) => async (
  ctx: koa.DefaultContext,
  next: koa.Next,
) => {
  const result = await model.verifyScope(ctx.state.oauth.token, requiredScope);
  if (!result) {
    const err = `Required scope: ${
      Array.isArray(requiredScope) ? requiredScope.join(' ') : requiredScope
    }`;
    ctx.body = {
      error: 'AccessDeniedError',
      error_description: `Access Denied, Required scope: ${
        Array.isArray(requiredScope) ? requiredScope.join(' ') : requiredScope
      }`,
    };
    ctx.status = 403;
    return ctx.app.emit('error', new AccessDeniedError(err), ctx);
  }

  return next();
};
