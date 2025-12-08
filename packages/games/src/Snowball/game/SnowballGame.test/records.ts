import { indexedSnowballMovesWithData } from "../SnowballMove.test/indexedRecords.js";
import { indexedSnowballPlayersWithData } from "../SnowballPlayer.test/indexedRecords.js";
import { indexedSnowballSlotsWithDataInWhichAllSlotsAreEmpty } from "../SnowballSlot.test/indexedRecords.js";
import {
  createRecordOfSnowballGamesWithData,
  type RecordOfRequiredParamsOfSnowballGames,
} from "./setup.js";

const recordOfRequiredParamsOfSnowballGames = {
  snowballWith9RowsAnd9Columns: {
    movesWithData: indexedSnowballMovesWithData,
    name: "Snowball",
    playersWithData: indexedSnowballPlayersWithData,
    slotsWithData: indexedSnowballSlotsWithDataInWhichAllSlotsAreEmpty,
  },
} as const satisfies RecordOfRequiredParamsOfSnowballGames;

const recordOfSnowballGamesWithData = createRecordOfSnowballGamesWithData({
  recordOfRequiredParamsOfGames: recordOfRequiredParamsOfSnowballGames,
});

export type { RecordOfRequiredParamsOfSnowballGames };
export { recordOfSnowballGamesWithData };
