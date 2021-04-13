declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE_URL: string;
      GOOGLE_OAUTH_CLIENT_SECRET: string;
      GOOGLE_OAUTH_CLIENT_ID: string;
      API_URL: string;
      CLIENT_URL: string;
      GITHUB_OAUTH_CLIENT_ID: string;
      GITHUB_OAUTH_CLIENT_SECRET: string;
      REDDIT_OAUTH_CLIENT_ID: string;
      REDDIT_OAUTH_CLIENT_SECRET: string;
      SECRET_KEY: string;
      IMAGE_PATH: string;
      DEFAULT_CLIENT_ID: string;
      DEFAULT_BLOG_ID: string;
      DEFAULT_ADMIN_ID: string;
      DEFAULT_BLOG_NAME: string;
    }
  }
}
export {};
