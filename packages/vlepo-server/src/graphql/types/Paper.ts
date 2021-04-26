import { objectType } from 'nexus';

import { findManyCursorConnection } from '@devoxa/prisma-relay-cursor-connection';

import { Image } from './Image';
import { Reaction } from './Reaction';
import { Tag } from './Tag';

export const Paper = objectType({
  name: 'Paper',
  definition(t) {
    t.implements('Node');
    t.id('id', {
      resolve: (root) => root.id,
    });
    t.model.name();
    t.model.content();
    t.model.url();
    t.model.tags();
    t.model.images();
    t.model.reactions();
    t.model.createdAt();
    t.model.updatedAt();
    t.connectionField('imagesConnection', {
      type: Image,
      async resolve({ id }, args, ctx) {
        const customArgs = {
          where: {
            paperId: id,
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
            papers: {
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
            paperId: id,
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
