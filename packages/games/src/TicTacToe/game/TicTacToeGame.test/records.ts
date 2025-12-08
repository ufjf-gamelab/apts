import { indexedTicTacToeMovesWithData } from "../TicTacToeMove.test/indexedRecords.js";
import { indexedTicTacToePlayersWithData } from "../TicTacToePlayer.test/indexedRecords.js";
import { indexedTicTacToeSlotsWithDataInWhichAllSlotsAreEmpty } from "../TicTacToeSlot.test/indexedRecords.js";
import {
  createRecordOfTicTacToeGamesWithData,
  type RecordOfRequiredParamsOfTicTacToeGames,
} from "./setup.js";

const recordOfRequiredParamsOfTicTacToeGames = {
  ticTacToeWith3RowsAnd3Columns: {
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
