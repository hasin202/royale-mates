import { useGlobalState } from "@/lib/contexts/global-context";
import PlayerData from "./player-data";
import PlayerBattles from "./player-battles";
import RowInsertPopup from "./row-insert-popup";

const Home: React.FC = () => {
  const { playerData, battles } = useGlobalState();

  return (
    <>
      {battles?.rowsAdded && <RowInsertPopup />}
      {!playerData && <p className="mt-2">Get started and search a user</p>}
      {playerData && <PlayerData />}
      {battles?.battles && <PlayerBattles />}
    </>
  );
};

export default Home;
