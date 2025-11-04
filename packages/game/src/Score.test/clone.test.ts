import { expect } from "vitest";

import { Score } from "../Score.js";

const validateClone = ({
  clonedScore,
  score,
}: {
  clonedScore: unknown;
  score: Score;
}) => {
  expect(clonedScore).toBeInstanceOf(Score);
  expect(clonedScore).not.toBe(score);
  expect(clonedScore).toStrictEqual(score);
};

export { validateClone };
