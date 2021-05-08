import * as NexusSchema from 'nexus';
import { nexusPrisma } from 'nexus-plugin-prisma';
import * as path from 'path';

import { envDetect } from '@vlepo/shared';

import { fieldAuthenticationPlugin } from './plugins/authentication';
import { relayGlobalIdPlugin } from './plugins/relayGlobalId';
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
    NexusSchema.connectionPlugin({
      includeNodesField: true,
      additionalArgs: {
        orderBy: NexusSchema.list(NexusSchema.nonNull('OrderBy')),
      },
      extendConnection: {
        totalCount: { type: NexusSchema.nullable('Int') },
      },
    }),
    NexusSchema.fieldAuthorizePlugin(),
    relayGlobalIdPlugin({
      shouldAddRawId: false,
    }),
    fieldAuthenticationPlugin({
      isLoggedIn: async (_root, _args, ctx) => {
        const accessToken = await ctx.oauth.extractAccessToken(ctx, true);
        ctx.currentUser = accessToken?.user;
        return ctx.oauth.verifyAccessToken(accessToken?.accessToken);
      },
      onFailedAuthentication: (_root, _args, ctx) => {
        ctx.response.status = 401;
      },
    }),
  ],
  outputs: envDetect.isProd
    ? undefined
    : {
        schema: path.join(__dirname, '../../../vlepo-client/src/schema/schema.graphql'),
        typegen: path.join(__dirname, '../../node_modules/@types/nexus-typegen/index.d.ts'),
      },
  contextType: {
    module: require.resolve('../app'),
    export: 'ExtendedContext',
  },
  sourceTypes: envDetect.isProd
    ? undefined
    : {
        modules: [
          {
            module: require.resolve(
              path.join(__dirname, '../../../../node_modules/.prisma/client/index.d.ts'),
            ),
            alias: 'prisma',
          },
        ],
      },
});
