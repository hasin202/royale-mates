/*
  Warnings:

  - A unique constraint covering the columns `[battleTime]` on the table `battles` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "battles_battleTime_key" ON "battles"("battleTime");
