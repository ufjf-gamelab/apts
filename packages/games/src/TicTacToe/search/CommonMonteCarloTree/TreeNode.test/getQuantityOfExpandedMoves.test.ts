import type { CommonTreeNode } from "@repo/search/CommonMonteCarloTree/CommonTreeNode.js";

import { createDescriptionForTest } from "@repo/engine_core/test.js";
import {
  createDescriptionForTestOfGetQuantityOfExpandedMoves,
  validateGetQuantityOfExpandedMoves,
} from "@repo/search/MonteCarloTree/TreeNode.test/getQuantityOfExpandedMoves.test.js";
import { test } from "vitest";

import type { TicTacToeGame } from "../../../game/TicTacToeGame.js";
import type { TicTacToeMove } from "../../../game/TicTacToeMove.js";
import type { TicTacToePlayer } from "../../../game/TicTacToePlayer.js";
import type { TicTacToeScore } from "../../../game/TicTacToeScore.js";
import type { TicTacToeSlot } from "../../../game/TicTacToeSlot.js";
import type { TicTacToeState } from "../../../game/TicTacToeState.js";
import type { TicTacToeTreeNodeWithData } from "./setup.js";

import { recordOfTicTacToeTreeNodesWithData } from "./records.js";

const createDescription = ({
  affix,
  expectedQuantityOfExpandedMoves,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix"> &
  Pick<
    Parameters<typeof createDescriptionForTestOfGetQuantityOfExpandedMoves>[0],
    "expectedQuantityOfExpandedMoves"
  >) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestOfGetQuantityOfExpandedMoves({
      expectedQuantityOfExpandedMoves,
    }),
  });

const testGetQuantityOfExpandedMoves = ({
  arrayOfTreeNodesWithData,
}: {
  arrayOfTreeNodesWithData: TicTacToeTreeNodeWithData<
    CommonTreeNode<
      TicTacToeGame,
      TicTacToeMove,
      TicTacToePlayer,
      TicTacToeScore,
      TicTacToeSlot,
      TicTacToeState
    >
  >[];
}) => {
  arrayOfTreeNodesWithData.forEach(
    ({
      keyOfTreeNode,
      requiredParams: { expandedMovesWithData },
      treeNode,
    }) => {
      const quantityOfExpandedMoves = expandedMovesWithData.size;

      test(
        createDescription({
          affix: keyOfTreeNode,
          expectedQuantityOfExpandedMoves: quantityOfExpandedMoves,
        }),

        () => {
          validateGetQuantityOfExpandedMoves({
            expectedQuantityOfExpandedMoves: quantityOfExpandedMoves,
            treeNode,
          });
        },
      );
    },
  );
};

testGetQuantityOfExpandedMoves({
  arrayOfTreeNodesWithData: Object.values(recordOfTicTacToeTreeNodesWithData),
});
