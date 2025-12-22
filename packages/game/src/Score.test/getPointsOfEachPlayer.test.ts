import { formatArray } from "@repo/core/format.js";
import { createDescriptionForTestsOfMethod } from "@repo/core/test.js";
import { expect } from "vitest";

import type { Player } from "../Player.js";
import type { Points, Score } from "../Score.js";

import { createDescriptionForPlayerAndItsPoints } from "./setup.js";

const validateGetPointsOfEachPlayer = <
  GenericScore extends Score<GenericScore>,
>({
  expectedPointsOfEachPlayer,
  score,
}: {
  expectedPointsOfEachPlayer: ReturnType<GenericScore["getPointsOfEachPlayer"]>;
  score: GenericScore;
}) => {
  const pointsOfEachPlayer = score.getPointsOfEachPlayer();
  expect(pointsOfEachPlayer).toStrictEqual(expectedPointsOfEachPlayer);
};

const createDescriptionForTestOfGetPointsOfEachPlayer = <
  GenericScore extends Score<GenericScore>,
  GenericPlayer extends Player<GenericPlayer>,
>({
  expectedPointsOfEachPlayer,
}: {
  expectedPointsOfEachPlayer: Map<string, Points>;
}): string => {
  const returnedValueOfEachPlayer = expectedPointsOfEachPlayer
    .entries()
    .map(([keyOfPlayer, points]) =>
      createDescriptionForPlayerAndItsPoints({
        keyOfPlayer,
        points,
      }),
    )
    .toArray();

  return createDescriptionForTestsOfMethod({
    methodDescription: "getPointsOfEachPlayer()",
    returnedValue: formatArray({ array: returnedValueOfEachPlayer }),
  });
};

export {
  createDescriptionForTestOfGetPointsOfEachPlayer,
  validateGetPointsOfEachPlayer,
};
