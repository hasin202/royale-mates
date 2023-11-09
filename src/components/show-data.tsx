import { useGlobalState } from "@/lib/contexts/global-context";
import ShowPlayerData from "./show-player-data";
import ShowPlayerBattles from "./show-player-battles";

const ShowData: React.FC = () => {
  const { playerData, battles } = useGlobalState();
  console.log(playerData);

  return (
    <>
      {!playerData && <p>Get started and search a user</p>}
      {playerData && <ShowPlayerData />}
      {battles?.battles && <ShowPlayerBattles />}
    </>
  );
};

export default ShowData;
