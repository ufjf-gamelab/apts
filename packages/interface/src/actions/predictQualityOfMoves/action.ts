import type { Game } from "@repo/game/Game.js";
import type { IndexOfMove, Move } from "@repo/game/Move.js";
import type { Player } from "@repo/game/Player.js";
import type { Score } from "@repo/game/Score.js";
import type { Slot } from "@repo/game/Slot.js";
import type { State } from "@repo/game/State.js";
import type { ParamsOfSearch } from "@repo/search/MonteCarloTree/Search.js";
import type { TreeNode } from "@repo/search/MonteCarloTree/TreeNode.js";
import type { Digraph as GraphvizDigraph } from "ts-graphviz";

import { CommonSearch } from "@repo/search/CommonMonteCarloTree/search.js";
import {
  calculateProbabilityOfPlayingEachMove,
  calculateQualityOfMoves,
  type QualityOfMove,
} from "@repo/search/quality.js";
import { Random } from "@repo/search/Random.js";

import type { ProcessMessage } from "../../types.js";

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
  processGraphvizGraph,
  processMessage,
  processQualityOfMoves,
  quantityOfExpansions,
  seed,
  shouldReturnProbabilities,
  softeningCoefficient,
  state,
}: Pick<
  Parameters<typeof calculateProbabilityOfPlayingEachMove>[0],
  "softeningCoefficient"
> &
  Pick<ParamsOfSearch, "explorationCoefficient" | "quantityOfExpansions"> & {
    processGraphvizGraph: ((graphvizGraph: GraphvizDigraph) => void) | null;
    processMessage: ProcessMessage;
    processQualityOfMoves: (
      qualitiesOfMoves: ReadonlyMap<IndexOfMove, QualityOfMove>,
    ) => void;
    seed: string;
    shouldReturnProbabilities: boolean;
    state: GenericState;
  }): void => {
  const random = new Random({ seed });
  const search = new CommonSearch({
    explorationCoefficient,
    quantityOfExpansions,
    random,
  });
  const game = state.getGame();

  const rootNode = search.expandTree({
    state,
  });

  const qualityOfIndexedMoves = calculateQualityOfMoves({
    treeNode: rootNode,
  });

  const qualityOfEachMove = new Map(
    qualityOfIndexedMoves.map((qualityOfMove, indexOfMove) => [
      indexOfMove,
      qualityOfMove,
    ]),
  );

  const probabilityOfPlayingEachMove = calculateProbabilityOfPlayingEachMove({
    indexesOfValidMoves: game.getIndexesOfValidMoves({ state }),
    qualitiesOfMoves: qualityOfIndexedMoves,
    softeningCoefficient,
  });

  processMessage("Quality of each move:");
  processQualityOfMoves(qualityOfEachMove);

  if (shouldReturnProbabilities) {
    processMessage("\nProbability of playing each move:");
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
    });
    processGraphvizGraph(graph);
  }
};

export { predictQualityOfMoves };
