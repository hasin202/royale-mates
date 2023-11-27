import React from "react";
import Image from "next/image";

interface ComponentProps {
  deck: string[];
}

const ShowDeck: React.FC<ComponentProps> = ({ deck }) => {
  return (
    <div className="grid grid-cols-sm-cards-grid-cols grid-rows-2">
      {deck.map((card, u) => {
        return (
          <Image
            key={u}
            alt="player deck"
            loading="lazy"
            height={10}
            width={40}
            src={card}
          />
        );
      })}
    </div>
  );
};

export default ShowDeck;
