import { INCREMENT_ONE } from "@repo/engine_core/constants.js";
import { createDescriptionForTestsOfGetter } from "@repo/engine_core/test.js";
import { expect } from "vitest";

import type { IndexOfPlayer } from "../Player.js";
import { getKeyOfPlayer } from "../Player.test/setup.js";
import type { Points, Score } from "../Score.js";

const INDEX_OF_FIRST_PLAYER = 0;
const ZERO_POINTS = 0;

const createDescriptionForPlayerAndItsPoints = ({
  indexOfPlayer,
  players,
  points,
}: {
  indexOfPlayer: Parameters<typeof getKeyOfPlayer>[0]["indexOfPlayer"];
  players: Parameters<typeof getKeyOfPlayer>[0]["players"];
  points: Points;
}) => `{${getKeyOfPlayer({ indexOfPlayer, players })}}: ${points}}`;

const validateGetPointsOfEachPlayer = ({
  expectedPointsOfEachPlayer,
  score,
}: {
  expectedPointsOfEachPlayer: ReturnType<Score["getPointsOfEachPlayer"]>;
  score: Score;
}) => {
  const pointsOfEachPlayer = score.getPointsOfEachPlayer() as Map<
    IndexOfPlayer,
    Points
  >;
  expect(pointsOfEachPlayer).not.toBe(expectedPointsOfEachPlayer);
  expect(pointsOfEachPlayer).toStrictEqual(expectedPointsOfEachPlayer);

  // Ensure that the returned object does not keep reference to the internal property
  pointsOfEachPlayer.set(
    INDEX_OF_FIRST_PLAYER,
    (pointsOfEachPlayer.get(INDEX_OF_FIRST_PLAYER) ?? ZERO_POINTS) +
      INCREMENT_ONE,
  );
  expect(score.getPointsOfEachPlayer()).toStrictEqual(
    expectedPointsOfEachPlayer,
  );
  expect(score.getPointsOfEachPlayer()).not.toEqual(pointsOfEachPlayer);
};

const createDescriptionForTestOfGetPointsOfEachPlayer = ({
  expectedPointsOfEachPlayer,
  players,
}: {
  expectedPointsOfEachPlayer: ReturnType<Score["getPointsOfEachPlayer"]>;
  players: Parameters<
    typeof createDescriptionForPlayerAndItsPoints
  >[0]["players"];
}): string => {
  const returnedValueOfEachPlayer = expectedPointsOfEachPlayer
    .entries()
    .map(([indexOfPlayer, points]) =>
      createDescriptionForPlayerAndItsPoints({
        indexOfPlayer,
        players,
        points,
      }),
    )
    .toArray();

  return createDescriptionForTestsOfGetter({
    methodDescription: "getPointsOfEachPlayer()",
    returnedValue: `[${returnedValueOfEachPlayer.join(", ")}]`,
  });
};

export {
  createDescriptionForTestOfGetPointsOfEachPlayer,
  validateGetPointsOfEachPlayer,
};
