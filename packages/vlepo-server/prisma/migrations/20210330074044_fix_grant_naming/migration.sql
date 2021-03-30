/*
  Warnings:

  - The `grants` column on the `OAuthClient` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "OAuthGrant" AS ENUM ('authorization_code', 'client_credentials', 'refresh_token', 'password');

-- AlterTable
ALTER TABLE "OAuthClient" DROP COLUMN "grants",
ADD COLUMN     "grants" "OAuthGrant"[];

-- DropEnum
DROP TYPE "OAuthGrants";
