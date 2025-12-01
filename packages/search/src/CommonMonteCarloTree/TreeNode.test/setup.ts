import type { Game } from "@repo/game/Game.js";
import type { IndexOfMove, Move } from "@repo/game/Move.js";
import type {
  MoveWithData,
  MoveWithDataAndIndex,
} from "@repo/game/Move.test/setup.js";
import type { Player } from "@repo/game/Player.js";
import type { Score } from "@repo/game/Score.js";
import type { Slot } from "@repo/game/Slot.js";
import type { State } from "@repo/game/State.js";
import type { StateWithData } from "@repo/game/State.test/setup.js";

import type { ParamsOfTreeNode, TreeNode } from "../TreeNode.js";

type DerivedParamsOfTreeNode<
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
> = ParamsOfTreeNode<
  GenericGame,
  GenericMove,
  GenericPlayer,
  GenericScore,
  GenericSlot,
  GenericState
>;

type RecordOfRequiredParamsOfTreeNodes<GenericRequiredParamsOfTreeNode> =
  Record<string, GenericRequiredParamsOfTreeNode>;

type RecordOfTreeNodesWithData<
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
    GenericState
  >,
  GenericRequiredParamsOfTreeNode,
> = Record<
  string,
  TreeNodeWithData<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState,
    GenericTreeNode,
    GenericRequiredParamsOfTreeNode
  >
>;

interface RequiredParamsOfTreeNode<
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
  GenericRequiredParamsOfMove,
  GenericRequiredParamsOfState,
  GenericMoveWithData extends MoveWithData<
    GenericMove,
    GenericRequiredParamsOfMove
  > = MoveWithData<GenericMove, GenericRequiredParamsOfMove>,
  GenericStateWithData extends StateWithData<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState,
    GenericRequiredParamsOfState
  > = StateWithData<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState,
    GenericRequiredParamsOfState
  >,
> {
  expandedMovesWithData: ReadonlyMap<
    IndexOfMove,
    MoveWithData<GenericMove, GenericRequiredParamsOfMove>
  >;
  indexAndKeyOfBestChildNode: null | {
    indexOfChildNode: IndexOfMove;
    keyOfChildNode: string;
  };
  playedMoveWithDataAndIndex: MoveWithDataAndIndex<
    GenericMove,
    GenericRequiredParamsOfMove,
    GenericMoveWithData
  > | null;
  stateWithData: GenericStateWithData;
}

interface TreeNodeWithData<
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
    GenericState
  >,
  GenericRequiredParamsOfTreeNode,
  GenericKeyOfTreeNode extends string = string,
> {
  keyOfTreeNode: GenericKeyOfTreeNode;
  requiredParams: GenericRequiredParamsOfTreeNode;
  treeNode: GenericTreeNode;
}

const deriveParamsOfTreeNode = <
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
  GenericRequiredParamsOfMove,
  GenericRequiredParamsOfState,
  GenericMoveWithData extends MoveWithData<
    GenericMove,
    GenericRequiredParamsOfMove
  > = MoveWithData<GenericMove, GenericRequiredParamsOfMove>,
  GenericStateWithData extends StateWithData<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState,
    GenericRequiredParamsOfState
  > = StateWithData<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState,
    GenericRequiredParamsOfState
  >,
>({
  playedMoveWithDataAndIndex,
  stateWithData,
}: Pick<
  RequiredParamsOfTreeNode<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState,
    GenericRequiredParamsOfMove,
    GenericRequiredParamsOfState,
    GenericMoveWithData,
    GenericStateWithData
  >,
  "playedMoveWithDataAndIndex" | "stateWithData"
>): DerivedParamsOfTreeNode<
  GenericGame,
  GenericMove,
  GenericPlayer,
  GenericScore,
  GenericSlot,
  GenericState
> => {
  let informationAboutPlayedMove: DerivedParamsOfTreeNode<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >["informationAboutPlayedMove"] = null;

  if (playedMoveWithDataAndIndex !== null) {
    const indexOfPlayedMove = playedMoveWithDataAndIndex.indexOfMove;
    const indexOfPlayerWhoPlayedMove = stateWithData.state.getIndexOfPlayer();
    informationAboutPlayedMove = {
      indexOfPlayedMove,
      indexOfPlayerWhoPlayedMove,
    };
  }

  return {
    informationAboutPlayedMove,
    state: stateWithData.state,
  };
};

const createTreeNodeWithData = <
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
    GenericState
  >,
  GenericDerivedParamsOfTreeNode extends DerivedParamsOfTreeNode<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >,
  GenericRequiredParamsOfTreeNode,
>({
  create,
  deriveParams,
  keyOfTreeNode,
  requiredParams,
}: {
  create: (derivedParams: GenericDerivedParamsOfTreeNode) => GenericTreeNode;
  deriveParams: (
    requiredParams: GenericRequiredParamsOfTreeNode,
  ) => GenericDerivedParamsOfTreeNode;
  keyOfTreeNode: string;
  requiredParams: GenericRequiredParamsOfTreeNode;
}) => ({
  keyOfTreeNode,
  requiredParams,
  treeNode: create(deriveParams(requiredParams)),
});

export type {
  DerivedParamsOfTreeNode,
  RecordOfRequiredParamsOfTreeNodes,
  RecordOfTreeNodesWithData,
  RequiredParamsOfTreeNode,
  TreeNodeWithData,
};
export { createTreeNodeWithData, deriveParamsOfTreeNode };
