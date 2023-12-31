import { Card } from "@/lib/types/royale-api-types";

const cleanPlayerDeck = (deck: Card[]): string[] => {
  return deck.map((element) => element.name);
};

export default cleanPlayerDeck;
