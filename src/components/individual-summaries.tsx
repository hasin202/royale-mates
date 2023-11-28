import { BattleSummary } from "@/lib/types/battle-summaries-types";
import React from "react";
import { useState } from "react";
import IndividualBattles from "./individual-battles";

interface ComponentProps {
  summary: BattleSummary;
}

const IndividiualSummaries: React.FC<ComponentProps> = ({ summary }) => {
  const crownsRowStyle = "text-xl lg:text-3xl";
  const playersNamesRowStyle = "text-2xl font-bold lg:text-4xl";
  const [showBattles, setShowBattles] = useState(false);
  return (
    <div className="px-8 py-2 flex flex-col items-center border rounded w-full">
      <p className="font-bold text-xs">Overall Record</p>
      <div className="grid grid-cols-[1fr_40px_1fr] gap-4 items-center w-full">
        <div className="flex flex-col items-end justify-center">
          <p className={crownsRowStyle}>{summary.playerWins}</p>
          <p className={playersNamesRowStyle}>{summary.playerName}</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className={crownsRowStyle}>-</p>
          <p className={playersNamesRowStyle}>VS</p>
        </div>
        <div className="flex flex-col items-start justify-center">
          <p className={crownsRowStyle}>{summary.opponentWins}</p>
          <p className={playersNamesRowStyle}>{summary.opponentName}</p>
        </div>
      </div>
      <button onClick={() => setShowBattles(!showBattles)}>
        {!showBattles ? <p>Show Battles</p> : <p>Hide Battles</p>}
      </button>
      {showBattles && <IndividualBattles individualBattles={summary.battles} />}
    </div>
  );
};

export default IndividiualSummaries;
