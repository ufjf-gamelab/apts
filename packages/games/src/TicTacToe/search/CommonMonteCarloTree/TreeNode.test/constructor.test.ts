import {
  createDescriptionForTest,
  createDescriptionForTestsOfConstructor,
} from "@repo/core/test.js";
import { CommonTreeNode } from "@repo/search/CommonMonteCarloTree/CommonTreeNode.js";
import { validateConstructor } from "@repo/search/MonteCarloTree/TreeNode.test/constructor.test.js";
import { expect, test } from "vitest";

import type { TicTacToeGame } from "../../../game/TicTacToeGame.js";
import type { TicTacToeMove } from "../../../game/TicTacToeMove.js";
import type { TicTacToePlayer } from "../../../game/TicTacToePlayer.js";
import type { TicTacToeScore } from "../../../game/TicTacToeScore.js";
import type { TicTacToeSlot } from "../../../game/TicTacToeSlot.js";
import type { TicTacToeState } from "../../../game/TicTacToeState.js";

import { recordOfTicTacToeTreeNodesWithData } from "./records.js";
import {
  deriveParamsOfTicTacToeTreeNode,
  type TicTacToeTreeNode,
  type TicTacToeTreeNodeWithData,
} from "./setup.js";

const createDescription = ({
  affix,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix">) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestsOfConstructor({
      className: "TicTacToeTreeNode",
    }),
  });

const testConstructor = ({
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
  arrayOfTreeNodesWithData.forEach(({ keyOfTreeNode, requiredParams }) => {
    test(
      createDescription({
        affix: keyOfTreeNode,
      }),

      () => {
        const { state } = deriveParamsOfTicTacToeTreeNode(requiredParams);

        const newTreeNode = CommonTreeNode.create({
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

        validateConstructor({
          params: { state },
          treeNode: newTreeNode,
        });

        expect(newTreeNode).toBeInstanceOf(CommonTreeNode);
      },
    );
  });
};

testConstructor({
  arrayOfTreeNodesWithData: Object.values(recordOfTicTacToeTreeNodesWithData),
});
