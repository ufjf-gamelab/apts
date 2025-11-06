import { expect } from "vitest";

import { Score, type ScoreParams } from "../Score.js";

const validateConstructor = <Sc extends Score<Sc>>({
  params,
  score,
}: {
  params: ScoreParams;
  score: Sc;
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
