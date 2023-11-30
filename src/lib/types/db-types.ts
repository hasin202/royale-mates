import { CleanedData } from "./royale-api-types";
import { UsersBattles } from "@prisma/client";

export type UpdateDbResponse = {
  rowsAdded?: string;
  battles?: UsersBattles[] | CleanedData[];
};
