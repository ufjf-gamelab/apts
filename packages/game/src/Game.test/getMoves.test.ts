import { formatArray } from "@repo/engine_core/format.js";
import { createDescriptionForTestsOfMethod } from "@repo/engine_core/test.js";
import { assert, expect } from "vitest";

import type { Game } from "../Game.js";
import type { Player } from "../Player.js";
import type { Score } from "../Score.js";
import type { Slot } from "../Slot.js";
import type { State } from "../State.js";

import { Move } from "../Move.js";

const validateGetMoves = <
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
  expectedMoves,
  game,
}: {
  expectedMoves: ReturnType<GenericGame["getMoves"]>;
  game: GenericGame;
}) => {
  const moves = game.getMoves();
  expect(moves).toBeInstanceOf(Array<GenericMove>);
  expect(moves).not.toBe(expectedMoves);
  expect(moves).toStrictEqual(expectedMoves);

  const [firstMove] = moves;
  if (typeof firstMove === "undefined") {
    assert.fail("There should be at least one move to perform this test.");
  }
  expect(firstMove).toBeInstanceOf(Move);
};

const createDescriptionForTestOfGetMoves = ({
  keysOfExpectedMoves,
}: {
  keysOfExpectedMoves: string[];
}): string =>
  createDescriptionForTestsOfMethod({
    methodDescription: "getMoves()",
    returnedValue: formatArray({ array: keysOfExpectedMoves }),
  });

export { createDescriptionForTestOfGetMoves, validateGetMoves };
