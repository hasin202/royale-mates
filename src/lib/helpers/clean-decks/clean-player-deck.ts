import { Card } from "@/lib/types/royale-api-types";

const cleanPlayerDeck = (deck: Card[]): string[] => {
  return deck.map((element) => element.iconUrls.medium);
};

export default cleanPlayerDeck;
