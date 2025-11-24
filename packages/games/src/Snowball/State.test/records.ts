import type { recordOfRequiredParamsOfMoves } from "../Move.test/records.js";

import { gamesWithData } from "../Game.test/records.js";
import {
  indexedMovesWithData,
  movesWithDataAndIndex,
  type SnowballMoveWithDataAndIndex,
} from "../Move.test/indexedRecords.js";
import { type SnowballMoveWithData } from "../Move.test/setup.js";
import { playersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO as playersWithDataAndIndex } from "../Player.test/indexedRecords.js";
import { scoresWithData } from "../Score.test/records.js";
import {
  indexedSlotsWithDataInWhichAllSlotsAreEmpty,
  indexedSlotsWithDataInWhichSlotsR0C0ToR3C3AndR4C0AndR4C2AreFilledByAliceAndSlotsR0C4ToR3C7AndR3C8AreFilledByBruno,
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
      game: gamesWithData.snowballWith9RowsAnd9Columns,
      isFinal: false,
      nextPlayer: playersWithDataAndIndex.bruno,
      player: playersWithDataAndIndex.alice,
      score: scoresWithData.aliceWith0PointsAndBrunoWith0Points,
      slots: indexedSlotsWithDataInWhichAllSlotsAreEmpty,
      validMoves: new Map(
        indexedMovesWithData.map((move, indexOfMove) => [indexOfMove, move]),
      ),
    },
  slotsR0C0ToR3C3AndR4C0AndR4C2AreFilledByAliceAndSlotsR0C4ToR3C7AndR3C8AreFilledByBrunoAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer:
    {
      game: gamesWithData.snowballWith9RowsAnd9Columns,
      isFinal: true,
      nextPlayer: playersWithDataAndIndex.bruno,
      player: playersWithDataAndIndex.alice,
      score: scoresWithData.aliceWith15PointsAndBrunoWith14Points,
      slots:
        indexedSlotsWithDataInWhichSlotsR0C0ToR3C3AndR4C0AndR4C2AreFilledByAliceAndSlotsR0C4ToR3C7AndR3C8AreFilledByBruno,
      validMoves: new Map([
        constructTupleForMove({ move: movesWithDataAndIndex.centerOfCenter }),
        constructTupleForMove({ move: movesWithDataAndIndex.centerOfEast }),
        constructTupleForMove({
          move: movesWithDataAndIndex.centerOfSoutheast,
        }),
        constructTupleForMove({
          move: movesWithDataAndIndex.centerOfSouthwest,
        }),
        constructTupleForMove({ move: movesWithDataAndIndex.centerOfSouth }),
        constructTupleForMove({ move: movesWithDataAndIndex.centerOfWest }),
        constructTupleForMove({ move: movesWithDataAndIndex.eastOfCenter }),
        constructTupleForMove({ move: movesWithDataAndIndex.eastOfEast }),
        constructTupleForMove({ move: movesWithDataAndIndex.eastOfNortheast }),
        constructTupleForMove({ move: movesWithDataAndIndex.eastOfSoutheast }),
        constructTupleForMove({ move: movesWithDataAndIndex.eastOfSouthwest }),
        constructTupleForMove({ move: movesWithDataAndIndex.eastOfSouth }),
        constructTupleForMove({
          move: movesWithDataAndIndex.northeastOfNortheast,
        }),
        constructTupleForMove({
          move: movesWithDataAndIndex.northeastOfSoutheast,
        }),
        constructTupleForMove({
          move: movesWithDataAndIndex.northeastOfSouthwest,
        }),
        constructTupleForMove({ move: movesWithDataAndIndex.northeastOfSouth }),
        constructTupleForMove({ move: movesWithDataAndIndex.northOfSoutheast }),
        constructTupleForMove({ move: movesWithDataAndIndex.northOfSouthwest }),
        constructTupleForMove({ move: movesWithDataAndIndex.northOfSouth }),
        constructTupleForMove({
          move: movesWithDataAndIndex.northwestOfSoutheast,
        }),
        constructTupleForMove({
          move: movesWithDataAndIndex.northwestOfSouthwest,
        }),
        constructTupleForMove({ move: movesWithDataAndIndex.northwestOfSouth }),
        constructTupleForMove({
          move: movesWithDataAndIndex.southeastOfCenter,
        }),
        constructTupleForMove({ move: movesWithDataAndIndex.southeastOfEast }),
        constructTupleForMove({
          move: movesWithDataAndIndex.southeastOfNortheast,
        }),
        constructTupleForMove({
          move: movesWithDataAndIndex.southeastOfSoutheast,
        }),
        constructTupleForMove({
          move: movesWithDataAndIndex.southeastOfSouthwest,
        }),
        constructTupleForMove({ move: movesWithDataAndIndex.southeastOfSouth }),
        constructTupleForMove({ move: movesWithDataAndIndex.southeastOfWest }),
        constructTupleForMove({ move: movesWithDataAndIndex.southOfCenter }),
        constructTupleForMove({ move: movesWithDataAndIndex.southOfEast }),
        constructTupleForMove({ move: movesWithDataAndIndex.southOfSoutheast }),
        constructTupleForMove({ move: movesWithDataAndIndex.southOfSouthwest }),
        constructTupleForMove({ move: movesWithDataAndIndex.southOfSouth }),
        constructTupleForMove({ move: movesWithDataAndIndex.southOfWest }),
        constructTupleForMove({
          move: movesWithDataAndIndex.southwestOfCenter,
        }),
        constructTupleForMove({ move: movesWithDataAndIndex.southwestOfEast }),
        constructTupleForMove({
          move: movesWithDataAndIndex.southwestOfSoutheast,
        }),
        constructTupleForMove({
          move: movesWithDataAndIndex.southwestOfSouthwest,
        }),
        constructTupleForMove({ move: movesWithDataAndIndex.southwestOfSouth }),
        constructTupleForMove({ move: movesWithDataAndIndex.southwestOfWest }),
        constructTupleForMove({ move: movesWithDataAndIndex.westOfCenter }),
        constructTupleForMove({ move: movesWithDataAndIndex.westOfEast }),
        constructTupleForMove({ move: movesWithDataAndIndex.westOfSoutheast }),
        constructTupleForMove({ move: movesWithDataAndIndex.westOfSouthwest }),
        constructTupleForMove({ move: movesWithDataAndIndex.westOfSouth }),
      ]),
    },
  slotsR0C0ToR4C4AndR5C5AreFilledByAliceAndSlotsR8C4AndR6C5ToR8C6AndR0C7ToR8C8AreFilledByBrunoAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer:
    {
      game: gamesWithData.snowballWith9RowsAnd9Columns,
      isFinal: true,
      nextPlayer: playersWithDataAndIndex.alice,
      player: playersWithDataAndIndex.bruno,
      score: scoresWithData.aliceWith38PointsAndBrunoWith26Points,
      slots:
        indexedSlotsWithDataInWhichSlotsR0C0ToR4C4AndR5C5AreFilledByAliceAndSlotsR8C4AndR6C5ToR8C6AndR0C7ToR8C8AreFilledByBruno,
      validMoves: new Map([
        constructTupleForMove({
          move: movesWithDataAndIndex.centerOfSouthwest,
        }),
        constructTupleForMove({ move: movesWithDataAndIndex.centerOfSouth }),
        constructTupleForMove({ move: movesWithDataAndIndex.eastOfCenter }),
        constructTupleForMove({ move: movesWithDataAndIndex.eastOfNorth }),
        constructTupleForMove({ move: movesWithDataAndIndex.eastOfSouthwest }),
        constructTupleForMove({
          move: movesWithDataAndIndex.northeastOfCenter,
        }),
        constructTupleForMove({ move: movesWithDataAndIndex.northeastOfNorth }),
        constructTupleForMove({
          move: movesWithDataAndIndex.northeastOfSouthwest,
        }),
        constructTupleForMove({ move: movesWithDataAndIndex.northOfSouthwest }),
        constructTupleForMove({ move: movesWithDataAndIndex.northOfSouth }),
        constructTupleForMove({ move: movesWithDataAndIndex.northwestOfEast }),
        constructTupleForMove({
          move: movesWithDataAndIndex.northwestOfNortheast,
        }),
        constructTupleForMove({
          move: movesWithDataAndIndex.northwestOfSouthwest,
        }),
        constructTupleForMove({ move: movesWithDataAndIndex.northwestOfSouth }),
        constructTupleForMove({ move: movesWithDataAndIndex.southeastOfNorth }),
        constructTupleForMove({
          move: movesWithDataAndIndex.southeastOfSouthwest,
        }),
        constructTupleForMove({ move: movesWithDataAndIndex.southeastOfWest }),
        constructTupleForMove({ move: movesWithDataAndIndex.southOfCenter }),
        constructTupleForMove({ move: movesWithDataAndIndex.southOfSouthwest }),
        constructTupleForMove({ move: movesWithDataAndIndex.southOfWest }),
        constructTupleForMove({
          move: movesWithDataAndIndex.southwestOfCenter,
        }),
        constructTupleForMove({ move: movesWithDataAndIndex.southwestOfEast }),
        constructTupleForMove({
          move: movesWithDataAndIndex.southwestOfNortheast,
        }),
        constructTupleForMove({
          move: movesWithDataAndIndex.southwestOfSouthwest,
        }),
        constructTupleForMove({ move: movesWithDataAndIndex.southwestOfSouth }),
        constructTupleForMove({ move: movesWithDataAndIndex.southwestOfWest }),
        constructTupleForMove({ move: movesWithDataAndIndex.westOfEast }),
        constructTupleForMove({ move: movesWithDataAndIndex.westOfNortheast }),
        constructTupleForMove({ move: movesWithDataAndIndex.westOfSouthwest }),
        constructTupleForMove({ move: movesWithDataAndIndex.westOfSouth }),
      ]),
    },
} as const satisfies RecordOfRequiredSnowballStateParams;

const statesWithData = createSnowballStatesWithData({
  recordOfRequiredParams: recordOfRequiredParamsOfStates,
});

export type { RecordOfRequiredSnowballStateParams };
export { recordOfRequiredParamsOfStates, statesWithData };
