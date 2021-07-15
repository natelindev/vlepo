import { mutationField, nonNull, objectType, stringArg } from 'nexus';

export const Subscriber = objectType({
  name: 'Subscriber',
  definition(t) {
    t.implements('Node');
    t.relayGlobalId('id', { description: 'ID for a resource' });
    t.model.email();
    t.model.blog();
    t.model.unsubscribedAt();
    t.model.createdAt();
    t.model.updatedAt();
  },
});

export const subscribe = mutationField('subscribe', {
  type: 'Boolean',
  args: {
    email: nonNull(stringArg()),
    firstName: nonNull(stringArg()),
    blogId: nonNull(stringArg()),
  },
  resolve: async (__root, { email, firstName, blogId }, ctx) => {
    const existing = await ctx.prisma.subscriber.findFirst({
      where: {
        email,
      },
    });
    if (existing) {
      return false;
    }
    await ctx.prisma.subscriber.create({
      data: {
        email,
        firstName,
        blog: {
          connect: {
            id: blogId,
          },
        },
      },
    });
    return true;
  },
});

export const unsubscribe = mutationField('unsubscribe', {
  type: 'Boolean',
  args: {
    email: nonNull(stringArg()),
  },
  resolve: async (__root, { email }, ctx) => {
    await ctx.prisma.subscriber.update({
      where: {
        email,
      },
      data: {
        unsubscribedAt: new Date(),
      },
    });
    return true;
  },
});
