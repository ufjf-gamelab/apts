import {
  createDescriptionForTest,
  createDescriptionForTestsOfCloneMethod,
} from "@repo/engine_core/test.js";
import { validateClone } from "@repo/game/Move.test/clone.test.js";
import { expect, test } from "vitest";

import { SnowballMove } from "../Move.js";
import { movesWithParams } from "./setup.js";

const createDescription = ({ affix }: { affix: string }) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestsOfCloneMethod({
      className: "SnowballMove",
    }),
  });

Object.values(movesWithParams).forEach(({ move, params }) => {
  const description = createDescription({
    affix: params.title,
  });
  test(description, () => {
    const clonedMove = move.clone();
    validateClone({ clonedMove, move });
    expect(clonedMove).toBeInstanceOf(SnowballMove);
  });
});
