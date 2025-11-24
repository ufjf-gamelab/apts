import { createDescriptionForTest } from "@repo/engine_core/test.js";
import {
  createDescriptionForTestOfGetName,
  validateGetName,
} from "@repo/game/Game.test/getName.test.js";
import { test } from "vitest";

import type { SnowballGame } from "../Game.js";

import { gamesWithDataForUnitTest } from "./setup.js";

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

Object.values(gamesWithDataForUnitTest).forEach(
  ({ game, keyOfGame, params }) => {
    test(
      createDescription({
        affix: keyOfGame,
        expectedName: params.name,
      }),
      () => {
        validateGetName({
          expectedName: params.name,
          game,
        });
      },
    );
  },
);
