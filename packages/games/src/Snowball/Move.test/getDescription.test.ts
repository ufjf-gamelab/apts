import { createDescriptionForTest } from "@repo/engine_core/test.js";
import {
  createDescriptionForTestOfGetDescription,
  validateGetDescription,
} from "@repo/game/Move.test/getDescription.test.js";
import { test } from "vitest";

import type { SnowballMove } from "../Move.js";
import { movesWithData } from "./setup.js";

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

Object.values(movesWithData).forEach(({ keyOfMove, move, params }) => {
  test(
    createDescription({
      affix: keyOfMove,
      expectedDescription: params.description,
    }),
    () => {
      validateGetDescription({
        expectedDescription: params.description,
        move,
      });
    },
  );
});
