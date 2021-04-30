import { interfaceType, mutationField, nonNull, objectType, stringArg } from 'nexus';

import { findManyCursorConnection } from '@devoxa/prisma-relay-cursor-connection';
import { Language } from '@prisma/client';

import { OAuthCheckScope } from '../../oauth2/nexus';
import { fromGlobalId, toGlobalId } from '../plugins/relayGlobalId';
import { Image } from './Image';

export const Commendable = interfaceType({
  name: 'Commendable',
  definition(t) {
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
  },
});

export const Comment = objectType({
  name: 'Comment',
  definition(t) {
    t.implements('Node');
    t.id('id', {
      resolve: (root) => root.id,
    });
    t.model.owner();
    t.model.content();
    t.model.post();
    t.model.thought();
    t.model.parent();
    t.model.childComments();
    t.model.images();
    t.model.language();
    t.model.editedAt();
    t.model.createdAt();
    t.model.updatedAt();
    t.connectionField('childCommentsConnection', {
      type: Comment,
      async resolve({ id }, args, ctx) {
        const customArgs = {
          where: {
            parentId: id,
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
    t.connectionField('imagesConnection', {
      type: Image,
      async resolve({ id }, args, ctx) {
        const customArgs = {
          where: {
            commentId: id,
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
  },
});

export const creatCommentResponse = objectType({
  name: 'creatCommentResponse',
  definition(t) {
    t.nonNull.field('createCommentEdge', { type: 'CommentEdge' });
  },
});

export const creatCommentMutation = mutationField('creatCommentMutation', {
  type: creatCommentResponse,
  args: {
    parentId: nonNull(stringArg()),
    content: nonNull(stringArg()),
  },
  authentication: true,
  authorize: OAuthCheckScope('comment:create'),
  resolve: async (_root, { parentId, content }, ctx) => {
    const currentUser = ctx.currentUser!;

    // extract language code
    const language =
      (ctx.request.header['accept-language']
        ?.split(';')[0]
        .split(',')
        .find((c) => c.length === 2) as Language) ?? 'en';

    const comment = await ctx.prisma.comment.create({
      data: {
        owner: {
          connect: {
            id: currentUser.id,
          },
        },
        post: {
          connect: {
            id: fromGlobalId(parentId).id,
          },
        },
        content,
        language,
      },
    });

    ctx.searchIndex.saveObject({
      objectID: toGlobalId('Comment', comment.id),
      ...comment,
      __typename: 'Comment',
    });

    return {
      createCommentEdge: {
        cursor: comment.id,
        node: { ...comment, __typename: 'Comment' },
      },
    };
  },
});
