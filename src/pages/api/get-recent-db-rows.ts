import { handleError } from "@/lib/helpers/handle-error/handle-error";
import prisma from "@/lib/prisma-client";
import { DbRow } from "@/lib/types/types";

export async function getRecentDbRows(
  playerTag: string | string[] | undefined
): Promise<{ recentBattles: DbRow[]; allBattles: DbRow[] }> {
  try {
    console.log("Before querying the database"); // Log before the query

    const battles = await prisma.battles.findMany({
      where: {
        playerTag: `#${playerTag}`,
      },
      take: 31,
      orderBy: {
        battleTime: "desc",
      },
    });

    if (battles.length === 0) return { recentBattles: [], allBattles: [] };
    const recentBattles = battles.slice(0, 31);
    return { recentBattles: recentBattles, allBattles: battles };
  } catch (error) {
    throw handleError(error, "something went wrong when getting database rows");
  }
}
