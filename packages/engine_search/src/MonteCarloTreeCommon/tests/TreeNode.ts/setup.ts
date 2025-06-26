import type Game from "../../../Game/Game.js";
import type Move from "../../../Game/Move.js";
import type Player from "../../../Game/Player.js";
import type Slot from "../../../Game/Slot.js";
import type State from "../../../Game/State.js";
import { default as TreeNode, type TreeNodeParams } from "../../TreeNode.js";

interface CreatedTreeNodeAndRelatedData<
  G extends Game<G, S, M, Sl, P>,
  S extends State<G, S, M, Sl, P>,
  M extends Move<G, S, M, Sl, P>,
  Sl extends Slot<G, S, M, Sl, P>,
  P extends Player<G, S, M, Sl, P>,
> {
  dataRelatedToCreatedTreeNode: DataRelatedToCreatedTreeNode<G, S, M, Sl, P>;
  treeNode: TreeNode<G, S, M, Sl, P>;
}

interface DataRelatedToCreatedTreeNode<
  G extends Game<G, S, M, Sl, P>,
  S extends State<G, S, M, Sl, P>,
  M extends Move<G, S, M, Sl, P>,
  Sl extends Slot<G, S, M, Sl, P>,
  P extends Player<G, S, M, Sl, P>,
> {
  explorationConstant: TreeNodeParams<G, S, M, Sl, P>["explorationConstant"];
  indexOfTakenMove: TreeNodeParams<G, S, M, Sl, P>["indexOfTakenMove"];
  parent: TreeNodeParams<G, S, M, Sl, P>["parent"];
  state: TreeNodeParams<G, S, M, Sl, P>["state"];
}

interface TestMonteCarloTreeNodeParams<
  G extends Game<G, S, M, Sl, P>,
  S extends State<G, S, M, Sl, P>,
  M extends Move<G, S, M, Sl, P>,
  Sl extends Slot<G, S, M, Sl, P>,
  P extends Player<G, S, M, Sl, P>,
> {
  testDescriptor: string;
  treeNode: TreeNode<G, S, M, Sl, P>;
}

const createTreeNode = <
  G extends Game<G, S, M, Sl, P>,
  S extends State<G, S, M, Sl, P>,
  M extends Move<G, S, M, Sl, P>,
  Sl extends Slot<G, S, M, Sl, P>,
  P extends Player<G, S, M, Sl, P>,
>({
  explorationConstant,
  indexOfTakenMove,
  parent,
  state,
}: DataRelatedToCreatedTreeNode<G, S, M, Sl, P>): CreatedTreeNodeAndRelatedData<
  G,
  S,
  M,
  Sl,
  P
> => {
  const treeNode = new TreeNode<G, S, M, Sl, P>({
    explorationConstant,
    indexOfTakenMove,
    parent,
    state,
  });

  return {
    dataRelatedToCreatedTreeNode: {
      explorationConstant,
      indexOfTakenMove,
      parent,
      state,
    },
    treeNode,
  };
};

const createInitialTreeNode = <
  G extends Game<G, S, M, Sl, P>,
  S extends State<G, S, M, Sl, P>,
  M extends Move<G, S, M, Sl, P>,
  Sl extends Slot<G, S, M, Sl, P>,
  P extends Player<G, S, M, Sl, P>,
>(): CreatedTreeNodeAndRelatedData<G, S, M, Sl, P> =>
  createTreeNode({
    explorationConstant: 1.41,
    indexOfTakenMove: null,
    parent: null,
    state: ,
  });

export type { TestMonteCarloTreeNodeParams };
export { createTreeNode };
