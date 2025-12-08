import {
  createDescriptionForTest,
  createDescriptionForTestsOfCloneMethod,
} from "@repo/engine_core/test.js";
import { validateClone } from "@repo/game/Game.test/clone.test.js";
import { expect, test } from "vitest";

import type { SnowballGameWithData } from "./setup.js";

import { SnowballGame } from "../SnowballGame.js";
import { recordOfSnowballGamesWithData } from "./records.js";

const createDescription = ({
  affix,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix">) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestsOfCloneMethod({
      className: "SnowballGame",
    }),
  });

const testClone = ({
  arrayOfGamesWithData,
}: {
  arrayOfGamesWithData: SnowballGameWithData[];
}) => {
  arrayOfGamesWithData.forEach(({ game, keyOfGame }) => {
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
};

testClone({
  arrayOfGamesWithData: Object.values(recordOfSnowballGamesWithData),
});
