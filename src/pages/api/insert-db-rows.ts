import { handleError } from "@/lib/helpers/handle-error/handle-error";
import prisma from "@/lib/prisma-client";
import { CleanedData } from "@/lib/types/types";

export async function insertDbRows(friendlyBattles: CleanedData[]) {
  console.log("insert db rows func");
  try {
    const result = await prisma.battles.createMany({
      data: friendlyBattles,
    });
    console.log("inserted data to db");
    return result;
  } catch (error) {
    throw handleError(
      error,
      "something went wrong when trying to insert battles to the database"
    );
  }
}
