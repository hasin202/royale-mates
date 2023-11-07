export type Card = {
  name: string;
  id: number;
  level: number;
  starLevel?: number;
  maxLevel: number;
  maxEvolutionLevel?: number;
  iconUrls: {
    medium: string;
    evolutionMedium?: string;
  };
};

export type Clan = {
  tag: string;
  name: string;
  badgeId: number;
};

export type Player = {
  tag: string;
  name: string;
  startingTrophies: number;
  trophyChange: number;
  crowns: number;
  kingTowerHitPoints: number;
  princessTowersHitPoints?: number[] | null;
  clan: Clan;
  cards: Card[];
  globalRank: null | number;
  elixirLeaked: number;
};

export type GameMode = {
  id: number;
  name: string;
};

export type Arena = {
  id: number;
  name: string;
};

export type Battle = {
  type: string;
  battleTime: string;
  isLadderTournament: boolean;
  arena: Arena;
  gameMode: GameMode;
  deckSelection: string;
  team: Player[];
  opponent: Player[];
  isHostedMatch: boolean;
  leagueNumber: number;
};

// Define the type for an array of Battle objects
export type Battles = Battle[];

export type CleanedData = {
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
  //win = 2 means player has won
  //win = 1 means opponent has won
  //win = 0 means draw
  win: number;
};

export type APIError = {
  message: string;
  extraInfo?: string;
};

export type APIResponse<T> = {
  body?: T;
  error?: APIError;
};

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
  battles?: DbRow[]; // Assuming `DbRows` is a type you've defined elsewhere that represents the structure of the battles rows in your database.
};

export class CustomError extends Error {
  constructor(
    public message: string,
    public statusCode: number,
    public extraInfo?: string
  ) {
    super(message);
  }
}
