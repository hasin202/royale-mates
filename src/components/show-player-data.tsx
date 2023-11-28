import { useGlobalState } from "@/lib/contexts/global-context";
import axios from "axios";
import Image from "next/image";

const ShowPlayerData: React.FC = () => {
  const { playerData, playerTag, setBattles, setError, setLoading, loading } =
    useGlobalState();

  const refreshData = async () => {
    try {
      setLoading(true);
      setBattles({});
      const response = await axios.get(`/api/update-db?playerTag=${playerTag}`);
      setBattles(response.data.body);
      setError("");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error);
        setError(error.response?.data.error);
      } else {
        setError({ message: "something went wrong" });
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="border rounded p-4">
      <div className="flex justify-between items-center mb-2">
        <p className="text-3xl font-black">{playerData?.name}</p>
        <p className="bg-blue-400 p-1 w-8 h-8 rounded-full text-center text-white">
          {playerData?.expLevel}
        </p>
      </div>
      <div className="flex justify-between items-bottom">
        <p className="text-gray-600">{playerData?.tag}</p>
        <div className="flex items-center gap-2">
          <Image src={"/trophy.svg"} alt="trophies" width={24} height={24} />
          <p className="text-gray-600">{playerData?.trophies}</p>
        </div>
      </div>
      <div className="w-full flex justify-center border-t pt-4 mt-4">
        <button
          className="text-blue-600 font-bold w-full disabled:text-blue-200"
          onClick={refreshData}
          disabled={loading}
        >
          Refresh Player Data
        </button>
      </div>
    </div>
  );
};

export default ShowPlayerData;
