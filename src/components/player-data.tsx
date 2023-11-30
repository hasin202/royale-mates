import { useGlobalState } from "@/lib/contexts/global-context";
import Image from "next/image";

const PlayerData: React.FC = () => {
  const { playerData } = useGlobalState();

  return (
    <div className="border-2 border-stone-500 rounded-lg p-4">
      <div className="flex justify-between items-center mb-2">
        <p className="text-3xl font-black font-supercell">{playerData?.name}</p>
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
    </div>
  );
};

export default PlayerData;
