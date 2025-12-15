import { recordOfConnectFourGamesWithData } from "@repo/games/ConnectFour/game/ConnectFourGame.test/records.js";
import { recordOfSnowballGamesWithData } from "@repo/games/Snowball/game/SnowballGame.test/records.js";
import { recordOfTicTacToeGamesWithData } from "@repo/games/TicTacToe/game/TicTacToeGame.test/records.js";

const keysOfGames = {
  connectFour: "connectFour",
  snowball: "snowball",
  ticTacToe: "ticTacToe",
} as const;
type KeyOfGame = (typeof keysOfGames)[keyof typeof keysOfGames];

const selectGameUsingKeyOfGame = (keyOfGame: KeyOfGame) => {
  switch (keyOfGame) {
    case "connectFour": {
      return recordOfConnectFourGamesWithData.connectFourWith6RowsAnd7Columns
        .game;
    }
    case "snowball": {
      return recordOfSnowballGamesWithData.snowballWith9RowsAnd9Columns.game;
    }
    case "ticTacToe": {
      return recordOfTicTacToeGamesWithData.ticTacToeWith3RowsAnd3Columns.game;
    }
    default: {
      throw new Error("Invalid game.");
    }
  }
};

export type { KeyOfGame };
export { keysOfGames, selectGameUsingKeyOfGame };
