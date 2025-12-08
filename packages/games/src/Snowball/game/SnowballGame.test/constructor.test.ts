import {
  createDescriptionForTest,
  createDescriptionForTestsOfConstructor,
} from "@repo/engine_core/test.js";
import { validateConstructor } from "@repo/game/Game.test/constructor.test.js";
import { expect, test } from "vitest";

import { SnowballGame } from "../SnowballGame.js";
import { recordOfSnowballGamesWithData } from "./records.js";
import {
  deriveParamsOfSnowballGame,
  type SnowballGameWithData,
} from "./setup.js";

const createDescription = ({
  affix,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix">) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestsOfConstructor({
      className: "SnowballGame",
    }),
  });

const testConstructor = ({
  arrayOfGamesWithData,
}: {
  arrayOfGamesWithData: SnowballGameWithData[];
}) => {
  arrayOfGamesWithData.forEach(({ keyOfGame, requiredParams }) => {
    test(
      createDescription({
        affix: keyOfGame,
      }),

      () => {
        const { moves, name, players, slots } =
          deriveParamsOfSnowballGame(requiredParams);

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
};

testConstructor({
  arrayOfGamesWithData: Object.values(recordOfSnowballGamesWithData),
});
