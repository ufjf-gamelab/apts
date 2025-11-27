import {
  createDescriptionForTest,
  createDescriptionForTestsOfCloneMethod,
} from "@repo/engine_core/test.js";
import { validateClone } from "@repo/game/Move.test/clone.test.js";
import { expect, test } from "vitest";

import type { TicTacToeMoveWithData } from "./setup.js";

import { TicTacToeMove } from "../Move.js";
import { indexedTicTacToeMovesWithData } from "./indexedRecords.js";

const createDescription = ({
  affix,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix">) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestsOfCloneMethod({
      className: "TicTacToeMove",
    }),
  });

const testClone = ({
  arrayOfMovesWithData,
}: {
  arrayOfMovesWithData: TicTacToeMoveWithData[];
}) => {
  arrayOfMovesWithData.forEach(({ keyOfMove, move }) => {
    test(
      createDescription({
        affix: keyOfMove,
      }),

      () => {
        const clonedMove = move.clone();

        validateClone({ clonedMove, move });

        expect(clonedMove).toBeInstanceOf(TicTacToeMove);
      },
    );
  });
};

testClone({
  arrayOfMovesWithData: indexedTicTacToeMovesWithData,
});
