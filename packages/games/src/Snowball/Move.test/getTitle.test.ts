import { createDescriptionForTest } from "@repo/engine_core/test.js";
import {
  createDescriptionForTestOfGetTitle,
  validateGetTitle,
} from "@repo/game/Move.test/getTitle.test.js";
import { test } from "vitest";

import type { SnowballMove } from "../Move.js";
import { movesWithParams } from "./setup.js";

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

Object.values(movesWithParams).forEach(({ move, params }) => {
  const description = createDescription({
    affix: params.title,
    expectedTitle: params.title,
  });
  test(description, () => {
    validateGetTitle({
      expectedTitle: params.title,
      move,
    });
  });
});
