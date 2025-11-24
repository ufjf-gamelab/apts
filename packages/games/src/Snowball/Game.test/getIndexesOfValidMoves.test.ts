import { createDescriptionForTest } from "@repo/engine_core/test.js";
import {
  createDescriptionForTestOfGetIndexesOfValidMoves,
  validateGetIndexesOfValidMoves,
} from "@repo/game/Game.test/getIndexesOfValidMoves.test.js";
import { test } from "vitest";

import type { SnowballStateWithData } from "../State.test/setup.js";

import { statesWithData } from "../State.test/records.js";

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
  arrayOfStatesWithData.forEach(({ keyOfState, params, state }) => {
    const indexesOfValidMoves = new Set(params.validMoves.keys());

    test(
      createDescription({
        affix: keyOfState,
        keyOfState,
        keysOfExpectedValidMoves: params.game.params.moves.map(
          ({ keyOfMove }) => keyOfMove,
        ),
      }),

      () => {
        validateGetIndexesOfValidMoves({
          expectedIndexesOfValidMoves: indexesOfValidMoves,
          game: params.game.game,
          state,
        });
      },
    );
  });
};

testGetIndexesOfValidMoves({
  arrayOfStatesWithData: Object.values(statesWithData),
});
