import { inputObjectType, nonNull, queryField } from 'nexus';

import { findManyCursorConnection } from '@devoxa/prisma-relay-cursor-connection';

import { OAuthCheckScope } from '../../oauth2/nexus';
import { fromGlobalId } from '../plugins/relayGlobalId';
import { connectionArgsValidator, orderByArgs } from '../util/connectionArgsValidator';
import { getVisibilityArgs } from '../util/visibilityArgs';
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
import { User } from './User';

import type {
  DBBlog,
  DBComment,
  DBImage,
  DBLink,
  DBPaper,
  DBPost,
  DBProject,
  DBRating,
  DBReaction,
  DBShareCount,
  DBTag,
  DBThought,
  DBTranslation,
} from 'src/types/db';

const whereUniqueInput = inputObjectType({
  name: 'whereUniqueInput',
  definition(t) {
    t.string('id');
  },
});

export const Query = queryField((t) => {
  t.field('blog', {
    type: Blog,
    args: {
      where: nonNull(whereUniqueInput.asArg()),
    },
    resolve: async (_root, { where: { id } }, ctx) => {
      if (!OAuthCheckScope('blog')) {
        return null;
      }
      return ctx.prisma.blog.findFirst({
        where: {
          id: fromGlobalId(id ?? '').id,
        },
      });
    },
  });

  t.field('user', {
    type: User,
    args: {
      where: nonNull(whereUniqueInput.asArg()),
    },
    resolve: async (_root, { where: { id } }, ctx) => {
      return ctx.prisma.user.findFirst({
        where: {
          id: fromGlobalId(id ?? '').id,
        },
      });
    },
  });

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

  t.connectionField('BlogsConnection', {
    type: Blog,
    validateArgs: connectionArgsValidator<DBBlog>(['visitorCount', 'createdAt', 'updatedAt']),
    async resolve(_root, args, ctx) {
      const customArgs = {
        orderBy: orderByArgs(args.orderBy),
      };
      const result = await findManyCursorConnection(
        (args) => ctx.prisma.blog.findMany({ ...args, ...customArgs }),
        () => ctx.prisma.blog.count(customArgs),
        args,
      );
      return result;
    },
    totalCount: (_source, _args, ctx) => ctx.state.totalCount,
  });

  t.connectionField('PostsConnection', {
    type: Post,
    validateArgs: connectionArgsValidator<DBPost>([
      'viewCount',
      'editedAt',
      'createdAt',
      'updatedAt',
    ]),
    async resolve(_root, args, ctx) {
      const customArgs = {
        orderBy: orderByArgs(args.orderBy),
        where: {
          ...(await getVisibilityArgs(ctx)),
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
  t.connectionField('ThoughtsConnection', {
    type: Thought,
    validateArgs: connectionArgsValidator<DBThought>(['editedAt', 'createdAt', 'updatedAt']),
    async resolve(_root, args, ctx) {
      const customArgs = {
        where: {
          ...(await getVisibilityArgs(ctx)),
        },
        orderBy: orderByArgs(args.orderBy),
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
  t.connectionField('CommentsConnection', {
    type: Comment,
    validateArgs: connectionArgsValidator<DBComment>(['editedAt', 'createdAt', 'updatedAt']),
    async resolve(_root, args, ctx) {
      const customArgs = {
        orderBy: orderByArgs(args.orderBy),
      };
      const result = await findManyCursorConnection(
        (args) => ctx.prisma.comment.findMany({ ...args, ...customArgs }),
        () => ctx.prisma.comment.count(customArgs),
        args,
      );
      return result;
    },
    totalCount: (_source, _args, ctx) => ctx.state.totalCount,
  });
  t.connectionField('TagsConnection', {
    type: Tag,
    validateArgs: connectionArgsValidator<DBTag>(['createdAt', 'updatedAt']),
    async resolve(_root, args, ctx) {
      const customArgs = {
        orderBy: orderByArgs(args.orderBy),
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
  t.connectionField('ImagesConnection', {
    type: Image,
    validateArgs: connectionArgsValidator<DBImage>(['createdAt', 'updatedAt']),
    async resolve(_root, args, ctx) {
      const customArgs = {
        orderBy: orderByArgs(args.orderBy),
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
  t.connectionField('SharesConnection', {
    type: ShareCount,
    validateArgs: connectionArgsValidator<DBShareCount>(['createdAt', 'updatedAt']),
    async resolve(_root, args, ctx) {
      const customArgs = {
        orderBy: orderByArgs(args.orderBy),
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
  t.connectionField('RatingsConnection', {
    type: Rating,
    validateArgs: connectionArgsValidator<DBRating>(['createdAt', 'updatedAt']),
    async resolve(_root, args, ctx) {
      const customArgs = {
        orderBy: orderByArgs(args.orderBy),
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
  t.connectionField('ReactionsConnection', {
    type: Reaction,
    validateArgs: connectionArgsValidator<DBReaction>(['createdAt', 'updatedAt']),
    async resolve(_root, args, ctx) {
      const customArgs = {
        orderBy: orderByArgs(args.orderBy),
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
  t.connectionField('PapersConnection', {
    type: Paper,
    validateArgs: connectionArgsValidator<DBPaper>(['createdAt', 'updatedAt']),
    async resolve(_root, args, ctx) {
      const customArgs = {
        where: {
          ...(await getVisibilityArgs(ctx)),
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
  t.connectionField('ProjectsConnection', {
    type: Project,
    validateArgs: connectionArgsValidator<DBProject>(['createdAt', 'updatedAt']),
    async resolve(_root, args, ctx) {
      const customArgs = {
        where: {
          ...(await getVisibilityArgs(ctx)),
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
  t.connectionField('TranslationsConnection', {
    type: Translation,
    validateArgs: connectionArgsValidator<DBTranslation>(['createdAt', 'updatedAt']),
    async resolve(_root, args, ctx) {
      const customArgs = {
        orderBy: orderByArgs(args.orderBy),
      };
      const result = await findManyCursorConnection(
        (args) => ctx.prisma.translation.findMany({ ...args, ...customArgs }),
        () => ctx.prisma.translation.count(customArgs),
        args,
      );
      return result;
    },
    totalCount: (_source, _args, ctx) => ctx.state.totalCount,
  });
  t.connectionField('LinksConnection', {
    type: Link,
    validateArgs: connectionArgsValidator<DBLink>(['createdAt', 'updatedAt']),
    async resolve(_root, args, ctx) {
      const customArgs = {
        orderBy: orderByArgs(args.orderBy),
      };
      const result = await findManyCursorConnection(
        (args) => ctx.prisma.link.findMany({ ...args, ...customArgs }),
        () => ctx.prisma.link.count(customArgs),
        args,
      );
      return result;
    },
    totalCount: (_source, _args, ctx) => ctx.state.totalCount,
  });
});
