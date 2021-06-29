/*
  Warnings:

  - The values [USERROLE] on the enum `TranslationType` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `status` on the `Paper` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Thought` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "visibility" AS ENUM ('DRAFT', 'PRIVATE', 'PUBLISHED');

-- AlterEnum
BEGIN;
CREATE TYPE "TranslationType_new" AS ENUM ('BLOG', 'POST', 'THOUGHT', 'TAG', 'USER', 'USER_ROLE', 'PROJECT', 'PAPER');
ALTER TABLE "Translation" ALTER COLUMN "type" TYPE "TranslationType_new" USING ("type"::text::"TranslationType_new");
ALTER TYPE "TranslationType" RENAME TO "TranslationType_old";
ALTER TYPE "TranslationType_new" RENAME TO "TranslationType";
DROP TYPE "TranslationType_old";
COMMIT;

-- AlterTable
ALTER TABLE "Comment" ADD COLUMN     "designId" TEXT;

-- AlterTable
ALTER TABLE "Image" ADD COLUMN     "designId" TEXT;

-- AlterTable
ALTER TABLE "Paper" DROP COLUMN "status",
ADD COLUMN     "visibility" "visibility" NOT NULL DEFAULT E'DRAFT';

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "status",
ADD COLUMN     "visibility" "visibility" NOT NULL DEFAULT E'DRAFT';

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "status",
ADD COLUMN     "visibility" "visibility" NOT NULL DEFAULT E'DRAFT';

-- AlterTable
ALTER TABLE "Reaction" ADD COLUMN     "designId" TEXT;

-- AlterTable
ALTER TABLE "ShareCount" ADD COLUMN     "designId" TEXT;

-- AlterTable
ALTER TABLE "Thought" DROP COLUMN "status",
ADD COLUMN     "visibility" "visibility" NOT NULL DEFAULT E'DRAFT';

-- DropEnum
DROP TYPE "PaperStatus";

-- DropEnum
DROP TYPE "PostStatus";

-- DropEnum
DROP TYPE "ProjectStatus";

-- DropEnum
DROP TYPE "ToughtStatus";

-- CreateTable
CREATE TABLE "Design" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "ownerId" TEXT NOT NULL,
    "visibility" "visibility" NOT NULL DEFAULT E'DRAFT',
    "editedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "blogId" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_DesignToTag" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_DesignToTag_AB_unique" ON "_DesignToTag"("A", "B");

-- CreateIndex
CREATE INDEX "_DesignToTag_B_index" ON "_DesignToTag"("B");

-- AddForeignKey
ALTER TABLE "Comment" ADD FOREIGN KEY ("designId") REFERENCES "Design"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD FOREIGN KEY ("designId") REFERENCES "Design"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Design" ADD FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Design" ADD FOREIGN KEY ("blogId") REFERENCES "Blog"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reaction" ADD FOREIGN KEY ("designId") REFERENCES "Design"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShareCount" ADD FOREIGN KEY ("designId") REFERENCES "Design"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DesignToTag" ADD FOREIGN KEY ("A") REFERENCES "Design"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DesignToTag" ADD FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
