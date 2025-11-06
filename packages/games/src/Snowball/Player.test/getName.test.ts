import { createDescriptionForTest } from "@repo/engine_core/test.js";
import {
  createDescriptionForTestOfGetName,
  validateGetName,
} from "@repo/game/Player.test/getName.test.js";
import { test } from "vitest";

import type { SnowballPlayer } from "../Player.js";

import { playersWithData } from "./setup.js";

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

Object.values(playersWithData).forEach(({ keyOfPlayer, params, player }) => {
  test(
    createDescription({
      affix: keyOfPlayer,
      expectedName: params.name,
    }),
    () => {
      validateGetName({
        expectedName: params.name,
        player,
      });
    },
  );
});
