import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { CleanedUserData, PlayerProfile } from "@/lib/types/royale-api-types";
import { APIResponse } from "@/lib/types/types";
import { APIErrorHandler } from "@/lib/helpers/handle-error/handle-error";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<APIResponse<CleanedUserData>>
) {
  const playerTag = req.query?.playerTag;

  const URL = `https://proxy.royaleapi.dev/v1/players/%23${playerTag}`;
  const headers = {
    Accept: "application/json",
    Authorization: `Bearer ${process.env.ROYALE_API_KEY}`,
  };

  try {
    const response = await axios.get<PlayerProfile>(URL, { headers });
    const playerData = response.data;
    const { name, tag, expLevel, trophies } = playerData;
    const cleanedPlayerData: CleanedUserData = {
      name: name,
      tag: tag,
      expLevel: expLevel,
      trophies: trophies,
    };
    return res.status(200).json({ body: cleanedPlayerData });
  } catch (error) {
    APIErrorHandler(res, error);
  }
}
