import type { Game } from "@repo/game/Game.js";
import type { Move } from "@repo/game/Move.js";
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
  GenericRecordOfRequiredParamsOfTreeNodes extends
    RecordOfRequiredParamsOfTreeNodes<GenericRequiredParamsOfTreeNode> = RecordOfRequiredParamsOfTreeNodes<GenericRequiredParamsOfTreeNode>,
> = {
  [GenericKeyOfTreeNode in keyof GenericRecordOfRequiredParamsOfTreeNodes]: TreeNodeWithData<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState,
    GenericTreeNode,
    GenericRequiredParamsOfTreeNode,
    GenericKeyOfTreeNode & string
  >;
};

type RequiredParamsOfTreeNode<
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
  GenericRequiredParamsOfMove,
  GenericRequiredParamsOfState,
  GenericRequiredParamsOfTreeNode,
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
  GenericTreeNodeWithData extends TreeNodeWithData<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState,
    GenericTreeNode,
    GenericRequiredParamsOfTreeNode
  > = TreeNodeWithData<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState,
    GenericTreeNode,
    GenericRequiredParamsOfTreeNode
  >,
> = Pick<
  ParamsOfTreeNode<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >,
  "explorationConstant"
> & {
  parentTreeNodeWithData: GenericTreeNodeWithData | null;
  playedMoveWithDataAndIndex: MoveWithDataAndIndex<
    GenericMove,
    GenericRequiredParamsOfMove,
    GenericMoveWithData
  > | null;
  stateWithData: GenericStateWithData;
};

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
  GenericTreeNode extends TreeNode<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >,
  GenericRequiredParamsOfMove,
  GenericRequiredParamsOfState,
  GenericRequiredParamsOfTreeNode,
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
  GenericTreeNodeWithData extends TreeNodeWithData<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState,
    GenericTreeNode,
    GenericRequiredParamsOfTreeNode
  > = TreeNodeWithData<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState,
    GenericTreeNode,
    GenericRequiredParamsOfTreeNode
  >,
>({
  explorationConstant,
  parentTreeNodeWithData,
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
    GenericTreeNode,
    GenericRequiredParamsOfMove,
    GenericRequiredParamsOfState,
    GenericRequiredParamsOfTreeNode,
    GenericMoveWithData,
    GenericStateWithData,
    GenericTreeNodeWithData
  >,
  | "explorationConstant"
  | "parentTreeNodeWithData"
  | "playedMoveWithDataAndIndex"
  | "stateWithData"
>): DerivedParamsOfTreeNode<
  GenericGame,
  GenericMove,
  GenericPlayer,
  GenericScore,
  GenericSlot,
  GenericState
> => ({
  explorationConstant,
  indexOfPlayedMove: playedMoveWithDataAndIndex?.indexOfMove ?? null,
  parent: parentTreeNodeWithData?.treeNode ?? null,
  state: stateWithData.state,
});

const createRecordOfTreeNodesWithData = <
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
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-parameters
  GenericRecordOfTreeNodesWithData extends RecordOfTreeNodesWithData<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState,
    GenericTreeNode,
    GenericRequiredParamsOfTreeNode
  >,
>({
  create,
  deriveParams,
  recordOfRequiredParamsOfTreeNodes,
}: {
  create: (derivedParams: GenericDerivedParamsOfTreeNode) => GenericTreeNode;
  deriveParams: (
    requiredParams: GenericRequiredParamsOfTreeNode,
  ) => GenericDerivedParamsOfTreeNode;
  recordOfRequiredParamsOfTreeNodes: RecordOfRequiredParamsOfTreeNodes<GenericRequiredParamsOfTreeNode>;
}) =>
  /**
   * TypeScript cannot statically verify that Object.fromEntries produces all required keys since the operation happens at runtime.
   * This assertion is safe because we're iterating over all entries from recordOfRequiredParamsOfTreeNodes, which RecordOfRequiredParams is derived from.
   */
  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
  Object.fromEntries(
    Object.entries(recordOfRequiredParamsOfTreeNodes).map(
      ([keyOfTreeNode, requiredParams]) =>
        [
          keyOfTreeNode,
          {
            keyOfTreeNode,
            requiredParams,
            treeNode: create(deriveParams(requiredParams)),
          } satisfies TreeNodeWithData<
            GenericGame,
            GenericMove,
            GenericPlayer,
            GenericScore,
            GenericSlot,
            GenericState,
            GenericTreeNode,
            GenericRequiredParamsOfTreeNode
          >,
        ] as const,
    ),
  ) as GenericRecordOfTreeNodesWithData;

export type {
  DerivedParamsOfTreeNode,
  RecordOfRequiredParamsOfTreeNodes,
  RecordOfTreeNodesWithData,
  RequiredParamsOfTreeNode,
  TreeNodeWithData,
};
export { createRecordOfTreeNodesWithData, deriveParamsOfTreeNode };
