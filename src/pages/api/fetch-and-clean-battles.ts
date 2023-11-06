import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { Battles, CleanedData } from "@/lib/types/types";
import cleanPlayerDeck from "@/lib/helpers/funcs/clean-decks/clean-player-deck";

export async function fetchAndCleanBattles(
  playerTag: string | string[] | undefined
): Promise<CleanedData[]> {
  const URL = `https://proxy.royaleapi.dev/v1/players/%23${playerTag}/battlelog`;
  const headers = {
    Accept: "application/json",
    Authorization: `Bearer ${process.env.ROYALE_API_KEY}`,
  };

  try {
    const response = await axios.get<Battles>(URL, { headers });
    const friendlyBattles = response.data.filter(
      (item) => item.type === "clanMate" || item.type === "friendly"
    );

    if (friendlyBattles.length === 0) {
      throw new Error("No friendly battles found.");
    }

    const cleanedFriendlyBattles: CleanedData[] = friendlyBattles.map(
      (battle) => {
        const { battleTime, team, opponent } = battle;
        const {
          name: playerName,
          tag: playerTag,
          crowns: playerCrowns,
          cards: playerCards,
          clan,
        } = team[0];
        const {
          name: opponentName,
          tag: opponentTag,
          crowns: opponentCrowns,
          cards: opponentCards,
        } = opponent[0];
        const { name: clanName } = clan;
        let win = 0;

        const playerDeck: string[] = cleanPlayerDeck(playerCards);
        const opponentDeck: string[] = cleanPlayerDeck(opponentCards);

        if (playerCrowns > opponentCrowns) win = 2;
        else if (playerCrowns < opponentCrowns) win = 1;

        return {
          battleTime: battleTime,
          playerName: playerName,
          playerTag: playerTag,
          playerDeck: playerDeck,
          playerCrowns: playerCrowns,
          opponentName: opponentName,
          opponentTag: opponentTag,
          opponentDeck: opponentDeck,
          opponentCrowns: opponentCrowns,
          clanName: clanName,
          win: win,
        };
      }
    );
    return cleanedFriendlyBattles;
  } catch (error) {
    throw error;
  }
}
