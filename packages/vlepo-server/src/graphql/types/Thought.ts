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
    t.implements('Node');
    t.id('id', {
      resolve: (root) => root.id,
    });
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
      async resolve({ id }, args, ctx) {
        const customArgs = {
          where: {
            thoughtId: id,
          },
        };
        const result = await findManyCursorConnection(
          (args) => ctx.prisma.comment.findMany({ ...args, ...customArgs }),
          () => ctx.prisma.comment.count(customArgs),
          args,
        );
        return result;
      },
    });
    t.connectionField('sharesConnection', {
      type: ShareCount,
      async resolve({ id }, args, ctx) {
        const customArgs = {
          where: {
            thoughtId: id,
          },
        };
        const result = await findManyCursorConnection(
          (args) => ctx.prisma.shareCount.findMany({ ...args, ...customArgs }),
          () => ctx.prisma.shareCount.count(customArgs),
          args,
        );
        return result;
      },
    });
    t.connectionField('imagesConnection', {
      type: Image,
      async resolve({ id }, args, ctx) {
        const customArgs = {
          where: {
            thoughtId: id,
          },
        };
        const result = await findManyCursorConnection(
          (args) => ctx.prisma.image.findMany({ ...args, ...customArgs }),
          () => ctx.prisma.image.count(customArgs),
          args,
        );
        return result;
      },
    });
    t.connectionField('tagsConnection', {
      type: Tag,
      async resolve({ id }, args, ctx) {
        const customArgs = {
          where: {
            thoughts: {
              some: {
                id,
              },
            },
          },
        };
        const result = await findManyCursorConnection(
          (args) => ctx.prisma.tag.findMany({ ...args, ...customArgs }),
          () => ctx.prisma.tag.count(customArgs),
          args,
        );
        return result;
      },
    });
    t.connectionField('reactionsConnection', {
      type: Reaction,
      async resolve({ id }, args, ctx) {
        const customArgs = {
          where: {
            thoughtId: id,
          },
        };
        const result = await findManyCursorConnection(
          (args) => ctx.prisma.reaction.findMany({ ...args, ...customArgs }),
          () => ctx.prisma.reaction.count(customArgs),
          args,
        );
        return result;
      },
    });
  },
});
