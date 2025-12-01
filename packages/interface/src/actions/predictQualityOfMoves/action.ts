import type { Game } from "@repo/game/Game.js";
import type { IndexOfMove, Move } from "@repo/game/Move.js";
import type { Player } from "@repo/game/Player.js";
import type { Score } from "@repo/game/Score.js";
import type { Slot } from "@repo/game/Slot.js";
import type { State } from "@repo/game/State.js";
import type { Digraph as GraphvizDigraph } from "ts-graphviz";

import { Random } from "@repo/search/CommonMonteCarloTree/Random.js";
import {
  calculateProbabilityOfPlayingEachMove,
  calculateQualityOfMoves,
  type QualityOfMove,
} from "@repo/search/CommonMonteCarloTree/search/quality.js";
import { expandTree } from "@repo/search/CommonMonteCarloTree/search/search.js";

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
>({
  explorationCoefficient,
  processGraphvizGraph,
  processMessage,
  processQualityOfMoves,
  quantityOfExpansions,
  seed,
  shouldReturnProbabilities,
  state,
}: Pick<
  Parameters<
    typeof expandTree<
      GenericGame,
      GenericMove,
      GenericPlayer,
      GenericScore,
      GenericSlot,
      GenericState
    >
  >[0],
  "explorationCoefficient" | "quantityOfExpansions"
> & {
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
  const game = state.getGame();

  const rootNode = expandTree<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >({
    explorationCoefficient,
    quantityOfExpansions,
    random,
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
    });
    processGraphvizGraph(graph);
  }
};

export { predictQualityOfMoves };
