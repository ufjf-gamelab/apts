import { INCREMENT_ONE } from "@repo/engine_core/constants.js";
import { createDescriptionForTestsOfGetter } from "@repo/engine_core/test.js";
import { expect } from "vitest";

import type { Score } from "../Score.js";

const validateGetPointsOfPlayer = <Sc extends Score<Sc>>({
  expectedPointsOfPlayer,
  indexOfPlayer,
  score,
}: Pick<Parameters<Sc["getPointsOfPlayer"]>[0], "indexOfPlayer"> & {
  expectedPointsOfPlayer: ReturnType<Sc["getPointsOfPlayer"]>;
  score: Sc;
}) => {
  let pointsOfPlayer = score.getPointsOfPlayer({ indexOfPlayer });
  expect(pointsOfPlayer).toBe(expectedPointsOfPlayer);

  // Ensure that the returned object does not keep reference to the internal property
  pointsOfPlayer += INCREMENT_ONE;
  expect(score.getPointsOfPlayer({ indexOfPlayer })).toBe(
    expectedPointsOfPlayer,
  );
  expect(score.getPointsOfPlayer({ indexOfPlayer })).not.toEqual(
    pointsOfPlayer,
  );
};

const createDescriptionForTestOfGetPointsOfPlayer = <Sc extends Score<Sc>>({
  expectedPointsOfPlayer,
  keyOfPlayer,
}: Pick<
  Parameters<typeof validateGetPointsOfPlayer>[0],
  "expectedPointsOfPlayer"
> & {
  keyOfPlayer: string;
}): string =>
  createDescriptionForTestsOfGetter({
    methodDescription: `getPointsOfPlayer({ indexOfPlayer: ${keyOfPlayer} })`,
    returnedValue: expectedPointsOfPlayer,
  });

export {
  createDescriptionForTestOfGetPointsOfPlayer,
  validateGetPointsOfPlayer,
};
