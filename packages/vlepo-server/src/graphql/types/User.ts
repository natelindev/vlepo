import { list, nonNull, objectType } from 'nexus';

import { findManyCursorConnection } from '@devoxa/prisma-relay-cursor-connection';

import { OAuthResolve } from '../../oauth2/nexus';
import { Comment } from './Comment';
import { Image } from './Image';
import { Post } from './Post';
import { Thought } from './Thought';

export const User = objectType({
  name: 'User',
  definition(t) {
    t.implements('Node');
    t.implements('Commendable');
    t.id('id', {
      resolve: (root) => root.id,
    });
    t.model.name();
    t.model.email({ resolve: OAuthResolve('user:email:view') });
    t.model.website();
    t.model.profileImageUrl();
    t.model.description();
    t.model.posts();
    t.model.thoughts();
    t.model.roles();
    t.model.comments();
    t.model.images();
    t.model.createdAt();
    t.model.updatedAt();
    t.field('scopes', {
      type: nonNull(list('String')),
      resolve: async (root, _args, ctx) => {
        const user = await ctx.prisma.user.findFirst({
          where: {
            id: root.id,
          },
          select: {
            roles: {
              include: {
                scopes: true,
              },
            },
          },
        });
        return (
          user?.roles.reduce<string[]>(
            (prev, curr) => [...prev, ...(curr.scopes?.map((s) => s.value) ?? [])],
            [],
          ) ?? []
        );
      },
    });
    t.connectionField('postsConnection', {
      type: Post,
      async resolve({ id }, args, ctx) {
        const customArgs = {
          where: {
            ownerId: id,
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
  },
});
