declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE_URL?: string;
      GOOGLE_OAUTH_CLIENT_SECRET?: string;
      GOOGLE_OAUTH_CLIENT_ID?: string;
      NEXT_PUBLIC_API_ENDPOINT?: string;
      CLIENT_URL?: string;
      GITHUB_OAUTH_CLIENT_ID?: string;
      GITHUB_OAUTH_CLIENT_SECRET?: string;
      REDDIT_OAUTH_CLIENT_ID?: string;
      REDDIT_OAUTH_CLIENT_SECRET?: string;
      SECRET_KEY?: string;
      IMAGE_PATH?: string;
      NEXT_PUBLIC_DEFAULT_CLIENT_ID?: string;
      NEXT_PUBLIC_DEFAULT_BLOG_ID?: string;
      DEFAULT_ADMIN_ID?: string;
      NEXT_PUBLIC_DEFAULT_BLOG_NAME?: string;
      PORT?: string;
      API_PORT?: number;
      NEXT_PUBLIC_ALGOLIA_APP_ID: string;
      ALGOLIA_API_KEY: string;
      NEXT_PUBLIC_ALGOLIA_INDEX_NAME: string;
    }
  }
}

export {};
