import { createDescriptionForTest } from "@repo/engine_core/test.js";
import {
  createDescriptionForTestOfConstructInitialState,
  validateConstructInitialState,
} from "@repo/game/Game.test/constructInitialState.test.js";
import { test } from "vitest";

import type { ConnectFourStateWithData } from "../State.test/setup.js";
import type { ConnectFourGameWithData } from "./setup.js";

import { recordOfConnectFourStatesWithData } from "../State.test/records.js";
import { recordOfConnectFourGamesWithData } from "./records.js";

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
  arrayOfGamesWithData: ConnectFourGameWithData[];
  expectedInitialState: ConnectFourStateWithData;
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
  arrayOfGamesWithData: Object.values(recordOfConnectFourGamesWithData),
  expectedInitialState:
    recordOfConnectFourStatesWithData.allSlotsAreEmptyAndAliceHas0PointsAndBrunoHas0PointsAndAliceIsTheCurrentPlayer,
});
