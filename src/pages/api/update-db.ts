import type { NextApiRequest, NextApiResponse } from "next";
import { fetchAndCleanBattles } from "./royale-api";
import { getRecentDbRows } from "./get-recent-db-rows";
import { insertDbRows } from "./insert-db-rows";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const playerTag = req.query?.playerTag;

  try {
    console.log("enter update-db");
    const friendlyBattles = await fetchAndCleanBattles(playerTag);
    console.log("success hit royale endpoint");

    const battles = await getRecentDbRows(playerTag);
    console.log("success get db values");
    if (battles.length === 0) {
      console.log("battles length = 0");
      await insertDbRows(friendlyBattles);
      return res
        .status(200)
        .json({ message: `inserted ${friendlyBattles.length} rows` });
    }
    return res.status(200).json({ in: "update-db", data: battles });
  } catch (error) {
    res.status(500).json({ message: "Oops an error occured" });
  }
}
