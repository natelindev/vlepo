declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_API_ENDPOINT: string;
      NEXT_PUBLIC_SUPPORTED_OAUTH_PROVIDERS: string;
      NEXT_PUBLIC_DEFAULT_CLIENT_ID: string;
      NEXT_PUBLIC_DEFAULT_BLOG_ID: string;
    }
  }
}
export {};
