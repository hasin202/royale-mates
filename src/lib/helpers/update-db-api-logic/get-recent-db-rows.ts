import { handleError } from "@/lib/helpers/handle-error/handle-error";
import prisma from "@/lib/prisma-client";
import { UsersBattles } from "@prisma/client";

export async function getRecentDbRows(
  playerTag: string | string[] | undefined
): Promise<UsersBattles[]> {
  try {
    console.log("Before querying the database"); // Log before the query

    const battles = await prisma.usersBattles.findMany({
      where: {
        playerTag: `#${playerTag}`,
      },
      orderBy: {
        battleTime: "desc",
      },
    });

    if (battles.length === 0) return [];
    return battles;
  } catch (error) {
    throw handleError(error, "something went wrong when getting database rows");
  }
}
