import { createDescriptionForTest } from "@repo/engine_core/test.js";
import {
  createDescriptionForTestOfGetName,
  validateGetName,
} from "@repo/game/Player.test/getName.test.js";
import { test } from "vitest";

import type { TicTacToePlayer } from "../TicTacToePlayer.js";
import type { TicTacToePlayerWithData } from "./setup.js";

import { indexedTicTacToePlayersWithData } from "./indexedRecords.js";

const createDescription = ({
  affix,
  expectedName,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix"> & {
  expectedName: ReturnType<TicTacToePlayer["getName"]>;
}) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestOfGetName({
      expectedName,
    }),
  });

const testGetName = ({
  arrayOfPlayersWithData,
}: {
  arrayOfPlayersWithData: TicTacToePlayerWithData[];
}) => {
  arrayOfPlayersWithData.forEach(
    ({ keyOfPlayer, player, requiredParams: { name } }) => {
      test(
        createDescription({
          affix: keyOfPlayer,
          expectedName: name,
        }),

        () => {
          validateGetName({
            expectedName: name,
            player,
          });
        },
      );
    },
  );
};

testGetName({
  arrayOfPlayersWithData: indexedTicTacToePlayersWithData,
});
