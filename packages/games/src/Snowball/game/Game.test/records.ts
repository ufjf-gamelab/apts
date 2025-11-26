import { indexedSnowballMovesWithData } from "../Move.test/indexedRecords.js";
import { indexedPlayersWithDataInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO as indexedPlayersWithData } from "../Player.test/indexedRecords.js";
import { indexedSlotsWithDataInWhichAllSlotsAreEmpty } from "../Slot.test/indexedRecords.js";
import {
  createRecordOfSnowballGamesWithData,
  type RecordOfRequiredParamsOfSnowballGames,
} from "./setup.js";

const recordOfRequiredParamsOfSnowballGames = {
  snowballWith9RowsAnd9Columns: {
    movesWithData: indexedSnowballMovesWithData,
    name: "Snowball",
    playersWithData: indexedPlayersWithData,
    slotsWithData: indexedSlotsWithDataInWhichAllSlotsAreEmpty,
  },
} as const satisfies RecordOfRequiredParamsOfSnowballGames;

const recordOfSnowballGamesWithData = createRecordOfSnowballGamesWithData({
  recordOfRequiredParamsOfGames: recordOfRequiredParamsOfSnowballGames,
});

export type { RecordOfRequiredParamsOfSnowballGames };
export { recordOfSnowballGamesWithData };
