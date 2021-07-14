/*
  Warnings:

  - Made the column `ownerId` on table `Paper` required. This step will fail if there are existing NULL values in that column.
  - Made the column `ownerId` on table `Project` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Paper" ALTER COLUMN "ownerId" SET NOT NULL;

-- AlterTable
ALTER TABLE "Project" ALTER COLUMN "ownerId" SET NOT NULL;
