import { createDescriptionForTest } from "@repo/engine_core/test.js";
import {
  createDescriptionForTestOfGetName,
  validateGetName,
} from "@repo/game/Player.test/getName.test.js";
import { test } from "vitest";

import type { SnowballPlayer } from "../Player.js";
import { playersWithParams } from "./setup.js";

const createDescription = ({
  affix,
  expectedName,
}: {
  affix: string;
  expectedName: ReturnType<SnowballPlayer["getName"]>;
}) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestOfGetName({
      expectedName,
    }),
  });

Object.values(playersWithParams).forEach(({ params, player }) => {
  const description = createDescription({
    affix: params.name,
    expectedName: params.name,
  });
  test(description, () => {
    validateGetName({
      expectedName: params.name,
      player,
    });
  });
});
