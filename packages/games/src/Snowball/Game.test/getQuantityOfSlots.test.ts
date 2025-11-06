import { createDescriptionForTest } from "@repo/engine_core/test.js";
import {
  createDescriptionForTestOfGetQuantityOfSlots,
  validateGetQuantityOfSlots,
} from "@repo/game/Game.test/getQuantityOfSlots.test.js";
import { test } from "vitest";

import type { SnowballGame } from "../Game.js";

import { gamesWithDataForUnitTest } from "./setup.js";

const createDescription = ({
  affix,
  expectedQuantityOfSlots,
}: {
  affix: string;
  expectedQuantityOfSlots: ReturnType<SnowballGame["getQuantityOfSlots"]>;
}) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestOfGetQuantityOfSlots({
      expectedQuantityOfSlots,
    }),
  });

Object.values(gamesWithDataForUnitTest).forEach(
  ({ game, keyOfGame, params }) => {
    test(
      createDescription({
        affix: keyOfGame,
        expectedQuantityOfSlots: params.quantityOfSlots,
      }),
      () => {
        validateGetQuantityOfSlots({
          expectedQuantityOfSlots: params.quantityOfSlots,
          game,
        });
      },
    );
  },
);
