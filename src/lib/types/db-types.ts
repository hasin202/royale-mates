import { CleanedData } from "./royale-api-types";

export type DbRow = {
  id: number;
  battleTime: string;
  playerName: string;
  playerTag: string;
  playerDeck: string[];
  playerCrowns: number;
  opponentName: string;
  opponentTag: string;
  opponentDeck: string[];
  opponentCrowns: number;
  clanName: string;
  win: number;
};

export type UpdateDbResponse = {
  rowsAdded?: number;
  battles?: DbRow[] | CleanedData[];
};
