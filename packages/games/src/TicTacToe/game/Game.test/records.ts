import { indexedTicTacToeMovesWithData } from "../Move.test/indexedRecords.js";
import { indexedTicTacToePlayersWithData } from "../Player.test/indexedRecords.js";
import { indexedTicTacToeSlotsWithDataInWhichAllSlotsAreEmpty } from "../Slot.test/indexedRecords.js";
import {
  createRecordOfTicTacToeGamesWithData,
  type RecordOfRequiredParamsOfTicTacToeGames,
} from "./setup.js";

const recordOfRequiredParamsOfTicTacToeGames = {
  ticTacToeWith9RowsAnd9Columns: {
    movesWithData: indexedTicTacToeMovesWithData,
    name: "TicTacToe",
    playersWithData: indexedTicTacToePlayersWithData,
    slotsWithData: indexedTicTacToeSlotsWithDataInWhichAllSlotsAreEmpty,
  },
} as const satisfies RecordOfRequiredParamsOfTicTacToeGames;

const recordOfTicTacToeGamesWithData = createRecordOfTicTacToeGamesWithData({
  recordOfRequiredParamsOfGames: recordOfRequiredParamsOfTicTacToeGames,
});

export type { RecordOfRequiredParamsOfTicTacToeGames };
export { recordOfTicTacToeGamesWithData };
