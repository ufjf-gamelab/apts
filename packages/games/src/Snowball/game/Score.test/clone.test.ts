import {
  createDescriptionForTest,
  createDescriptionForTestsOfCloneMethod,
} from "@repo/engine_core/test.js";
import { validateClone } from "@repo/game/Score.test/clone.test.js";
import { expect, test } from "vitest";

import type { SnowballScoreWithData } from "./setup.js";

import { SnowballScore } from "../Score.js";
import { recordOfSnowballScoresWithData } from "./records.js";

const createDescription = ({
  affix,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix">) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestsOfCloneMethod({
      className: "SnowballScore",
    }),
  });

const testClone = ({
  arrayOfScoresWithData,
}: {
  arrayOfScoresWithData: SnowballScoreWithData[];
}) => {
  arrayOfScoresWithData.forEach(({ keyOfScore, score }) => {
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
};

testClone({
  arrayOfScoresWithData: Object.values(recordOfSnowballScoresWithData),
});
