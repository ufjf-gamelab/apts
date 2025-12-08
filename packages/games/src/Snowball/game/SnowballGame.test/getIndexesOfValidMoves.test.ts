import { createDescriptionForTest } from "@repo/engine_core/test.js";
import {
  createDescriptionForTestOfGetIndexesOfValidMoves,
  validateGetIndexesOfValidMoves,
} from "@repo/game/Game.test/getIndexesOfValidMoves.test.js";
import { test } from "vitest";

import type { SnowballStateWithData } from "../SnowballState.test/setup.js";

import { recordOfSnowballStatesWithData } from "../SnowballState.test/records.js";

const createDescription = ({
  affix,
  keyOfState,
  keysOfExpectedValidMoves,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix"> &
  Pick<
    Parameters<typeof createDescriptionForTestOfGetIndexesOfValidMoves>[0],
    "keyOfState" | "keysOfExpectedValidMoves"
  >) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestOfGetIndexesOfValidMoves({
      keyOfState,
      keysOfExpectedValidMoves,
    }),
  });

const testGetIndexesOfValidMoves = ({
  arrayOfStatesWithData,
}: {
  arrayOfStatesWithData: SnowballStateWithData[];
}) => {
  arrayOfStatesWithData.forEach(
    ({ keyOfState, requiredParams: { validMovesWithData }, state }) => {
      const indexesOfValidMoves = new Set(validMovesWithData.keys());

      const keysOfExpectedValidMoves = validMovesWithData
        .values()
        .map((validMoveWithData) => validMoveWithData.keyOfMove)
        .toArray();

      test(
        createDescription({
          affix: keyOfState,
          keyOfState,
          keysOfExpectedValidMoves,
        }),

        () => {
          validateGetIndexesOfValidMoves({
            expectedIndexesOfValidMoves: indexesOfValidMoves,
            state,
          });
        },
      );
    },
  );
};

testGetIndexesOfValidMoves({
  arrayOfStatesWithData: Object.values(recordOfSnowballStatesWithData),
});
