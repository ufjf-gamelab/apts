import { createDescriptionForTestsOfMethod } from "@repo/engine_core/test.js";
import { expect } from "vitest";

import type { Game } from "../Game.js";
import type { Move } from "../Move.js";
import type { Player } from "../Player.js";
import type { Score } from "../Score.js";
import type { Slot } from "../Slot.js";
import type { State } from "../State.js";

const validatePlay = <
  GenericGame extends Game<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >,
  GenericMove extends Move<GenericMove>,
  GenericPlayer extends Player<GenericPlayer>,
  GenericScore extends Score<GenericScore>,
  GenericSlot extends Slot<GenericSlot>,
  GenericState extends State<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >,
>({
  expectedState,
  indexOfMove,
  state,
}: Pick<
  Parameters<
    Game<
      GenericGame,
      GenericMove,
      GenericPlayer,
      GenericScore,
      GenericSlot,
      GenericState
    >["play"]
  >[0],
  "indexOfMove" | "state"
> & {
  expectedState: ReturnType<GenericGame["play"]>;
}) => {
  const game = state.getGame();
  const newState = game.play({ indexOfMove, state });
  expect(newState).toStrictEqual(expectedState);
};

const validatePlayWhenItIsInvalid = <
  GenericGame extends Game<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >,
  GenericMove extends Move<GenericMove>,
  GenericPlayer extends Player<GenericPlayer>,
  GenericScore extends Score<GenericScore>,
  GenericSlot extends Slot<GenericSlot>,
  GenericState extends State<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >,
>({
  expectedError,
  indexOfMove,
  state,
}: Pick<
  Parameters<
    Game<
      GenericGame,
      GenericMove,
      GenericPlayer,
      GenericScore,
      GenericSlot,
      GenericState
    >["play"]
  >[0],
  "indexOfMove" | "state"
> & {
  expectedError: Error;
}) => {
  const game = state.getGame();
  expect(() => game.play({ indexOfMove, state })).toThrowError(expectedError);
};

const createDescriptionForTestOfPlay = ({
  keyOfExpectedState,
  keyOfMove,
  keyOfState,
}: {
  keyOfExpectedState: string;
  keyOfMove: string;
  keyOfState: string;
}): string =>
  createDescriptionForTestsOfMethod({
    methodDescription: `play({ indexOfMove: ${keyOfMove}, state: ${keyOfState} })`,
    returnedValue: keyOfExpectedState,
  });

const createDescriptionForTestOfPlayWhenItIsInvalid = ({
  expectedError,
  keyOfMove,
  keyOfState,
}: {
  expectedError: Error;
  keyOfMove: string;
  keyOfState: string;
}): string =>
  createDescriptionForTestsOfMethod({
    methodDescription: `play({ indexOfMove: ${keyOfMove}, state: ${keyOfState} })`,
    returnedValue: `(Error: { message: "${expectedError.message}" })`,
  });

export {
  createDescriptionForTestOfPlay,
  createDescriptionForTestOfPlayWhenItIsInvalid,
  validatePlay,
  validatePlayWhenItIsInvalid,
};
