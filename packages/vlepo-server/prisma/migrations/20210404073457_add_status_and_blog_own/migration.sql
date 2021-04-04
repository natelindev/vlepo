/*
  Warnings:

  - You are about to drop the column `onwerId` on the `Image` table. All the data in the column will be lost.
  - You are about to drop the column `onwerId` on the `OAuthClient` table. All the data in the column will be lost.
  - You are about to drop the column `source` on the `ShareCount` table. All the data in the column will be lost.
  - You are about to drop the column `projectId` on the `Tag` table. All the data in the column will be lost.
  - You are about to drop the column `paperId` on the `Tag` table. All the data in the column will be lost.
  - You are about to drop the column `tagId` on the `Thought` table. All the data in the column will be lost.
  - Added the required column `ownerId` to the `Blog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ownerId` to the `Image` table without a default value. This is not possible if the table is not empty.
  - Added the required column `blogId` to the `Link` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ownerId` to the `OAuthClient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `blogId` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Made the column `ownerId` on table `Post` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `shareType` to the `ShareCount` table without a default value. This is not possible if the table is not empty.
  - Added the required column `blogId` to the `Tag` table without a default value. This is not possible if the table is not empty.
  - Added the required column `blogId` to the `Thought` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ProjectStatus" AS ENUM ('DRAFT', 'PRIVATE', 'PUBLISHED');

-- CreateEnum
CREATE TYPE "PaperStatus" AS ENUM ('DRAFT', 'PRIVATE', 'PUBLISHED');

-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_onwerId_fkey";

-- DropForeignKey
ALTER TABLE "OAuthClient" DROP CONSTRAINT "OAuthClient_onwerId_fkey";

-- DropForeignKey
ALTER TABLE "Tag" DROP CONSTRAINT "Tag_paperId_fkey";

-- DropForeignKey
ALTER TABLE "Tag" DROP CONSTRAINT "Tag_projectId_fkey";

-- DropForeignKey
ALTER TABLE "Thought" DROP CONSTRAINT "Thought_tagId_fkey";

-- AlterTable
ALTER TABLE "Blog" ADD COLUMN     "ownerId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Image" DROP COLUMN "onwerId",
ADD COLUMN     "ownerId" TEXT NOT NULL,
ALTER COLUMN "mainColor" DROP NOT NULL,
ALTER COLUMN "height" DROP NOT NULL,
ALTER COLUMN "width" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Link" ADD COLUMN     "blogId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "OAuthClient" DROP COLUMN "onwerId",
ADD COLUMN     "ownerId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Paper" ADD COLUMN     "status" "PaperStatus" NOT NULL DEFAULT E'DRAFT',
ADD COLUMN     "headerImageUrl" TEXT,
ADD COLUMN     "blogId" TEXT;

-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "blogId" TEXT NOT NULL,
ALTER COLUMN "ownerId" SET NOT NULL;

-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "status" "ProjectStatus" NOT NULL DEFAULT E'DRAFT',
ADD COLUMN     "blogId" TEXT;

-- AlterTable
ALTER TABLE "Rating" ADD COLUMN     "paperId" TEXT,
ADD COLUMN     "projectId" TEXT;

-- AlterTable
ALTER TABLE "ShareCount" DROP COLUMN "source",
ADD COLUMN     "shareType" "ShareType" NOT NULL;

-- AlterTable
ALTER TABLE "Tag" DROP COLUMN "projectId",
DROP COLUMN "paperId",
ADD COLUMN     "blogId" TEXT NOT NULL,
ALTER COLUMN "headerImgUrl" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Thought" DROP COLUMN "tagId",
ADD COLUMN     "blogId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Blog" ADD FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Link" ADD FOREIGN KEY ("blogId") REFERENCES "Blog"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OAuthClient" ADD FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Paper" ADD FOREIGN KEY ("blogId") REFERENCES "Blog"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD FOREIGN KEY ("blogId") REFERENCES "Blog"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project" ADD FOREIGN KEY ("blogId") REFERENCES "Blog"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rating" ADD FOREIGN KEY ("paperId") REFERENCES "Paper"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rating" ADD FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tag" ADD FOREIGN KEY ("blogId") REFERENCES "Blog"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Thought" ADD FOREIGN KEY ("blogId") REFERENCES "Blog"("id") ON DELETE CASCADE ON UPDATE CASCADE;
