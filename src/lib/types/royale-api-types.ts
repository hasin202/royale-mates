export type IconUrls = {
  large?: string;
  medium: string;
  evolutionMedium?: string;
};

export type Badge = {
  name: string;
  level: number;
  maxLevel: number;
  progress: number;
  target: number;
  iconUrls: IconUrls;
};

export type Achievement = {
  name: string;
  stars: number;
  value: number;
  target: number;
  info: string;
  completionInfo: string | null;
};

export type Card = {
  name: string;
  id: number;
  level: number;
  starLevel?: number;
  maxLevel: number;
  maxEvolutionLevel?: number;
  iconUrls: IconUrls;
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

export type PlayerProfile = {
  tag: string;
  name: string;
  expLevel: number;
  trophies: number;
  bestTrophies: number;
  wins: number;
  losses: number;
  battleCount: number;
  threeCrownWins: number;
  challengeCardsWon: number;
  challengeMaxWins: number;
  tournamentCardsWon: number;
  tournamentBattleCount: number;
  donations: number;
  donationsReceived: number;
  totalDonations: number;
  warDayWins: number;
  clanCardsCollected: number;
  arena: Arena;
  badges: Badge[];
  achievements: Achievement[];
  cards: Card[];
  currentDeck: Card[];
  currentFavouriteCard: Card;
  starPoints: number;
  expPoints: number;
  legacyTrophyRoadHighScore: number;
  currentPathOfLegendSeasonResult: any;
  lastPathOfLegendSeasonResult: any;
  bestPathOfLegendSeasonResult: any;
  totalExpPoints: number;
};

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
  // win = 2 means player has won
  // win = 1 means opponent has won
  // win = 0 means draw
  win: number;
};
