import { BattleSummaries } from "@/lib/types/battle-summaries-types";
import { DbRow } from "@/lib/types/db-types";

const formBattlesSummaries = (battles: DbRow[]): BattleSummaries => {
  const resultMap = new Map();

  battles.forEach((battle) => {
    const { playerName, opponentName, win } = battle;
    const key = `${playerName}-${opponentName}`;

    if (!resultMap.has(key)) {
      resultMap.set(key, {
        playerName: playerName,
        opponentName: opponentName,
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
