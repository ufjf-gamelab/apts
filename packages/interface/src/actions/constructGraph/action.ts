import type { Game } from "@repo/game/Game.js";
import type { Move } from "@repo/game/Move.js";
import type { Player } from "@repo/game/Player.js";
import type { Score } from "@repo/game/Score.js";
import type { Slot } from "@repo/game/Slot.js";
import type { State } from "@repo/game/State.js";
import type { TreeNode } from "@repo/search/CommonMonteCarloTree/TreeNode.js";
import type { Digraph as GraphvizDigraph } from "ts-graphviz";

import { expandTree } from "@repo/search/CommonMonteCarloTree/Search.js";

import { constructGraphvizGraph } from "../../graphviz.js";

const constructGraph = <
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
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-parameters
  GenericTreeNode extends TreeNode<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >,
>({
  explorationConstant,
  processGraphvizGraph,
  quantityOfExpansions,
  treeNode,
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
  "explorationConstant" | "quantityOfExpansions"
> & {
  processGraphvizGraph: (graphvizGraph: GraphvizDigraph) => void;
  treeNode: GenericTreeNode;
}): void => {
  expandTree<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >({
    explorationConstant,
    quantityOfExpansions,
    rootNodeOfTree: treeNode,
  });

  const graph = constructGraphvizGraph({
    rootNode: treeNode,
  });
  processGraphvizGraph(graph);
};

export { constructGraph };
