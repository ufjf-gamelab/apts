import { indexedMovesWithData } from "../Move.test/indexedRecords.js";
import { indexedPlayersWithDataInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO as indexedPlayersWithData } from "../Player.test/indexedRecords.js";
import { indexedSlotsWithDataInWhichAllSlotsAreEmpty } from "../Slot.test/indexedRecords.js";
import {
  createSnowballGamesWithData,
  type RequiredSnowballGameParams,
} from "./setup.js";

type RecordOfRequiredSnowballGameParams = Record<
  string,
  RequiredSnowballGameParams
>;

const recordOfRequiredParamsOfGames = {
  snowballWith9RowsAnd9Columns: {
    moves: indexedMovesWithData,
    name: "Snowball",
    players: indexedPlayersWithData,
    slots: indexedSlotsWithDataInWhichAllSlotsAreEmpty,
  },
} as const satisfies RecordOfRequiredSnowballGameParams;

const gamesWithData = createSnowballGamesWithData({
  recordOfRequiredParams: recordOfRequiredParamsOfGames,
});

export type { RecordOfRequiredSnowballGameParams };
export { gamesWithData };
