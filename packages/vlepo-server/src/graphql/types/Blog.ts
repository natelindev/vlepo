import { objectType } from 'nexus';

export const Blog = objectType({
  name: 'Blog',
  definition(t) {
    t.implements('Node');
    t.nonNull.id('id', {
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
  },
});
