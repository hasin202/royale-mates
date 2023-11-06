import prisma from "@/lib/prisma-client";
import { CleanedData } from "@/lib/types/types";

export async function insertDbRows(battles: CleanedData[]) {
  console.log("insert");
  try {
    const result = await prisma.battles.createMany({
      data: battles,
    });
    return result;
  } catch (error) {
    console.log(error);
  }
}
