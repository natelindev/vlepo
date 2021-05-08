import { objectType } from 'nexus';
import { __, match } from 'ts-pattern';

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
      async resolve({ id }, _args, ctx) {
        return ctx.prisma.user.count({
          where: {
            blogs: {
              some: {
                id,
              },
            },
          },
        });
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
      async resolve({ id }, args, ctx) {
        const accessToken = await ctx.oauth.extractAccessToken(ctx, true);
        const currentUser = accessToken?.user;
        const customArgs = {
          where: {
            blogId: id,
            ...match<typeof currentUser>(currentUser)
              .with({ id: __.string }, (u) => {
                return {
                  OR: [
                    {
                      ownerId: u.id,
                    },
                    {
                      status: 'PUBLISHED' as const,
                    },
                  ],
                };
              })
              .with(undefined, () => ({
                status: 'PUBLISHED' as const,
              }))
              .run(),
          },
          orderBy: {
            createdAt: 'desc' as const,
          },
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
      async resolve({ id }, args, ctx) {
        const customArgs = {
          where: {
            blogId: id,
          },
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
      async resolve({ id }, args, ctx) {
        const customArgs = {
          where: {
            blogId: id,
          },
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
