import { UsersBattles } from "@prisma/client";
export type BattleSummary = {
  playerName: string;
  opponentName: string;
  playerWins: number;
  opponentWins: number;
  opponentTag: string;
  battles: UsersBattles[];
};
