-- CreateTable
CREATE TABLE "_OAuthScopeToUserRole" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_OAuthScopeToUserRole_AB_unique" ON "_OAuthScopeToUserRole"("A", "B");

-- CreateIndex
CREATE INDEX "_OAuthScopeToUserRole_B_index" ON "_OAuthScopeToUserRole"("B");

-- AddForeignKey
ALTER TABLE "_OAuthScopeToUserRole" ADD FOREIGN KEY ("A") REFERENCES "OAuthScope"("value") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OAuthScopeToUserRole" ADD FOREIGN KEY ("B") REFERENCES "UserRole"("id") ON DELETE CASCADE ON UPDATE CASCADE;
