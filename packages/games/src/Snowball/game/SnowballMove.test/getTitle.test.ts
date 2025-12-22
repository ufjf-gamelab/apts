import { createDescriptionForTest } from "@repo/core/test.js";
import {
  createDescriptionForTestOfGetTitle,
  validateGetTitle,
} from "@repo/game/Move.test/getTitle.test.js";
import { test } from "vitest";

import type { SnowballMove } from "../SnowballMove.js";

import { indexedSnowballMovesWithData } from "./indexedRecords.js";
import { type SnowballMoveWithData } from "./setup.js";

const createDescription = ({
  affix,
  expectedTitle,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix"> & {
  expectedTitle: ReturnType<SnowballMove["getTitle"]>;
}) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestOfGetTitle({
      expectedTitle,
    }),
  });

const testGetTitle = ({
  arrayOfMovesWithData,
}: {
  arrayOfMovesWithData: SnowballMoveWithData[];
}) => {
  arrayOfMovesWithData.forEach(
    ({ keyOfMove, move, requiredParams: { title } }) => {
      test(
        createDescription({
          affix: keyOfMove,
          expectedTitle: title,
        }),

        () => {
          validateGetTitle({
            expectedTitle: title,
            move,
          });
        },
      );
    },
  );
};

testGetTitle({
  arrayOfMovesWithData: indexedSnowballMovesWithData,
});
