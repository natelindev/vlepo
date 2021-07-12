import { objectType } from 'nexus';
import { DBPaper, DBPost, DBProject } from 'src/types/db';

import { findManyCursorConnection } from '@devoxa/prisma-relay-cursor-connection';

import { connectionArgsValidator, orderByArgs } from '../util/connectionArgsValidator';
import { getVisibilityArgs } from '../util/visiblityArgs';
import { Paper } from './Paper';
import { Post } from './Post';
import { Project } from './Project';
import { Tag } from './Tag';
import { Thought } from './Thought';

export const Blog = objectType({
  name: 'Blog',
  definition(t) {
    t.implements('Node');
    t.relayGlobalId('id', { description: 'ID for a resource' });
    t.model.name();
    t.int('postViewCount', {
      async resolve({ id }, _args, ctx) {
        const allViewCounts = await ctx.prisma.post.findMany({
          select: {
            viewCount: true,
          },
          where: {
            blogId: id,
          },
        });
        return allViewCounts.map((avc) => avc.viewCount).reduce((prev, curr) => prev + curr, 0);
      },
    });
    t.int('postReactionCount', {
      async resolve({ id }, _args, ctx) {
        const result = await ctx.prisma.reaction.count({
          select: {
            postId: true,
          },
          where: {
            post: {
              blogId: id,
            },
          },
        });
        return result.postId;
      },
    });
    t.int('postCommentCount', {
      async resolve({ id }, _args, ctx) {
        const result = await ctx.prisma.comment.count({
          select: {
            postId: true,
          },
          where: {
            post: {
              blogId: id,
            },
          },
        });
        return result.postId;
      },
    });
    t.int('userCount', {
      async resolve(_root, _args, ctx) {
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
    t.model.slogan();

    t.connectionField('postsConnection', {
      type: Post,
      validateArgs: connectionArgsValidator<DBPost>([
        'viewCount',
        'editedAt',
        'createdAt',
        'updatedAt',
      ]),
      async resolve({ id }, args, ctx) {
        const customArgs = {
          where: {
            blogId: id,
            ...getVisibilityArgs(ctx),
          },
          orderBy: orderByArgs(args.orderBy),
        };
        const result = await findManyCursorConnection(
          (args) => ctx.prisma.post.findMany({ ...args, ...customArgs }),
          () => ctx.prisma.post.count(customArgs),
          args,
        );
        return result;
      },
      totalCount: (_source, _args, ctx) => ctx.state.totalCount,
    });
    t.connectionField('thoughtsConnection', {
      type: Thought,
      async resolve({ id }, args, ctx) {
        const customArgs = {
          where: {
            blogId: id,
          },
        };
        const result = await findManyCursorConnection(
          (args) => ctx.prisma.thought.findMany({ ...args, ...customArgs }),
          () => ctx.prisma.thought.count(customArgs),
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
            blogId: id,
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
    t.connectionField('papersConnection', {
      type: Paper,
      validateArgs: connectionArgsValidator<DBPaper>(['createdAt', 'updatedAt']),
      async resolve({ id }, args, ctx) {
        const customArgs = {
          where: {
            blogId: id,
            ...getVisibilityArgs(ctx),
          },
          orderBy: orderByArgs(args.orderBy),
        };
        const result = await findManyCursorConnection(
          (args) => ctx.prisma.paper.findMany({ ...args, ...customArgs }),
          () => ctx.prisma.paper.count(customArgs),
          args,
        );
        return result;
      },
      totalCount: (_source, _args, ctx) => ctx.state.totalCount,
    });
    t.connectionField('projectsConnection', {
      type: Project,
      validateArgs: connectionArgsValidator<DBProject>(['createdAt', 'updatedAt']),
      async resolve({ id }, args, ctx) {
        const customArgs = {
          where: {
            blogId: id,
            ...getVisibilityArgs(ctx),
          },
          orderBy: orderByArgs(args.orderBy),
        };
        const result = await findManyCursorConnection(
          (args) => ctx.prisma.project.findMany({ ...args, ...customArgs }),
          () => ctx.prisma.project.count(customArgs),
          args,
        );
        return result;
      },
      totalCount: (_source, _args, ctx) => ctx.state.totalCount,
    });
  },
});
