import { createDescriptionForTest } from "@repo/engine_core/test.js";
import {
  createDescriptionForTestOfGetTitle,
  validateGetTitle,
} from "@repo/game/Move.test/getTitle.test.js";
import { test } from "vitest";

import type { SnowballMove } from "../Move.js";
import { movesWithData } from "./setup.js";

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

Object.values(movesWithData).forEach(({ keyOfMove, move, params }) => {
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
