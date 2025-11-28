import type { TicTacToeGame } from "src/TicTacToe/game/Game.js";
import type { TicTacToeMove } from "src/TicTacToe/game/Move.js";
import type {
  RequiredParamsOfTicTacToeMove,
  TicTacToeMoveWithData,
} from "src/TicTacToe/game/Move.test/setup.js";
import type { TicTacToePlayer } from "src/TicTacToe/game/Player.js";
import type { TicTacToeScore } from "src/TicTacToe/game/Score.js";
import type { TicTacToeSlot } from "src/TicTacToe/game/Slot.js";
import type { TicTacToeState } from "src/TicTacToe/game/State.js";
import type {
  RequiredParamsOfTicTacToeState,
  TicTacToeStateWithData,
} from "src/TicTacToe/game/State.test/setup.js";

import { TreeNode } from "@repo/search/CommonMonteCarloTree/TreeNode.js";
import {
  createTreeNodeWithData,
  type DerivedParamsOfTreeNode,
  deriveParamsOfTreeNode,
  type RecordOfTreeNodesWithData,
  type RequiredParamsOfTreeNode,
  type TreeNodeWithData,
} from "@repo/search/CommonMonteCarloTree/TreeNode.test.ts/setup.js";

type DerivedParamsOfTicTacToeTreeNode = DerivedParamsOfTreeNode<
  TicTacToeGame,
  TicTacToeMove,
  TicTacToePlayer,
  TicTacToeScore,
  TicTacToeSlot,
  TicTacToeState
>;

type RecordOfRequiredParamsOfTicTacToeTreeNodes = Record<
  string,
  RequiredParamsOfTicTacToeTreeNode
>;

type RecordOfTicTacToeTreeNodesWithData = RecordOfTreeNodesWithData<
  TicTacToeGame,
  TicTacToeMove,
  TicTacToePlayer,
  TicTacToeScore,
  TicTacToeSlot,
  TicTacToeState,
  TicTacToeTreeNode,
  RequiredParamsOfTicTacToeTreeNode
>;

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface RequiredParamsOfTicTacToeTreeNode extends RequiredParamsOfTreeNode<
  TicTacToeGame,
  TicTacToeMove,
  TicTacToePlayer,
  TicTacToeScore,
  TicTacToeSlot,
  TicTacToeState,
  RequiredParamsOfTicTacToeMove,
  RequiredParamsOfTicTacToeState,
  TicTacToeMoveWithData,
  TicTacToeStateWithData
> {}

type TicTacToeTreeNode = TreeNode<
  TicTacToeGame,
  TicTacToeMove,
  TicTacToePlayer,
  TicTacToeScore,
  TicTacToeSlot,
  TicTacToeState
>;

type TicTacToeTreeNodeWithData<
  GenericKeyOfTicTacToeTreeNode extends string = string,
> = TreeNodeWithData<
  TicTacToeGame,
  TicTacToeMove,
  TicTacToePlayer,
  TicTacToeScore,
  TicTacToeSlot,
  TicTacToeState,
  TicTacToeTreeNode,
  RequiredParamsOfTicTacToeTreeNode,
  GenericKeyOfTicTacToeTreeNode
>;

const deriveParamsOfTicTacToeTreeNode = ({
  playedMoveWithDataAndIndex,
  stateWithData,
}: RequiredParamsOfTicTacToeTreeNode): DerivedParamsOfTicTacToeTreeNode =>
  deriveParamsOfTreeNode({
    playedMoveWithDataAndIndex,
    stateWithData,
  });

const createTicTacToeTreeNode = ({
  indexOfPlayedMove,
  state,
}: DerivedParamsOfTicTacToeTreeNode): TicTacToeTreeNode =>
  TreeNode.create({
    indexOfPlayedMove,
    state,
  }) satisfies TicTacToeTreeNode;

const createTicTacToeTreeNodeWithData = ({
  keyOfTreeNode,
  requiredParams,
}: Pick<Parameters<typeof createTreeNodeWithData>[0], "keyOfTreeNode"> & {
  requiredParams: RequiredParamsOfTicTacToeTreeNode;
}) =>
  createTreeNodeWithData({
    create: createTicTacToeTreeNode,
    deriveParams: deriveParamsOfTicTacToeTreeNode,
    keyOfTreeNode,
    requiredParams,
  });

export type {
  DerivedParamsOfTicTacToeTreeNode,
  RecordOfRequiredParamsOfTicTacToeTreeNodes,
  RecordOfTicTacToeTreeNodesWithData,
  RequiredParamsOfTicTacToeTreeNode,
  TicTacToeTreeNode,
  TicTacToeTreeNodeWithData,
};
export { createTicTacToeTreeNodeWithData, deriveParamsOfTicTacToeTreeNode };
