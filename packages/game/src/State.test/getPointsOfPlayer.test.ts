import { INCREMENT_ONE } from "@repo/engine_core/constants.js";
import { createDescriptionForTestsOfGetter } from "@repo/engine_core/test.js";
import { expect } from "vitest";

import type { Game } from "../Game.js";
import type { Move } from "../Move.js";
import type { Player } from "../Player.js";
import type { Score } from "../Score.js";
import type { Slot } from "../Slot.js";
import type { State } from "../State.js";

const validateGetPointsOfPlayer = <
  G extends Game<G, M, P, Sc, Sl, St>,
  M extends Move<M>,
  P extends Player<P>,
  Sc extends Score<Sc>,
  Sl extends Slot<Sl>,
  St extends State<G, M, P, Sc, Sl, St>,
>({
  expectedPointsOfPlayer,
  indexOfPlayer,
  state,
}: Pick<Parameters<St["getPointsOfPlayer"]>[0], "indexOfPlayer"> & {
  expectedPointsOfPlayer: ReturnType<St["getPointsOfPlayer"]>;
  state: St;
}) => {
  let pointsOfPlayer = state.getPointsOfPlayer({ indexOfPlayer });
  expect(pointsOfPlayer).toBe(expectedPointsOfPlayer);

  // Ensure that the returned object does not keep reference to the internal property
  pointsOfPlayer += INCREMENT_ONE;
  expect(state.getPointsOfPlayer({ indexOfPlayer })).toBe(
    expectedPointsOfPlayer,
  );
  expect(state.getPointsOfPlayer({ indexOfPlayer })).not.toEqual(
    pointsOfPlayer,
  );
};

const createDescriptionForTestOfGetPointsOfPlayer = <
  G extends Game<G, M, P, Sc, Sl, St>,
  M extends Move<M>,
  P extends Player<P>,
  Sc extends Score<Sc>,
  Sl extends Slot<Sl>,
  St extends State<G, M, P, Sc, Sl, St>,
>({
  expectedPointsOfPlayer,
  keyOfPlayer,
}: Pick<
  Parameters<typeof validateGetPointsOfPlayer>[0],
  "expectedPointsOfPlayer"
> & {
  keyOfPlayer: string;
}): string =>
  createDescriptionForTestsOfGetter({
    methodDescription: `getPointsOfPlayer({ indexOfPlayer: ${keyOfPlayer} })`,
    returnedValue: expectedPointsOfPlayer,
  });

export {
  createDescriptionForTestOfGetPointsOfPlayer,
  validateGetPointsOfPlayer,
};
