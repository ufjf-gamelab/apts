import {
  createDescriptionForTest,
  createDescriptionForTestsOfConstructor,
} from "@repo/core/test.js";
import { validateConstructor } from "@repo/game/Game.test/constructor.test.js";
import { expect, test } from "vitest";

import { TicTacToeGame } from "../TicTacToeGame.js";
import { recordOfTicTacToeGamesWithData } from "./records.js";
import {
  deriveParamsOfTicTacToeGame,
  type TicTacToeGameWithData,
} from "./setup.js";

const createDescription = ({
  affix,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix">) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestsOfConstructor({
      className: "TicTacToeGame",
    }),
  });

const testConstructor = ({
  arrayOfGamesWithData,
}: {
  arrayOfGamesWithData: TicTacToeGameWithData[];
}) => {
  arrayOfGamesWithData.forEach(({ keyOfGame, requiredParams }) => {
    test(
      createDescription({
        affix: keyOfGame,
      }),

      () => {
        const { moves, name, players, slots } =
          deriveParamsOfTicTacToeGame(requiredParams);

        const newGame = new TicTacToeGame({
          moves,
          name,
          players,
          slots,
        });

        validateConstructor({
          game: newGame,
          params: { moves, name, players, slots },
        });

        expect(newGame).toBeInstanceOf(TicTacToeGame);
      },
    );
  });
};

testConstructor({
  arrayOfGamesWithData: Object.values(recordOfTicTacToeGamesWithData),
});
