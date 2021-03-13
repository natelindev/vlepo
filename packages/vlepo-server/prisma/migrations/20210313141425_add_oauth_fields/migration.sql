-- CreateEnum
CREATE TYPE "OAuthProviders" AS ENUM ('google', 'github', 'reddit');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "provider" "OAuthProviders",
ADD COLUMN     "openid" TEXT;
