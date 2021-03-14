-- CreateEnum
CREATE TYPE "OAuthGrants" AS ENUM ('authorization_code', 'client_credentials', 'refresh_token', 'password', 'extension');

-- CreateTable
CREATE TABLE "OAuthScope" (
    "value" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "parentId" TEXT NOT NULL,

    PRIMARY KEY ("value")
);

-- CreateTable
CREATE TABLE "OAuthAccessToken" (
    "accessToken" TEXT NOT NULL,
    "accessTokenExpiresAt" TIMESTAMP(3) NOT NULL,
    "clientId" TEXT NOT NULL,

    PRIMARY KEY ("accessToken")
);

-- CreateTable
CREATE TABLE "OAuthRefreshToken" (
    "refreshToken" TEXT NOT NULL,
    "refreshTokenExpiresAt" TIMESTAMP(3) NOT NULL,
    "clientId" TEXT NOT NULL,

    PRIMARY KEY ("refreshToken")
);

-- CreateTable
CREATE TABLE "OAuthClient" (
    "id" TEXT NOT NULL,
    "secret" TEXT NOT NULL,
    "grants" "OAuthGrants"[],
    "redirectUris" TEXT[],
    "accessTokenLifetime" INTEGER,
    "refreshTokenLifetime" INTEGER,
    "userId" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OAuthAuthorizationCode" (
    "authorizationCode" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "redirectUri" TEXT,
    "clientId" TEXT NOT NULL,

    PRIMARY KEY ("authorizationCode")
);

-- CreateTable
CREATE TABLE "_OAuthAccessTokenToOAuthScope" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_OAuthRefreshTokenToOAuthScope" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_OAuthAuthorizationCodeToOAuthScope" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_OAuthClientToOAuthScope" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE INDEX "OAuthScope.value_index" ON "OAuthScope"("value");

-- CreateIndex
CREATE UNIQUE INDEX "OAuthClient.secret_unique" ON "OAuthClient"("secret");

-- CreateIndex
CREATE INDEX "OAuthClient.secret_index" ON "OAuthClient"("secret");

-- CreateIndex
CREATE UNIQUE INDEX "_OAuthAccessTokenToOAuthScope_AB_unique" ON "_OAuthAccessTokenToOAuthScope"("A", "B");

-- CreateIndex
CREATE INDEX "_OAuthAccessTokenToOAuthScope_B_index" ON "_OAuthAccessTokenToOAuthScope"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_OAuthRefreshTokenToOAuthScope_AB_unique" ON "_OAuthRefreshTokenToOAuthScope"("A", "B");

-- CreateIndex
CREATE INDEX "_OAuthRefreshTokenToOAuthScope_B_index" ON "_OAuthRefreshTokenToOAuthScope"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_OAuthAuthorizationCodeToOAuthScope_AB_unique" ON "_OAuthAuthorizationCodeToOAuthScope"("A", "B");

-- CreateIndex
CREATE INDEX "_OAuthAuthorizationCodeToOAuthScope_B_index" ON "_OAuthAuthorizationCodeToOAuthScope"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_OAuthClientToOAuthScope_AB_unique" ON "_OAuthClientToOAuthScope"("A", "B");

-- CreateIndex
CREATE INDEX "_OAuthClientToOAuthScope_B_index" ON "_OAuthClientToOAuthScope"("B");

-- AddForeignKey
ALTER TABLE "OAuthScope" ADD FOREIGN KEY ("parentId") REFERENCES "OAuthScope"("value") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OAuthAccessToken" ADD FOREIGN KEY ("clientId") REFERENCES "OAuthClient"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OAuthRefreshToken" ADD FOREIGN KEY ("clientId") REFERENCES "OAuthClient"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OAuthClient" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OAuthAuthorizationCode" ADD FOREIGN KEY ("clientId") REFERENCES "OAuthClient"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OAuthAccessTokenToOAuthScope" ADD FOREIGN KEY ("A") REFERENCES "OAuthAccessToken"("accessToken") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OAuthAccessTokenToOAuthScope" ADD FOREIGN KEY ("B") REFERENCES "OAuthScope"("value") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OAuthRefreshTokenToOAuthScope" ADD FOREIGN KEY ("A") REFERENCES "OAuthRefreshToken"("refreshToken") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OAuthRefreshTokenToOAuthScope" ADD FOREIGN KEY ("B") REFERENCES "OAuthScope"("value") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OAuthAuthorizationCodeToOAuthScope" ADD FOREIGN KEY ("A") REFERENCES "OAuthAuthorizationCode"("authorizationCode") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OAuthAuthorizationCodeToOAuthScope" ADD FOREIGN KEY ("B") REFERENCES "OAuthScope"("value") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OAuthClientToOAuthScope" ADD FOREIGN KEY ("A") REFERENCES "OAuthClient"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OAuthClientToOAuthScope" ADD FOREIGN KEY ("B") REFERENCES "OAuthScope"("value") ON DELETE CASCADE ON UPDATE CASCADE;
