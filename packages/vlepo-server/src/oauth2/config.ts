import { GrantConfig } from 'grant';

export const Oauth2Config: GrantConfig = {
  defaults: {
    origin: process.env.API_URL,
    transport: 'session',
    nonce: true,
    prefix: '/api/connect',
    callback: '/api/oauth2/callback',
    pkce: true,
  },
  google: {
    key: process.env.GOOGLE_OAUTH_CLIENT_ID,
    secret: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
    scope: [
      'openid',
      'https://www.googleapis.com/auth/userinfo.email',
      'https://www.googleapis.com/auth/userinfo.profile',
    ],
    response: ['tokens', 'profile'],
  },
  github: {
    key: process.env.GITHUB_OAUTH_CLIENT_ID,
    secret: process.env.GITHUB_OAUTH_CLIENT_SECRET,
    scope: ['openid', 'user:email'],
    response: ['tokens', 'profile'],
  },
  reddit: {
    key: process.env.REDDIT_OAUTH_CLIENT_ID,
    secret: process.env.REDDIT_OAUTH_CLIENT_SECRET,
    custom_params: { duration: 'temporary' },
    state: 'some state',
    nonce: false,
    pkce: false,
    scope: ['identity'],
    response: ['tokens', 'profile'],
  },
};
