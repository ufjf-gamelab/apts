import { INCREMENT_ONE } from "@repo/engine_core/constants.js";
import { createDescriptionForTest } from "@repo/engine_core/test.js";
import {
  createDescriptionForTestOfGetIndexOfNextPlayer,
  validateGetIndexOfNextPlayer,
} from "@repo/game/Game.test/getIndexOfNextPlayer.test.js";
import { test } from "vitest";

import { statesWithDataForUnitTest } from "../State.test/setup.js";
import { gamesWithDataForUnitTest } from "./setup.js";

const createDescription = ({
  affix,
  expectedIndexOfNextPlayer,
  keyOfState,
}: Pick<
  Parameters<typeof createDescriptionForTestOfGetIndexOfNextPlayer>[0],
  "expectedIndexOfNextPlayer" | "keyOfState"
> & {
  affix: string;
}) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestOfGetIndexOfNextPlayer({
      expectedIndexOfNextPlayer,
      keyOfState,
    }),
  });

Object.values(gamesWithDataForUnitTest).forEach(
  ({ game, keyOfGame, params }) => {
    const quantityOfPlayers = Object.values(params.players).length;

    Object.values(statesWithDataForUnitTest).forEach(
      ({ keyOfState, params: paramsOfState, state }) => {
        const expectedIndexOfNextPlayer =
          (paramsOfState.player.indexOfPlayer + INCREMENT_ONE) %
          quantityOfPlayers;

        test(
          createDescription({
            affix: keyOfGame,
            expectedIndexOfNextPlayer,
            keyOfState,
          }),
          () => {
            validateGetIndexOfNextPlayer({
              expectedIndexOfNextPlayer,
              game,
              state,
            });
          },
        );
      },
    );
  },
);
