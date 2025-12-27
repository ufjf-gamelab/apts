import type { Game } from "@repo/game/Game.js";
import type { IndexOfMove, Move } from "@repo/game/Move.js";
import type { Player } from "@repo/game/Player.js";
import type { Score } from "@repo/game/Score.js";
import type { Slot } from "@repo/game/Slot.js";
import type { State } from "@repo/game/State.js";

import type { Choice, GetInput } from "../input.js";

const getIndexOfMoveViaUserInput = async <
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
  getInput,
  indexesOfValidMoves,
}: {
  game: GenericGame;
  getInput: GetInput;
  indexesOfValidMoves: ReadonlySet<IndexOfMove>;
}): Promise<IndexOfMove> => {
  const input = await getInput({
    choices: indexesOfValidMoves
      .values()
      .map((indexOfMove) => {
        const move = game.getMove({ indexOfMove });
        if (move === null) {
          throw new Error("Could not retrieve this move.");
        }
        return {
          description: move.getDescription(),
          title: move.getTitle(),
          value: indexOfMove,
        } as Choice;
      })
      .toArray(),
    message: "Enter a move",
    name: "indexOfMove",
    type: "select",
  });

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return input["indexOfMove"];
};

export { getIndexOfMoveViaUserInput };
