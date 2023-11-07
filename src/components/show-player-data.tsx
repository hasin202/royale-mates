import { useGlobalState } from "@/lib/contexts/global-context";

const ShowPlayerData: React.FC = () => {
  const { playerData } = useGlobalState();
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
          <img src={"/trophy.svg"} />
          <p className="text-gray-600">{playerData?.trophies}</p>
        </div>
      </div>
    </div>
  );
};

export default ShowPlayerData;
