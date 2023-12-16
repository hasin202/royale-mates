import { BattleSummary } from "@/lib/types/battle-summaries-types";
import React from "react";
import { useState } from "react";
import IndividualBattles from "./individual-battles";
import { useRouter } from "next/router";
import { cleanUserTag } from "@/lib/helpers/clean-user-tag/clean-user-tag";

interface ComponentProps {
  summary: BattleSummary;
}

const IndividiualSummaries: React.FC<ComponentProps> = ({ summary }) => {
  const router = useRouter();
  const [showBattles, setShowBattles] = useState(false);
  return (
    <div>
      <div className="w-full text-center bg-blue-400 rounded-tl-lg rounded-tr-lg py-2 text-white font-supercell border border-2 border-blue-500 border-b-0">
        <p className="text-2xs md:text-xs">Record Against</p>
        <button
          onClick={() => router.push(`/${cleanUserTag(summary.opponentTag)}`)}
        >
          <p className="text-xl md:text-3xl underline underline-offset-4 py-2">
            {summary.opponentName}
          </p>
        </button>
      </div>
      <div className="px-8 py-2 flex flex-col items-center border rounded-br-lg rounded-bl-lg w-full border border-2 border-blue-500 border-t-0">
        <p className="font-supercell md:text-2xl">
          {summary.playerWins} - {summary.opponentWins}
        </p>
        <button
          onClick={() => setShowBattles(!showBattles)}
          className="font-supercell text-2xs text-blue-500 py-2"
        >
          {!showBattles ? (
            <p>Show all battles against {summary.opponentName}</p>
          ) : (
            <p>Hide Battles</p>
          )}
        </button>
        {showBattles && (
          <IndividualBattles individualBattles={summary.battles} />
        )}
      </div>
    </div>
  );
};

export default IndividiualSummaries;
