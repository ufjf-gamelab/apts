import type { Game } from "@repo/game/Game.js";
import type { IndexOfMove, Move } from "@repo/game/Move.js";
import type { Player } from "@repo/game/Player.js";
import type { Score } from "@repo/game/Score.js";
import type { Slot } from "@repo/game/Slot.js";
import type { State } from "@repo/game/State.js";
import type { ProcessMessage } from "@repo/search/types.js";
import type { Answers, Choice, PromptObject } from "prompts";

import { printInformationAboutCurrentTurn } from "./printInformationAboutCurrentTurn.js";

type GetInput = (
  questions: PromptObject | PromptObject[],
) => Promise<Answers<string>>;

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
}) => {
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
  return input["indexOfMove"] as IndexOfMove;
};

const playMatchInTheModePlayerVersusPlayer = async <
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
}: Pick<
  Parameters<
    typeof getIndexOfMoveViaUserInput<
      GenericGame,
      GenericMove,
      GenericPlayer,
      GenericScore,
      GenericSlot,
      GenericState
    >
  >[0],
  "getInput"
> & {
  processMessage: ProcessMessage;
  state: GenericState;
}) => {
  const game = state.getGame();

  let gameHasEnded = false;
  let currentState = state;

  while (!gameHasEnded) {
    printInformationAboutCurrentTurn({ processMessage, state: currentState });

    const indexesOfValidMoves = game.getIndexesOfValidMoves({
      state: currentState,
    });

    // eslint-disable-next-line no-await-in-loop
    const indexOfMove = await getIndexOfMoveViaUserInput({
      game,
      getInput,
      indexesOfValidMoves,
    });

    currentState = game.play({ indexOfMove, state: currentState });
    gameHasEnded = currentState.isFinal();
  }

  return currentState;
};

export { getIndexOfMoveViaUserInput, playMatchInTheModePlayerVersusPlayer };
