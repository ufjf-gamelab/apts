import type { CommonTreeNode } from "@repo/search/CommonMonteCarloTree/CommonTreeNode.js";

import { createDescriptionForTest } from "@repo/engine_core/test.js";
import {
  createDescriptionForTestOfSelectBestChildNode,
  validateSelectBestChildNode,
} from "@repo/search/MonteCarloTree/TreeNode.test/selectBestChildNode.test.js";
import { test } from "vitest";

import type { TicTacToeGame } from "../../../game/Game.js";
import type { TicTacToeMove } from "../../../game/Move.js";
import type { TicTacToePlayer } from "../../../game/Player.js";
import type { TicTacToeScore } from "../../../game/Score.js";
import type { TicTacToeSlot } from "../../../game/Slot.js";
import type { TicTacToeState } from "../../../game/State.js";
import type { TicTacToeTreeNodeWithData } from "./setup.js";

import { recordOfTicTacToeTreeNodesWithData } from "./records.js";

const EXPLORATION_COEFFICIENT = 0.5;

const createDescription = ({
  affix,
  keyOfExpectedBestChildNode,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix"> &
  Pick<
    Parameters<typeof createDescriptionForTestOfSelectBestChildNode>[0],
    "keyOfExpectedBestChildNode"
  >) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestOfSelectBestChildNode({
      keyOfExpectedBestChildNode,
    }),
  });

const testSelectBestChildNode = ({
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
      requiredParams: { indexAndKeyOfBestChildNode: indexAndKeyOfBestChild },
      treeNode,
    }) => {
      if (indexAndKeyOfBestChild !== null) {
        const bestChildNode = treeNode.getChildNode({
          indexOfChildNode: indexAndKeyOfBestChild.indexOfChildNode,
        });

        test(
          createDescription({
            affix: keyOfTreeNode,
            keyOfExpectedBestChildNode: indexAndKeyOfBestChild.keyOfChildNode,
          }),

          () => {
            validateSelectBestChildNode({
              expectedBestChildNode: bestChildNode,
              explorationCoefficient: EXPLORATION_COEFFICIENT,
              treeNode,
            });
          },
        );
      }
    },
  );
};

testSelectBestChildNode({
  arrayOfTreeNodesWithData: Object.values(recordOfTicTacToeTreeNodesWithData),
});
