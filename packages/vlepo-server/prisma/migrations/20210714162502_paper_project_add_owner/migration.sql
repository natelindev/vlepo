-- AlterTable
ALTER TABLE "Paper" ADD COLUMN     "ownerId" TEXT;

-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "ownerId" TEXT;

-- AddForeignKey
ALTER TABLE "Project" ADD FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Paper" ADD FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
