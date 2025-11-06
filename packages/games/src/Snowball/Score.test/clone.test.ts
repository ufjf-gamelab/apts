import {
  createDescriptionForTest,
  createDescriptionForTestsOfCloneMethod,
} from "@repo/engine_core/test.js";
import { validateClone } from "@repo/game/Score.test/clone.test.js";
import { expect, test } from "vitest";

import { SnowballScore } from "../Score.js";
import { scoresWithDataForUnitTest } from "./setup.js";

const createDescription = ({ affix }: { affix: string }) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestsOfCloneMethod({
      className: "SnowballScore",
    }),
  });

Object.values(scoresWithDataForUnitTest).forEach(({ keyOfScore, score }) => {
  test(
    createDescription({
      affix: keyOfScore,
    }),
    () => {
      const clonedScore = score.clone();
      validateClone({ clonedScore, score });
      expect(clonedScore).toBeInstanceOf(SnowballScore);
    },
  );
});
