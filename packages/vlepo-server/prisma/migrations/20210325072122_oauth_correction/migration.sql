/*
  Warnings:

  - The migration will remove the values [extension] on the enum `OAuthGrants`. If these variants are still used in the database, the migration will fail.
  - You are about to drop the column `userId` on the `OAuthClient` table. All the data in the column will be lost.
  - You are about to drop the column `parentId` on the `OAuthScope` table. All the data in the column will be lost.
  - Added the required column `userId` to the `OAuthAccessToken` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `OAuthAuthorizationCode` table without a default value. This is not possible if the table is not empty.
  - Added the required column `onwerId` to the `OAuthClient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `OAuthClient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `OAuthRefreshToken` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `OAuthScope` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "OAuthGrants_new" AS ENUM ('authorization_code', 'client_credentials', 'refresh_token', 'password');
ALTER TABLE "OAuthClient" ALTER COLUMN "grants" TYPE "OAuthGrants_new" USING ("grants"::text::"OAuthGrants_new");
ALTER TYPE "OAuthGrants" RENAME TO "OAuthGrants_old";
ALTER TYPE "OAuthGrants_new" RENAME TO "OAuthGrants";
DROP TYPE "OAuthGrants_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "OAuthClient" DROP CONSTRAINT "OAuthClient_userId_fkey";

-- DropForeignKey
ALTER TABLE "OAuthScope" DROP CONSTRAINT "OAuthScope_parentId_fkey";

-- DropIndex
DROP INDEX "User.email_unique";

-- AlterTable
ALTER TABLE "OAuthAccessToken" ADD COLUMN     "userId" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "OAuthAuthorizationCode" ADD COLUMN     "userId" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "OAuthClient" DROP COLUMN "userId",
ADD COLUMN     "onwerId" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "OAuthRefreshToken" ADD COLUMN     "userId" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "OAuthScope" DROP COLUMN "parentId",
ADD COLUMN     "parentValue" TEXT,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AddForeignKey
ALTER TABLE "OAuthAccessToken" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OAuthAuthorizationCode" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OAuthClient" ADD FOREIGN KEY ("onwerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OAuthRefreshToken" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OAuthScope" ADD FOREIGN KEY ("parentValue") REFERENCES "OAuthScope"("value") ON DELETE SET NULL ON UPDATE CASCADE;
