import { useGlobalState } from "@/lib/contexts/global-context";
import ShowPlayerData from "./show-player-data";
import ShowPlayerBattles from "./show-battle-data";
import RowInsertPopup from "./row-insert-popup";

const ShowData: React.FC = () => {
  const { playerData, battles } = useGlobalState();

  return (
    <>
      {battles?.rowsAdded && <RowInsertPopup />}
      {!playerData && <p className="mt-2">Get started and search a user</p>}
      {playerData && <ShowPlayerData />}
      {battles?.battles && <ShowPlayerBattles />}
    </>
  );
};

export default ShowData;
