import { createDescriptionForTest } from "@repo/core/test.js";
import {
  createDescriptionForTestOfIsFinal,
  validateIsFinal,
} from "@repo/game/Game.test/isFinal.test.js";
import { test } from "vitest";

import type { TicTacToeStateWithData } from "../TicTacToeState.test/setup.js";

import { recordOfTicTacToeStatesWithData } from "../TicTacToeState.test/records.js";

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
  arrayOfStatesWithData: TicTacToeStateWithData[];
}) => {
  arrayOfStatesWithData.forEach(
    ({ keyOfState, requiredParams: { gameWithData, isFinal }, state }) => {
      test(
        createDescription({
          affix: gameWithData.keyOfGame,
          expectedToBeFinal: isFinal,
          keyOfState,
        }),

        () => {
          validateIsFinal({
            expectedToBeFinal: isFinal,
            state,
          });
        },
      );
    },
  );
};

testIsFinal({
  arrayOfStatesWithData: Object.values(recordOfTicTacToeStatesWithData),
});
