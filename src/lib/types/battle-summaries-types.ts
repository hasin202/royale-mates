import { DbRow } from "./db-types";

export type BattleSummary = {
  playerName: string;
  opponentName: string;
  playerWins: number;
  opponentWins: number;
  battles: DbRow[];
};

export type BattleSummaries = BattleSummary[];
