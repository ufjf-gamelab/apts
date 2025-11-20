import { formatArray } from "@repo/engine_core/format.js";
import { createDescriptionForTestsOfGetter } from "@repo/engine_core/test.js";
import { expect } from "vitest";

import type { Game } from "../Game.js";
import type { Move } from "../Move.js";
import type { Player } from "../Player.js";
import type { Slot } from "../Slot.js";
import type { State } from "../State.js";

import { Score } from "../Score.js";
import { createDescriptionForPlayerAndItsPoints } from "../Score.test/setup.js";

const validateGetScore = <
  G extends Game<G, M, P, S, Sc, Sl>,
  M extends Move<M>,
  P extends Player<P>,
  S extends State<G, M, P, S, Sc, Sl>,
  Sc extends Score<Sc>,
  Sl extends Slot<Sl>,
>({
  expectedScore,
  state,
}: {
  expectedScore: ReturnType<S["getScore"]>;
  state: S;
}) => {
  const score = state.getScore();
  expect(score).toBeInstanceOf(Score);
  expect(score).not.toBe(expectedScore);
  expect(score).toStrictEqual(expectedScore);

  // Ensure that the returned object does not keep reference to the internal property
  const otherScore = state.getScore();
  expect(otherScore).not.toBe(score);
};

const createDescriptionForTestOfGetScore = <
  G extends Game<G, M, P, S, Sc, Sl>,
  M extends Move<M>,
  P extends Player<P>,
  S extends State<G, M, P, S, Sc, Sl>,
  Sc extends Score<Sc>,
  Sl extends Slot<Sl>,
>({
  expectedScore,
  keyOfPlayer,
}: Pick<
  Parameters<typeof createDescriptionForPlayerAndItsPoints>[0],
  "keyOfPlayer"
> &
  Pick<Parameters<typeof validateGetScore>[0], "expectedScore">): string => {
  const returnedValueOfEachPlayer = expectedScore
    .getPointsOfEachPlayer()
    .values()
    .map((points) =>
      createDescriptionForPlayerAndItsPoints({
        keyOfPlayer,
        points,
      }),
    )
    .toArray();

  return createDescriptionForTestsOfGetter({
    methodDescription: "getScore()",
    returnedValue: formatArray({ array: returnedValueOfEachPlayer }),
  });
};

export { createDescriptionForTestOfGetScore, validateGetScore };
