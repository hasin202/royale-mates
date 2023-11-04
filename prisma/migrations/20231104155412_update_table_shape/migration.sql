/*
  Warnings:

  - You are about to drop the column `clanId` on the `battles` table. All the data in the column will be lost.
  - Added the required column `clanName` to the `battles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `opponentName` to the `battles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `playerName` to the `battles` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `win` on the `battles` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "battles" DROP COLUMN "clanId",
ADD COLUMN     "clanName" TEXT NOT NULL,
ADD COLUMN     "opponentDeck" TEXT[],
ADD COLUMN     "opponentName" TEXT NOT NULL,
ADD COLUMN     "playerDeck" TEXT[],
ADD COLUMN     "playerName" TEXT NOT NULL,
DROP COLUMN "win",
ADD COLUMN     "win" INTEGER NOT NULL;
