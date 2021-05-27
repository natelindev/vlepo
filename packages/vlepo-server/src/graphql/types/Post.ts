import { serialize } from 'next-mdx-remote/serialize';
import {
  enumType,
  inputObjectType,
  list,
  mutationField,
  nonNull,
  objectType,
  stringArg,
} from 'nexus';
import readingTime from 'reading-time';
import remark from 'remark';
import mdx from 'remark-mdx';
import strip from 'remark-mdx-to-plain-text';
import { __, match } from 'ts-pattern';
import { v4 } from 'uuid';

import { findManyCursorConnection } from '@devoxa/prisma-relay-cursor-connection';
import { PostStatus as DBPostStatus } from '@prisma/client';

import { OAuthCheckScope } from '../../oauth2/nexus';
import { genPostSlug } from '../../util/genPostSlug';
import { connectionArgsValidator, orderByArgs } from '../util/connectionArgsValidator';
import { Comment } from './Comment';
import { createImageInput, Image } from './Image';
import { Rating } from './Rating';
import { Reaction } from './Reaction';
import { Void } from './Scalars';
import { ShareCount } from './ShareCount';
import { createTagInput, Tag } from './Tag';

import type { DBComment, DBTag } from 'src/types/db';

export const Post = objectType({
  name: 'Post',
  definition(t) {
    t.implements('Node');
    t.implements('Commendable');
    t.relayGlobalId('id', { description: 'ID for a resource' });
    t.model.owner();
    t.model.title();
    t.model.slug();
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
      async resolve({ content }) {
        const strippedContent = await remark()
          .use(mdx)
          .use(strip)
          .process(content ?? '');
        const result = strippedContent.toString();
        return result.length > 0 ? result.slice(0, 150) : null;
      },
    });
    t.connectionField('commentsConnection', {
      type: Comment,
      validateArgs: connectionArgsValidator<DBComment>(['createdAt', 'updatedAt']),
      async resolve({ id }, args, ctx) {
        const customArgs = {
          where: {
            postId: id,
          },

          orderBy: orderByArgs(args.orderBy),
        };
        const result = await findManyCursorConnection(
          (args) => ctx.prisma.comment.findMany({ ...args, ...customArgs }),
          () => ctx.prisma.comment.count(customArgs),
          args,
        );
        const renderedResult = {
          ...result,
          edges: await Promise.all(
            result.edges.map(async (e) => ({
              ...e,
              node: {
                ...e.node,
                renderedContent: JSON.stringify(await serialize(e.node.content)),
              },
            })),
          ),
        };
        ctx.state.totalCount = await ctx.prisma.comment.count(customArgs);
        return renderedResult;
      },
      totalCount: (_source, _args, ctx) => ctx.state.totalCount,
    });
    t.connectionField('sharesConnection', {
      type: ShareCount,
      async resolve({ id }, args, ctx) {
        const customArgs = {
          where: {
            postId: id,
          },
        };
        const result = await findManyCursorConnection(
          (args) => ctx.prisma.shareCount.findMany({ ...args, ...customArgs }),
          () => ctx.prisma.shareCount.count(customArgs),
          args,
        );
        return result;
      },
      totalCount: (_source, _args, ctx) => ctx.state.totalCount,
    });
    t.connectionField('imagesConnection', {
      type: Image,
      async resolve({ id }, args, ctx) {
        const customArgs = {
          where: {
            postId: id,
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
      validateArgs: connectionArgsValidator<DBTag>(['name', 'createdAt', 'updatedAt']),
      async resolve({ id }, args, ctx) {
        const customArgs = {
          where: {
            posts: {
              some: {
                id,
              },
            },
            orderBy: orderByArgs(args.orderBy),
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
    t.connectionField('ratingsConnection', {
      type: Rating,
      async resolve({ id }, args, ctx) {
        const customArgs = {
          where: {
            postId: id,
          },
        };
        const result = await findManyCursorConnection(
          (args) => ctx.prisma.rating.findMany({ ...args, ...customArgs }),
          () => ctx.prisma.rating.count(customArgs),
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
            postId: id,
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
    t.nonNull.field('createPostEdge', { type: 'PostEdge' });
  },
});

export const viewPostMutation = mutationField('viewPost', {
  type: Void,
  args: {
    id: stringArg(),
    slug: stringArg(),
  },
  resolve: async (_root, { id, slug }, ctx) => {
    if (!slug && !id) {
      return;
    }
    const dbPost = await ctx.prisma.post.findFirst({
      select: {
        viewCount: true,
      },
      where: match({ id, slug })
        .with({ id: __.string }, (v) => ({ id: v.id }))
        .with({ slug: __.string }, (v) => ({ slug: v.slug }))
        .run(),
    });
    if (dbPost) {
      await ctx.prisma.post.update({
        where: match({ id, slug })
          .with({ id: __.string }, (v) => ({ id: v.id }))
          .with({ slug: __.string }, (v) => ({ slug: v.slug }))
          .run(),
        data: {
          viewCount: dbPost.viewCount + 1,
        },
      });
    }
  },
});

export const creatPostMutation = mutationField('creatPostMutation', {
  type: creatPostResponse,
  args: {
    createPostInput: nonNull(createPostInput.asArg()),
  },
  authentication: true,
  authorize: OAuthCheckScope('post:create'),
  resolve: async (_root, { createPostInput }, ctx) => {
    const currentUser = ctx.state.user!;
    return ctx.knex.transaction(async (trx) => {
      const post = (
        await trx('Post')
          .insert({
            id: v4(),
            blogId: process.env.NEXT_PUBLIC_DEFAULT_BLOG_ID,
            ownerId: currentUser.id,
            status: createPostInput.status,
            title: createPostInput.title,
            slug: genPostSlug(createPostInput.title),
            content: createPostInput.content,
            headerImageUrl: createPostInput.headerImageUrl,
            minuteRead: Math.ceil(readingTime(createPostInput.content).minutes),
            createdAt: new Date(),
            updatedAt: new Date(),
          })
          .returning('*')
      )[0];

      if (createPostInput.tags && createPostInput.tags.length > 0) {
        const existingTags = await trx('Tag')
          .whereIn(
            'name',
            createPostInput.tags.map((t) => t.name),
          )
          .returning(['id', 'name']);

        const newTags = createPostInput.tags.filter((t) =>
          existingTags.every((et) => et.name !== t.name),
        );

        const newTagIds =
          newTags.length > 0
            ? await trx('Tag')
                .insert(
                  newTags.map((t) => ({
                    id: v4(),
                    blogId: process.env.NEXT_PUBLIC_DEFAULT_BLOG_ID,
                    name: t.name,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                  })),
                )
                .returning('id')
            : [];

        const tagIds = [...existingTags.map((t) => t.id), ...newTagIds];

        await trx('_PostToTag').insert(
          tagIds.map((tid) => ({
            A: post.id,
            B: tid,
          })),
        );
      }

      // connect the images including header image
      if (
        createPostInput.headerImageUrl ||
        (createPostInput.images && createPostInput.images.length > 0)
      ) {
        await trx('Image')
          .insert(
            [...(createPostInput.images ?? []), { url: createPostInput.headerImageUrl }]
              .filter((i): i is { url: string } => Boolean(i.url))
              .map((image) => ({
                id: v4(),
                url: image.url,
                postId: post.id,
                ownerId: currentUser.id,
                createdAt: new Date(),
                updatedAt: new Date(),
              })),
          )
          .onConflict('url')
          .merge(['url', 'postId']);
      }

      // only index published posts
      if (post.status === DBPostStatus.PUBLISHED) {
        ctx.searchIndex.saveObject({
          objectID: post.id,
          ...post,
          content: undefined,
          __typename: 'Post',
        });
      }

      return {
        createPostEdge: {
          cursor: post.id,
          node: { ...post, __typename: 'Post' },
        },
      };
    });
  },
});
