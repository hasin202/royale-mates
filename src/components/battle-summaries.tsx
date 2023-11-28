import { useGlobalState } from "@/lib/contexts/global-context";
import IndividualBattles from "./individual-battles";

const BattleSummaries = () => {
  const { battleSummaries } = useGlobalState();
  const crownsRowStyle = "text-xl lg:text-3xl";
  const playersNamesRowStyle = "text-2xl font-bold lg:text-4xl";

  return battleSummaries?.map((summary, i) => {
    return (
      <div
        key={i}
        className="px-8 py-2 flex flex-col items-center border rounded w-full"
      >
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
        <IndividualBattles individualBattles={summary.battles} />
      </div>
    );
  });
};

export default BattleSummaries;
