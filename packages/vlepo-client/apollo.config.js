/* eslint-disable @typescript-eslint/no-var-requires */
process.chdir(__dirname);

const path = require('path');
const {
  config,
  directivesFile,
  includesGlobPattern,
  // eslint-disable-next-line import/no-extraneous-dependencies
} = require('vscode-apollo-relay').generateConfig();

module.exports = {
  client: {
    ...config.client,
    service: {
      ...config.client.service,
      localSchemaFile: './src/schema/schema.graphql',
    },
    includes: [directivesFile, path.join('./src', includesGlobPattern(['ts', 'tsx']))],
    excludes: ['**/*.graphql'],
  },
};
