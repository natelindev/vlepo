// relay.config.js
module.exports = {
  src: './src',
  language: 'typescript',
  schema: './src/schema/schema.graphql',
  'persist-output': '../vlepo-server/src/persistedQueries.json',
  exclude: [
    '**/.next/**',
    '**/node_modules/**',
    '**/test/**',
    '**/schema/**',
    '**/__mocks__/**',
    '**/__generated__/**',
  ],
  customScalars: {
    DateTime: 'String',
    Upload: 'File',
    Void: 'null',
    Json: 'String',
  },
  artifactDirectory: './src/__generated__',
};
