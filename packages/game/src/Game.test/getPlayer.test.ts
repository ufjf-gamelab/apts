import { createDescriptionForTestsOfMethod } from "@repo/engine_core/test.js";
import { assert, expect } from "vitest";

import type { Game } from "../Game.js";
import type { Move } from "../Move.js";
import type { Score } from "../Score.js";
import type { Slot } from "../Slot.js";
import type { State } from "../State.js";

import { Player } from "../Player.js";

const validateGetPlayer = <
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
  expectedPlayer,
  game,
  indexOfPlayer,
}: Pick<Parameters<GenericGame["getPlayer"]>[0], "indexOfPlayer"> & {
  expectedPlayer: ReturnType<GenericGame["getPlayer"]>;
  game: GenericGame;
}) => {
  const player = game.getPlayer({ indexOfPlayer });

  if (player === null) {
    assert.isNull(expectedPlayer);
  } else {
    expect(player).toBeInstanceOf(Player);
    expect(player).not.toBe(expectedPlayer);
    expect(player).toStrictEqual(expectedPlayer);

    // Ensure that the returned object does not keep reference to the internal property
    const otherPlayer = game.getPlayer({ indexOfPlayer });
    expect(otherPlayer).not.toBe(player);
  }
};

const createDescriptionForTestOfGetPlayer = <
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
  indexOfPlayer,
  keyOfPlayer,
}: Pick<Parameters<GenericGame["getPlayer"]>[0], "indexOfPlayer"> & {
  keyOfPlayer: string;
}): string =>
  createDescriptionForTestsOfMethod({
    methodDescription: `getPlayer({ indexOfPlayer: ${indexOfPlayer} })`,
    returnedValue: keyOfPlayer,
  });

export { createDescriptionForTestOfGetPlayer, validateGetPlayer };
