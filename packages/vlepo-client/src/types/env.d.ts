declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_API_ENDPOINT: string;
      NEXT_PUBLIC_SUPPORTED_OAUTH_PROVIDERS: string;
      NEXT_PUBLIC_DEFAULT_CLIENT_ID: string;
      NEXT_PUBLIC_DEFAULT_BLOG_ID: string;
      NEXT_PUBLIC_ALGOLIA_APP_ID: string;
      NEXT_PUBLIC_ALGOLIA_API_KEY: string;
      NEXT_PUBLIC_ALGOLIA_INDEX_NAME: string;
      NEXT_PUBLIC_DEFAULT_BLOG_NAME: string;
      NEXT_PUBLIC_DEFAULT_BLOG_SLOGAN: string;
      NEXT_PUBLIC_SITE_URL: string;
      NEXT_PUBLIC_TWITTER_HANDLE: string;
      PORT: string;
    }
  }
}
export {};
