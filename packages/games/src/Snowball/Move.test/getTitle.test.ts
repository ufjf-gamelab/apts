import { createDescriptionForTest } from "@repo/engine_core/test.js";
import {
  createDescriptionForTestOfGetTitle,
  validateGetTitle,
} from "@repo/game/Move.test/getTitle.test.js";
import { test } from "vitest";

import type { SnowballMove } from "../Move.js";

import { indexedMovesWithData } from "./indexedRecords.js";
import { type SnowballMoveWithData } from "./setup.js";

const createDescription = ({
  affix,
  expectedTitle,
}: {
  affix: string;
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
  arrayOfMovesWithData.forEach(({ keyOfMove, move, params }) => {
    test(
      createDescription({
        affix: keyOfMove,
        expectedTitle: params.title,
      }),
      () => {
        validateGetTitle({
          expectedTitle: params.title,
          move,
        });
      },
    );
  });
};

testGetTitle({
  arrayOfMovesWithData: indexedMovesWithData,
});
