import { expect } from "vitest";

import { Score, type ScoreParams } from "../Score.js";

const validateConstructor = ({
  params,
  score,
}: {
  params: ScoreParams;
  score: Score;
}) => {
  expect(score).toBeInstanceOf(Score);
  expect(score.getPointsOfEachPlayer()).toStrictEqual(
    params.pointsOfEachPlayer,
  );
  params.pointsOfEachPlayer.forEach((points, indexOfPlayer) => {
    expect(score.getPointsOfPlayer({ indexOfPlayer })).toBe(points);
  });
};

export { validateConstructor };
