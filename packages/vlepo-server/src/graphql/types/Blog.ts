import { objectType } from 'nexus';

import { findManyCursorConnection } from '@devoxa/prisma-relay-cursor-connection';

import { Paper } from './Paper';
import { Post } from './Post';
import { Project } from './Project';
import { Tag } from './Tag';
import { Thought } from './Thought';

export const Blog = objectType({
  name: 'Blog',
  definition(t) {
    t.implements('Node');
    t.id('id', {
      resolve: (root) => root.id,
    });
    t.model.name();
    t.int('postViewCount', {
      async resolve(_source, _args, ctx) {
        const allViewCounts = await ctx.prisma.post.findMany({
          select: {
            viewCount: true,
          },
        });
        return allViewCounts.map((avc) => avc.viewCount).reduce((prev, curr) => prev + curr, 0);
      },
    });
    t.int('postReactionCount', {
      async resolve(_source, _args, ctx) {
        const result = await ctx.prisma.reaction.count({
          select: {
            postId: true,
          },
        });
        return result.postId;
      },
    });
    t.int('postCommentCount', {
      async resolve(_source, _args, ctx) {
        const result = await ctx.prisma.comment.count({
          select: {
            postId: true,
          },
        });
        return result.postId;
      },
    });
    t.int('userCount', {
      async resolve(_source, _args, ctx) {
        return ctx.prisma.user.count();
      },
    });
    t.model.visitorCount();
    t.model.createdAt();
    t.model.updatedAt();

    t.model.posts();
    t.model.thoughts();
    t.model.tags();
    t.model.links();
    t.model.papers();
    t.model.projects();

    t.connectionField('postsConnection', {
      type: Post,
      async resolve(_root, args, ctx) {
        const postFilterArgs = {
          where: {
            status: 'PUBLISHED' as const,
          },
          orderBy: {
            createdAt: 'desc' as const,
          },
        };
        const result = await findManyCursorConnection(
          (args) => ctx.prisma.post.findMany({ ...args, ...postFilterArgs }),
          () => ctx.prisma.post.count(postFilterArgs),
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
    t.connectionField('projectsConnection', {
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
  },
});
