import { createDescriptionForTest } from "@repo/engine_core/test.js";
import {
  createDescriptionForTestOfGetDescription,
  validateGetDescription,
} from "@repo/game/Move.test/getDescription.test.js";
import { test } from "vitest";

import type { SnowballMove } from "../Move.js";

import { indexedMovesWithData } from "./indexedRecords.js";
import {
  deriveSnowballMoveParams,
  type SnowballMoveWithData,
} from "./setup.js";

const createDescription = ({
  affix,
  expectedDescription,
}: {
  affix: string;
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
  arrayOfMovesWithData.forEach(({ keyOfMove, move, params }) => {
    const { description } = deriveSnowballMoveParams(params);
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
  arrayOfMovesWithData: indexedMovesWithData,
});
