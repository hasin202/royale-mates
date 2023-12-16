import { BattleSummary } from "@/lib/types/battle-summaries-types";
import { UsersBattles } from "@prisma/client";
import { CleanedData } from "@/lib/types/royale-api-types";

const formBattlesSummaries = (
  battles: UsersBattles[] | CleanedData[]
): BattleSummary[] => {
  const resultMap = new Map();

  battles.forEach((battle) => {
    const { playerName, opponentName, win, opponentTag } = battle;
    const key = `${playerName}-${opponentName}`;

    if (!resultMap.has(key)) {
      resultMap.set(key, {
        playerName: playerName,
        opponentName: opponentName,
        opponentTag: opponentTag,
        playerWins: 0,
        opponentWins: 0,
        battles: [],
      });
    }

    const record = resultMap.get(key);

    // Increment win counters
    if (win === 1) {
      record.opponentWins += 1;
    } else if (win === 2) {
      record.playerWins += 1;
    }

    // Add battle to battles array
    record.battles.push(battle);
  });

  // Convert map values to array
  return Array.from(resultMap.values());
};

export default formBattlesSummaries;
