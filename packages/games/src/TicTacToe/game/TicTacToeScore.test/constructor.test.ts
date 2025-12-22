import {
  createDescriptionForTest,
  createDescriptionForTestsOfConstructor,
} from "@repo/core/test.js";
import { validateConstructor } from "@repo/game/Score.test/constructor.test.js";
import { expect, test } from "vitest";

import { TicTacToeScore } from "../TicTacToeScore.js";
import { recordOfTicTacToeScoresWithData } from "./records.js";
import {
  deriveParamsOfTicTacToeScore,
  type TicTacToeScoreWithData,
} from "./setup.js";

const createDescription = ({
  affix,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix">) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestsOfConstructor({
      className: "TicTacToeScore",
    }),
  });

const testConstructor = ({
  arrayOfScoresWithData,
}: {
  arrayOfScoresWithData: TicTacToeScoreWithData[];
}) => {
  arrayOfScoresWithData.forEach(({ keyOfScore, requiredParams }) => {
    test(
      createDescription({
        affix: keyOfScore,
      }),
      () => {
        const { pointsOfEachPlayer } =
          deriveParamsOfTicTacToeScore(requiredParams);

        const newScore = new TicTacToeScore({
          pointsOfEachPlayer,
        });

        validateConstructor({
          params: { pointsOfEachPlayer },
          score: newScore,
        });

        expect(newScore).toBeInstanceOf(TicTacToeScore);
      },
    );
  });
};

testConstructor({
  arrayOfScoresWithData: Object.values(recordOfTicTacToeScoresWithData),
});
