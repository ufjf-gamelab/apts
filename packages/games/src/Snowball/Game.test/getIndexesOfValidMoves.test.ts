import { createDescriptionForTest } from "@repo/engine_core/test.js";
import {
  createDescriptionForTestOfGetIndexesOfValidMoves,
  validateGetIndexesOfValidMoves,
} from "@repo/game/Game.test/getIndexesOfValidMoves.test.js";
import { test } from "vitest";

import { statesWithDataForUnitTest } from "../State.test/setup.js";

const createDescription = ({
  affix,
  keyOfState,
  keysOfExpectedValidMoves,
}: Pick<
  Parameters<typeof createDescriptionForTestOfGetIndexesOfValidMoves>[0],
  "keyOfState" | "keysOfExpectedValidMoves"
> & {
  affix: string;
}) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestOfGetIndexesOfValidMoves({
      keyOfState,
      keysOfExpectedValidMoves,
    }),
  });

Object.values(statesWithDataForUnitTest).forEach(
  ({ keyOfState, params, state }) => {
    const indexesOfValidMoves = new Set(params.validMoves.keys());
    test(
      createDescription({
        affix: params.game.keyOfGame,
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
  },
);
