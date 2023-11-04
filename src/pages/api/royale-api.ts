import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import {
  Battles,
  CleanedData,
  RoyaleApiResonse,
  RoyaleApiErrorResponse,
} from "@/lib/types/types";
import cleanPlayerDeck from "@/lib/helpers/funcs/clean-decks/clean-player-deck";

const URL = "https://proxy.royaleapi.dev/v1/players/%23LGP89JU/battlelog";
const headers = {
  Accept: "application/json",
  Authorization: `Bearer ${process.env.ROYALE_API_KEY}`,
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<RoyaleApiResonse | RoyaleApiErrorResponse>
) {
  try {
    const response = await axios.get<Battles>(URL, { headers });
    const friendlyBattles = response.data.filter(
      (item) => item.type === "clanMate"
    );

    if (!friendlyBattles)
      res.status(404).json({
        foundBattles: false,
        data: "Oops. Looks like you havent had any friendly battles recently. Why dont you have some and come back!",
      });

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

    res.status(200).json({ foundBattles: true, data: cleanedFriendlyBattles });
  } catch (error) {
    console.log({ message: error });
    res.status(500);
  }
}
