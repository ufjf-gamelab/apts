import { GameMode, GameName } from "@repo/engine/interface/types.js";
import TicTacToeGame from "../../../games/TicTacToe/Game";
import { getInput } from "../../../interface/environments/fileSystem/program";
import play from "./play";

const startGameplay = async ({
  game,
  gameMode,
}: {
  game: string;
  gameMode: GameMode;
}): Promise<void> => {
  switch (game as GameName) {
    case GameName.Connect4:
      console.log("Playing Connect 4...");
      break;
    case GameName.TicTacToe:
      await play({
        game: new TicTacToeGame({
          quantityOfColumns: 3,
          quantityOfRows: 3,
        }),
        gameMode,
        getInput,
      });
      break;
    default:
      console.error("Invalid game.");
      break;
  }
};

export default startGameplay;
