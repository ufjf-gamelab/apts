import { createDescriptionForTest } from "@repo/engine_core/test.js";
import {
  createDescriptionForTestOfGetDescription,
  validateGetDescription,
} from "@repo/game/Move.test/getDescription.test.js";
import { test } from "vitest";

import type { SnowballMove } from "../Move.js";
import { movesWithParams } from "./setup.js";

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

Object.values(movesWithParams).forEach(({ move, params }) => {
  const description = createDescription({
    affix: params.title,
    expectedDescription: params.description,
  });
  test(description, () => {
    validateGetDescription({
      expectedDescription: params.description,
      move,
    });
  });
});
