import { indexedConnectFourMovesWithData } from "../ConnectFourMove.test/indexedRecords.js";
import { indexedConnectFourPlayersWithData } from "../ConnectFourPlayer.test/indexedRecords.js";
import { indexedConnectFourSlotsWithDataInWhichAllSlotsAreEmpty } from "../ConnectFourSlot.test/indexedRecords.js";
import {
  createRecordOfConnectFourGamesWithData,
  type RecordOfRequiredParamsOfConnectFourGames,
} from "./setup.js";

const recordOfRequiredParamsOfConnectFourGames = {
  connectFourWith6RowsAnd7Columns: {
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
