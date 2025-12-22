import { createDescriptionForTest } from "@repo/core/test.js";
import {
  createDescriptionForTestOfGetSymbol,
  validateGetSymbol,
} from "@repo/game/Player.test/getSymbol.test.js";
import { test } from "vitest";

import type { SnowballPlayer } from "../SnowballPlayer.js";
import type { SnowballPlayerWithData } from "./setup.js";

import { indexedSnowballPlayersWithData } from "./indexedRecords.js";

const createDescription = ({
  affix,
  expectedSymbol,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix"> & {
  expectedSymbol: ReturnType<SnowballPlayer["getSymbol"]>;
}) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestOfGetSymbol({
      expectedSymbol,
    }),
  });

const testGetSymbol = ({
  arrayOfPlayersWithData,
}: {
  arrayOfPlayersWithData: SnowballPlayerWithData[];
}) => {
  arrayOfPlayersWithData.forEach(
    ({ keyOfPlayer, player, requiredParams: { symbol } }) => {
      test(
        createDescription({
          affix: keyOfPlayer,
          expectedSymbol: symbol,
        }),

        () => {
          validateGetSymbol({
            expectedSymbol: symbol,
            player,
          });
        },
      );
    },
  );
};

testGetSymbol({
  arrayOfPlayersWithData: indexedSnowballPlayersWithData,
});
