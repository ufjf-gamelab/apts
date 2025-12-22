import { createDescriptionForTest } from "@repo/core/test.js";
import {
  createDescriptionForTestOfGetSymbol,
  validateGetSymbol,
} from "@repo/game/Player.test/getSymbol.test.js";
import { test } from "vitest";

import type { ConnectFourPlayer } from "../ConnectFourPlayer.js";
import type { ConnectFourPlayerWithData } from "./setup.js";

import { indexedConnectFourPlayersWithData } from "./indexedRecords.js";

const createDescription = ({
  affix,
  expectedSymbol,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix"> & {
  expectedSymbol: ReturnType<ConnectFourPlayer["getSymbol"]>;
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
  arrayOfPlayersWithData: ConnectFourPlayerWithData[];
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
  arrayOfPlayersWithData: indexedConnectFourPlayersWithData,
});
