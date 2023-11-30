import { useGlobalState } from "@/lib/contexts/global-context";
import PlayerData from "./player-data";
import PlayerBattles from "./player-battles";
import RowInsertPopup from "./row-insert-popup";
import Loader from "@/components/loader";

const Data: React.FC = () => {
  const { playerData, battles, loading } = useGlobalState();

  return (
    <div className="min-h-screen">
      {battles?.rowsAdded && <RowInsertPopup />}
      {playerData && <PlayerData />}
      {loading && (
        <div className="w-full flex justify-center mt-12">
          <Loader />
        </div>
      )}
      {battles?.battles && <PlayerBattles />}
    </div>
  );
};

export default Data;
