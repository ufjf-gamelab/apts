import type { recordOfRequiredParamsOfMoves } from "../Move.test/records.js";

import { gamesWithDataForUnitTest } from "../Game.test/setup.js";
import {
  indexedMovesWithData,
  movesWithDataAndIndex,
  type SnowballMoveWithDataAndIndex,
} from "../Move.test/indexedRecords.js";
import { type SnowballMoveWithData } from "../Move.test/setup.js";
import { playersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO as playersWithDataAndIndex } from "../Player.test/indexedRecords.js";
import { scoresWithDataForUnitTest } from "../Score.test/setup.js";
import {
  indexedSlotsWithDataInWhichAllSlotsAreEmpty,
  indexedSlotsWithDataInWhichSlotsR0C0ToR4C4AndR5C5AreFilledByAliceAndSlotsR8C4AndR6C5ToR8C6AndR0C7ToR8C8AreFilledByBruno,
} from "../Slot.test/indexedRecords.js";
import {
  createSnowballStatesWithData,
  type RequiredSnowballStateParams,
} from "./setup.js";

type RecordOfRequiredSnowballStateParams = Record<
  string,
  RequiredSnowballStateParams
>;

const constructTupleForMove = ({
  move,
}: {
  move: SnowballMoveWithDataAndIndex<typeof recordOfRequiredParamsOfMoves>;
}): [number, SnowballMoveWithData] => [move.index, move.move];

const recordOfRequiredParamsOfStates = {
  allSlotsAreEmptyAndAliceHas0PointsAndBrunoHas0PointsAndAliceIsTheCurrentPlayer:
    {
      game: gamesWithDataForUnitTest.snowballWith9RowsAnd9Columns,
      isFinal: false,
      player: playersWithDataAndIndex.alice,
      score: scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points,
      slots: indexedSlotsWithDataInWhichAllSlotsAreEmpty,
      validMoves: new Map(
        indexedMovesWithData.map((move, indexOfMove) => [indexOfMove, move]),
      ),
    },
  slotsR0C0ToR4C4AndR5C5AreFilledByAliceAndSlotsR8C4AndR6C5ToR8C6AndR0C7ToR8C8AreFilledByBrunoAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer:
    {
      game: gamesWithDataForUnitTest.snowballWith9RowsAnd9Columns,
      isFinal: true,
      player: playersWithDataAndIndex.bruno,
      score: scoresWithDataForUnitTest.aliceWith38PointsAndBrunoWith26Points,
      slots:
        indexedSlotsWithDataInWhichSlotsR0C0ToR4C4AndR5C5AreFilledByAliceAndSlotsR8C4AndR6C5ToR8C6AndR0C7ToR8C8AreFilledByBruno,
      validMoves: new Map([
        constructTupleForMove({
          move: movesWithDataAndIndex.centerOfSouth,
        }),
        constructTupleForMove({
          move: movesWithDataAndIndex.centerOfSouthwest,
        }),
        constructTupleForMove({
          move: movesWithDataAndIndex.eastOfCenter,
        }),
        constructTupleForMove({
          move: movesWithDataAndIndex.eastOfNorth,
        }),
        constructTupleForMove({
          move: movesWithDataAndIndex.eastOfSouthwest,
        }),
        constructTupleForMove({
          move: movesWithDataAndIndex.northeastOfCenter,
        }),
        constructTupleForMove({
          move: movesWithDataAndIndex.northeastOfNorth,
        }),
        constructTupleForMove({
          move: movesWithDataAndIndex.northeastOfSouthwest,
        }),
        constructTupleForMove({
          move: movesWithDataAndIndex.northOfSouth,
        }),
        constructTupleForMove({
          move: movesWithDataAndIndex.northOfSouthwest,
        }),
        constructTupleForMove({
          move: movesWithDataAndIndex.northwestOfEast,
        }),
        constructTupleForMove({
          move: movesWithDataAndIndex.northwestOfNortheast,
        }),
        constructTupleForMove({
          move: movesWithDataAndIndex.northwestOfSouth,
        }),
        constructTupleForMove({
          move: movesWithDataAndIndex.northwestOfSouthwest,
        }),
        constructTupleForMove({
          move: movesWithDataAndIndex.southeastOfNorth,
        }),
        constructTupleForMove({
          move: movesWithDataAndIndex.southeastOfSouthwest,
        }),
        constructTupleForMove({
          move: movesWithDataAndIndex.southeastOfWest,
        }),
        constructTupleForMove({
          move: movesWithDataAndIndex.southOfCenter,
        }),
        constructTupleForMove({
          move: movesWithDataAndIndex.southOfSouthwest,
        }),
        constructTupleForMove({
          move: movesWithDataAndIndex.southOfWest,
        }),
        constructTupleForMove({
          move: movesWithDataAndIndex.southwestOfCenter,
        }),
        constructTupleForMove({
          move: movesWithDataAndIndex.southwestOfEast,
        }),
        constructTupleForMove({
          move: movesWithDataAndIndex.southwestOfNortheast,
        }),
        constructTupleForMove({
          move: movesWithDataAndIndex.southwestOfSouth,
        }),
        constructTupleForMove({
          move: movesWithDataAndIndex.southwestOfSouthwest,
        }),
        constructTupleForMove({
          move: movesWithDataAndIndex.southwestOfWest,
        }),
        constructTupleForMove({
          move: movesWithDataAndIndex.westOfEast,
        }),
        constructTupleForMove({
          move: movesWithDataAndIndex.westOfNortheast,
        }),
        constructTupleForMove({
          move: movesWithDataAndIndex.westOfSouth,
        }),
        constructTupleForMove({
          move: movesWithDataAndIndex.westOfSouthwest,
        }),
      ]),
    },
} as const satisfies RecordOfRequiredSnowballStateParams;

const statesWithData = createSnowballStatesWithData({
  recordOfRequiredParams: recordOfRequiredParamsOfStates,
});

export type { RecordOfRequiredSnowballStateParams };
export { recordOfRequiredParamsOfStates, statesWithData };
