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
  type ParamsOfTrainer,
  Trainer,
  type TrainingMemory,
} from "@repo/search/ResidualNeuralNetwork/Trainer.js";

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
  logMessage,
  predictionModel,
  processTrainingMemory,
  quantityOfExpansions,
  quantityOfIterations,
  quantityOfIterationsToAnnounceProgress,
  seed,
  softeningCoefficient,
}: ParamsOfRandom &
  Pick<
    Parameters<
      Trainer<
        GenericGame,
        GenericMove,
        GenericPlayer,
        GenericScore,
        GenericSlot,
        GenericState
      >["buildTrainingMemory"]
    >[0],
    | "logMessage"
    | "quantityOfIterations"
    | "quantityOfIterationsToAnnounceProgress"
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
  Pick<ParamsOfSearch, "explorationCoefficient" | "quantityOfExpansions"> &
  Pick<
    ParamsOfTrainer<
      GenericGame,
      GenericMove,
      GenericPlayer,
      GenericScore,
      GenericSlot,
      GenericState
    >,
    "softeningCoefficient"
  > & {
    processTrainingMemory: (trainingMemory: TrainingMemory) => void;
  }) => {
  const random = new Random({ seed });
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

  const trainer = new Trainer({ search, softeningCoefficient });

  const trainingMemory = trainer.buildTrainingMemory({
    logMessage,
    quantityOfIterations,
    quantityOfIterationsToAnnounceProgress,
  });
  processTrainingMemory(trainingMemory);
};

export { buildTrainingMemory };
