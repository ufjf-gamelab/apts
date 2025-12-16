import type { Nullable, Seed } from "@repo/engine_core/types.js";
import type { Game } from "@repo/game/Game.js";
import type { IndexOfMove, Move } from "@repo/game/Move.js";
import type { Player } from "@repo/game/Player.js";
import type { Score } from "@repo/game/Score.js";
import type { Slot } from "@repo/game/Slot.js";
import type { State } from "@repo/game/State.js";
import type { ParamsOfAgentGuidedSearch } from "@repo/search/AgentGuidedMonteCarloTree/AgentGuidedSearch.js";
import type { ParamsOfSearch } from "@repo/search/MonteCarloTree/Search.js";
import type { TreeNode } from "@repo/search/MonteCarloTree/TreeNode.js";
import type { LogMessage } from "@repo/search/types.js";
import type { Digraph as GraphvizDigraph } from "ts-graphviz";

import {
  calculateProbabilityOfPlayingEachMove,
  calculateQualityOfMoves,
  type QualityOfMove,
} from "@repo/search/qualityOfMove.js";
import { Random } from "@repo/search/Random/Random.js";

import type { StrategyToSearch } from "../../constants.js";

import { constructSearchBasedOnStrategy } from "../../constructSearchBasedOnStrategy.js";
import { constructGraphvizGraph } from "../../graphviz.js";

const predictQualityOfMoves = <
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
  processGraphvizGraph,
  processQualityOfMoves,
  quantityOfExpansions,
  seed,
  shouldReturnProbabilities,
  softeningCoefficient,
  state,
  strategyToSearch,
}: Nullable<
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
  >
> &
  Pick<
    Parameters<
      Game<
        GenericGame,
        GenericMove,
        GenericPlayer,
        GenericScore,
        GenericSlot,
        GenericState
      >["getIndexesOfValidMoves"]
    >[0],
    "state"
  > &
  Pick<
    Parameters<typeof calculateProbabilityOfPlayingEachMove>[0],
    "softeningCoefficient"
  > &
  Pick<ParamsOfSearch, "explorationCoefficient" | "quantityOfExpansions"> & {
    logMessage: LogMessage;
    processGraphvizGraph: ((graphvizGraph: GraphvizDigraph) => void) | null;
    processQualityOfMoves: (
      qualitiesOfMoves: ReadonlyMap<IndexOfMove, QualityOfMove>,
    ) => void;
    seed: Seed;
    shouldReturnProbabilities: boolean;
    strategyToSearch: StrategyToSearch;
  }): void => {
  const game = state.getGame();

  const random = new Random({ seed });
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

  const rootNode = search.expandTree({
    state,
  });

  const qualitiesOfMoves = calculateQualityOfMoves({
    treeNode: rootNode,
  });

  const qualityOfEachMove = new Map(
    qualitiesOfMoves.map((qualityOfMove, indexOfMove) => [
      indexOfMove,
      qualityOfMove,
    ]),
  );

  const probabilityOfPlayingEachMove = calculateProbabilityOfPlayingEachMove({
    indexesOfValidMoves: game.getIndexesOfValidMoves({ state }),
    qualitiesOfMoves,
    softeningCoefficient,
  });

  logMessage("Quality of each move:");
  processQualityOfMoves(qualityOfEachMove);

  if (shouldReturnProbabilities) {
    logMessage("\nProbability of playing each move:");
    processQualityOfMoves(probabilityOfPlayingEachMove);
  }

  if (processGraphvizGraph !== null) {
    const graph = constructGraphvizGraph({
      explorationCoefficient,
      probabilityOfPlayingEachMove,
      qualityOfEachMove,
      quantityOfExpansions,
      rootNode,
      seed,
      softeningCoefficient,
      strategyToSearch,
    });
    processGraphvizGraph(graph);
  }
};

export { predictQualityOfMoves };
