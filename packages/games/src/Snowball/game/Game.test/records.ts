import { indexedSnowballMovesWithData } from "../Move.test/indexedRecords.js";
import { indexedSnowballPlayersWithData } from "../Player.test/indexedRecords.js";
import { indexedSlotsWithDataInWhichAllSlotsAreEmpty } from "../Slot.test/indexedRecords.js";
import {
  createRecordOfSnowballGamesWithData,
  type RecordOfRequiredParamsOfSnowballGames,
} from "./setup.js";

const recordOfRequiredParamsOfSnowballGames = {
  snowballWith9RowsAnd9Columns: {
    movesWithData: indexedSnowballMovesWithData,
    name: "Snowball",
    playersWithData: indexedSnowballPlayersWithData,
    slotsWithData: indexedSlotsWithDataInWhichAllSlotsAreEmpty,
  },
} as const satisfies RecordOfRequiredParamsOfSnowballGames;

const recordOfSnowballGamesWithData = createRecordOfSnowballGamesWithData({
  recordOfRequiredParamsOfGames: recordOfRequiredParamsOfSnowballGames,
});

export type { RecordOfRequiredParamsOfSnowballGames };
export { recordOfSnowballGamesWithData };
