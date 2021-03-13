/*
  Warnings:

  - The migration will remove the values [Blog,Post,Thought,Tag,User,UserRole,Project,Paper] on the enum `TranslationType`. If these variants are still used in the database, the migration will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "TranslationType_new" AS ENUM ('BLOG', 'POST', 'THOUGHT', 'TAG', 'USER', 'USERROLE', 'PROJECT', 'PAPER');
ALTER TABLE "public"."Translation" ALTER COLUMN "type" TYPE "TranslationType_new" USING ("type"::text::"TranslationType_new");
ALTER TYPE "TranslationType" RENAME TO "TranslationType_old";
ALTER TYPE "TranslationType_new" RENAME TO "TranslationType";
DROP TYPE "TranslationType_old";
COMMIT;
