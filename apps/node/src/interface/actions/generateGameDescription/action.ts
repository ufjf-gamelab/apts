import { GameName } from "@repo/engine/interface/types.js";

interface GameDescription {
  $schema?: string;
}

const generateGameDescription = (game: GameName): string => {
  let description: GameDescription = {};
  if (game === GameName.TicTacToe) {
    description = {
      $schema: `${process.env["SCHEMAS_DIRECTORY"]}/TicTacToe/schema.json`,
    };
  }
  return JSON.stringify(description);
};

export default generateGameDescription;
