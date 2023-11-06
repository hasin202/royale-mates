import prisma from "@/lib/prisma-client";
import { CleanedData } from "@/lib/types/types";

export async function insertDbRows(battles: CleanedData[]) {
  console.log("insert db rows func");
  try {
    const result = await prisma.battles.createMany({
      data: battles,
    });
    console.log("inserted data to db");
    return result;
  } catch (error) {
    console.log(error);
  }
}
