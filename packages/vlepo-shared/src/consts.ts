const OAuthConsts = {
  DEFAULT_CLIENT_ID: 'pFL2ALEl4ld9aOgOFZ7E1sOb19LFl4Z4c6h7gG8j',
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
  scope: {
    guest: ['comment:create', 'image:create', 'self'] as const,
  },
};

export { OAuthConsts };
