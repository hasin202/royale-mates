import { useGlobalState } from "@/lib/contexts/global-context";
import formBattlesSummaries from "@/lib/helpers/form-battles-summaries/form-battle-summaries";
import { BattleSummaries } from "@/lib/types/battle-summaries-types";
import { useEffect, useState } from "react";

const ShowPlayerBattles: React.FC = () => {
  const { battles } = useGlobalState();
  const [battleSummaries, setBattleSummaries] = useState<BattleSummaries>();
  useEffect(() => {
    if (battles && battles.battles) {
      const allBattles = battles?.battles;
      const reshapedBattles = formBattlesSummaries(allBattles);
      setBattleSummaries(reshapedBattles);
      console.log(reshapedBattles);
    }
  }, [battles]);
  return (
    <div className="mt-4 w-full flex flex-col items-center gap-2 w-full">
      <p className="font-black text-3xl">BATTLES</p>
      {battleSummaries?.map((summary, i) => {
        return (
          <div
            key={i}
            className="px-8 py-2 flex flex-col items-center border rounded w-full"
          >
            <p className="text-xl font-bold">
              {summary.playerName + " vs " + summary.opponentName}
            </p>
            <p className="text-xl">
              {summary.playerWins + " - " + summary.opponentWins}
            </p>
            {summary.battles.map((battle, y) => {
              return (
                <div key={y} className="flex flex-col items-center">
                  <p>{battle.playerCrowns + " - " + battle.opponentCrowns}</p>
                  <div className="flex items-center">
                    {battle.playerDeck.map((card, j) => {
                      return <img key={j} className="w-12" src={card} />;
                    })}
                    <p> VS </p>
                    {battle.opponentDeck.map((card, z) => {
                      return <img key={z} className="w-12" src={card} />;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default ShowPlayerBattles;
