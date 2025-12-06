import { createDescriptionForTest } from "@repo/engine_core/test.js";
import {
  createDescriptionForTestOfGetName,
  validateGetName,
} from "@repo/game/Game.test/getName.test.js";
import { test } from "vitest";

import type { ConnectFourGame } from "../Game.js";
import type { ConnectFourGameWithData } from "./setup.js";

import { recordOfConnectFourGamesWithData } from "./records.js";

const createDescription = ({
  affix,
  expectedName,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix"> & {
  expectedName: ReturnType<ConnectFourGame["getName"]>;
}) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestOfGetName({
      expectedName,
    }),
  });

const testGetName = ({
  arrayOfGamesWithData,
}: {
  arrayOfGamesWithData: ConnectFourGameWithData[];
}) => {
  arrayOfGamesWithData.forEach(
    ({ game, keyOfGame, requiredParams: { name } }) => {
      test(
        createDescription({
          affix: keyOfGame,
          expectedName: name,
        }),

        () => {
          validateGetName({
            expectedName: name,
            game,
          });
        },
      );
    },
  );
};

testGetName({
  arrayOfGamesWithData: Object.values(recordOfConnectFourGamesWithData),
});
