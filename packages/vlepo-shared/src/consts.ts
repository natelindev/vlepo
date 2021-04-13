const OAuthConsts = {
  entities: [
    'blog',
    'comment',
    'image',
    'link',
    'paper',
    'post',
    'project',
    'rating',
    'reaction',
    'tag',
    'thought',
    'translation',
    'user',
    'user_role',
  ] as const,
};

const entities = [
  'blog',
  'comment',
  'image',
  'link',
  'paper',
  'post',
  'project',
  'rating',
  'reaction',
  'tag',
  'thought',
  'translation',
  'user',
  'userRole',
] as const;
export { OAuthConsts, entities };
