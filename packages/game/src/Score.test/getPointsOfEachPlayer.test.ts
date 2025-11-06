import { INCREMENT_ONE } from "@repo/engine_core/constants.js";
import { formatArray } from "@repo/engine_core/format.js";
import { createDescriptionForTestsOfGetter } from "@repo/engine_core/test.js";
import { expect } from "vitest";

import type { IndexOfPlayer, Player } from "../Player.js";
import type { Points, Score } from "../Score.js";

import { getKeyOfPlayer, type PlayerWithData } from "../Player.test/setup.js";

const INDEX_OF_FIRST_PLAYER = 0;
const ZERO_POINTS = 0;

const createDescriptionForPlayerAndItsPoints = <P extends Player<P>>({
  indexOfPlayer,
  players,
  points,
}: {
  indexOfPlayer: IndexOfPlayer;
  players: Record<string, PlayerWithData<P>>;
  points: Points;
}): string =>
  `{${String(getKeyOfPlayer({ indexOfPlayer, players }))}}: ${points}}`;

const validateGetPointsOfEachPlayer = <Sc extends Score<Sc>>({
  expectedPointsOfEachPlayer,
  score,
}: {
  expectedPointsOfEachPlayer: ReturnType<Sc["getPointsOfEachPlayer"]>;
  score: Sc;
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
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

const createDescriptionForTestOfGetPointsOfEachPlayer = <
  Sc extends Score<Sc>,
  P extends Player<P>,
>({
  expectedPointsOfEachPlayer,
  players,
}: {
  expectedPointsOfEachPlayer: ReturnType<Sc["getPointsOfEachPlayer"]>;
  players: Record<string, PlayerWithData<P>>;
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
    returnedValue: formatArray({ array: returnedValueOfEachPlayer }),
  });
};

export {
  createDescriptionForTestOfGetPointsOfEachPlayer,
  validateGetPointsOfEachPlayer,
};
