import { inputObjectType, objectType } from 'nexus';

import { findManyCursorConnection } from '@devoxa/prisma-relay-cursor-connection';

import { Paper } from './Paper';
import { Post } from './Post';
import { Project } from './Project';
import { Thought } from './Thought';

export const Tag = objectType({
  name: 'Tag',
  definition(t) {
    t.implements('Node');
    t.relayGlobalId('id', { description: 'ID for a resource' });
    t.model.name();
    t.model.mainColor();
    t.model.secondaryColor();
    t.model.posts();
    t.model.thoughts();
    t.model.projects();
    t.model.papers();
    t.model.createdAt();
    t.model.updatedAt();
    t.connectionField('postsConnection', {
      type: Post,
      async resolve({ id }, args, ctx) {
        const customArgs = {
          where: {
            tags: {
              some: {
                id,
              },
            },
          },
        };
        const result = await findManyCursorConnection(
          (args) => ctx.prisma.post.findMany({ ...args, ...customArgs }),
          () => ctx.prisma.post.count(customArgs),
          args,
        );
        return result;
      },
    });
    t.connectionField('thoughtsConnection', {
      type: Thought,
      async resolve({ id }, args, ctx) {
        const customArgs = {
          where: {
            tags: {
              some: {
                id,
              },
            },
          },
        };
        const result = await findManyCursorConnection(
          (args) => ctx.prisma.thought.findMany({ ...args, ...customArgs }),
          () => ctx.prisma.thought.count(customArgs),
          args,
        );
        return result;
      },
    });
    t.connectionField('projectConnection', {
      type: Project,
      async resolve({ id }, args, ctx) {
        const customArgs = {
          where: {
            tags: {
              some: {
                id,
              },
            },
          },
        };
        const result = await findManyCursorConnection(
          (args) => ctx.prisma.project.findMany({ ...args, ...customArgs }),
          () => ctx.prisma.project.count(customArgs),
          args,
        );
        return result;
      },
    });
    t.connectionField('papersConnection', {
      type: Paper,
      async resolve({ id }, args, ctx) {
        const customArgs = {
          where: {
            tags: {
              some: {
                id,
              },
            },
          },
        };
        const result = await findManyCursorConnection(
          (args) => ctx.prisma.paper.findMany({ ...args, ...customArgs }),
          () => ctx.prisma.paper.count(customArgs),
          args,
        );
        return result;
      },
    });
  },
});

export const createTagInput = inputObjectType({
  name: 'createTagInput',
  definition(t) {
    t.nonNull.string('name');
  },
});
