import { createStatesWithData } from "@repo/game/State.test/setup.js";

import {
  getIndexedSnowballMovesWithData,
  getIndexOfMoveOnDefaultMoves,
} from "../Game.test/moves.js";
import { gamesWithDataForUnitTest } from "../Game.test/setup.js";
import {
  movesWithData,
  type SnowballMoveWithData,
} from "../Move.test/setup.js";
import { snowballPlayersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO } from "../Player.test/indexedRecords.js";
import { scoresWithDataForUnitTest } from "../Score.test/setup.js";
import {
  indexedSnowballSlotsWithDataInWhichAllSlotsAreEmpty,
  indexedSnowballSlotsWithDataInWhichSlotsR0C0ToR4C4AndR5C5AreFilledByAliceAndSlotsR8C4AndR6C5ToR8C6AndR0C7ToR8C8AreFilledByBruno,
} from "../Slot.test/indexedRecords.js";
import {
  createSnowballState,
  deriveSnowballStateParams,
  type RequiredSnowballStateParams,
} from "./setup.js";

const constructTupleForMove = ({
  move,
}: {
  move: SnowballMoveWithData;
}): [number, SnowballMoveWithData] => [
  getIndexOfMoveOnDefaultMoves({
    keyOfMove: move.keyOfMove,
  }),
  move,
];

const recordOfRequiredParamsOfStates = {
  allSlotsAreEmptyAndAliceHas0PointsAndBrunoHas0PointsAndAliceIsTheCurrentPlayer:
    {
      game: gamesWithDataForUnitTest.snowballWith9RowsAnd9Columns,
      isFinal: false,
      player:
        snowballPlayersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO.alice,
      score: scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points,
      slots: indexedSnowballSlotsWithDataInWhichAllSlotsAreEmpty,
      validMoves: new Map(
        getIndexedSnowballMovesWithData().map((move, indexOfMove) => [
          indexOfMove,
          move,
        ]),
      ),
    },
  slotsR0C0ToR4C4AndR5C5AreFilledByAliceAndSlotsR8C4AndR6C5ToR8C6AndR0C7ToR8C8AreFilledByBrunoAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer:
    {
      game: gamesWithDataForUnitTest.snowballWith9RowsAnd9Columns,
      isFinal: true,
      player:
        snowballPlayersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO.bruno,
      score: scoresWithDataForUnitTest.aliceWith38PointsAndBrunoWith26Points,
      slots:
        indexedSnowballSlotsWithDataInWhichSlotsR0C0ToR4C4AndR5C5AreFilledByAliceAndSlotsR8C4AndR6C5ToR8C6AndR0C7ToR8C8AreFilledByBruno,
      validMoves: new Map([
        constructTupleForMove({
          move: movesWithData.centerOfSouth,
        }),
        constructTupleForMove({
          move: movesWithData.centerOfSouthwest,
        }),
        constructTupleForMove({
          move: movesWithData.eastOfCenter,
        }),
        constructTupleForMove({
          move: movesWithData.eastOfNorth,
        }),
        constructTupleForMove({
          move: movesWithData.eastOfSouthwest,
        }),
        constructTupleForMove({
          move: movesWithData.northeastOfCenter,
        }),
        constructTupleForMove({
          move: movesWithData.northeastOfNorth,
        }),
        constructTupleForMove({
          move: movesWithData.northeastOfSouthwest,
        }),
        constructTupleForMove({
          move: movesWithData.northOfSouth,
        }),
        constructTupleForMove({
          move: movesWithData.northOfSouthwest,
        }),
        constructTupleForMove({
          move: movesWithData.northwestOfEast,
        }),
        constructTupleForMove({
          move: movesWithData.northwestOfNortheast,
        }),
        constructTupleForMove({
          move: movesWithData.northwestOfSouth,
        }),
        constructTupleForMove({
          move: movesWithData.northwestOfSouthwest,
        }),
        constructTupleForMove({
          move: movesWithData.southeastOfNorth,
        }),
        constructTupleForMove({
          move: movesWithData.southeastOfSouthwest,
        }),
        constructTupleForMove({
          move: movesWithData.southeastOfWest,
        }),
        constructTupleForMove({
          move: movesWithData.southOfCenter,
        }),
        constructTupleForMove({
          move: movesWithData.southOfSouthwest,
        }),
        constructTupleForMove({
          move: movesWithData.southOfWest,
        }),
        constructTupleForMove({
          move: movesWithData.southwestOfCenter,
        }),
        constructTupleForMove({
          move: movesWithData.southwestOfEast,
        }),
        constructTupleForMove({
          move: movesWithData.southwestOfNortheast,
        }),
        constructTupleForMove({
          move: movesWithData.southwestOfSouth,
        }),
        constructTupleForMove({
          move: movesWithData.southwestOfSouthwest,
        }),
        constructTupleForMove({
          move: movesWithData.southwestOfWest,
        }),
        constructTupleForMove({
          move: movesWithData.westOfEast,
        }),
        constructTupleForMove({
          move: movesWithData.westOfNortheast,
        }),
        constructTupleForMove({
          move: movesWithData.westOfSouth,
        }),
        constructTupleForMove({
          move: movesWithData.westOfSouthwest,
        }),
      ]),
    },
} as const satisfies Record<string, RequiredSnowballStateParams>;

const statesWithData = createStatesWithData({
  create: createSnowballState,
  deriveParams: deriveSnowballStateParams,
  recordOfRequiredParams: recordOfRequiredParamsOfStates,
});

export { recordOfRequiredParamsOfStates, statesWithData };
