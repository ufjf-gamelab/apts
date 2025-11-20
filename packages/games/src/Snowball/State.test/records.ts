import type { RequiredSnowballStateParams } from "./setup.js";

import { getIndexOfPlayer } from "../Game.test/players.js";
import { gamesWithDataForUnitTest } from "../Game.test/setup.js";
import {
  getIndexedSnowballSlotsWithData,
  getIndexedSnowballSlotsWithDataForUnitTest,
} from "../Game.test/slots.js";
import { scoresWithDataForUnitTest } from "../Score.test/setup.js";

const recordOfRequiredParamsOfStates = {
  noSlotsAreFilledAndAliceHasNoPointsAndBrunoHasNoPointsAndAliceIsTheCurrentPlayer:
    {
      game: gamesWithDataForUnitTest.snowballWith9RowsAnd9Columns.game,
      indexOfPlayer: getIndexOfPlayer({ keyOfPlayer: "alice" }),
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
      slots: getIndexedSnowballSlotsWithData(),
    },
  stateForUnitTest: {
    game: gamesWithDataForUnitTest.snowballWith9RowsAnd9Columns.game,
    indexOfPlayer: getIndexOfPlayer({ keyOfPlayer: "alice" }),
    score: scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    slots: getIndexedSnowballSlotsWithDataForUnitTest(),
  },
} as const satisfies Record<string, RequiredSnowballStateParams>;

export { recordOfRequiredParamsOfStates };
