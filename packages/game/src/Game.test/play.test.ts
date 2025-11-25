import { createDescriptionForTestsOfGetter } from "@repo/engine_core/test.js";
import { expect } from "vitest";

import type { Game } from "../Game.js";
import type { Move } from "../Move.js";
import type { Player } from "../Player.js";
import type { Score } from "../Score.js";
import type { Slot } from "../Slot.js";
import type { State } from "../State.js";

const validatePlay = <
  G extends Game<G, M, P, S, Sc, Sl>,
  M extends Move<M>,
  P extends Player<P>,
  S extends State<G, M, P, S, Sc, Sl>,
  Sc extends Score<Sc>,
  Sl extends Slot<Sl>,
>({
  expectedState,
  indexOfMove,
  state,
}: Pick<
  Parameters<Game<G, M, P, S, Sc, Sl>["play"]>[0],
  "indexOfMove" | "state"
> & {
  expectedState: ReturnType<G["play"]>;
}) => {
  const game = state.getGame();
  const newState = game.play({ indexOfMove, state });
  expect(newState).not.toBe(expectedState);
  expect(newState).toStrictEqual(expectedState);

  // Ensure that the returned object does not keep reference to the internal property
  const otherState = game.play({ indexOfMove, state });
  expect(otherState).not.toBe(newState);
};

const validatePlayWhenItIsInvalid = <
  G extends Game<G, M, P, S, Sc, Sl>,
  M extends Move<M>,
  P extends Player<P>,
  S extends State<G, M, P, S, Sc, Sl>,
  Sc extends Score<Sc>,
  Sl extends Slot<Sl>,
>({
  expectedError,
  indexOfMove,
  state,
}: Pick<
  Parameters<Game<G, M, P, S, Sc, Sl>["play"]>[0],
  "indexOfMove" | "state"
> & {
  expectedError: Error;
}) => {
  const game = state.getGame();
  expect(() => game.play({ indexOfMove, state })).toThrowError(expectedError);
};

const createDescriptionForTestOfPlay = <
  G extends Game<G, M, P, S, Sc, Sl>,
  M extends Move<M>,
  P extends Player<P>,
  S extends State<G, M, P, S, Sc, Sl>,
  Sc extends Score<Sc>,
  Sl extends Slot<Sl>,
>({
  keyOfExpectedState,
  keyOfMove,
  keyOfState,
}: {
  keyOfExpectedState: string;
  keyOfMove: string;
  keyOfState: string;
}): string =>
  createDescriptionForTestsOfGetter({
    methodDescription: `play({ indexOfMove: ${keyOfMove}, state: ${keyOfState} })`,
    returnedValue: keyOfExpectedState,
  });

const createDescriptionForTestOfPlayWhenItIsInvalid = <
  G extends Game<G, M, P, S, Sc, Sl>,
  M extends Move<M>,
  P extends Player<P>,
  S extends State<G, M, P, S, Sc, Sl>,
  Sc extends Score<Sc>,
  Sl extends Slot<Sl>,
>({
  expectedError,
  keyOfMove,
  keyOfState,
}: {
  expectedError: Error;
  keyOfMove: string;
  keyOfState: string;
}): string =>
  createDescriptionForTestsOfGetter({
    methodDescription: `play({ indexOfMove: ${keyOfMove}, state: ${keyOfState} })`,
    returnedValue: `(Error: { message: "${expectedError.message}" })`,
  });

export {
  createDescriptionForTestOfPlay,
  createDescriptionForTestOfPlayWhenItIsInvalid,
  validatePlay,
  validatePlayWhenItIsInvalid,
};
