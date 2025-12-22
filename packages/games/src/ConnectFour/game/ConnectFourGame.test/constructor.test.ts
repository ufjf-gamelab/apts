import {
  createDescriptionForTest,
  createDescriptionForTestsOfConstructor,
} from "@repo/core/test.js";
import { validateConstructor } from "@repo/game/Game.test/constructor.test.js";
import { expect, test } from "vitest";

import { ConnectFourGame } from "../ConnectFourGame.js";
import { recordOfConnectFourGamesWithData } from "./records.js";
import {
  type ConnectFourGameWithData,
  deriveParamsOfConnectFourGame,
} from "./setup.js";

const createDescription = ({
  affix,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix">) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestsOfConstructor({
      className: "ConnectFourGame",
    }),
  });

const testConstructor = ({
  arrayOfGamesWithData,
}: {
  arrayOfGamesWithData: ConnectFourGameWithData[];
}) => {
  arrayOfGamesWithData.forEach(({ keyOfGame, requiredParams }) => {
    test(
      createDescription({
        affix: keyOfGame,
      }),

      () => {
        const { moves, name, players, slots } =
          deriveParamsOfConnectFourGame(requiredParams);

        const newGame = new ConnectFourGame({
          moves,
          name,
          players,
          slots,
        });

        validateConstructor({
          game: newGame,
          params: { moves, name, players, slots },
        });

        expect(newGame).toBeInstanceOf(ConnectFourGame);
      },
    );
  });
};

testConstructor({
  arrayOfGamesWithData: Object.values(recordOfConnectFourGamesWithData),
});
