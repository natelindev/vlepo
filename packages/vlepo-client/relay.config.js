// relay.config.js
module.exports = {
  src: './src',
  language: 'typescript',
  schema: './src/schema/schema.graphql',
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
  },
  artifactDirectory: './src/__generated__',
};
