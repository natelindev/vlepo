import { queryField } from 'nexus';

import { findManyCursorConnection } from '@devoxa/prisma-relay-cursor-connection';

import { Blog } from './Blog';
import { Comment } from './Comment';
import { Image } from './Image';
import { Link } from './Link';
import { Paper } from './Paper';
import { Post } from './Post';
import { Project } from './Project';
import { Rating } from './Rating';
import { Reaction } from './Reaction';
import { ShareCount } from './ShareCount';
import { Tag } from './Tag';
import { Thought } from './Thought';
import { Translation } from './Translation';

export const Query = queryField((t) => {
  t.crud.blog();

  t.crud.user();
  t.crud.post();
  t.crud.tag();
  t.crud.comment();
  t.crud.image();
  t.crud.link();
  t.crud.paper();
  t.crud.project();
  t.crud.rating();
  t.crud.reaction();
  t.crud.shareCount();
  t.crud.thought();
  t.crud.translation();
  t.crud.userRole();

  t.crud.users();
  t.crud.posts();
  t.crud.tags();
  t.crud.comments();
  t.crud.images();
  t.crud.links();
  t.crud.papers();
  t.crud.projects();
  t.crud.ratings();
  t.crud.reactions();
  t.crud.shareCounts();
  t.crud.thoughts();
  t.crud.translations();
  t.crud.userRoles();

  t.connectionField('BlogsConnection', {
    type: Blog,
    async resolve(_root, args, ctx) {
      const result = await findManyCursorConnection(
        (args) => ctx.prisma.blog.findMany(args),
        () => ctx.prisma.blog.count(),
        args,
      );
      return result;
    },
  });

  t.connectionField('PostsConnection', {
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
  t.connectionField('ThoughtsConnection', {
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
  t.connectionField('CommentsConnection', {
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
  t.connectionField('TagsConnection', {
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
  t.connectionField('ImagesConnection', {
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
  t.connectionField('SharesConnection', {
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
  t.connectionField('TagsConnection', {
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
  t.connectionField('RatingsConnection', {
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
  t.connectionField('ReactionsConnection', {
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
  t.connectionField('PapersConnection', {
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
  t.connectionField('ProjectsConnection', {
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
  t.connectionField('TranslationsConnection', {
    type: Translation,
    async resolve(_root, args, ctx) {
      const result = await findManyCursorConnection(
        (args) => ctx.prisma.translation.findMany(args),
        () => ctx.prisma.translation.count(),
        args,
      );
      return result;
    },
  });
  t.connectionField('LinksConnection', {
    type: Link,
    async resolve(_root, args, ctx) {
      const result = await findManyCursorConnection(
        (args) => ctx.prisma.link.findMany(args),
        () => ctx.prisma.link.count(),
        args,
      );
      return result;
    },
  });
});
