export type UserSession = {
  currentUser?: {
    id: string;
    name: string;
    profileImageUrl: string;
    scope: string;
  };
  accessToken?: string;
};
