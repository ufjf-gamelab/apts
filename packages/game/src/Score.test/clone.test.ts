import { expect } from "vitest";

import { Score } from "../Score.js";

const validateClone = <Sc extends Score<Sc>>({
  clonedScore,
  score,
}: {
  clonedScore: unknown;
  score: Sc;
}) => {
  expect(clonedScore).toBeInstanceOf(Score);
  expect(clonedScore).not.toBe(score);
  expect(clonedScore).toStrictEqual(score);
};

export { validateClone };
