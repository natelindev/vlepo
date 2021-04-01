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
  roles: {
    admin: {
      name: 'Administrator',
      value: 'administrator',
    },
    guest: {
      name: 'Guest',
      value: 'guest',
    },
  },
};

const defaultIds = {
  blog: 'cdb78306-e62e-442d-8728-19d825c1388d',
  admin: '2bfc749a-5aef-4d3a-ae38-d9c0368fd674',
};
export { OAuthConsts, defaultIds };
