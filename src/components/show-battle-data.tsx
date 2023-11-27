import { useGlobalState } from "@/lib/contexts/global-context";
import formBattlesSummaries from "@/lib/helpers/form-battles-summaries/form-battle-summaries";
import { useEffect } from "react";
import BattleSummaries from "./battle-summaries";

const ShowPlayerBattles: React.FC = () => {
  const { battles, setBattleSummaries } = useGlobalState();
  useEffect(() => {
    console.log(battles);
    if (battles && battles.battles) {
      const allBattles = battles?.battles;
      const reshapedBattles = formBattlesSummaries(allBattles);
      setBattleSummaries(reshapedBattles);
    }
  }, [battles]);
  return (
    <div className="mt-4 w-full flex flex-col items-center gap-2 w-full">
      <p className="font-black text-3xl">BATTLES</p>
      <BattleSummaries />
    </div>
  );
};

export default ShowPlayerBattles;
