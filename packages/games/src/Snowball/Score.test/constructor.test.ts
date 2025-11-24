import {
  createDescriptionForTest,
  createDescriptionForTestsOfConstructor,
} from "@repo/engine_core/test.js";
import { validateConstructor } from "@repo/game/Score.test/constructor.test.js";
import { expect, test } from "vitest";

import { SnowballScore } from "../Score.js";
import { scoresWithData } from "./records.js";
import {
  deriveSnowballScoreParams,
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
  arrayOfScoresWithData.forEach(({ keyOfScore, params }) => {
    test(
      createDescription({
        affix: keyOfScore,
      }),
      () => {
        const { pointsOfEachPlayer } = deriveSnowballScoreParams(params);

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
  arrayOfScoresWithData: Object.values(scoresWithData),
});
