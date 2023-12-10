import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma-client";
import apiLogic from "@/lib/helpers/update-db-api-logic/update-db-api-logic";
import { cleanUserTag } from "@/lib/helpers/clean-user-tag/clean-user-tag";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {

  console.log("---");

  try {
    const uniquePlayerTags = await prisma.usersBattles.findMany({
      select: {
        playerTag: true,
      },
      distinct: ["playerTag"],
    });
    const cleanedPlayerTags = uniquePlayerTags.map((tag) =>
      cleanUserTag(tag.playerTag)
    );

    for (const tag of cleanedPlayerTags) {
      await apiLogic(tag);
    }

    return response.status(200).send("completed cron");
  } catch (error) {
    return response.status(400).send(error);
  }
}
