import type { Game } from "@repo/game/Game.js";
import type { Move } from "@repo/game/Move.js";
import type { Player } from "@repo/game/Player.js";
import type { Score } from "@repo/game/Score.js";
import type { Slot } from "@repo/game/Slot.js";
import type { State } from "@repo/game/State.js";
import type { ParamsOfSearch } from "@repo/search/MonteCarloTree/Search.js";
import type { TreeNode } from "@repo/search/MonteCarloTree/TreeNode.js";

import {
  AgentGuidedSearch,
  type ParamsOfAgentGuidedSearch,
} from "@repo/search/AgentGuidedMonteCarloTree/AgentGuidedSearch.js";
import { type ParamsOfRandom, Random } from "@repo/search/Random/Random.js";
import {
  buildMemoryOfMatches,
  convertMemoryOfMatchesToTrainingMemory,
  type MemoryOfMatch,
  type TrainingMemory,
} from "@repo/search/ResidualNeuralNetwork/memory.js";

const buildTrainingMemory = <
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
  explorationCoefficient,
  predictionModel,
  processMemoryOfMatches,
  processMessage,
  processTrainingMemory,
  quantityOfExpansions,
  quantityOfIterations,
  quantityOfIterationsToAnnounceProgress,
  seed,
  softeningCoefficient,
}: Pick<
  Parameters<typeof buildMemoryOfMatches>[0],
  | "processMessage"
  | "quantityOfIterations"
  | "quantityOfIterationsToAnnounceProgress"
  | "softeningCoefficient"
> &
  Pick<
    ParamsOfAgentGuidedSearch<
      GenericGame,
      GenericMove,
      GenericPlayer,
      GenericScore,
      GenericSlot,
      GenericState
    >,
    "predictionModel"
  > &
  Pick<ParamsOfRandom, "seed"> &
  Pick<ParamsOfSearch, "explorationCoefficient" | "quantityOfExpansions"> & {
    processMemoryOfMatches: (memoryOfMatches: MemoryOfMatch[]) => void;
    processTrainingMemory: (trainingMemory: TrainingMemory) => void;
  }) => {
  const random = new Random({ seed });
  const game = predictionModel.getGame();
  const search = new AgentGuidedSearch<
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
  });

  const memoryOfMatches = buildMemoryOfMatches<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState,
    GenericTreeNode
  >({
    game,
    processMessage,
    quantityOfIterations,
    quantityOfIterationsToAnnounceProgress,
    search,
    softeningCoefficient,
  });
  processMemoryOfMatches(memoryOfMatches);

  const trainingMemory = convertMemoryOfMatchesToTrainingMemory({
    memoryOfMatches,
  });
  processTrainingMemory(trainingMemory);
};

export { buildTrainingMemory };
