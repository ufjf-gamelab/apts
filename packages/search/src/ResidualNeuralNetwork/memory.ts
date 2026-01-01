import type { Integer, MutableArray } from "@repo/core/types.js";
import type { Game } from "@repo/game/Game.js";
import type { Move } from "@repo/game/Move.js";
import type { IndexOfPlayer, Player } from "@repo/game/Player.js";
import type { PointsOfEachPlayer, Score } from "@repo/game/Score.js";
import type { Slot } from "@repo/game/Slot.js";
import type { EncodedState, State } from "@repo/game/State.js";

import { INCREMENT_ONE } from "@repo/core/constants.js";

import type { AgentGuidedSearch } from "../AgentGuidedMonteCarloTree/AgentGuidedSearch.js";
import type { TreeNode } from "../MonteCarloTree/TreeNode.js";
import type { Random } from "../Random/Random.js";
import type { ProcessMessage } from "../types.js";

import { calculateQualityOfMatch } from "../calculateQualityOfMatch.js";
import { type QualityOfMove, searchQualityOfMoves } from "../qualityOfMove.js";

interface MemoryOfMatch {
  readonly finalPointsOfEachPlayer: PointsOfEachPlayer;
  readonly memoryOfTurns: readonly MemoryOfTurn[];
}

interface MemoryOfTurn {
  readonly encodedState: EncodedState;
  readonly indexOfPlayer: IndexOfPlayer;
  readonly indexOfPlayerWhoPlayedMove: IndexOfPlayer | null;
  readonly qualitiesOfMoves: readonly QualityOfMove[];
  readonly stateAsString: string;
}

interface TrainingMemory {
  readonly encodedStates: readonly EncodedState[];
  readonly policies: readonly (readonly number[])[];
  readonly values: readonly number[];
}

const convertMemoryOfMatchesToTrainingMemory = ({
  memoryOfMatches,
}: {
  readonly memoryOfMatches: readonly MemoryOfMatch[];
}): TrainingMemory => {
  const encodedStates: MutableArray<TrainingMemory["encodedStates"]> = [];
  const policies: MutableArray<TrainingMemory["policies"]> = [];
  const values: MutableArray<TrainingMemory["values"]> = [];

  memoryOfMatches.forEach(
    ({ finalPointsOfEachPlayer: pointsOfEachPlayer, memoryOfTurns }) => {
      memoryOfTurns.forEach(
        ({ encodedState, indexOfPlayerWhoPlayedMove, qualitiesOfMoves }) => {
          const qualityOfMatch = calculateQualityOfMatch({
            indexOfPlayerWhoPlayedMove,
            pointsOfEachPlayer,
          });

          encodedStates.push(encodedState);
          policies.push(qualitiesOfMoves);
          values.push(qualityOfMatch);
        },
      );
    },
  );

  return {
    encodedStates,
    policies,
    values,
  };
};

const buildMemoryOfMatch = <
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
  GenericTreeNode extends TreeNode<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState,
    GenericTreeNode
  >,
>({
  game,
  search,
  softeningCoefficient,
}: Pick<
  Parameters<Random["pickIndexOfValidMoveConsideringItsQuality"]>[0],
  "softeningCoefficient"
> & {
  game: GenericGame;
  search: AgentGuidedSearch<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >;
}): MemoryOfMatch => {
  const random = search.getRandom();

  const memoryOfTurns: MemoryOfTurn[] = [];
  let indexOfPlayerWhoPlayedMove: IndexOfPlayer | null = null;

  let currentState = game.constructInitialState();
  for (;;) {
    const qualitiesOfMoves = searchQualityOfMoves({
      search,
      state: currentState,
    });
    memoryOfTurns.push({
      encodedState: currentState.getEncodedState(),
      indexOfPlayer: currentState.getIndexOfPlayer(),
      indexOfPlayerWhoPlayedMove,
      qualitiesOfMoves,
      stateAsString: currentState.toString(),
    });

    const indexesOfValidMoves = game.getIndexesOfValidMoves({
      state: currentState,
    });
    const indexOfPickedMove = random.pickIndexOfValidMoveConsideringItsQuality({
      indexesOfValidMoves,
      qualitiesOfMoves,
      softeningCoefficient,
    });

    const nextState = game.play({
      indexOfMove: indexOfPickedMove,
      state: currentState,
    });
    if (nextState.isFinal()) {
      return {
        finalPointsOfEachPlayer: nextState.getScore().getPointsOfEachPlayer(),
        memoryOfTurns,
      };
    }

    indexOfPlayerWhoPlayedMove = currentState.getIndexOfPlayer();
    currentState = nextState;
  }
};

const SHOULD_ANNOUNCE_PROGRESS = 0;

const buildMemoryOfMatches = <
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
  GenericTreeNode extends TreeNode<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState,
    GenericTreeNode
  >,
>({
  game,
  processMessage,
  quantityOfIterations,
  quantityOfIterationsToAnnounceProgress,
  search,
  softeningCoefficient,
}: Pick<
  Parameters<
    typeof buildMemoryOfMatch<
      GenericGame,
      GenericMove,
      GenericPlayer,
      GenericScore,
      GenericSlot,
      GenericState,
      GenericTreeNode
    >
  >[0],
  "game" | "search" | "softeningCoefficient"
> & {
  processMessage: ProcessMessage;
  quantityOfIterations: Integer;
  quantityOfIterationsToAnnounceProgress: Integer;
}): MemoryOfMatch[] => {
  const memoryOfMatches: MemoryOfMatch[] = [];

  processMessage(`Building memory via self-play...`);

  for (
    let currentStep = 0;
    currentStep < quantityOfIterations;
    currentStep += INCREMENT_ONE
  ) {
    if (
      currentStep % quantityOfIterationsToAnnounceProgress ===
      SHOULD_ANNOUNCE_PROGRESS
    ) {
      processMessage(
        `Finished iterations: ${currentStep}/${quantityOfIterations}.`,
      );
    }

    const memoryOfMatch = buildMemoryOfMatch<
      GenericGame,
      GenericMove,
      GenericPlayer,
      GenericScore,
      GenericSlot,
      GenericState,
      GenericTreeNode
    >({
      game,
      search,
      softeningCoefficient,
    });
    memoryOfMatches.push(memoryOfMatch);
  }
  processMessage(
    `Finished iterations: ${quantityOfIterations}/${quantityOfIterations}.`,
  );

  processMessage(`Size of memory: ${memoryOfMatches.length}.`);
  return memoryOfMatches;
};

export type { MemoryOfMatch, TrainingMemory };
export { buildMemoryOfMatches, convertMemoryOfMatchesToTrainingMemory };
