import { createDescriptionForTest } from "@repo/engine_core/test.js";
import {
  createDescriptionForTestOfIsFinal,
  validateIsFinal,
} from "@repo/game/Game.test/isFinal.test.js";
import { test } from "vitest";

import type { SnowballStateWithData } from "../State.test/setup.js";

import { statesWithData } from "../State.test/records.js";

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

const testIsFinal = ({
  arrayOfStatesWithData,
}: {
  arrayOfStatesWithData: SnowballStateWithData[];
}) => {
  arrayOfStatesWithData.forEach(({ keyOfState, params, state }) => {
    const expectedToBeFinal = params.isFinal;

    test(
      createDescription({
        affix: params.game.keyOfGame,
        expectedToBeFinal,
        keyOfState,
      }),

      () => {
        validateIsFinal({
          expectedToBeFinal,
          state,
        });
      },
    );
  });
};

testIsFinal({
  arrayOfStatesWithData: Object.values(statesWithData),
});
