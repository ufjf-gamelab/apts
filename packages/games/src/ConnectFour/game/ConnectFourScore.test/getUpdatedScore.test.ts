import { formatArray } from "@repo/core/format.js";
import {
  createDescriptionForTest,
  createDescriptionForTestsOfMethod,
} from "@repo/core/test.js";
import { expect, test } from "vitest";

import type { ConnectFourScore } from "../ConnectFourScore.js";
import type { ConnectFourStateWithData } from "../ConnectFourState.test/setup.js";

import { recordOfConnectFourStatesWithData } from "../ConnectFourState.test/records.js";
import { recordOfConnectFourScoresWithData } from "./records.js";

const validateGetUpdatedScore = ({
  expectedScore,
  score,
  slots,
}: Pick<Parameters<ConnectFourScore["getUpdatedScore"]>[0], "slots"> & {
  expectedScore: ReturnType<ConnectFourScore["getUpdatedScore"]>;
  score: ConnectFourScore;
}) => {
  const updatedScore = score.getUpdatedScore({
    slots,
  });
  expect(updatedScore).toStrictEqual(expectedScore);
};

const createDescriptionForTestOfGetUpdatedScore = ({
  expectedScore,
  score,
}: {
  expectedScore: ReturnType<ConnectFourScore["getUpdatedScore"]>;
  score: ConnectFourScore;
}): string =>
  createDescriptionForTestsOfMethod({
    methodDescription: `getUpdatedScore({ score: ${formatArray({
      array: score.getPointsOfEachPlayer().values().toArray(),
    })} })`,
    returnedValue: formatArray({
      array: expectedScore.getPointsOfEachPlayer().values().toArray(),
    }),
  });

const createDescription = ({
  affix,
  expectedScore,
  score,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix"> &
  Pick<
    Parameters<typeof createDescriptionForTestOfGetUpdatedScore>[0],
    "expectedScore" | "score"
  >) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestOfGetUpdatedScore({
      expectedScore,
      score,
    }),
  });

const constructTestGetUpdatedScore = ({
  affix,
  expectedScore,
  score,
  slots,
}: Pick<Parameters<ConnectFourScore["getUpdatedScore"]>[0], "slots"> &
  Pick<Parameters<typeof createDescription>[0], "affix"> & {
    expectedScore: ReturnType<ConnectFourScore["getUpdatedScore"]>;
    score: ConnectFourScore;
  }) => {
  test(
    createDescription({
      affix,
      expectedScore,
      score,
    }),

    () => {
      validateGetUpdatedScore({
        expectedScore,
        score,
        slots,
      });
    },
  );
};

const testGetUpdatedScore = ({
  arrayOfStatesWithData,
  score,
}: Pick<Parameters<typeof constructTestGetUpdatedScore>[0], "score"> & {
  arrayOfStatesWithData: ConnectFourStateWithData[];
}) => {
  arrayOfStatesWithData.forEach(
    ({ keyOfState, requiredParams: { scoreWithData, slotsWithData } }) => {
      constructTestGetUpdatedScore({
        affix: keyOfState,
        expectedScore: scoreWithData.score,
        score,
        slots: slotsWithData.map((slotWithData) => slotWithData.slot),
      });
    },
  );
};

testGetUpdatedScore({
  arrayOfStatesWithData: Object.values(recordOfConnectFourStatesWithData),
  score:
    recordOfConnectFourScoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
});
