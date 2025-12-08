import {
  createDescriptionForTest,
  createDescriptionForTestsOfCloneMethod,
} from "@repo/engine_core/test.js";
import { validateClone } from "@repo/game/Player.test/clone.test.js";
import { expect, test } from "vitest";

import type { TicTacToePlayerWithData } from "./setup.js";

import { TicTacToePlayer } from "../TicTacToePlayer.js";
import { indexedTicTacToePlayersWithData } from "./indexedRecords.js";

const createDescription = ({
  affix,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix">) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestsOfCloneMethod({
      className: "TicTacToePlayer",
    }),
  });

const testClone = ({
  arrayOfPlayersWithData,
}: {
  arrayOfPlayersWithData: TicTacToePlayerWithData[];
}) => {
  arrayOfPlayersWithData.forEach(({ keyOfPlayer, player }) => {
    test(
      createDescription({
        affix: keyOfPlayer,
      }),

      () => {
        const clonedPlayer = player.clone();

        validateClone({ clonedPlayer, player });

        expect(clonedPlayer).toBeInstanceOf(TicTacToePlayer);
      },
    );
  });
};

testClone({
  arrayOfPlayersWithData: indexedTicTacToePlayersWithData,
});
