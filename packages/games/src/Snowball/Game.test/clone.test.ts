import {
  createDescriptionForTest,
  createDescriptionForTestsOfCloneMethod,
} from "@repo/engine_core/test.js";
import { validateClone } from "@repo/game/Game.test/clone.test.js";
import { expect, test } from "vitest";

import { SnowballGame } from "../Game.js";
import { gamesWithDataForUnitTest } from "./setup.js";

const createDescription = ({
  affix,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix">) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestsOfCloneMethod({
      className: "SnowballGame",
    }),
  });

Object.values(gamesWithDataForUnitTest).forEach(({ game, keyOfGame }) => {
  test(
    createDescription({
      affix: keyOfGame,
    }),
    () => {
      const clonedGame = game.clone();
      validateClone({ clonedGame, game });
      expect(clonedGame).toBeInstanceOf(SnowballGame);
    },
  );
});
