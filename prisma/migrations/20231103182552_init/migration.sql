-- CreateTable
CREATE TABLE "battles" (
    "id" SERIAL NOT NULL,
    "battleTime" TEXT NOT NULL,
    "playerTag" TEXT NOT NULL,
    "opponentTag" TEXT NOT NULL,
    "playerCrowns" INTEGER NOT NULL,
    "opponentCrowns" INTEGER NOT NULL,
    "clanId" TEXT NOT NULL,
    "win" BOOLEAN NOT NULL,

    CONSTRAINT "battles_pkey" PRIMARY KEY ("id")
);
