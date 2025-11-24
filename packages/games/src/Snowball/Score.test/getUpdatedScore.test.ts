import { formatArray } from "@repo/engine_core/format.js";
import {
  createDescriptionForTest,
  createDescriptionForTestsOfGetter,
} from "@repo/engine_core/test.js";
import { expect, test } from "vitest";

import type { SnowballStateWithData } from "../State.test/setup.js";

import { getUpdatedScore } from "../Score.js";
import { statesWithData } from "../State.test/records.js";
import { scoresWithData } from "./records.js";

const validateGetUpdatedScore = ({
  currentScore,
  expectedScore,
  slots,
}: Pick<Parameters<typeof getUpdatedScore>[0], "currentScore" | "slots"> & {
  expectedScore: ReturnType<typeof getUpdatedScore>;
}) => {
  const updatedScore = getUpdatedScore({
    currentScore,
    slots,
  });
  expect(updatedScore).not.toBe(expectedScore);
  expect(updatedScore).toStrictEqual(expectedScore);
};

const createDescriptionForTestOfGetUpdatedScore = ({
  currentScore,
  expectedScore,
}: Pick<Parameters<typeof getUpdatedScore>[0], "currentScore"> & {
  expectedScore: ReturnType<typeof getUpdatedScore>;
}): string =>
  createDescriptionForTestsOfGetter({
    methodDescription: `getUpdatedScore({ score: ${formatArray({
      array: currentScore.getPointsOfEachPlayer().values().toArray(),
    })} })`,
    returnedValue: formatArray({
      array: expectedScore.getPointsOfEachPlayer().values().toArray(),
    }),
  });

const createDescription = ({
  affix,
  currentScore,
  expectedScore,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix"> &
  Pick<
    Parameters<typeof createDescriptionForTestOfGetUpdatedScore>[0],
    "currentScore" | "expectedScore"
  >) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestOfGetUpdatedScore({
      currentScore,
      expectedScore,
    }),
  });

const constructTestGetUpdatedScore = ({
  affix,
  currentScore,
  expectedScore,
  slots,
}: Pick<Parameters<typeof createDescription>[0], "affix"> &
  Pick<Parameters<typeof getUpdatedScore>[0], "currentScore" | "slots"> & {
    expectedScore: ReturnType<typeof getUpdatedScore>;
  }) => {
  test(
    createDescription({
      affix,
      currentScore,
      expectedScore,
    }),

    () => {
      validateGetUpdatedScore({
        currentScore,
        expectedScore,
        slots,
      });
    },
  );
};

const testGetUpdatedScore = ({
  arrayOfStatesWithData,
  currentScore,
}: Pick<Parameters<typeof constructTestGetUpdatedScore>[0], "currentScore"> & {
  arrayOfStatesWithData: SnowballStateWithData[];
}) => {
  arrayOfStatesWithData.forEach(({ keyOfState, params }) => {
    constructTestGetUpdatedScore({
      affix: keyOfState,
      currentScore,
      expectedScore: params.score.score,
      slots: params.slots.map((slot) => slot.slot),
    });
  });
};

testGetUpdatedScore({
  arrayOfStatesWithData: Object.values(statesWithData),
  currentScore: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
});
