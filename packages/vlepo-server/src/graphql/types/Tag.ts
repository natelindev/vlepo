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
    t.id('id', {
      resolve: (root) => root.id,
    });
    t.model.name();
    t.model.posts();
    t.model.thoughts();
    t.model.projects();
    t.model.papers();
    t.model.createdAt();
    t.model.updatedAt();
    t.connectionField('postsConnection', {
      type: Post,
      async resolve(_root, args, ctx) {
        const result = await findManyCursorConnection(
          (args) => ctx.prisma.post.findMany(args),
          () => ctx.prisma.post.count(),
          args,
        );
        return result;
      },
    });
    t.connectionField('thoughtsConnection', {
      type: Thought,
      async resolve(_root, args, ctx) {
        const result = await findManyCursorConnection(
          (args) => ctx.prisma.thought.findMany(args),
          () => ctx.prisma.thought.count(),
          args,
        );
        return result;
      },
    });
    t.connectionField('projectConnection', {
      type: Project,
      async resolve(_root, args, ctx) {
        const result = await findManyCursorConnection(
          (args) => ctx.prisma.project.findMany(args),
          () => ctx.prisma.project.count(),
          args,
        );
        return result;
      },
    });
    t.connectionField('papersConnection', {
      type: Paper,
      async resolve(_root, args, ctx) {
        const result = await findManyCursorConnection(
          (args) => ctx.prisma.paper.findMany(args),
          () => ctx.prisma.paper.count(),
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
