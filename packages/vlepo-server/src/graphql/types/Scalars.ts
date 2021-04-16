import { GraphQLVoid } from 'graphql-scalars';
import { FileUpload, GraphQLUpload } from 'graphql-upload';
import { scalarType } from 'nexus';

export type FileUploadType = Promise<FileUpload>;
export type Void = void;

export const Upload = scalarType({
  name: GraphQLUpload.name,
  sourceType: {
    module: __filename,
    export: 'FileUploadType',
  },
  asNexusMethod: 'upload', // We set this to be used as a method later as `t.upload()` if needed
  description: GraphQLUpload.description,
  serialize: GraphQLUpload.serialize,
  parseValue: GraphQLUpload.parseValue,
  parseLiteral: GraphQLUpload.parseLiteral,
});

export const Void = scalarType({
  name: GraphQLVoid.name,
  asNexusMethod: 'void',
  sourceType: {
    module: __filename,
    export: 'Void',
  },
  description: GraphQLVoid.description,
  serialize: GraphQLVoid.serialize,
  parseValue: GraphQLVoid.parseValue,
  parseLiteral: GraphQLVoid.parseLiteral,
});
