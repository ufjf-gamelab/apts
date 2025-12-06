import {
  createDescriptionForTest,
  createDescriptionForTestsOfCloneMethod,
} from "@repo/engine_core/test.js";
import { validateClone } from "@repo/game/Game.test/clone.test.js";
import { expect, test } from "vitest";

import type { ConnectFourGameWithData } from "./setup.js";

import { ConnectFourGame } from "../Game.js";
import { recordOfConnectFourGamesWithData } from "./records.js";

const createDescription = ({
  affix,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix">) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestsOfCloneMethod({
      className: "ConnectFourGame",
    }),
  });

const testClone = ({
  arrayOfGamesWithData,
}: {
  arrayOfGamesWithData: ConnectFourGameWithData[];
}) => {
  arrayOfGamesWithData.forEach(({ game, keyOfGame }) => {
    test(
      createDescription({
        affix: keyOfGame,
      }),

      () => {
        const clonedGame = game.clone();

        validateClone({ clonedGame, game });

        expect(clonedGame).toBeInstanceOf(ConnectFourGame);
      },
    );
  });
};

testClone({
  arrayOfGamesWithData: Object.values(recordOfConnectFourGamesWithData),
});
