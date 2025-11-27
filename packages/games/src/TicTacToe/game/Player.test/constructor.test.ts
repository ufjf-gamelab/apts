import {
  createDescriptionForTest,
  createDescriptionForTestsOfConstructor,
} from "@repo/engine_core/test.js";
import { validateConstructor } from "@repo/game/Player.test/constructor.test.js";
import { expect, test } from "vitest";

import type { TicTacToePlayerWithData } from "./setup.js";

import { TicTacToePlayer } from "../Player.js";
import { indexedTicTacToePlayersWithData } from "./indexedRecords.js";

const createDescription = ({
  affix,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix">) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestsOfConstructor({
      className: "TicTacToePlayer",
    }),
  });

const testConstructor = ({
  arrayOfPlayersWithData,
}: {
  arrayOfPlayersWithData: TicTacToePlayerWithData[];
}) => {
  arrayOfPlayersWithData.forEach(({ keyOfPlayer, requiredParams }) => {
    test(
      createDescription({
        affix: keyOfPlayer,
      }),

      () => {
        const { name, symbol } = requiredParams;

        const newPlayer = new TicTacToePlayer({
          name,
          symbol,
        });

        validateConstructor({ params: { name, symbol }, player: newPlayer });

        expect(newPlayer).toBeInstanceOf(TicTacToePlayer);
      },
    );
  });
};

testConstructor({
  arrayOfPlayersWithData: indexedTicTacToePlayersWithData,
});
