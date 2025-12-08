import { createDescriptionForTestsOfMethod } from "@repo/engine_core/test.js";
import { expect } from "vitest";

import type { Score } from "../Score.js";

const validateGetPointsOfPlayer = <GenericScore extends Score<GenericScore>>({
  expectedPointsOfPlayer,
  indexOfPlayer,
  score,
}: Pick<Parameters<GenericScore["getPointsOfPlayer"]>[0], "indexOfPlayer"> & {
  expectedPointsOfPlayer: ReturnType<GenericScore["getPointsOfPlayer"]>;
  score: GenericScore;
}) => {
  const pointsOfPlayer = score.getPointsOfPlayer({ indexOfPlayer });
  expect(pointsOfPlayer).toBe(expectedPointsOfPlayer);
};

const createDescriptionForTestOfGetPointsOfPlayer = <
  GenericScore extends Score<GenericScore>,
>({
  expectedPointsOfPlayer,
  keyOfPlayer,
}: Pick<
  Parameters<typeof validateGetPointsOfPlayer>[0],
  "expectedPointsOfPlayer"
> & {
  keyOfPlayer: string;
}): string =>
  createDescriptionForTestsOfMethod({
    methodDescription: `getPointsOfPlayer({ indexOfPlayer: ${keyOfPlayer} })`,
    returnedValue: expectedPointsOfPlayer,
  });

export {
  createDescriptionForTestOfGetPointsOfPlayer,
  validateGetPointsOfPlayer,
};
