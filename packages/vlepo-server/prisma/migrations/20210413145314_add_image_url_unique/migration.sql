/*
  Warnings:

  - A unique constraint covering the columns `[url]` on the table `Image` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Image.url_unique" ON "Image"("url");
