import { formatArray } from "@repo/engine_core/format.js";
import {
  createDescriptionForTest,
  createDescriptionForTestsOfGetter,
} from "@repo/engine_core/test.js";
import { expect, test } from "vitest";

import { getUpdatedScore } from "../Score.js";
import { statesWithDataForUnitTest } from "../State.test/setup.js";
import { scoresWithDataForUnitTest } from "./setup.js";

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
}: Pick<
  Parameters<typeof createDescriptionForTestOfGetUpdatedScore>[0],
  "currentScore" | "expectedScore"
> & {
  affix: string;
}) =>
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
  currentScore,
}: Pick<
  Parameters<typeof constructTestGetUpdatedScore>[0],
  "currentScore"
>) => {
  Object.values(statesWithDataForUnitTest).forEach(({ keyOfState, params }) => {
    constructTestGetUpdatedScore({
      affix: keyOfState,
      currentScore,
      expectedScore: params.score,
      slots: params.slots.map((slot) => slot.slot),
    });
  });
};

testGetUpdatedScore({
  currentScore:
    scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
});
