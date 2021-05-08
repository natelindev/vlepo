import { GrantConfig } from 'grant';

export const grantConfig: GrantConfig = {
  defaults: {
    origin: process.env.NEXT_PUBLIC_API_ENDPOINT,
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
    state: true,
    nonce: false,
    scope: ['identity'],
    response: ['tokens'],
  },
};
