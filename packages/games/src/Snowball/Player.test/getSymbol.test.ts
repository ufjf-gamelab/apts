import { createDescriptionForTest } from "@repo/engine_core/test.js";
import {
  createDescriptionForTestOfGetSymbol,
  validateGetSymbol,
} from "@repo/game/Player.test/getSymbol.test.js";
import { test } from "vitest";

import type { SnowballPlayer } from "../Player.js";
import { playersWithData } from "./setup.js";

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

Object.values(playersWithData).forEach(({ keyOfPlayer, params, player }) => {
  test(
    createDescription({
      affix: keyOfPlayer,
      expectedSymbol: params.symbol,
    }),
    () => {
      validateGetSymbol({
        expectedSymbol: params.symbol,
        player,
      });
    },
  );
});
