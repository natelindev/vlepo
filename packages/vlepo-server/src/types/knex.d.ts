import type {
  Blog,
  UserRole,
  User,
  Post,
  Tag,
  Comment,
  Image,
  Link,
  Thought,
  Reaction,
  Rating,
  ShareCount,
  Translation,
  Project,
  Paper,
  OAuthScope,
  OAuthAccessToken,
  OAuthRefreshToken,
  OAuthClient,
  OAuthAuthorizationCode,
} from '@prisma/client';

declare module 'knex/types/tables' {
  interface Tables {
    Blog: Blog;
    UserRole: UserRole;
    User: User;
    Post: Post;
    Tag: Tag;
    Comment: Comment;
    Image: Image;
    Link: Link;
    Thought: Thought;
    Reaction: Reaction;
    Rating: Rating;
    ShareCount: ShareCount;
    Translation: Translation;
    Project: Project;
    Paper: Paper;
    OAuthScope: OAuthScope;
    OAuthAccessToken: OAuthAccessToken;
    OAuthRefreshToken: OAuthRefreshToken;
    OAuthClient: OAuthClient;
    OAuthAuthorizationCode: OAuthAuthorizationCode;
  }
}
