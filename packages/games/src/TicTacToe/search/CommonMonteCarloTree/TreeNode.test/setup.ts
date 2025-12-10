import type { TreeNode } from "@repo/search/MonteCarloTree/TreeNode.js";

import { CommonTreeNode } from "@repo/search/CommonMonteCarloTree/CommonTreeNode.js";
import {
  createTreeNodeWithData,
  type DerivedParamsOfTreeNode,
  deriveParamsOfTreeNode,
  type RecordOfTreeNodesWithData,
  type RequiredParamsOfTreeNode,
  type TreeNodeWithData,
} from "@repo/search/MonteCarloTree/TreeNode.test/setup.js";

import type { TicTacToeGame } from "../../../game/TicTacToeGame.js";
import type { TicTacToeMove } from "../../../game/TicTacToeMove.js";
import type {
  RequiredParamsOfTicTacToeMove,
  TicTacToeMoveWithData,
} from "../../../game/TicTacToeMove.test/setup.js";
import type { TicTacToePlayer } from "../../../game/TicTacToePlayer.js";
import type { TicTacToeScore } from "../../../game/TicTacToeScore.js";
import type { TicTacToeSlot } from "../../../game/TicTacToeSlot.js";
import type { TicTacToeState } from "../../../game/TicTacToeState.js";
import type {
  RequiredParamsOfTicTacToeState,
  TicTacToeStateWithData,
} from "../../../game/TicTacToeState.test/setup.js";

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

type RecordOfTicTacToeTreeNodesWithData<
  GenericTreeNode extends TreeNode<
    TicTacToeGame,
    TicTacToeMove,
    TicTacToePlayer,
    TicTacToeScore,
    TicTacToeSlot,
    TicTacToeState,
    GenericTreeNode
  >,
> = RecordOfTreeNodesWithData<
  TicTacToeGame,
  TicTacToeMove,
  TicTacToePlayer,
  TicTacToeScore,
  TicTacToeSlot,
  TicTacToeState,
  TicTacToeTreeNode<GenericTreeNode>,
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

type TicTacToeTreeNode<
  GenericTreeNode extends TreeNode<
    TicTacToeGame,
    TicTacToeMove,
    TicTacToePlayer,
    TicTacToeScore,
    TicTacToeSlot,
    TicTacToeState,
    GenericTreeNode
  >,
> = GenericTreeNode;

type TicTacToeTreeNodeWithData<
  GenericTreeNode extends TreeNode<
    TicTacToeGame,
    TicTacToeMove,
    TicTacToePlayer,
    TicTacToeScore,
    TicTacToeSlot,
    TicTacToeState,
    GenericTreeNode
  >,
  GenericKeyOfTicTacToeTreeNode extends string = string,
> = TreeNodeWithData<
  TicTacToeGame,
  TicTacToeMove,
  TicTacToePlayer,
  TicTacToeScore,
  TicTacToeSlot,
  TicTacToeState,
  TicTacToeTreeNode<GenericTreeNode>,
  RequiredParamsOfTicTacToeTreeNode,
  GenericKeyOfTicTacToeTreeNode
>;

const deriveParamsOfTicTacToeTreeNode = ({
  stateWithData,
}: RequiredParamsOfTicTacToeTreeNode): DerivedParamsOfTicTacToeTreeNode =>
  deriveParamsOfTreeNode({
    stateWithData,
  });

const createTicTacToeTreeNode = <
  GenericTreeNode extends TreeNode<
    TicTacToeGame,
    TicTacToeMove,
    TicTacToePlayer,
    TicTacToeScore,
    TicTacToeSlot,
    TicTacToeState,
    GenericTreeNode
  >,
>({
  state,
}: DerivedParamsOfTicTacToeTreeNode): TicTacToeTreeNode<
  CommonTreeNode<
    TicTacToeGame,
    TicTacToeMove,
    TicTacToePlayer,
    TicTacToeScore,
    TicTacToeSlot,
    TicTacToeState
  >
> =>
  CommonTreeNode.create({
    state,
  }) satisfies TicTacToeTreeNode<
    CommonTreeNode<
      TicTacToeGame,
      TicTacToeMove,
      TicTacToePlayer,
      TicTacToeScore,
      TicTacToeSlot,
      TicTacToeState
    >
  >;

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
