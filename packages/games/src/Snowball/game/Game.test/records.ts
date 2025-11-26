import { indexedMovesWithData } from "../Move.test/indexedRecords.js";
import { indexedPlayersWithDataInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO as indexedPlayersWithData } from "../Player.test/indexedRecords.js";
import { indexedSlotsWithDataInWhichAllSlotsAreEmpty } from "../Slot.test/indexedRecords.js";
import {
  createSnowballGamesWithData,
  type RequiredParamsOfSnowballGame,
} from "./setup.js";

type RecordOfRequiredParamsOfSnowballGames = Record<
  string,
  RequiredParamsOfSnowballGame
>;

const recordOfRequiredParamsOfGames = {
  snowballWith9RowsAnd9Columns: {
    movesWithData: indexedMovesWithData,
    name: "Snowball",
    playersWithData: indexedPlayersWithData,
    slotsWithData: indexedSlotsWithDataInWhichAllSlotsAreEmpty,
  },
} as const satisfies RecordOfRequiredParamsOfSnowballGames;

const gamesWithData = createSnowballGamesWithData({
  recordOfRequiredParams: recordOfRequiredParamsOfGames,
});

export type { RecordOfRequiredParamsOfSnowballGames };
export { gamesWithData };
