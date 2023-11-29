import { UsersBattles } from "@prisma/client";
import React from "react";
import Image from "next/image";
import ShowDeck from "./show-deck";

interface ComponentProps {
  individualBattles: UsersBattles[];
}

const IndividualBattles: React.FC<ComponentProps> = ({ individualBattles }) => {
  return individualBattles.map((battle, i) => {
    return (
      <div className="flex flex-col w-full" key={i}>
        <div className="flex items-center justify-center w-full md:text-lg py-2">
          <Image
            alt="player deck"
            loading="lazy"
            height={10}
            width={20}
            src="/player-crown.svg"
            className="mr-[-10px] z-10"
          />
          <div className="flex bg-neutral-700 text-white font-supercell text-xs lg:text-md">
            <p className="ml-4">{battle.playerCrowns}</p>
            <p className="mr-2 ml-2">-</p>
            <p className="mr-4">{battle.opponentCrowns}</p>
          </div>
          <Image
            alt="player deck"
            loading="lazy"
            height={10}
            width={20}
            src="/opp-crown.svg"
            className="ml-[-10px] z-10"
          />
        </div>
        <div className="flex flex-row w-full justify-center items-center gap-4">
          <ShowDeck deck={battle.playerDeck} />
          <p className="font-supercell">-</p>
          <ShowDeck deck={battle.opponentDeck} />
        </div>
      </div>
    );
  });
};

export default IndividualBattles;
