import { InvalidArgumentError } from "commander";
import { GameMode } from "./types";

export const parseGameMode = (gameMode: string) => {
  switch (gameMode.toLowerCase()) {
    case "pvp":
      return GameMode.PvP;
    case "pvc":
      return GameMode.PvC;
    case "cvc":
      return GameMode.CvC;
    default:
      throw new InvalidArgumentError("Invalid game mode.");
  }
};
