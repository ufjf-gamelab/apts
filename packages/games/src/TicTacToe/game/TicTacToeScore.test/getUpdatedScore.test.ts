import { formatArray } from "@repo/core/format.js";
import {
  createDescriptionForTest,
  createDescriptionForTestsOfMethod,
} from "@repo/core/test.js";
import { expect, test } from "vitest";

import type { TicTacToeScore } from "../TicTacToeScore.js";
import type { TicTacToeStateWithData } from "../TicTacToeState.test/setup.js";

import { recordOfTicTacToeStatesWithData } from "../TicTacToeState.test/records.js";
import { recordOfTicTacToeScoresWithData } from "./records.js";

const validateGetUpdatedScore = ({
  expectedScore,
  score,
  slots,
}: Pick<Parameters<TicTacToeScore["getUpdatedScore"]>[0], "slots"> & {
  expectedScore: ReturnType<TicTacToeScore["getUpdatedScore"]>;
  score: TicTacToeScore;
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
  expectedScore: ReturnType<TicTacToeScore["getUpdatedScore"]>;
  score: TicTacToeScore;
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
}: Pick<Parameters<TicTacToeScore["getUpdatedScore"]>[0], "slots"> &
  Pick<Parameters<typeof createDescription>[0], "affix"> & {
    expectedScore: ReturnType<TicTacToeScore["getUpdatedScore"]>;
    score: TicTacToeScore;
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
  arrayOfStatesWithData: TicTacToeStateWithData[];
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
  arrayOfStatesWithData: Object.values(recordOfTicTacToeStatesWithData),
  score:
    recordOfTicTacToeScoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
});
