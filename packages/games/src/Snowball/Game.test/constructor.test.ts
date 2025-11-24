import {
  createDescriptionForTest,
  createDescriptionForTestsOfConstructor,
} from "@repo/engine_core/test.js";
import { validateConstructor } from "@repo/game/Game.test/constructor.test.js";
import { expect, test } from "vitest";

import { SnowballGame } from "../Game.js";
import { deriveSnowballGameParams, gamesWithDataForUnitTest } from "./setup.js";

const createDescription = ({
  affix,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix">) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestsOfConstructor({
      className: "SnowballGame",
    }),
  });

Object.values(gamesWithDataForUnitTest).forEach(({ keyOfGame, params }) => {
  test(
    createDescription({
      affix: keyOfGame,
    }),
    () => {
      const { name } = params;
      const { moves, players, slots } = deriveSnowballGameParams(params);

      const newGame = new SnowballGame({
        moves,
        name,
        players,
        slots,
      });

      validateConstructor({
        game: newGame,
        params: { moves, name, players, slots },
      });
      expect(newGame).toBeInstanceOf(SnowballGame);
    },
  );
});
