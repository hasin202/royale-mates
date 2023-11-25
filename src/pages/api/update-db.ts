import type { NextApiRequest, NextApiResponse } from "next";
import { UpdateDbResponse } from "@/lib/types/db-types";
import { APIResponse } from "@/lib/types/types";
import { APIErrorHandler } from "@/lib/helpers/handle-error/handle-error";
import apiLogic from "../../lib/helpers/update-db-api-logic/update-db-api-logic";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<APIResponse<UpdateDbResponse>>
) {
  const playerTag = req.query?.playerTag;

  try {
    const result = await apiLogic(playerTag);
    console.log(result);
    return res.status(200).json({ body: result });
  } catch (error) {
    APIErrorHandler(res, error);
  }
}
