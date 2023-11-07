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
  success: boolean;
  rowsAdded?: string;
  battles?: DbRow[];
};
