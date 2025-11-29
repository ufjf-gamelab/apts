import type { Game } from "@repo/game/Game.js";
import type { IndexOfMove, Move } from "@repo/game/Move.js";
import type { Player } from "@repo/game/Player.js";
import type { Score } from "@repo/game/Score.js";
import type { Slot } from "@repo/game/Slot.js";
import type { State } from "@repo/game/State.js";
import type { Digraph as GraphvizDigraph } from "ts-graphviz";

import {
  calculateQualityOfMoves,
  expandTree,
  type QualityOfMove,
} from "@repo/search/CommonMonteCarloTree/Search.js";

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
  processQualityOfMoves,
  quantityOfExpansions,
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
  processQualityOfMoves: (
    qualityOfMoves: Map<IndexOfMove, QualityOfMove>,
  ) => void;
  state: GenericState;
}): void => {
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
    state,
  });

  const qualityOfIndexedMoves = calculateQualityOfMoves({
    rootNode,
  });
  const qualityOfMoves = new Map(
    qualityOfIndexedMoves.map((qualityOfMove, indexOfMove) => [
      indexOfMove,
      qualityOfMove,
    ]),
  );
  processQualityOfMoves(qualityOfMoves);

  if (processGraphvizGraph !== null) {
    const graph = constructGraphvizGraph({
      explorationCoefficient,
      qualityOfMoves,
      rootNode,
    });
    processGraphvizGraph(graph);
  }
};

export { predictQualityOfMoves };
