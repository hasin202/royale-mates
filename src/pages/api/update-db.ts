import type { NextApiRequest, NextApiResponse } from "next";
import { fetchAndCleanBattles } from "./fetch-and-clean-battles";
import { getRecentDbRows } from "./get-recent-db-rows";
import { insertDbRows } from "./insert-db-rows";
import { UpdateDbResponse } from "@/lib/types/db-types";
import { APIResponse } from "@/lib/types/types";
import { APIErrorHandler } from "@/lib/helpers/handle-error/handle-error";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<APIResponse<UpdateDbResponse>>
) {
  const playerTag = req.query?.playerTag;

  try {
    let friendlyBattles = await fetchAndCleanBattles(playerTag);
    const { recentBattles, allBattles } = await getRecentDbRows(playerTag);

    // if theres no data in the table or friendly battles found then send a response saying no rows were added. handle success false on the front end
    if (recentBattles.length === 0 && friendlyBattles.length === 0)
      return res.status(200).json({ body: { success: false } });

    // if theres no data in the db then add all friendly battles found
    if (recentBattles.length === 0 && friendlyBattles.length > 0) {
      await insertDbRows(friendlyBattles);
      return res.status(200).json({
        body: {
          success: true,
          rowsAdded: `inserted ${friendlyBattles.length} rows`,
          battles: allBattles,
        },
      });
    }

    // store the most recent battle from the databases time stamp
    const mostRecentBattleTime = recentBattles[0].battleTime;
    // find the index for the corresponding battle withing friendly battles got from hitting the royale api
    const indexOfBattleTimeInFriendlyBattles = friendlyBattles.findIndex(
      (friendlyBattle) => friendlyBattle.battleTime === mostRecentBattleTime
    );
    // if the index is greater than 0 that means that there are new battles so edit friendly battles so that it only contains new battles
    if (indexOfBattleTimeInFriendlyBattles > 0) {
      friendlyBattles = friendlyBattles.slice(
        0,
        indexOfBattleTimeInFriendlyBattles
      );
    }
    if (friendlyBattles.length > 0) {
      // add all new friendly battles found to the db
      await insertDbRows(friendlyBattles);
      return res.status(200).json({
        body: {
          success: true,
          rowsAdded: `inserted ${friendlyBattles.length} rows`,
          battles: allBattles,
        },
      });
    }

    //if no new friendly battles are found then simply let the user know this and return all battles
    return res.status(200).json({
      body: {
        success: false,
        battles: allBattles,
      },
    });
  } catch (error) {
    APIErrorHandler(res, error);
  }
}
