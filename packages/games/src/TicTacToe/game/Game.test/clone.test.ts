import {
  createDescriptionForTest,
  createDescriptionForTestsOfCloneMethod,
} from "@repo/engine_core/test.js";
import { validateClone } from "@repo/game/Game.test/clone.test.js";
import { expect, test } from "vitest";

import type { TicTacToeGameWithData } from "./setup.js";

import { TicTacToeGame } from "../Game.js";
import { recordOfTicTacToeGamesWithData } from "./records.js";

const createDescription = ({
  affix,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix">) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestsOfCloneMethod({
      className: "TicTacToeGame",
    }),
  });

const testClone = ({
  arrayOfGamesWithData,
}: {
  arrayOfGamesWithData: TicTacToeGameWithData[];
}) => {
  arrayOfGamesWithData.forEach(({ game, keyOfGame }) => {
    test(
      createDescription({
        affix: keyOfGame,
      }),

      () => {
        const clonedGame = game.clone();

        validateClone({ clonedGame, game });

        expect(clonedGame).toBeInstanceOf(TicTacToeGame);
      },
    );
  });
};

testClone({
  arrayOfGamesWithData: Object.values(recordOfTicTacToeGamesWithData),
});
