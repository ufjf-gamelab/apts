import {
  createDescriptionForTest,
  createDescriptionForTestsOfCloneMethod,
} from "@repo/core/test.js";
import { validateClone } from "@repo/game/Score.test/clone.test.js";
import { expect, test } from "vitest";

import type { TicTacToeScoreWithData } from "./setup.js";

import { TicTacToeScore } from "../TicTacToeScore.js";
import { recordOfTicTacToeScoresWithData } from "./records.js";

const createDescription = ({
  affix,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix">) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestsOfCloneMethod({
      className: "TicTacToeScore",
    }),
  });

const testClone = ({
  arrayOfScoresWithData,
}: {
  arrayOfScoresWithData: TicTacToeScoreWithData[];
}) => {
  arrayOfScoresWithData.forEach(({ keyOfScore, score }) => {
    test(
      createDescription({
        affix: keyOfScore,
      }),

      () => {
        const clonedScore = score.clone();

        validateClone({ clonedScore, score });

        expect(clonedScore).toBeInstanceOf(TicTacToeScore);
      },
    );
  });
};

testClone({
  arrayOfScoresWithData: Object.values(recordOfTicTacToeScoresWithData),
});
