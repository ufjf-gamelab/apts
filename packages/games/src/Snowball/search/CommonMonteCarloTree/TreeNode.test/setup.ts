import { TreeNode } from "@repo/search/CommonMonteCarloTree/TreeNode.js";
import {
  createTreeNodeWithData,
  type DerivedParamsOfTreeNode,
  deriveParamsOfTreeNode,
  type RecordOfTreeNodesWithData,
  type RequiredParamsOfTreeNode,
  type TreeNodeWithData,
} from "@repo/search/CommonMonteCarloTree/TreeNode.test.ts/setup.js";

import type { SnowballGame } from "../../../game/Game.js";
import type { SnowballMove } from "../../../game/Move.js";
import type {
  RequiredParamsOfSnowballMove,
  SnowballMoveWithData,
} from "../../../game/Move.test/setup.js";
import type { SnowballPlayer } from "../../../game/Player.js";
import type { SnowballScore } from "../../../game/Score.js";
import type { SnowballSlot } from "../../../game/Slot.js";
import type { SnowballState } from "../../../game/State.js";
import type {
  RequiredParamsOfSnowballState,
  SnowballStateWithData,
} from "../../../game/State.test/setup.js";

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

type RecordOfSnowballTreeNodesWithData = RecordOfTreeNodesWithData<
  SnowballGame,
  SnowballMove,
  SnowballPlayer,
  SnowballScore,
  SnowballSlot,
  SnowballState,
  SnowballTreeNode,
  RequiredParamsOfSnowballTreeNode
>;

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface RequiredParamsOfSnowballTreeNode extends RequiredParamsOfTreeNode<
  SnowballGame,
  SnowballMove,
  SnowballPlayer,
  SnowballScore,
  SnowballSlot,
  SnowballState,
  RequiredParamsOfSnowballMove,
  RequiredParamsOfSnowballState,
  SnowballMoveWithData,
  SnowballStateWithData
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
  playedMoveWithDataAndIndex,
  stateWithData,
}: RequiredParamsOfSnowballTreeNode): DerivedParamsOfSnowballTreeNode =>
  deriveParamsOfTreeNode({
    playedMoveWithDataAndIndex,
    stateWithData,
  });

const createSnowballTreeNode = ({
  indexOfPlayedMove,
  state,
}: DerivedParamsOfSnowballTreeNode): SnowballTreeNode =>
  TreeNode.create({
    indexOfPlayedMove,
    state,
  }) satisfies SnowballTreeNode;

const createSnowballTreeNodeWithData = ({
  keyOfTreeNode,
  requiredParams,
}: Pick<Parameters<typeof createTreeNodeWithData>[0], "keyOfTreeNode"> & {
  requiredParams: RequiredParamsOfSnowballTreeNode;
}) =>
  createTreeNodeWithData({
    create: createSnowballTreeNode,
    deriveParams: deriveParamsOfSnowballTreeNode,
    keyOfTreeNode,
    requiredParams,
  });

export type {
  DerivedParamsOfSnowballTreeNode,
  RecordOfRequiredParamsOfSnowballTreeNodes,
  RecordOfSnowballTreeNodesWithData,
  RequiredParamsOfSnowballTreeNode,
  SnowballTreeNode,
  SnowballTreeNodeWithData,
};
export { createSnowballTreeNodeWithData, deriveParamsOfSnowballTreeNode };
