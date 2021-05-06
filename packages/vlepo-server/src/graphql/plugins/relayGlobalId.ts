import { core, dynamicOutputMethod, plugin } from 'nexus';

export const base64Encode = (i: string) => {
  return Buffer.from(i, 'utf8').toString('base64');
};

export const base64Decode = (i: string) => {
  return Buffer.from(i, 'base64').toString('utf8');
};

export const toGlobalId = (type: string, id: string) => {
  return base64Encode([type, id].join(':'));
};

/**
 * Takes the "global ID" created by toGlobalID, and returns the type name and ID
 * used to create it.
 */
export const fromGlobalId = (globalId: string) => {
  // raw uuid
  if (globalId.length === 36) {
    return {
      id: globalId,
    };
  }
  const parsedGlobalId = base64Decode(globalId);
  const delimiterPos = parsedGlobalId.indexOf(':');
  return {
    type: parsedGlobalId.substring(0, delimiterPos),
    id: parsedGlobalId.substring(delimiterPos + 1),
  };
};

export type RelayGlobalIdPluginConfig<TypeName extends string, FieldName extends string> = {
  nexusFieldName?: string;
  nexusSchemaImportId?: string;
  relayGlobalIdPluginImportId?: string;

  /**
   * Defaults to true - Adds a new ID! field called `raw${uppercase(fieldName)}`, where `fieldName` is `t.relayGlobalId(fieldName)`,
   *  with the original value of the field.
   *
   * It's also possible to pass a string with a different name for the field
   *
   * You can also set this in a per field basis
   */
  shouldAddRawId?: boolean | string;

  /**
   * If no resolve is supplied, the default value to be used as global ID will be root[field]
   *
   * This defaults to the fieldName used when calling relayGlobalId(fieldName)
   *
   * If a resolve is passed, this is ignored
   *
   * You can also set this in a per field basis
   */
  field?: string;

  /**
   * You can use this to specificy your own resolve function for the ID
   *
   * You can also set this in a per field basis
   */
  resolve?: core.FieldResolver<TypeName, FieldName>;

  nonNullDefaults?: Omit<core.NonNullConfig, 'input'>;
};

export type RelayGlobalIdNexusFieldConfig<TypeName extends string, FieldName extends string> = {
  /**
   * If no resolve is supplied, the default value to be used as global ID will be root[field]
   *
   * This defaults to the fieldName used when calling relayGlobalId(fieldName)
   *
   * If a resolve is passed, this is ignored
   */
  field?: string;

  /**
   * Defaults to true - Adds a new ID! field called `raw${uppercase(fieldName)}`, where `fieldName` is `t.relayGlobalId(fieldName)`,
   *  with the original value of the field.
   *
   * It's also possible to pass a string with a different name for the field
   */
  shouldAddRawId?: boolean | string;

  /**
   * Defaults to the parent type of the current field.
   */
  typeName?: string;

  /**
   * You can use this to specificy your own resolve function for the ID
   */
  resolve?: core.FieldResolver<TypeName, FieldName>;
} & NexusGenPluginFieldConfig<TypeName, FieldName>;

export function relayGlobalIdPlugin(pluginConfig: RelayGlobalIdPluginConfig<string, string> = {}) {
  const {
    nexusFieldName = 'relayGlobalId',
    relayGlobalIdPluginImportId = 'nexus-plugin-relay-global-id',
    shouldAddRawId: shouldAddRawIdPluginConfig = true,
    field: fieldPluginConfig,
    resolve: resolvePluginConfig,
    nonNullDefaults,
  } = pluginConfig;

  return plugin({
    name: 'RelayGlobalId',
    description: 'add t.relayGlobalId(field) to the schema builder',
    fieldDefTypes: [
      core.printedGenTypingImport({
        module: relayGlobalIdPluginImportId,
        bindings: ['RelayGlobalIdNexusFieldConfig'],
      }),
    ],
    // we want to add a extension
    onInstall(builder) {
      builder.addType(
        dynamicOutputMethod({
          name: nexusFieldName,
          typeDefinition: `<FieldName extends string>(
            fieldName: FieldName,
            config?: RelayGlobalIdNexusFieldConfig<TypeName, FieldName>
          ): void`,
          factory({ typeName: parentTypeName, typeDef: t, args: factoryArgs }) {
            const [fieldName, fieldConfig = {}] = factoryArgs as [
              string,
              RelayGlobalIdNexusFieldConfig<string, string>,
            ];

            const {
              field = fieldPluginConfig || fieldName,
              shouldAddRawId = shouldAddRawIdPluginConfig,
              typeName = parentTypeName,
              resolve: resolveFn = resolvePluginConfig,
              ...remainingFieldConfig
            } = fieldConfig;

            // eslint-disable-next-line no-nested-ternary
            (nonNullDefaults ? (nonNullDefaults.output ? t.nonNull : t.nullable) : t).id(
              fieldName,
              {
                ...remainingFieldConfig,
                async resolve(root, args, ctx, info) {
                  const resolved = resolveFn ? await resolveFn(root, args, ctx, info) : root[field];
                  return resolved && toGlobalId(typeName, resolved);
                },
              },
            );

            if (shouldAddRawId) {
              // eslint-disable-next-line no-nested-ternary
              (nonNullDefaults ? (nonNullDefaults.output ? t.nonNull : t.nullable) : t).id(
                typeof shouldAddRawId === 'string'
                  ? shouldAddRawId
                  : `raw${fieldName.charAt(0).toUpperCase()}${fieldName.slice(1)}`,
                {
                  resolve: resolveFn || ((root) => root[field]),
                },
              );
            }
          },
        }),
      );
    },
  });
}
