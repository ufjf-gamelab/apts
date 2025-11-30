import type { Game } from "@repo/game/Game.js";
import type { IndexOfMove, Move } from "@repo/game/Move.js";
import type { Player } from "@repo/game/Player.js";
import type { Score } from "@repo/game/Score.js";
import type { Slot } from "@repo/game/Slot.js";
import type { State } from "@repo/game/State.js";
import type { Answers, Choice, PromptObject } from "prompts";

import type { ProcessMessage } from "../../types.js";

type GetInput = (
  questions: PromptObject | PromptObject[],
) => Promise<Answers<string>>;

const playMatch = async <
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
  getInput,
  processMessage,
  state,
}: {
  getInput: GetInput;
  processMessage: ProcessMessage;
  state: GenericState;
}): Promise<void> => {
  const game = state.getGame();
  processMessage(`Game: ${game.getName()}`);

  let gameHasEnded = false;
  let currentState = state;

  while (!gameHasEnded) {
    const indexOfPlayer = currentState.getIndexOfPlayer();
    const player = game.getPlayer({ indexOfPlayer });
    if (player === null) {
      throw new Error("Could not retrieve this player.");
    }

    processMessage(`\nTurn of: (${player.getSymbol()}) ${player.getName()}`);
    processMessage(currentState.toString());

    const indexesOfValidMoves = game.getIndexesOfValidMoves({
      state: currentState,
    });

    // eslint-disable-next-line no-await-in-loop
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
    // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
    const indexOfMove = input["indexOfMove"] as IndexOfMove;

    currentState = game.play({ indexOfMove, state: currentState });
    gameHasEnded = game.isFinal({ state: currentState });
  }

  processMessage(`\n${currentState.toString()}`);
  processMessage("\nEnd of game.");
};

export { playMatch };
