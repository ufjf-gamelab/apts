import { createDescriptionForTest } from "@repo/engine_core/test.js";
import {
  createDescriptionForTestOfConstructInitialState,
  validateConstructInitialState,
} from "@repo/game/Game.test/constructInitialState.test.js";
import { test } from "vitest";

import type { SnowballGame } from "../Game.js";

import { statesWithDataForUnitTest } from "../State.test/setup.js";
import { gamesWithDataForUnitTest } from "./setup.js";

const createDescription = ({
  affix,
  expectedInitialState,
}: {
  affix: string;
  expectedInitialState: ReturnType<SnowballGame["constructInitialState"]>;
}) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestOfConstructInitialState({
      expectedInitialState,
    }),
  });

Object.values(gamesWithDataForUnitTest).forEach(({ game, keyOfGame }) => {
  test(
    createDescription({
      affix: keyOfGame,
      expectedInitialState:
        statesWithDataForUnitTest
          .noSlotsAreFilledAndAliceHas0PointsAndBrunoHas0PointsAndAliceIsTheCurrentPlayer
          .state,
    }),
    () => {
      validateConstructInitialState({
        expectedInitialState:
          statesWithDataForUnitTest
            .noSlotsAreFilledAndAliceHas0PointsAndBrunoHas0PointsAndAliceIsTheCurrentPlayer
            .state,
        game,
      });
    },
  );
});
