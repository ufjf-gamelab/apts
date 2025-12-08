import { createDescriptionForTest } from "@repo/engine_core/test.js";
import {
  createDescriptionForTestOfIsFinal,
  validateIsFinal,
} from "@repo/game/Game.test/isFinal.test.js";
import { test } from "vitest";

import type { ConnectFourStateWithData } from "../ConnectFourState.test/setup.js";

import { recordOfConnectFourStatesWithData } from "../ConnectFourState.test/records.js";

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
  arrayOfStatesWithData: ConnectFourStateWithData[];
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
  arrayOfStatesWithData: Object.values(recordOfConnectFourStatesWithData),
});
