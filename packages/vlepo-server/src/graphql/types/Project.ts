import { serialize } from 'next-mdx-remote/serialize';
import { nonNull, objectType } from 'nexus';
import remark from 'remark';
import mdx from 'remark-mdx';
import strip from 'remark-mdx-to-plain-text';

import { findManyCursorConnection } from '@devoxa/prisma-relay-cursor-connection';

import { Image } from './Image';
import { Reaction } from './Reaction';
import { Tag } from './Tag';

export const Project = objectType({
  name: 'Project',
  definition(t) {
    t.implements('Node');
    t.relayGlobalId('id', { description: 'ID for a resource' });
    t.model.name();
    t.model.content();
    t.field('renderedContent', {
      type: nonNull('Json'),
      async resolve({ content }) {
        return JSON.stringify(await serialize(content));
      },
    });
    t.string('abstract', {
      async resolve({ content }) {
        const strippedContent = await remark()
          .use(mdx)
          .use(strip)
          .process(content ?? '');
        const result = strippedContent.toString();
        return result.length > 0 ? result.slice(0, 150) : null;
      },
    });
    t.model.visibility();
    t.model.url();
    t.model.headerImageUrl();
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
            projectId: id,
          },
        };
        const result = await findManyCursorConnection(
          (args) => ctx.prisma.image.findMany({ ...args, ...customArgs }),
          () => ctx.prisma.image.count(customArgs),
          args,
        );
        return result;
      },
      totalCount: (_source, _args, ctx) => ctx.state.totalCount,
    });
    t.connectionField('tagsConnection', {
      type: Tag,
      async resolve({ id }, args, ctx) {
        const customArgs = {
          where: {
            projects: {
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
      totalCount: (_source, _args, ctx) => ctx.state.totalCount,
    });
    t.connectionField('reactionsConnection', {
      type: Reaction,
      async resolve({ id }, args, ctx) {
        const customArgs = {
          where: {
            projectId: id,
          },
        };
        const result = await findManyCursorConnection(
          (args) => ctx.prisma.reaction.findMany({ ...args, ...customArgs }),
          () => ctx.prisma.reaction.count(customArgs),
          args,
        );
        return result;
      },
      totalCount: (_source, _args, ctx) => ctx.state.totalCount,
    });
  },
});
