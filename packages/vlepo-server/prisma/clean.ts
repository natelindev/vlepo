import { PrismaClient } from '@prisma/client';

(async () => {
  const prisma = new PrismaClient();
  await Promise.all([
    prisma.user.deleteMany(),
    prisma.userRole.deleteMany(),
    prisma.post.deleteMany(),
    prisma.oAuthScope.deleteMany(),
    prisma.oAuthClient.deleteMany(),
  ]);
  await prisma.$disconnect();
})();
