import {
  createTestDescription,
  descriptionOfTestsOfCloneMethod,
} from "@repo/engine_core/test.js";
import { validateClonedMove } from "@repo/game/Move.test/clone.test.js";
import { expect, test } from "vitest";

import { SnowballMove } from "../Move.js";
import { moves } from "./setup.js";

const description = createTestDescription({
  description: descriptionOfTestsOfCloneMethod({
    className: "SnowballMove",
  }),
});

Object.values(moves).forEach(move => {
  test(description, () => {
    const clonedMove = move.clone();
    validateClonedMove({ clonedMove, move });
    expect(clonedMove).toBeInstanceOf(SnowballMove);
  });
});
