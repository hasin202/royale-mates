import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma-client";
import apiLogic from "@/lib/helpers/update-db-api-logic/update-db-api-logic";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const uniquePlayerTags = await prisma.usersBattles.findMany({
    select: {
      playerTag: true,
    },
    distinct: ["playerTag"],
  });
  uniquePlayerTags.forEach(async (name) => await apiLogic(name.playerTag));
  return response.status(200).send("completed cron");
}
