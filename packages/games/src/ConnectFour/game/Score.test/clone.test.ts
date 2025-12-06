import {
  createDescriptionForTest,
  createDescriptionForTestsOfCloneMethod,
} from "@repo/engine_core/test.js";
import { validateClone } from "@repo/game/Score.test/clone.test.js";
import { expect, test } from "vitest";

import type { ConnectFourScoreWithData } from "./setup.js";

import { ConnectFourScore } from "../Score.js";
import { recordOfConnectFourScoresWithData } from "./records.js";

const createDescription = ({
  affix,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix">) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestsOfCloneMethod({
      className: "ConnectFourScore",
    }),
  });

const testClone = ({
  arrayOfScoresWithData,
}: {
  arrayOfScoresWithData: ConnectFourScoreWithData[];
}) => {
  arrayOfScoresWithData.forEach(({ keyOfScore, score }) => {
    test(
      createDescription({
        affix: keyOfScore,
      }),

      () => {
        const clonedScore = score.clone();

        validateClone({ clonedScore, score });

        expect(clonedScore).toBeInstanceOf(ConnectFourScore);
      },
    );
  });
};

testClone({
  arrayOfScoresWithData: Object.values(recordOfConnectFourScoresWithData),
});
