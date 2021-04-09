import debugInit from 'debug';
import { enumType, inputObjectType, list, mutationField, nonNull, objectType } from 'nexus';
import { v4 } from 'uuid';

import { findManyCursorConnection } from '@devoxa/prisma-relay-cursor-connection';
import { PostStatus as DBPostStatus, User } from '@prisma/client';
import { defaultIds } from '@vlepo/shared';

import { Comment } from './Comment';
import { createImageInput, Image } from './Image';
import { Rating } from './Rating';
import { Reaction } from './Reaction';
import { ShareCount } from './ShareCount';
import { createTagInput, Tag } from './Tag';

const debug = debugInit('vlepo:Post');

export const Post = objectType({
  name: 'Post',
  definition(t) {
    t.implements('Node');
    t.id('id', {
      resolve: (root) => root.id,
    });
    t.model.owner();
    t.model.title();
    t.model.content();
    t.model.headerImageUrl();
    t.model.comments();
    t.model.shares();
    t.model.ratings();
    t.model.reactions();
    t.model.minuteRead();
    t.model.tags();
    t.model.status();
    t.model.images();
    t.model.editedAt();
    t.model.createdAt();
    t.model.updatedAt();
    t.model.viewCount();
    t.int('reactionCount', {
      async resolve({ id }, _args, ctx) {
        return ctx.prisma.reaction.count({
          where: {
            postId: id,
          },
        });
      },
    });
    t.int('commentCount', {
      async resolve({ id }, _args, ctx) {
        return ctx.prisma.comment.count({
          where: {
            postId: id,
          },
        });
      },
    });
    t.string('abstract', {
      resolve({ content }) {
        return content ? content.slice(0, 150) : null;
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
    t.connectionField('sharesConnection', {
      type: ShareCount,
      async resolve(_root, args, ctx) {
        const result = await findManyCursorConnection(
          (args) => ctx.prisma.shareCount.findMany(args),
          () => ctx.prisma.shareCount.count(),
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
    t.connectionField('ratingsConnection', {
      type: Rating,
      async resolve(_root, args, ctx) {
        const result = await findManyCursorConnection(
          (args) => ctx.prisma.rating.findMany(args),
          () => ctx.prisma.rating.count(),
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

export const PostStatus = enumType({
  name: 'PostStatus',
  members: Object.values(DBPostStatus),
});

export const createPostInput = inputObjectType({
  name: 'createPostInput',
  definition(t) {
    t.string('headerImageUrl');
    t.nonNull.string('title');
    t.field('tags', { type: list(nonNull(createTagInput)) });
    t.field('images', { type: list(nonNull(createImageInput)) });
    t.nonNull.string('content');
    t.nonNull.field('status', { type: PostStatus });
  },
});

export const creatPostResponse = objectType({
  name: 'creatPostResponse',
  definition(t) {
    t.nonNull.boolean('ok');
    t.string('error');
  },
});

export const creatPostMutation = mutationField('creatPostMutation', {
  type: creatPostResponse,
  args: {
    createPostInput: nonNull(createPostInput.asArg()),
  },
  authentication: true,
  authorize: async (_root, _args, ctx) => {
    const token = await ctx.oauth.extractAccessToken(ctx, true);
    if (token) {
      return ctx.oauth.verifyScope(token, ['post:create']);
    }
    return false;
  },
  resolve: async (_root, { createPostInput }, ctx) => {
    // passing the auth, therefor user must exist
    const currentUser = (await ctx.oauth.extractAccessToken(ctx, true))?.user as User;

    try {
      await ctx.knex.transaction(async (trx) => {
        const postIds = await trx('Post')
          .insert({
            id: v4(),
            blogId: defaultIds.blog,
            ownerId: currentUser.id,
            title: createPostInput.title,
            content: createPostInput.content,
            headerImageUrl: createPostInput.headerImageUrl,
            createdAt: new Date(),
            updatedAt: new Date(),
          })
          .returning('id');

        if (createPostInput.tags && createPostInput.tags.length > 0) {
          const tagIds = await trx('Tag')
            .insert(
              createPostInput.tags.map((t) => ({
                id: v4(),
                blogId: defaultIds.blog,
                ...t,
                createdAt: new Date(),
                updatedAt: new Date(),
              })),
            )
            .returning('id');

          await trx('_PostToTag').insert(
            tagIds.map((tid) => ({
              A: postIds[0],
              B: tid,
            })),
          );
        }

        if (createPostInput.images && createPostInput.images.length > 0) {
          await trx('Image')
            .insert(
              createPostInput.images.map((img) => ({
                id: v4(),
                url: img.url,
                postId: postIds[0],
              })),
            )
            .returning('id');
        }
      });
    } catch (err) {
      debug(err);
      return {
        ok: false,
        error: err.stack,
      };
    }

    return {
      ok: true,
    };
  },
});
