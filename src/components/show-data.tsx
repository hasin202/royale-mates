import { useGlobalState } from "@/lib/contexts/global-context";
import ShowPlayerData from "./show-player-data";

const ShowData: React.FC = () => {
  const { playerData, battles } = useGlobalState();
  console.log(playerData);
  return (
    <>
      {!playerData && <p>Get started and search a user</p>}
      {playerData && <ShowPlayerData />}
    </>
  );
};

export default ShowData;
