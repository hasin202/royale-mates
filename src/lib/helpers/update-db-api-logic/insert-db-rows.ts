import { handleError } from "@/lib/helpers/handle-error/handle-error";
import prisma from "@/lib/prisma-client";
import { CleanedData } from "@/lib/types/royale-api-types";

export async function insertDbRows(friendlyBattles: CleanedData[]) {
  console.log("insert db rows func");
  try {
    const result = await prisma.usersBattles.createMany({
      data: friendlyBattles,
    });
    return result;
  } catch (error) {
    throw handleError(
      error,
      "something went wrong when trying to insert battles to the database"
    );
  }
}
