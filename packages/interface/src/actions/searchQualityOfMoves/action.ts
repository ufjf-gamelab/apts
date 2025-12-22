import type { Nullable } from "@repo/core/types.js";
import type { Game } from "@repo/game/Game.js";
import type { IndexOfMove, Move } from "@repo/game/Move.js";
import type { Player } from "@repo/game/Player.js";
import type { Score } from "@repo/game/Score.js";
import type { Slot } from "@repo/game/Slot.js";
import type { State } from "@repo/game/State.js";
import type { ParamsOfAgentGuidedSearch } from "@repo/search/AgentGuidedMonteCarloTree/AgentGuidedSearch.js";
import type { ParamsOfSearch } from "@repo/search/MonteCarloTree/Search.js";
import type { TreeNode } from "@repo/search/MonteCarloTree/TreeNode.js";
import type { ProcessMessage } from "@repo/search/types.js";
import type { Digraph as GraphvizDigraph } from "ts-graphviz";

import {
  calculateProbabilityOfPlayingEachMove,
  calculateQualityOfMoves,
  type QualityOfMove,
} from "@repo/search/qualityOfMove.js";
import { type ParamsOfRandom, Random } from "@repo/search/Random/Random.js";

import type { StrategyToSearch } from "../../constants.js";

import { constructSearchBasedOnStrategy } from "../../constructSearchBasedOnStrategy.js";
import { constructGraphvizGraph } from "../../graphviz.js";

const searchQualityOfMoves = <
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
  processGraphvizGraph,
  processMessage,
  processProbabilityPlayingEachMove,
  processQualityOfEachMove,
  quantityOfExpansions,
  seed,
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
  Pick<ParamsOfRandom, "seed"> &
  Pick<ParamsOfSearch, "explorationCoefficient" | "quantityOfExpansions"> & {
    processGraphvizGraph: ((graphvizGraph: GraphvizDigraph) => void) | null;
    processMessage: ProcessMessage;
    processProbabilityPlayingEachMove:
      | ((
          probabilityOfPlayingEachMove: ReadonlyMap<IndexOfMove, number>,
        ) => void)
      | null;
    processQualityOfEachMove: (
      qualityOfEachMove: ReadonlyMap<IndexOfMove, QualityOfMove>,
    ) => void;
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

  processMessage("Quality of each move:");
  processMessage(qualityOfEachMove);
  processQualityOfEachMove(qualityOfEachMove);

  if (processProbabilityPlayingEachMove !== null) {
    processMessage("\nProbability of playing each move:");
    processMessage(probabilityOfPlayingEachMove);
    processProbabilityPlayingEachMove(probabilityOfPlayingEachMove);
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

export { searchQualityOfMoves };
