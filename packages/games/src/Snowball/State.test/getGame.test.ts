import { createDescriptionForTest } from "@repo/engine_core/test.js";
import {
  createDescriptionForTestOfGetGame,
  validateGetGame,
} from "@repo/game/State.test/getGame.test.js";
import { test } from "vitest";

import { statesWithData } from "./records.js";

const createDescription = ({
  affix,
  keyOfGame,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix"> &
  Pick<Parameters<typeof createDescriptionForTestOfGetGame>[0], "keyOfGame">) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestOfGetGame({
      keyOfGame,
    }),
  });

Object.values(statesWithData).forEach(({ keyOfState, params, state }) => {
  test(
    createDescription({
      affix: keyOfState,
      keyOfGame: params.game.keyOfGame,
    }),
    () => {
      validateGetGame({
        expectedGame: params.game.game,
        state,
      });
    },
  );
});
