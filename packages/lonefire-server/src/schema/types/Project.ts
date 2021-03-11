import { objectType } from 'nexus';

import { findManyCursorConnection } from '@devoxa/prisma-relay-cursor-connection';

import { Image } from './Image';
import { Reaction } from './Reaction';
import { Tag } from './Tag';

export const Project = objectType({
  name: 'Project',
  definition(t) {
    t.model.id();
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
