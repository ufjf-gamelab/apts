import { InvalidArgumentError } from "commander";
import { FileOperation, validateFilePath } from "./environments/node/file";
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

export const parseJsonFile = (filePath: string) => {
  const hasJsonExtension = filePath.endsWith(".json");
  const formattedPath = hasJsonExtension ? filePath : `${filePath}.json`;
  return validateFilePath(formattedPath, FileOperation.Write);
};
