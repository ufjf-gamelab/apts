import {
  createDescriptionForTest,
  createDescriptionForTestsOfCloneMethod,
} from "@repo/core/test.js";
import { validateClone } from "@repo/game/Move.test/clone.test.js";
import { expect, test } from "vitest";

import type { SnowballMoveWithData } from "./setup.js";

import { SnowballMove } from "../SnowballMove.js";
import { indexedSnowballMovesWithData } from "./indexedRecords.js";

const createDescription = ({
  affix,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix">) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestsOfCloneMethod({
      className: "SnowballMove",
    }),
  });

const testClone = ({
  arrayOfMovesWithData,
}: {
  arrayOfMovesWithData: SnowballMoveWithData[];
}) => {
  arrayOfMovesWithData.forEach(({ keyOfMove, move }) => {
    test(
      createDescription({
        affix: keyOfMove,
      }),

      () => {
        const clonedMove = move.clone();

        validateClone({ clonedMove, move });

        expect(clonedMove).toBeInstanceOf(SnowballMove);
      },
    );
  });
};

testClone({
  arrayOfMovesWithData: indexedSnowballMovesWithData,
});
