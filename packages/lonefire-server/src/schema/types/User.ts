import { objectType } from 'nexus';

import { findManyCursorConnection } from '@devoxa/prisma-relay-cursor-connection';

import { Comment } from './Comment';
import { Image } from './Image';
import { Post } from './Post';
import { Thought } from './Thought';

export const User = objectType({
  name: 'User',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.email();
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
    t.connectionField('postsConnection', {
      type: Post,
      async resolve(_, args, ctx) {
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
      async resolve(_, args, ctx) {
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
      async resolve(_, args, ctx) {
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
      async resolve(_, args, ctx) {
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
