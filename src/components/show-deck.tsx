import React from "react";
import Image from "next/image";

interface ComponentProps {
  deck: string[];
}

const ShowDeck: React.FC<ComponentProps> = ({ deck }) => {
  return (
    <div className="grid grid-cols-sm-cards-grid-cols md:grid-cols-md-cards-grid-cols 2xl:grid-cols-2xl-cards-grid-cols grid-rows-2 items-center justify-center">
      {deck.map((card, u) => {
        return (
          <Image
            key={u}
            alt="player deck"
            loading="lazy"
            layout="responsive"
            height={10}
            width={40}
            src={`/cards/${card}.png`}
            objectFit="contain"
          />
        );
      })}
    </div>
  );
};

export default ShowDeck;
