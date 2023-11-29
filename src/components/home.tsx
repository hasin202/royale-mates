import { useGlobalState } from "@/lib/contexts/global-context";
import PlayerData from "./player-data";
import PlayerBattles from "./player-battles";
import RowInsertPopup from "./row-insert-popup";

const Home: React.FC = () => {
  const { playerData, battles } = useGlobalState();

  return (
    <div className="min-h-screen">
      {battles?.rowsAdded && <RowInsertPopup />}
      {!playerData && <p className="mt-2">Get started and search a user</p>}
      {playerData && <PlayerData />}
      {battles?.battles && <PlayerBattles />}
    </div>
  );
};

export default Home;
