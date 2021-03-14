import debugInit from 'debug';
import koa from 'koa';
import OAuth2, {
  AccessDeniedError,
  Request,
  Response,
  UnauthorizedRequestError,
} from 'oauth2-server';

const debug = debugInit('vlepo:oauth2:middleware');

export type KoaOauth2Context = {
  authenticate: () => koa.Middleware;
  authorize: () => koa.Middleware;
  token: () => koa.Middleware;
  scope: (requiredScope: string | string[]) => koa.Middleware;
};

export const koaOauth2 = (options: OAuth2.ServerOptions) => {
  const oauth = new OAuth2(options);

  const authenticate = () => async (ctx: koa.DefaultContext, next: koa.Next) => {
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

  const authorize = () => async (ctx: koa.DefaultContext, next: koa.Next) => {
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

  const token = () => async (ctx: koa.DefaultContext, next: koa.Next) => {
    const request = new Request(ctx.request);
    const response = new Response(ctx.response);

    try {
      ctx.state.oauth = {
        token: await oauth.token(request, response),
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

  const scope = (requiredScope: string | string[]) => async (
    ctx: koa.DefaultContext,
    next: koa.Next,
  ) => {
    const result = await options.model.verifyScope(ctx.state.oauth.token, requiredScope);
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

  return {
    authenticate,
    authorize,
    token,
    scope,
  };
};
