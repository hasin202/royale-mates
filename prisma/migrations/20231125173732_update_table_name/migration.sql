/*
  Warnings:

  - You are about to drop the `battles` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "battles";

-- CreateTable
CREATE TABLE "UsersBattles" (
    "id" SERIAL NOT NULL,
    "battleTime" TEXT NOT NULL,
    "playerName" TEXT NOT NULL,
    "playerTag" TEXT NOT NULL,
    "playerDeck" TEXT[],
    "playerCrowns" INTEGER NOT NULL,
    "opponentName" TEXT NOT NULL,
    "opponentTag" TEXT NOT NULL,
    "opponentDeck" TEXT[],
    "opponentCrowns" INTEGER NOT NULL,
    "clanName" TEXT NOT NULL,
    "win" INTEGER NOT NULL,

    CONSTRAINT "UsersBattles_pkey" PRIMARY KEY ("id")
);
