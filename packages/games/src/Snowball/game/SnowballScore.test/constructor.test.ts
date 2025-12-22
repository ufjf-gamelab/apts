import {
  createDescriptionForTest,
  createDescriptionForTestsOfConstructor,
} from "@repo/core/test.js";
import { validateConstructor } from "@repo/game/Score.test/constructor.test.js";
import { expect, test } from "vitest";

import { SnowballScore } from "../SnowballScore.js";
import { recordOfSnowballScoresWithData } from "./records.js";
import {
  deriveParamsOfSnowballScore,
  type SnowballScoreWithData,
} from "./setup.js";

const createDescription = ({
  affix,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix">) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestsOfConstructor({
      className: "SnowballScore",
    }),
  });

const testConstructor = ({
  arrayOfScoresWithData,
}: {
  arrayOfScoresWithData: SnowballScoreWithData[];
}) => {
  arrayOfScoresWithData.forEach(({ keyOfScore, requiredParams }) => {
    test(
      createDescription({
        affix: keyOfScore,
      }),
      () => {
        const { pointsOfEachPlayer } =
          deriveParamsOfSnowballScore(requiredParams);

        const newScore = new SnowballScore({
          pointsOfEachPlayer,
        });

        validateConstructor({
          params: { pointsOfEachPlayer },
          score: newScore,
        });

        expect(newScore).toBeInstanceOf(SnowballScore);
      },
    );
  });
};

testConstructor({
  arrayOfScoresWithData: Object.values(recordOfSnowballScoresWithData),
});
