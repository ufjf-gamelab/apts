import type { Seed } from "@repo/engine_core/types.js";
import type { Game } from "@repo/game/Game.js";
import type { IndexOfMove, Move } from "@repo/game/Move.js";
import type { Player } from "@repo/game/Player.js";
import type { Score } from "@repo/game/Score.js";
import type { Slot } from "@repo/game/Slot.js";
import type { State } from "@repo/game/State.js";
import type { AgentGuidedSearch } from "@repo/search/AgentGuidedMonteCarloTree/AgentGuidedSearch.js";
import type { CommonSearch } from "@repo/search/CommonMonteCarloTree/CommonSearch.js";
import type { ExpandAllSearch } from "@repo/search/ExpandAllMonteCarloTree/ExpandAllSearch.js";
import type { LogMessage } from "@repo/search/types.js";
import type { Answers, Choice, PromptObject } from "prompts";

import { FIRST_INDEX } from "@repo/engine_core/constants.js";
import { formatMap } from "@repo/engine_core/format.js";
import { predictQualityOfMoves } from "@repo/search/qualityOfMove.js";
import { Random } from "@repo/search/Random/Random.js";

import { type ModeOfPlay, modesOfPlay } from "../../constants.js";
import { constructSearchBasedOnStrategy } from "../../constructSearchBasedOnStrategy.js";

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
  logMessage,
  state,
}: {
  logMessage: LogMessage;
  state: GenericState;
}) => {
  const game = state.getGame();
  const indexOfPlayer = state.getIndexOfPlayer();
  const player = game.getPlayer({ indexOfPlayer });
  if (player === null) {
    throw new Error("Could not retrieve this player.");
  }

  logMessage(`\nTurn of: (${player.getSymbol()}) ${player.getName()}`);
  logMessage(state.toString());
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
  indexesOfValidMoves,
  logMessage,
  random,
  search,
  softeningCoefficient,
  state,
}: Pick<
  Parameters<Random["pickIndexOfValidMoveConsideringItsQuality"]>[0],
  "softeningCoefficient"
> & {
  indexesOfValidMoves: ReadonlySet<IndexOfMove>;
  logMessage: LogMessage;
  random: Random;
  search:
    | AgentGuidedSearch<
        GenericGame,
        GenericMove,
        GenericPlayer,
        GenericScore,
        GenericSlot,
        GenericState
      >
    | CommonSearch<
        GenericGame,
        GenericMove,
        GenericPlayer,
        GenericScore,
        GenericSlot,
        GenericState
      >
    | ExpandAllSearch<
        GenericGame,
        GenericMove,
        GenericPlayer,
        GenericScore,
        GenericSlot,
        GenericState
      >;
  state: GenericState;
}) => {
  const game = state.getGame();

  const qualitiesOfMoves = predictQualityOfMoves({
    search,
    state,
  });

  const indexOfPickedMove = random.pickIndexOfValidMoveConsideringItsQuality({
    indexesOfValidMoves,
    qualitiesOfMoves,
    softeningCoefficient,
  });
  const pickedMove = game.getMove({ indexOfMove: indexOfPickedMove });

  logMessage(
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
  getInput,
  indexesOfValidMoves,
  logMessage,
  random,
  search,
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
  | "indexesOfValidMoves"
  | "logMessage"
  | "random"
  | "search"
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
    indexesOfValidMoves,
    logMessage,
    random,
    search,
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
  getInput,
  logMessage,
  random,
  search,
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
  | "getInput"
  | "logMessage"
  | "random"
  | "search"
  | "softeningCoefficient"
  | "state"
>) => {
  const game = state.getGame();

  let gameHasEnded = false;
  let currentState = state;
  // eslint-disable-next-line init-declarations
  let currentPlayerIsUser;

  while (!gameHasEnded) {
    currentPlayerIsUser = currentState.getIndexOfPlayer() === FIRST_INDEX;
    printInformationAboutCurrentTurn({ logMessage, state: currentState });

    const indexesOfValidMoves = game.getIndexesOfValidMoves({
      state: currentState,
    });

    // eslint-disable-next-line no-await-in-loop
    const indexOfMove = await getIndexOfMove({
      currentPlayerIsUser,
      getInput,
      indexesOfValidMoves,
      logMessage,
      random,
      search,
      softeningCoefficient,
      state: currentState,
    });

    currentState = game.play({ indexOfMove, state: currentState });
    gameHasEnded = currentState.isFinal();
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
  logMessage,
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
  logMessage: LogMessage;
  state: GenericState;
}) => {
  const game = state.getGame();

  let gameHasEnded = false;
  let currentState = state;

  while (!gameHasEnded) {
    printInformationAboutCurrentTurn({ logMessage, state: currentState });

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
  logMessage,
  modeOfPlay,
  predictionModel,
  quantityOfExpansions,
  seed,
  softeningCoefficient,
  state,
  strategyToSearch,
}: Pick<
  Parameters<
    typeof constructSearchBasedOnStrategy<
      GenericGame,
      GenericMove,
      GenericPlayer,
      GenericScore,
      GenericSlot,
      GenericState
    >
  >[0],
  | "explorationCoefficient"
  | "predictionModel"
  | "quantityOfExpansions"
  | "strategyToSearch"
> &
  Pick<
    Parameters<
      typeof playMatchInTheModePlayerVersusComputer<
        GenericGame,
        GenericMove,
        GenericPlayer,
        GenericScore,
        GenericSlot,
        GenericState
      >
    >[0],
    "softeningCoefficient"
  > &
  Pick<
    Parameters<
      typeof playMatchInTheModePlayerVersusPlayer<
        GenericGame,
        GenericMove,
        GenericPlayer,
        GenericScore,
        GenericSlot,
        GenericState
      >
    >[0],
    "getInput" | "logMessage" | "state"
  > & {
    modeOfPlay: ModeOfPlay;
    seed: Seed;
  }): Promise<void> => {
  const game = state.getGame();
  const random = new Random({ seed });

  logMessage(`Game: ${game.getName()}`);

  const finalState = await (async () => {
    if (modeOfPlay === modesOfPlay.playerVersusPlayer) {
      return await playMatchInTheModePlayerVersusPlayer({
        getInput,
        logMessage,
        state,
      });
    }

    const search = constructSearchBasedOnStrategy<
      GenericGame,
      GenericMove,
      GenericPlayer,
      GenericScore,
      GenericSlot,
      GenericState
    >({
      explorationCoefficient,
      predictionModel,
      quantityOfExpansions,
      random,
      strategyToSearch,
    });

    switch (modeOfPlay) {
      case modesOfPlay.computerVersusComputer: {
        throw new Error("Not implemented.");
      }
      case modesOfPlay.playerVersusComputer: {
        return await playMatchInTheModePlayerVersusComputer({
          getInput,
          logMessage,
          random,
          search,
          softeningCoefficient,
          state,
        });
      }
      default: {
        throw new Error("Invalid game mode.");
      }
    }
  })();

  logMessage(`\n${finalState.toString()}`);
  logMessage("End of game.");
  logMessage(
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
