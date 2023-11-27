import { useGlobalState } from "@/lib/contexts/global-context";
import ShowPlayerData from "./show-player-data";
import ShowPlayerBattles from "./show-battle-data";

const ShowData: React.FC = () => {
  const { playerData, battles } = useGlobalState();

  return (
    <>
      {!playerData && <p>Get started and search a user</p>}
      {playerData && <ShowPlayerData />}
      {battles?.battles && <ShowPlayerBattles />}
    </>
  );
};

export default ShowData;
