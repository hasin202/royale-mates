import { useGlobalState } from "@/lib/contexts/global-context";
import IndividualBattles from "./individual-battles";
import IndividiualSummaries from "./individual-summaries";

const BattleSummaries = () => {
  const { battleSummaries } = useGlobalState();
  return battleSummaries?.map((summary, i) => {
    return (
      <div className="w-full" key={i}>
        <IndividiualSummaries summary={summary} />
      </div>
    );
  });
};

export default BattleSummaries;
