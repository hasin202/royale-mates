import { CleanedData } from "./royale-api-types";
import { UsersBattles } from "@prisma/client";

export type UpdateDbResponse = {
  rowsAdded?: number | string;
  battles?: UsersBattles[] | CleanedData[];
};
