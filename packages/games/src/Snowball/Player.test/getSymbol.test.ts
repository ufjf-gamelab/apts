import { createDescriptionForTest } from "@repo/engine_core/test.js";
import {
  createDescriptionForTestOfGetSymbol,
  validateGetSymbol,
} from "@repo/game/Player.test/getSymbol.test.js";
import { test } from "vitest";

import type { SnowballPlayer } from "../Player.js";
import { playersWithParams } from "./setup.js";

const createDescription = ({
  affix,
  expectedSymbol,
}: {
  affix: string;
  expectedSymbol: ReturnType<SnowballPlayer["getSymbol"]>;
}) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestOfGetSymbol({
      expectedSymbol,
    }),
  });

Object.values(playersWithParams).forEach(({ params, player }) => {
  const description = createDescription({
    affix: params.name,
    expectedSymbol: params.symbol,
  });
  test(description, () => {
    validateGetSymbol({
      expectedSymbol: params.symbol,
      player,
    });
  });
});
