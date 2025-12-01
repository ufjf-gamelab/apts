import type { Integer } from "@repo/engine_core/types.js";
import type { Game } from "@repo/game/Game.js";
import type { IndexOfMove, Move } from "@repo/game/Move.js";
import type { Player } from "@repo/game/Player.js";
import type { Score } from "@repo/game/Score.js";
import type { Slot } from "@repo/game/Slot.js";
import type { State } from "@repo/game/State.js";
import type { Answers, Choice, PromptObject } from "prompts";

import { FIRST_INDEX } from "@repo/engine_core/constants.js";
import { formatMap } from "@repo/engine_core/format.js";
import { Random } from "@repo/search/CommonMonteCarloTree/Random.js";
import {
  predictQualityOfMoves,
  type SofteningCoefficient,
} from "@repo/search/CommonMonteCarloTree/search/quality.js";
import { type ExplorationCoefficient } from "@repo/search/CommonMonteCarloTree/search/search.js";

import type { ModeOfPlay } from "../../constants.js";
import type { ProcessMessage } from "../../types.js";

type GetInput = (
  questions: PromptObject | PromptObject[],
) => Promise<Answers<string>>;

const printInformationAboutCurrentTurn = <
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
  processMessage,
  state,
}: {
  processMessage: ProcessMessage;
  state: GenericState;
}) => {
  const game = state.getGame();
  const indexOfPlayer = state.getIndexOfPlayer();
  const player = game.getPlayer({ indexOfPlayer });
  if (player === null) {
    throw new Error("Could not retrieve this player.");
  }

  processMessage(`\nTurn of: (${player.getSymbol()}) ${player.getName()}`);
  processMessage(state.toString());
};

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

const getIndexOfMoveUsingSearch = <
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
  explorationCoefficient,
  indexesOfValidMoves,
  processMessage,
  quantityOfExpansions,
  random,
  softeningCoefficient,
  state,
}: Pick<
  Parameters<Random["pickIndexOfValidMoveConsideringTheirQuality"]>[0],
  "softeningCoefficient"
> &
  Pick<
    Parameters<
      typeof predictQualityOfMoves<
        GenericGame,
        GenericMove,
        GenericPlayer,
        GenericScore,
        GenericSlot,
        GenericState
      >
    >[0],
    "explorationCoefficient" | "quantityOfExpansions" | "random" | "state"
  > & {
    indexesOfValidMoves: ReadonlySet<IndexOfMove>;
    processMessage: ProcessMessage;
  }) => {
  const game = state.getGame();

  const qualitiesOfMoves = predictQualityOfMoves({
    explorationCoefficient,
    quantityOfExpansions,
    random,
    state,
  });

  const indexOfPickedMove = random.pickIndexOfValidMoveConsideringTheirQuality({
    indexesOfValidMoves,
    qualitiesOfMoves,
    softeningCoefficient,
  });
  const pickedMove = game.getMove({ indexOfMove: indexOfPickedMove });

  processMessage(
    `Played move: ${pickedMove?.getTitle()}. ${pickedMove?.getDescription()}`,
  );
  return indexOfPickedMove;
};

const getIndexOfMove = async <
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
  currentPlayerIsUser,
  explorationCoefficient,
  getInput,
  indexesOfValidMoves,
  processMessage,
  quantityOfExpansions,
  random,
  softeningCoefficient,
  state,
}: Pick<
  Parameters<
    typeof getIndexOfMoveUsingSearch<
      GenericGame,
      GenericMove,
      GenericPlayer,
      GenericScore,
      GenericSlot,
      GenericState
    >
  >[0],
  | "explorationCoefficient"
  | "indexesOfValidMoves"
  | "processMessage"
  | "quantityOfExpansions"
  | "random"
  | "softeningCoefficient"
  | "state"
> &
  Pick<
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
    "getInput" | "indexesOfValidMoves"
  > & {
    currentPlayerIsUser: boolean;
  }) => {
  if (currentPlayerIsUser) {
    return await getIndexOfMoveViaUserInput({
      game: state.getGame(),
      getInput,
      indexesOfValidMoves,
    });
  }
  return getIndexOfMoveUsingSearch({
    explorationCoefficient,
    indexesOfValidMoves,
    processMessage,
    quantityOfExpansions,
    random,
    softeningCoefficient,
    state,
  });
};

const playMatchInTheModePlayerVersusComputer = async <
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
  explorationCoefficient,
  getInput,
  processMessage,
  quantityOfExpansions,
  random,
  softeningCoefficient,
  state,
}: Pick<
  Parameters<
    typeof getIndexOfMove<
      GenericGame,
      GenericMove,
      GenericPlayer,
      GenericScore,
      GenericSlot,
      GenericState
    >
  >[0],
  | "explorationCoefficient"
  | "getInput"
  | "quantityOfExpansions"
  | "random"
  | "softeningCoefficient"
  | "state"
> & {
  processMessage: ProcessMessage;
}) => {
  const game = state.getGame();

  let gameHasEnded = false;
  let currentState = state;
  // eslint-disable-next-line init-declarations
  let currentPlayerIsUser;

  while (!gameHasEnded) {
    currentPlayerIsUser = currentState.getIndexOfPlayer() === FIRST_INDEX;
    printInformationAboutCurrentTurn({ processMessage, state: currentState });

    const indexesOfValidMoves = game.getIndexesOfValidMoves({
      state: currentState,
    });

    // eslint-disable-next-line no-await-in-loop
    const indexOfMove = await getIndexOfMove({
      currentPlayerIsUser,
      explorationCoefficient,
      getInput,
      indexesOfValidMoves,
      processMessage,
      quantityOfExpansions,
      random,
      softeningCoefficient,
      state: currentState,
    });

    currentState = game.play({ indexOfMove, state: currentState });
    gameHasEnded = game.isFinal({ state: currentState });
  }

  return currentState;
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
    gameHasEnded = game.isFinal({ state: currentState });
  }

  return currentState;
};

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
  explorationCoefficient,
  getInput,
  modeOfPlay,
  processMessage,
  quantityOfExpansions,
  seed,
  softeningCoefficient,
  state,
}: {
  explorationCoefficient: ExplorationCoefficient;
  getInput: GetInput;
  modeOfPlay: ModeOfPlay;
  processMessage: ProcessMessage;
  quantityOfExpansions: Integer;
  seed: string;
  softeningCoefficient: SofteningCoefficient;
  state: GenericState;
}): Promise<void> => {
  const game = state.getGame();
  const random = new Random({ seed });

  processMessage(`Game: ${game.getName()}`);

  const finalState = await (async () => {
    switch (modeOfPlay) {
      case "cvc":
      case "pvc":
        return await playMatchInTheModePlayerVersusComputer({
          explorationCoefficient,
          getInput,
          processMessage,
          quantityOfExpansions,
          random,
          softeningCoefficient,
          state,
        });
      case "pvp":
        return await playMatchInTheModePlayerVersusPlayer({
          getInput,
          processMessage,
          state,
        });
      default:
        throw new Error("Invalid game mode.");
    }
  })();

  processMessage(`\n${finalState.toString()}`);
  processMessage("End of game.");
  processMessage(
    `\n${formatMap({
      map: new Map(
        finalState
          .getScore()
          .getPointsOfEachPlayer()
          .entries()
          .map(([indexOfPlayer, points]) => {
            const player = game.getPlayer({ indexOfPlayer });
            return [`(${player?.getSymbol()}) ${player?.getName()}`, points];
          }),
      ),
    })}`,
  );
};

export { playMatch };
