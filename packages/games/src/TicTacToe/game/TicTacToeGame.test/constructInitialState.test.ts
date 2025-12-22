import { createDescriptionForTest } from "@repo/core/test.js";
import {
  createDescriptionForTestOfConstructInitialState,
  validateConstructInitialState,
} from "@repo/game/Game.test/constructInitialState.test.js";
import { test } from "vitest";

import type { TicTacToeStateWithData } from "../TicTacToeState.test/setup.js";
import type { TicTacToeGameWithData } from "./setup.js";

import { recordOfTicTacToeStatesWithData } from "../TicTacToeState.test/records.js";
import { recordOfTicTacToeGamesWithData } from "./records.js";

const createDescription = ({
  affix,
  keyOfExpectedInitialState,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix"> &
  Pick<
    Parameters<typeof createDescriptionForTestOfConstructInitialState>[0],
    "keyOfExpectedInitialState"
  >) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestOfConstructInitialState({
      keyOfExpectedInitialState,
    }),
  });

const testConstructInitialState = ({
  arrayOfGamesWithData,
  expectedInitialState,
}: {
  arrayOfGamesWithData: TicTacToeGameWithData[];
  expectedInitialState: TicTacToeStateWithData;
}) => {
  arrayOfGamesWithData.forEach(({ game, keyOfGame }) => {
    test(
      createDescription({
        affix: keyOfGame,
        keyOfExpectedInitialState: expectedInitialState.keyOfState,
      }),

      () => {
        validateConstructInitialState({
          expectedInitialState: expectedInitialState.state,
          game,
        });
      },
    );
  });
};

testConstructInitialState({
  arrayOfGamesWithData: Object.values(recordOfTicTacToeGamesWithData),
  expectedInitialState:
    recordOfTicTacToeStatesWithData.allSlotsAreEmptyAndAliceHas0PointsAndBrunoHas0PointsAndAliceIsTheCurrentPlayer,
});
