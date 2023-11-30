import Home from "@/components/home";
import axios from "axios";
import { useGlobalState } from "@/lib/contexts/global-context";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { cleanUserTag } from "@/lib/helpers/clean-user-tag/clean-user-tag";

const Player = () => {
  const router = useRouter();
  const { setPlayerData, setBattles, setError, setLoading, setPlayerTag } =
    useGlobalState();
  const { id } = router.query;
  useEffect(() => {
    const getData = async () => {
      let playerTag = "";
      if (typeof id === "string") {
        playerTag = id;
        setPlayerTag(playerTag);
        try {
          setLoading(true);
          setError(undefined);
          setBattles({});
          setPlayerData(undefined);
          let tag = cleanUserTag(playerTag);
          const playerData = await axios.get(
            `/api/get-user-data?playerTag=${tag}`
          );
          setPlayerData(playerData.data.body);
          const response = await axios.get(`/api/update-db?playerTag=${tag}`);
          setBattles(response.data.body);
          tag = "";
        } catch (error) {
          // If error.response exists and has a data property, use it, otherwise use a default message
          if (axios.isAxiosError(error)) {
            console.log(error);
            setError(error.response?.data.error);
          } else {
            setError({ message: "something went wrong" });
          }
        } finally {
          setLoading(false);
        }
      }
    };
    getData();
  }, [id]);
  return <Home />;
};

export default Player;
