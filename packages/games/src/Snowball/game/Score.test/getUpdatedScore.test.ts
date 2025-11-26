import { formatArray } from "@repo/engine_core/format.js";
import {
  createDescriptionForTest,
  createDescriptionForTestsOfGetter,
} from "@repo/engine_core/test.js";
import { expect, test } from "vitest";

import type { SnowballScore } from "../Score.js";
import type { SnowballStateWithData } from "../State.test/setup.js";

import { statesWithData } from "../State.test/records.js";
import { scoresWithData } from "./records.js";

const validateGetUpdatedScore = ({
  expectedScore,
  score,
  slots,
}: Pick<Parameters<SnowballScore["getUpdatedScore"]>[0], "slots"> & {
  expectedScore: ReturnType<SnowballScore["getUpdatedScore"]>;
  score: SnowballScore;
}) => {
  const updatedScore = score.getUpdatedScore({
    slots,
  });
  expect(updatedScore).not.toBe(expectedScore);
  expect(updatedScore).toStrictEqual(expectedScore);
};

const createDescriptionForTestOfGetUpdatedScore = ({
  expectedScore,
  score,
}: {
  expectedScore: ReturnType<SnowballScore["getUpdatedScore"]>;
  score: SnowballScore;
}): string =>
  createDescriptionForTestsOfGetter({
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
}: Pick<Parameters<SnowballScore["getUpdatedScore"]>[0], "slots"> &
  Pick<Parameters<typeof createDescription>[0], "affix"> & {
    expectedScore: ReturnType<SnowballScore["getUpdatedScore"]>;
    score: SnowballScore;
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
  arrayOfStatesWithData: SnowballStateWithData[];
}) => {
  arrayOfStatesWithData.forEach(({ keyOfState, params }) => {
    constructTestGetUpdatedScore({
      affix: keyOfState,
      expectedScore: params.score.score,
      score,
      slots: params.slots.map((slot) => slot.slot),
    });
  });
};

testGetUpdatedScore({
  arrayOfStatesWithData: Object.values(statesWithData),
  score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
});
