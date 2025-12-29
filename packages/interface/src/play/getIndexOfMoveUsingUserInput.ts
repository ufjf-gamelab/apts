import type { Game } from "@repo/game/Game.js";
import type { IndexOfMove, Move } from "@repo/game/Move.js";
import type { Player } from "@repo/game/Player.js";
import type { Score } from "@repo/game/Score.js";
import type { Slot } from "@repo/game/Slot.js";
import type { State } from "@repo/game/State.js";

import { INCREMENT_ONE } from "@repo/core/constants.js";

import type { Choice, Select } from "../input.js";

const getIndexOfMoveUsingUserInput = async <
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
  game,
  indexesOfValidMoves,
  select,
}: {
  game: GenericGame;
  indexesOfValidMoves: ReadonlySet<IndexOfMove>;
  select: Select<IndexOfMove>;
}): Promise<IndexOfMove> => {
  const choices: Choice<IndexOfMove>[] = indexesOfValidMoves
    .values()
    .map((indexOfMove, index) => {
      const move = game.getMove({ indexOfMove });
      if (move === null) {
        throw new Error("Could not retrieve this move.");
      }
      return {
        description: move.getDescription(),
        name: `(${index + INCREMENT_ONE}) ${move.getTitle()}`,
        value: indexOfMove,
      };
    })
    .toArray();

  return await select({
    choices,
    message: "Select a move",
  });
};

export { getIndexOfMoveUsingUserInput };
