import type { SnowballGame } from "src/Snowball/game/Game.js";
import type { SnowballMove } from "src/Snowball/game/Move.js";
import type {
  RequiredParamsOfSnowballMove,
  SnowballMoveWithData,
} from "src/Snowball/game/Move.test/setup.js";
import type { SnowballPlayer } from "src/Snowball/game/Player.js";
import type { SnowballScore } from "src/Snowball/game/Score.js";
import type { SnowballSlot } from "src/Snowball/game/Slot.js";
import type { SnowballState } from "src/Snowball/game/State.js";
import type {
  RequiredParamsOfSnowballState,
  SnowballStateWithData,
} from "src/Snowball/game/State.test/setup.js";

import { TreeNode } from "@repo/search/CommonMonteCarloTree/TreeNode.js";
import {
  createRecordOfTreeNodesWithData,
  type DerivedParamsOfTreeNode,
  deriveParamsOfTreeNode,
  type RecordOfTreeNodesWithData,
  type RequiredParamsOfTreeNode,
  type TreeNodeWithData,
} from "@repo/search/CommonMonteCarloTree/TreeNode.test.ts/setup.js";

type DerivedParamsOfSnowballTreeNode = DerivedParamsOfTreeNode<
  SnowballGame,
  SnowballMove,
  SnowballPlayer,
  SnowballScore,
  SnowballSlot,
  SnowballState
>;

type RecordOfRequiredParamsOfSnowballTreeNodes = Record<
  string,
  RequiredParamsOfSnowballTreeNode
>;

type RecordOfSnowballTreeNodesWithData<
  GenericRecordOfRequiredParamsOfSnowballTreeNodes extends
    RecordOfRequiredParamsOfSnowballTreeNodes,
> = RecordOfTreeNodesWithData<
  SnowballGame,
  SnowballMove,
  SnowballPlayer,
  SnowballScore,
  SnowballSlot,
  SnowballState,
  SnowballTreeNode,
  RequiredParamsOfSnowballTreeNode,
  GenericRecordOfRequiredParamsOfSnowballTreeNodes
>;

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface RequiredParamsOfSnowballTreeNode extends RequiredParamsOfTreeNode<
  SnowballGame,
  SnowballMove,
  SnowballPlayer,
  SnowballScore,
  SnowballSlot,
  SnowballState,
  SnowballTreeNode,
  RequiredParamsOfSnowballMove,
  RequiredParamsOfSnowballState,
  RequiredParamsOfSnowballTreeNode,
  SnowballMoveWithData,
  SnowballStateWithData,
  SnowballTreeNodeWithData
> {}

type SnowballTreeNode = TreeNode<
  SnowballGame,
  SnowballMove,
  SnowballPlayer,
  SnowballScore,
  SnowballSlot,
  SnowballState
>;

type SnowballTreeNodeWithData<
  GenericKeyOfSnowballTreeNode extends string = string,
> = TreeNodeWithData<
  SnowballGame,
  SnowballMove,
  SnowballPlayer,
  SnowballScore,
  SnowballSlot,
  SnowballState,
  SnowballTreeNode,
  RequiredParamsOfSnowballTreeNode,
  GenericKeyOfSnowballTreeNode
>;

const deriveParamsOfSnowballTreeNode = ({
  explorationConstant,
  parentTreeNodeWithData,
  playedMoveWithDataAndIndex,
  stateWithData,
}: RequiredParamsOfSnowballTreeNode): DerivedParamsOfSnowballTreeNode =>
  deriveParamsOfTreeNode({
    explorationConstant,
    parentTreeNodeWithData,
    playedMoveWithDataAndIndex,
    stateWithData,
  });

const createSnowballTreeNode = ({
  explorationConstant,
  indexOfPlayedMove,
  parent,
  state,
}: DerivedParamsOfSnowballTreeNode): SnowballTreeNode =>
  new TreeNode({
    explorationConstant,
    indexOfPlayedMove,
    parent,
    state,
  }) satisfies SnowballTreeNode;

const createRecordOfSnowballTreeNodesWithData = <
  GenericRecordOfRequiredParamsOfSnowballTreeNodes extends
    RecordOfRequiredParamsOfSnowballTreeNodes,
>({
  recordOfRequiredParamsOfTreeNodes,
}: {
  recordOfRequiredParamsOfTreeNodes: GenericRecordOfRequiredParamsOfSnowballTreeNodes;
}) =>
  createRecordOfTreeNodesWithData<
    SnowballGame,
    SnowballMove,
    SnowballPlayer,
    SnowballScore,
    SnowballSlot,
    SnowballState,
    SnowballTreeNode,
    DerivedParamsOfSnowballTreeNode,
    RequiredParamsOfSnowballTreeNode,
    RecordOfSnowballTreeNodesWithData<GenericRecordOfRequiredParamsOfSnowballTreeNodes>
  >({
    create: createSnowballTreeNode,
    deriveParams: deriveParamsOfSnowballTreeNode,
    recordOfRequiredParamsOfTreeNodes,
  });

export type {
  DerivedParamsOfSnowballTreeNode,
  RecordOfRequiredParamsOfSnowballTreeNodes,
  RecordOfSnowballTreeNodesWithData,
  RequiredParamsOfSnowballTreeNode,
  SnowballTreeNode,
  SnowballTreeNodeWithData,
};
export {
  createRecordOfSnowballTreeNodesWithData,
  deriveParamsOfSnowballTreeNode,
};
