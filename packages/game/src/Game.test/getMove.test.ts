import { createDescriptionForTestsOfGetter } from "@repo/engine_core/test.js";
import { assert, expect } from "vitest";

import type { Game } from "../Game.js";
import type { Player } from "../Player.js";
import type { Score } from "../Score.js";
import type { Slot } from "../Slot.js";
import type { State } from "../State.js";

import { Move } from "../Move.js";

const validateGetMove = <
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
  expectedMove,
  game,
  indexOfMove,
}: Pick<Parameters<GenericGame["getMove"]>[0], "indexOfMove"> & {
  expectedMove: ReturnType<GenericGame["getMove"]>;
  game: GenericGame;
}) => {
  const move = game.getMove({ indexOfMove });

  if (move === null) {
    assert.isNull(expectedMove);
  } else {
    expect(move).toBeInstanceOf(Move);
    expect(move).not.toBe(expectedMove);
    expect(move).toStrictEqual(expectedMove);

    // Ensure that the returned object does not keep reference to the internal property
    const otherMove = game.getMove({ indexOfMove });
    expect(otherMove).not.toBe(move);
  }
};

const createDescriptionForTestOfGetMove = <
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
  indexOfMove,
  keyOfMove,
}: Pick<Parameters<GenericGame["getMove"]>[0], "indexOfMove"> & {
  keyOfMove: string;
}): string =>
  createDescriptionForTestsOfGetter({
    methodDescription: `getMove({ indexOfMove: ${indexOfMove} })`,
    returnedValue: keyOfMove,
  });

export { createDescriptionForTestOfGetMove, validateGetMove };
