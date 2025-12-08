import { createDescriptionForTest } from "@repo/engine_core/test.js";
import {
  createDescriptionForTestOfGetQuantityOfSlots,
  validateGetQuantityOfSlots,
} from "@repo/game/Game.test/getQuantityOfSlots.test.js";
import { test } from "vitest";

import type { SnowballGame } from "../SnowballGame.js";
import type { SnowballGameWithData } from "./setup.js";

import { recordOfSnowballGamesWithData } from "./records.js";

const createDescription = ({
  affix,
  expectedQuantityOfSlots,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix"> & {
  expectedQuantityOfSlots: ReturnType<SnowballGame["getQuantityOfSlots"]>;
}) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestOfGetQuantityOfSlots({
      expectedQuantityOfSlots,
    }),
  });

const testGetQuantityOfSlots = ({
  arrayOfGamesWithData,
}: {
  arrayOfGamesWithData: SnowballGameWithData[];
}) => {
  arrayOfGamesWithData.forEach(
    ({ game, keyOfGame, requiredParams: { slotsWithData } }) => {
      const expectedQuantityOfSlots = slotsWithData.length;

      test(
        createDescription({
          affix: keyOfGame,
          expectedQuantityOfSlots,
        }),

        () => {
          validateGetQuantityOfSlots({
            expectedQuantityOfSlots,
            game,
          });
        },
      );
    },
  );
};

testGetQuantityOfSlots({
  arrayOfGamesWithData: Object.values(recordOfSnowballGamesWithData),
});
