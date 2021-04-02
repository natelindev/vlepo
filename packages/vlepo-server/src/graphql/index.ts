import * as NexusSchema from 'nexus';
import { nexusPrisma } from 'nexus-plugin-prisma';
import * as path from 'path';

import { fieldAuthenticationPlugin } from '@jcm/nexus-plugin-field-authentication';

import * as types from './types';

export default NexusSchema.makeSchema({
  types,
  features: {
    abstractTypeStrategies: {
      resolveType: false,
      isTypeOf: false,
      __typename: true,
    },
  },
  plugins: [
    nexusPrisma({
      experimentalCRUD: true,
    }),
    NexusSchema.connectionPlugin({ includeNodesField: true }),
    NexusSchema.fieldAuthorizePlugin(),
    fieldAuthenticationPlugin({
      isLogged: async (_root, _args, ctx) => {
        const authHeader = ctx.get('Authorization');
        if (!authHeader) {
          return false;
        }
        const accessToken = authHeader.replace('Bearer ', '');
        return ctx.oauth.verifyAccessToken(accessToken);
      },
    }),
  ],
  outputs: {
    schema: path.join(
      __dirname,
      '../../../vlepo-client/src/schema/schema.graphql'
    ),
    typegen: path.join(
      __dirname,
      '../../node_modules/@types/nexus-typegen/index.d.ts'
    ),
  },
  contextType: {
    module: require.resolve('../app'),
    export: 'ExtendedContext',
  },
  sourceTypes: {
    modules: [
      {
        module: require.resolve('../../node_modules/.prisma/client/index.d.ts'),
        alias: 'prisma',
      },
    ],
  },
});
