import { expect } from "vitest";

import { Score } from "../Score.js";

const validateClone = <GenericScore extends Score<GenericScore>>({
  clonedScore,
  score,
}: {
  clonedScore: unknown;
  score: GenericScore;
}) => {
  expect(clonedScore).toBeInstanceOf(Score);
  expect(clonedScore).not.toBe(score);
  expect(clonedScore).toStrictEqual(score);
};

export { validateClone };
