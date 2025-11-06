import {
  createDescriptionForTest,
  createDescriptionForTestsOfCloneMethod,
} from "@repo/engine_core/test.js";
import { validateClone } from "@repo/game/Move.test/clone.test.js";
import { expect, test } from "vitest";

import { SnowballMove } from "../Move.js";
import { movesWithData } from "./setup.js";

const createDescription = ({ affix }: { affix: string }) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestsOfCloneMethod({
      className: "SnowballMove",
    }),
  });

Object.values(movesWithData).forEach(({ keyOfMove, move }) => {
  test(
    createDescription({
      affix: keyOfMove,
    }),
    () => {
      const clonedMove = move.clone();
      validateClone({ clonedMove, move });
      expect(clonedMove).toBeInstanceOf(SnowballMove);
    },
  );
});
