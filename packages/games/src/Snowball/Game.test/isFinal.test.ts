import { createDescriptionForTest } from "@repo/engine_core/test.js";
import {
  createDescriptionForTestOfIsFinal,
  validateIsFinal,
} from "@repo/game/Game.test/isFinal.test.js";
import { test } from "vitest";

import { statesWithDataForUnitTest } from "../State.test/setup.js";
import { gamesWithDataForUnitTest } from "./setup.js";

const createDescription = ({
  affix,
  expectedToBeFinal,
  keyOfState,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix"> &
  Pick<
    Parameters<typeof createDescriptionForTestOfIsFinal>[0],
    "expectedToBeFinal" | "keyOfState"
  >) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestOfIsFinal({
      expectedToBeFinal,
      keyOfState,
    }),
  });

Object.values(gamesWithDataForUnitTest).forEach(({ game, keyOfGame }) => {
  Object.values(statesWithDataForUnitTest).forEach(
    ({ keyOfState, params, state }) => {
      const expectedToBeFinal = params.isFinal;
      test(
        createDescription({
          affix: keyOfGame,
          expectedToBeFinal,
          keyOfState,
        }),
        () => {
          validateIsFinal({
            expectedToBeFinal,
            game,
            state,
          });
        },
      );
    },
  );
});
