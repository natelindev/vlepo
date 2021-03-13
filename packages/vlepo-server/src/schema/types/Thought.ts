import { objectType } from 'nexus';

import { findManyCursorConnection } from '@devoxa/prisma-relay-cursor-connection';

import { Comment } from './Comment';
import { Image } from './Image';
import { Reaction } from './Reaction';
import { ShareCount } from './ShareCount';
import { Tag } from './Tag';

export const Thought = objectType({
  name: 'Thought',
  definition(t) {
    t.model.id();
    t.model.content();
    t.model.status();
    t.model.images();
    t.model.comments();
    t.model.reactions();
    t.model.shares();
    t.model.tags();
    t.model.editedAt();
    t.model.createdAt();
    t.model.updatedAt();
    t.connectionField('commentsConnection', {
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
    t.connectionField('sharesConnection', {
      type: ShareCount,
      async resolve(_root, args, ctx) {
        const result = await findManyCursorConnection(
          (args) => ctx.prisma.shareCount.findMany(args),
          () => ctx.prisma.shareCount.count(),
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
    t.connectionField('tagsConnection', {
      type: Tag,
      async resolve(_root, args, ctx) {
        const result = await findManyCursorConnection(
          (args) => ctx.prisma.tag.findMany(args),
          () => ctx.prisma.tag.count(),
          args,
        );
        return result;
      },
    });
    t.connectionField('reactionsConnection', {
      type: Reaction,
      async resolve(_root, args, ctx) {
        const result = await findManyCursorConnection(
          (args) => ctx.prisma.reaction.findMany(args),
          () => ctx.prisma.reaction.count(),
          args,
        );
        return result;
      },
    });
  },
});
