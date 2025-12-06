import { indexedConnectFourMovesWithData } from "../Move.test/indexedRecords.js";
import { indexedConnectFourPlayersWithData } from "../Player.test/indexedRecords.js";
import { indexedConnectFourSlotsWithDataInWhichAllSlotsAreEmpty } from "../Slot.test/indexedRecords.js";
import {
  createRecordOfConnectFourGamesWithData,
  type RecordOfRequiredParamsOfConnectFourGames,
} from "./setup.js";

const recordOfRequiredParamsOfConnectFourGames = {
  snowballWith9RowsAnd9Columns: {
    movesWithData: indexedConnectFourMovesWithData,
    name: "ConnectFour",
    playersWithData: indexedConnectFourPlayersWithData,
    slotsWithData: indexedConnectFourSlotsWithDataInWhichAllSlotsAreEmpty,
  },
} as const satisfies RecordOfRequiredParamsOfConnectFourGames;

const recordOfConnectFourGamesWithData = createRecordOfConnectFourGamesWithData(
  {
    recordOfRequiredParamsOfGames: recordOfRequiredParamsOfConnectFourGames,
  },
);

export type { RecordOfRequiredParamsOfConnectFourGames };
export { recordOfConnectFourGamesWithData };
