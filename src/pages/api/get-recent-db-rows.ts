import prisma from "@/lib/prisma-client";

export async function getRecentDbRows(
  playerTag: string | string[] | undefined
) {
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

    if (battles.length === 0) return [];
    return battles;
  } catch (error) {
    console.error("An error occurred:", error); // Log any errors that occur
    throw { error: "An internal server error occurred" };
  }
}
