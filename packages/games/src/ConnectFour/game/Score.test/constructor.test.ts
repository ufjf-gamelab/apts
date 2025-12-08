import {
  createDescriptionForTest,
  createDescriptionForTestsOfConstructor,
} from "@repo/engine_core/test.js";
import { validateConstructor } from "@repo/game/Score.test/constructor.test.js";
import { expect, test } from "vitest";

import { ConnectFourScore } from "../Score.js";
import { recordOfConnectFourScoresWithData } from "./records.js";
import {
  type ConnectFourScoreWithData,
  deriveParamsOfConnectFourScore,
} from "./setup.js";

const createDescription = ({
  affix,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix">) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestsOfConstructor({
      className: "ConnectFourScore",
    }),
  });

const testConstructor = ({
  arrayOfScoresWithData,
}: {
  arrayOfScoresWithData: ConnectFourScoreWithData[];
}) => {
  arrayOfScoresWithData.forEach(({ keyOfScore, requiredParams }) => {
    test(
      createDescription({
        affix: keyOfScore,
      }),
      () => {
        const { pointsOfEachPlayer } =
          deriveParamsOfConnectFourScore(requiredParams);

        const newScore = new ConnectFourScore({
          pointsOfEachPlayer,
        });

        validateConstructor({
          params: { pointsOfEachPlayer },
          score: newScore,
        });

        expect(newScore).toBeInstanceOf(ConnectFourScore);
      },
    );
  });
};

testConstructor({
  arrayOfScoresWithData: Object.values(recordOfConnectFourScoresWithData),
});
