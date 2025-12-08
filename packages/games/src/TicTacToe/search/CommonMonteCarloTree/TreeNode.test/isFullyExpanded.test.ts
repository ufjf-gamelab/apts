import type { CommonTreeNode } from "@repo/search/CommonMonteCarloTree/CommonTreeNode.js";

import { createDescriptionForTest } from "@repo/engine_core/test.js";
import {
  createDescriptionForTestOfIsFullyExpanded,
  validateIsFullyExpanded,
} from "@repo/search/MonteCarloTree/TreeNode.test/isFullyExpanded.test.js";
import { test } from "vitest";

import type { TicTacToeGame } from "../../../game/Game.js";
import type { TicTacToeMove } from "../../../game/Move.js";
import type { TicTacToePlayer } from "../../../game/Player.js";
import type { TicTacToeScore } from "../../../game/Score.js";
import type { TicTacToeSlot } from "../../../game/Slot.js";
import type { TicTacToeState } from "../../../game/State.js";
import type { TicTacToeTreeNodeWithData } from "./setup.js";

import { recordOfTicTacToeTreeNodesWithData } from "./records.js";

const createDescription = ({
  affix,
  expectedToBeFullyExpanded,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix"> &
  Pick<
    Parameters<typeof createDescriptionForTestOfIsFullyExpanded>[0],
    "expectedToBeFullyExpanded"
  >) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestOfIsFullyExpanded({
      expectedToBeFullyExpanded,
    }),
  });

const testIsFullyExpanded = ({
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
      requiredParams: { expandedMovesWithData, stateWithData },
      treeNode,
    }) => {
      const isFullyExpanded =
        stateWithData.requiredParams.validMovesWithData.size ===
        expandedMovesWithData.size;

      test(
        createDescription({
          affix: keyOfTreeNode,
          expectedToBeFullyExpanded: isFullyExpanded,
        }),

        () => {
          validateIsFullyExpanded({
            expectedToBeFullyExpanded: isFullyExpanded,
            treeNode,
          });
        },
      );
    },
  );
};

testIsFullyExpanded({
  arrayOfTreeNodesWithData: Object.values(recordOfTicTacToeTreeNodesWithData),
});
