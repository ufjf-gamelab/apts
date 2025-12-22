import { createDescriptionForTest } from "@repo/core/test.js";
import {
  createDescriptionForTestOfGetSymbol,
  validateGetSymbol,
} from "@repo/game/Player.test/getSymbol.test.js";
import { test } from "vitest";

import type { TicTacToePlayer } from "../TicTacToePlayer.js";
import type { TicTacToePlayerWithData } from "./setup.js";

import { indexedTicTacToePlayersWithData } from "./indexedRecords.js";

const createDescription = ({
  affix,
  expectedSymbol,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix"> & {
  expectedSymbol: ReturnType<TicTacToePlayer["getSymbol"]>;
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
  arrayOfPlayersWithData: TicTacToePlayerWithData[];
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
  arrayOfPlayersWithData: indexedTicTacToePlayersWithData,
});
