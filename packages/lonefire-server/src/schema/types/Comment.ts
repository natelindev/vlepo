import { objectType } from 'nexus';

import { findManyCursorConnection } from '@devoxa/prisma-relay-cursor-connection';

import { Image } from './Image';

export const Comment = objectType({
  name: 'Comment',
  definition(t) {
    t.model.id();
    t.model.owner();
    t.model.parent();
    t.model.childComments();
    t.model.images();
    t.model.language();
    t.model.editedAt();
    t.model.createdAt();
    t.model.updatedAt();
    t.connectionField('childCommentsConnection', {
      type: Comment,
      async resolve(_root, args, ctx) {
        const result = await findManyCursorConnection(
          (args) => ctx.prisma.comment.findMany(args),
          () => ctx.prisma.comment.count(),
          args,
        );
        return result;
      },
    });
    t.connectionField('imagesConnection', {
      type: Image,
      async resolve(_root, args, ctx) {
        const result = await findManyCursorConnection(
          (args) => ctx.prisma.image.findMany(args),
          () => ctx.prisma.image.count(),
          args,
        );
        return result;
      },
    });
  },
});
