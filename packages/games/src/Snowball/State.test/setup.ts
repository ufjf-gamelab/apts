import {
  createStateParams,
  createStatesWithData,
} from "@repo/game/State.test/setup.js";

import { gamesWithDataForUnitTest } from "../Game.test/setup.js";
import { playersWithData } from "../Player.test/setup.js";
import { scoresWithDataForUnitTest } from "../Score.test/setup.js";
import { slotsWithData } from "../Slot.test/setup.js";
import { SnowballState } from "../State.js";

type RequiredSnowballStateParams = Pick<
  SnowballStateParams,
  "game" | "indexOfPlayer" | "score" | "slots"
>;

type SnowballStateParams = ConstructorParameters<typeof SnowballState>[number];

const createSnowballStateParams = ({
  game,
  indexOfPlayer,
  score,
  slots,
}: RequiredSnowballStateParams): SnowballStateParams =>
  createStateParams({ game, indexOfPlayer, score, slots });

const createSnowballState = ({
  game,
  indexOfPlayer,
  score,
  slots,
}: SnowballStateParams): SnowballState =>
  new SnowballState({
    game,
    indexOfPlayer,
    score,
    slots,
  });

const paramsOfStates = {
  player0WithNoScoreAndAllSlotsEmpty: {
    game: gamesWithDataForUnitTest.snowballWith9RowsAnd9Columns.game,
    indexOfPlayer: playersWithData.alice.indexOfPlayer,
    score: scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    slots: [slotsWithData.centerOfCenter.slot],
  },
} as const satisfies Record<string, SnowballStateParams>;

const statesWithDataForUnitTest = createStatesWithData({
  createState: createSnowballState,
  createStateParams: createSnowballStateParams,
  partialParamsOfStates: paramsOfStates,
});

export { statesWithDataForUnitTest };
