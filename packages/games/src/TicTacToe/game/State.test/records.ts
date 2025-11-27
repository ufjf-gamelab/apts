import { recordOfTicTacToeGamesWithData } from "../Game.test/records.js";
import {
  recordOfTicTacToeMovesWithDataAndIndex,
  type TicTacToeMoveWithDataAndIndex,
} from "../Move.test/indexedRecords.js";
import { type TicTacToeMoveWithData } from "../Move.test/setup.js";
import { recordOfTicTacToePlayersWithDataAndIndex } from "../Player.test/indexedRecords.js";
import { recordOfTicTacToeScoresWithData } from "../Score.test/records.js";
import {
  indexedTicTacToeSlotsWithDataInWhichAllSlotsAreEmpty,
  indexedTicTacToeSlotsWithDataInWhichSlotR0C0AndR0C2AndR1C1AndR1C2AndR2C1AreFilledByAliceAndR0C1AndR1C0AndR2C0AndR2C2AreFilledByBruno,
  indexedTicTacToeSlotsWithDataInWhichSlotR0C0AndR0C2AndR1C1AndR2C1AndR2C2AreFilledByAliceAndR0C1AndR1C0AndR1C2AndR2C0AreFilledByBruno,
  indexedTicTacToeSlotsWithDataInWhichSlotR0C0IsFilledByAlice,
  indexedTicTacToeSlotsWithDataInWhichSlotR1C1IsFilledByAlice,
  indexedTicTacToeSlotsWithDataInWhichSlotR2C1IsFilledByAlice,
} from "../Slot.test/indexedRecords.js";
import {
  createRecordOfTicTacToeStatesWithData,
  type RecordOfRequiredParamsOfTicTacToeStates,
} from "./setup.js";

const constructTupleForMove = ({
  moveWithDataAndIndex,
}: {
  moveWithDataAndIndex: TicTacToeMoveWithDataAndIndex;
}): [number, TicTacToeMoveWithData] => [
  moveWithDataAndIndex.indexOfMove,
  moveWithDataAndIndex.moveWithData,
];

const recordOfRequiredParamsOfTicTacToeStates = {
  allSlotsAreEmptyAndAliceHas0PointsAndBrunoHas0PointsAndAliceIsTheCurrentPlayer:
    {
      gameWithData:
        recordOfTicTacToeGamesWithData.ticTacToeWith9RowsAnd9Columns,
      isFinal: false,
      nextPlayerWithDataAndIndex:
        recordOfTicTacToePlayersWithDataAndIndex.bruno,
      playerWithDataAndIndex: recordOfTicTacToePlayersWithDataAndIndex.alice,
      scoreWithData:
        recordOfTicTacToeScoresWithData.aliceWith0PointsAndBrunoWith0Points,
      slotsWithData: indexedTicTacToeSlotsWithDataInWhichAllSlotsAreEmpty,
      validMovesWithData: new Map([
        constructTupleForMove({
          moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.center,
        }),
        constructTupleForMove({
          moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.east,
        }),
        constructTupleForMove({
          moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.north,
        }),
        constructTupleForMove({
          moveWithDataAndIndex:
            recordOfTicTacToeMovesWithDataAndIndex.northeast,
        }),
        constructTupleForMove({
          moveWithDataAndIndex:
            recordOfTicTacToeMovesWithDataAndIndex.northwest,
        }),
        constructTupleForMove({
          moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.south,
        }),
        constructTupleForMove({
          moveWithDataAndIndex:
            recordOfTicTacToeMovesWithDataAndIndex.southeast,
        }),
        constructTupleForMove({
          moveWithDataAndIndex:
            recordOfTicTacToeMovesWithDataAndIndex.southwest,
        }),
        constructTupleForMove({
          moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.west,
        }),
      ]),
    },
  slotR0C0AndR0C2AndR1C1AndR1C2AndR2C1AreFilledByAliceAndR0C1AndR1C0AndR2C0AndR2C2AreFilledByBrunoAndAliceHas1PointAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer:
    {
      gameWithData:
        recordOfTicTacToeGamesWithData.ticTacToeWith9RowsAnd9Columns,
      isFinal: true,
      nextPlayerWithDataAndIndex:
        recordOfTicTacToePlayersWithDataAndIndex.alice,
      playerWithDataAndIndex: recordOfTicTacToePlayersWithDataAndIndex.bruno,
      scoreWithData:
        recordOfTicTacToeScoresWithData.aliceWith0PointsAndBrunoWith0Points,
      slotsWithData:
        indexedTicTacToeSlotsWithDataInWhichSlotR0C0AndR0C2AndR1C1AndR1C2AndR2C1AreFilledByAliceAndR0C1AndR1C0AndR2C0AndR2C2AreFilledByBruno,
      validMovesWithData: new Map([]),
    },
  slotR0C0AndR0C2AndR1C1AndR2C1AndR2C2AreFilledByAliceAndR0C1AndR1C0AndR1C2AndR2C0AreFilledByBrunoAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer:
    {
      gameWithData:
        recordOfTicTacToeGamesWithData.ticTacToeWith9RowsAnd9Columns,
      isFinal: true,
      nextPlayerWithDataAndIndex:
        recordOfTicTacToePlayersWithDataAndIndex.alice,
      playerWithDataAndIndex: recordOfTicTacToePlayersWithDataAndIndex.bruno,
      scoreWithData:
        recordOfTicTacToeScoresWithData.aliceWith1PointAndBrunoWith0Points,
      slotsWithData:
        indexedTicTacToeSlotsWithDataInWhichSlotR0C0AndR0C2AndR1C1AndR2C1AndR2C2AreFilledByAliceAndR0C1AndR1C0AndR1C2AndR2C0AreFilledByBruno,
      validMovesWithData: new Map([]),
    },
  slotR0C0IsFilledByAliceAndAliceHas0PointsAndBrunoHas0PointsAndAliceIsTheCurrentPlayer:
    {
      gameWithData:
        recordOfTicTacToeGamesWithData.ticTacToeWith9RowsAnd9Columns,
      isFinal: false,
      nextPlayerWithDataAndIndex:
        recordOfTicTacToePlayersWithDataAndIndex.bruno,
      playerWithDataAndIndex: recordOfTicTacToePlayersWithDataAndIndex.alice,
      scoreWithData:
        recordOfTicTacToeScoresWithData.aliceWith0PointsAndBrunoWith0Points,
      slotsWithData:
        indexedTicTacToeSlotsWithDataInWhichSlotR0C0IsFilledByAlice,
      validMovesWithData: new Map([
        constructTupleForMove({
          moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.center,
        }),
        constructTupleForMove({
          moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.east,
        }),
        constructTupleForMove({
          moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.north,
        }),
        constructTupleForMove({
          moveWithDataAndIndex:
            recordOfTicTacToeMovesWithDataAndIndex.northeast,
        }),
        constructTupleForMove({
          moveWithDataAndIndex:
            recordOfTicTacToeMovesWithDataAndIndex.northwest,
        }),
        constructTupleForMove({
          moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.south,
        }),
        constructTupleForMove({
          moveWithDataAndIndex:
            recordOfTicTacToeMovesWithDataAndIndex.southeast,
        }),
        constructTupleForMove({
          moveWithDataAndIndex:
            recordOfTicTacToeMovesWithDataAndIndex.southwest,
        }),
        constructTupleForMove({
          moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.west,
        }),
      ]),
    },
  slotR1C1IsFilledByAliceAndAliceHas0PointsAndBrunoHas0PointsAndAliceIsTheCurrentPlayer:
    {
      gameWithData:
        recordOfTicTacToeGamesWithData.ticTacToeWith9RowsAnd9Columns,
      isFinal: false,
      nextPlayerWithDataAndIndex:
        recordOfTicTacToePlayersWithDataAndIndex.bruno,
      playerWithDataAndIndex: recordOfTicTacToePlayersWithDataAndIndex.alice,
      scoreWithData:
        recordOfTicTacToeScoresWithData.aliceWith0PointsAndBrunoWith0Points,
      slotsWithData:
        indexedTicTacToeSlotsWithDataInWhichSlotR1C1IsFilledByAlice,
      validMovesWithData: new Map([
        constructTupleForMove({
          moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.east,
        }),
        constructTupleForMove({
          moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.north,
        }),
        constructTupleForMove({
          moveWithDataAndIndex:
            recordOfTicTacToeMovesWithDataAndIndex.northeast,
        }),
        constructTupleForMove({
          moveWithDataAndIndex:
            recordOfTicTacToeMovesWithDataAndIndex.northwest,
        }),
        constructTupleForMove({
          moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.south,
        }),
        constructTupleForMove({
          moveWithDataAndIndex:
            recordOfTicTacToeMovesWithDataAndIndex.southeast,
        }),
        constructTupleForMove({
          moveWithDataAndIndex:
            recordOfTicTacToeMovesWithDataAndIndex.southwest,
        }),
        constructTupleForMove({
          moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.west,
        }),
      ]),
    },
  slotR2C1IsFilledByAliceAndAliceHas0PointsAndBrunoHas0PointsAndAliceIsTheCurrentPlayer:
    {
      gameWithData:
        recordOfTicTacToeGamesWithData.ticTacToeWith9RowsAnd9Columns,
      isFinal: false,
      nextPlayerWithDataAndIndex:
        recordOfTicTacToePlayersWithDataAndIndex.bruno,
      playerWithDataAndIndex: recordOfTicTacToePlayersWithDataAndIndex.alice,
      scoreWithData:
        recordOfTicTacToeScoresWithData.aliceWith0PointsAndBrunoWith0Points,
      slotsWithData:
        indexedTicTacToeSlotsWithDataInWhichSlotR2C1IsFilledByAlice,
      validMovesWithData: new Map([
        constructTupleForMove({
          moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.center,
        }),
        constructTupleForMove({
          moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.east,
        }),
        constructTupleForMove({
          moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.north,
        }),
        constructTupleForMove({
          moveWithDataAndIndex:
            recordOfTicTacToeMovesWithDataAndIndex.northeast,
        }),
        constructTupleForMove({
          moveWithDataAndIndex:
            recordOfTicTacToeMovesWithDataAndIndex.northwest,
        }),
        constructTupleForMove({
          moveWithDataAndIndex:
            recordOfTicTacToeMovesWithDataAndIndex.southeast,
        }),
        constructTupleForMove({
          moveWithDataAndIndex:
            recordOfTicTacToeMovesWithDataAndIndex.southwest,
        }),
        constructTupleForMove({
          moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.west,
        }),
      ]),
    },
} as const satisfies RecordOfRequiredParamsOfTicTacToeStates;

const recordOfTicTacToeStatesWithData = createRecordOfTicTacToeStatesWithData({
  recordOfRequiredParamsOfStates: recordOfRequiredParamsOfTicTacToeStates,
});

export type { RecordOfRequiredParamsOfTicTacToeStates };
export {
  recordOfRequiredParamsOfTicTacToeStates,
  recordOfTicTacToeStatesWithData,
};
