import { createDescriptionForTest } from "@repo/engine_core/test.js";
import {
  createDescriptionForTestOfGetDescription,
  validateGetDescription,
} from "@repo/game/Move.test/getDescription.test.js";
import { test } from "vitest";

import type { SnowballMove } from "../Move.js";

import { indexedSnowballMovesWithData } from "./indexedRecords.js";
import {
  deriveParamsOfSnowballMove,
  type SnowballMoveWithData,
} from "./setup.js";

const createDescription = ({
  affix,
  expectedDescription,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix"> & {
  expectedDescription: ReturnType<SnowballMove["getDescription"]>;
}) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestOfGetDescription({
      expectedDescription,
    }),
  });

const testGetDescription = ({
  arrayOfMovesWithData,
}: {
  arrayOfMovesWithData: SnowballMoveWithData[];
}) => {
  arrayOfMovesWithData.forEach(({ keyOfMove, move, requiredParams }) => {
    const { description } = deriveParamsOfSnowballMove(requiredParams);

    test(
      createDescription({
        affix: keyOfMove,
        expectedDescription: description,
      }),

      () => {
        validateGetDescription({
          expectedDescription: description,
          move,
        });
      },
    );
  });
};

testGetDescription({
  arrayOfMovesWithData: indexedSnowballMovesWithData,
});
