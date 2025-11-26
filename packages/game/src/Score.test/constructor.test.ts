import { expect } from "vitest";

import { type ParamsOfScore, Score } from "../Score.js";

const validateConstructor = <GenericScore extends Score<GenericScore>>({
  params,
  score,
}: {
  params: ParamsOfScore;
  score: GenericScore;
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
