import { fetchAndCleanBattles } from "./fetch-and-clean-battles";
import { getRecentDbRows } from "./get-recent-db-rows";
import { insertDbRows } from "./insert-db-rows";
import { handleError } from "../handle-error/handle-error";
import { all } from "axios";

const apiLogic = async (playerTag: string | string[] | undefined) => {
  try {
    let apiBattles = await fetchAndCleanBattles(playerTag);
    const allDbBattles = await getRecentDbRows(playerTag);

    //If no api battles or database battles are found then the user should be told to first play some battles on the front end
    if (apiBattles.length === 0 && allDbBattles.length === 0) {
      return { rowsAdded: "NA" };
    } else if (apiBattles.length === 0 && allDbBattles.length > 0) {
      return { battles: allDbBattles };
    } else if (apiBattles.length > 0 && allDbBattles.length === 0) {
      await insertDbRows(apiBattles);
      return { battles: apiBattles };
    }

    const mostRecentBattleTime = allDbBattles[0].battleTime;
    const lastCommonBattleIdx = apiBattles.findIndex(
      (friendlyBattle) => friendlyBattle.battleTime === mostRecentBattleTime
    );
    if (lastCommonBattleIdx === 0) {
      return { battles: allDbBattles };
    } else if (lastCommonBattleIdx > 0) {
      apiBattles = apiBattles.slice(0, lastCommonBattleIdx);
    }

    if (apiBattles.length > 0) {
      await insertDbRows(apiBattles);
      apiBattles.push(...allDbBattles);
      return { battles: apiBattles };
    }
  } catch (error) {
    throw handleError(
      error,
      "something went wrong when updating database battles"
    );
  }
};

export default apiLogic;
