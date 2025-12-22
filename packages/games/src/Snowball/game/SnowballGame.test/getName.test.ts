import { createDescriptionForTest } from "@repo/core/test.js";
import {
  createDescriptionForTestOfGetName,
  validateGetName,
} from "@repo/game/Game.test/getName.test.js";
import { test } from "vitest";

import type { SnowballGame } from "../SnowballGame.js";
import type { SnowballGameWithData } from "./setup.js";

import { recordOfSnowballGamesWithData } from "./records.js";

const createDescription = ({
  affix,
  expectedName,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix"> & {
  expectedName: ReturnType<SnowballGame["getName"]>;
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
  arrayOfGamesWithData: SnowballGameWithData[];
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
  arrayOfGamesWithData: Object.values(recordOfSnowballGamesWithData),
});
