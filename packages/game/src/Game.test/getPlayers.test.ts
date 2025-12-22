import { formatArray } from "@repo/core/format.js";
import { createDescriptionForTestsOfMethod } from "@repo/core/test.js";
import { assert, expect } from "vitest";

import type { Game } from "../Game.js";
import type { Move } from "../Move.js";
import type { Score } from "../Score.js";
import type { Slot } from "../Slot.js";
import type { State } from "../State.js";

import { Player } from "../Player.js";

const validateGetPlayers = <
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
  expectedPlayers,
  game,
}: {
  expectedPlayers: ReturnType<GenericGame["getPlayers"]>;
  game: GenericGame;
}) => {
  const players = game.getPlayers();
  expect(players).toBeInstanceOf(Array<GenericPlayer>);
  expect(players).toStrictEqual(expectedPlayers);

  const [firstPlayer] = players;
  if (typeof firstPlayer === "undefined") {
    assert.fail("There should be at least one player to perform this test.");
  }
  expect(firstPlayer).toBeInstanceOf(Player);
};

const createDescriptionForTestOfGetPlayers = ({
  keysOfExpectedPlayers,
}: {
  keysOfExpectedPlayers: string[];
}): string =>
  createDescriptionForTestsOfMethod({
    methodDescription: "getPlayers()",
    returnedValue: formatArray({ array: keysOfExpectedPlayers }),
  });

export { createDescriptionForTestOfGetPlayers, validateGetPlayers };
