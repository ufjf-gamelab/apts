import { recordOfConnectFourGamesWithData } from "../Game.test/records.js";
import {
  type ConnectFourMoveWithDataAndIndex,
  recordOfConnectFourMovesWithDataAndIndex,
} from "../Move.test/indexedRecords.js";
import { type ConnectFourMoveWithData } from "../Move.test/setup.js";
import { recordOfConnectFourPlayersWithDataAndIndex } from "../Player.test/indexedRecords.js";
import { recordOfConnectFourScoresWithData } from "../Score.test/records.js";
import {
  indexedConnectFourSlotsWithDataInWhichAllSlotsAreEmpty,
  indexedConnectFourSlotsWithDataInWhichSlotR0C0IsFilledByAlice,
} from "../Slot.test/indexedRecords.js";
import {
  createRecordOfConnectFourStatesWithData,
  type RecordOfRequiredParamsOfConnectFourStates,
} from "./setup.js";

const constructTupleForMove = ({
  moveWithDataAndIndex,
}: {
  moveWithDataAndIndex: ConnectFourMoveWithDataAndIndex;
}): [number, ConnectFourMoveWithData] => [
  moveWithDataAndIndex.indexOfMove,
  moveWithDataAndIndex.moveWithData,
];

const recordOfRequiredParamsOfConnectFourStates = {
  allSlotsAreEmptyAndAliceHas0PointsAndBrunoHas0PointsAndAliceIsTheCurrentPlayer:
    {
      gameWithData:
        recordOfConnectFourGamesWithData.snowballWith9RowsAnd9Columns,
      isFinal: false,
      nextPlayerWithDataAndIndex:
        recordOfConnectFourPlayersWithDataAndIndex.bruno,
      playerWithDataAndIndex: recordOfConnectFourPlayersWithDataAndIndex.alice,
      scoreWithData:
        recordOfConnectFourScoresWithData.aliceWith0PointsAndBrunoWith0Points,
      slotsWithData: indexedConnectFourSlotsWithDataInWhichAllSlotsAreEmpty,
      validMovesWithData: new Map([
        constructTupleForMove({
          moveWithDataAndIndex: recordOfConnectFourMovesWithDataAndIndex.c0,
        }),
        constructTupleForMove({
          moveWithDataAndIndex: recordOfConnectFourMovesWithDataAndIndex.c1,
        }),
        constructTupleForMove({
          moveWithDataAndIndex: recordOfConnectFourMovesWithDataAndIndex.c2,
        }),
        constructTupleForMove({
          moveWithDataAndIndex: recordOfConnectFourMovesWithDataAndIndex.c3,
        }),
        constructTupleForMove({
          moveWithDataAndIndex: recordOfConnectFourMovesWithDataAndIndex.c4,
        }),
        constructTupleForMove({
          moveWithDataAndIndex: recordOfConnectFourMovesWithDataAndIndex.c5,
        }),
        constructTupleForMove({
          moveWithDataAndIndex: recordOfConnectFourMovesWithDataAndIndex.c6,
        }),
      ]),
    },
  slotR0C0IsFilledByAliceAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer:
    {
      gameWithData:
        recordOfConnectFourGamesWithData.snowballWith9RowsAnd9Columns,
      isFinal: false,
      nextPlayerWithDataAndIndex:
        recordOfConnectFourPlayersWithDataAndIndex.alice,
      playerWithDataAndIndex: recordOfConnectFourPlayersWithDataAndIndex.bruno,
      scoreWithData:
        recordOfConnectFourScoresWithData.aliceWith0PointsAndBrunoWith0Points,
      slotsWithData:
        indexedConnectFourSlotsWithDataInWhichSlotR0C0IsFilledByAlice,
      validMovesWithData: new Map([
        constructTupleForMove({
          moveWithDataAndIndex: recordOfConnectFourMovesWithDataAndIndex.c0,
        }),
        constructTupleForMove({
          moveWithDataAndIndex: recordOfConnectFourMovesWithDataAndIndex.c1,
        }),
        constructTupleForMove({
          moveWithDataAndIndex: recordOfConnectFourMovesWithDataAndIndex.c2,
        }),
        constructTupleForMove({
          moveWithDataAndIndex: recordOfConnectFourMovesWithDataAndIndex.c3,
        }),
        constructTupleForMove({
          moveWithDataAndIndex: recordOfConnectFourMovesWithDataAndIndex.c4,
        }),
        constructTupleForMove({
          moveWithDataAndIndex: recordOfConnectFourMovesWithDataAndIndex.c5,
        }),
        constructTupleForMove({
          moveWithDataAndIndex: recordOfConnectFourMovesWithDataAndIndex.c6,
        }),
      ]),
    },
} as const satisfies RecordOfRequiredParamsOfConnectFourStates;

const recordOfConnectFourStatesWithData =
  createRecordOfConnectFourStatesWithData({
    recordOfRequiredParamsOfStates: recordOfRequiredParamsOfConnectFourStates,
  });

export type { RecordOfRequiredParamsOfConnectFourStates };
export {
  recordOfConnectFourStatesWithData,
  recordOfRequiredParamsOfConnectFourStates,
};
