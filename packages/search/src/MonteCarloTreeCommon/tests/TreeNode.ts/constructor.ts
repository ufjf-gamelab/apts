import { expect, test } from "vitest";

import type Game from "../../../Game/Game.js";
import type Move from "../../../Game/Move.js";
import type Player from "../../../Game/Player.js";
import type Slot from "../../../Game/Slot.js";
import type State from "../../../Game/State.js";

import { default as TreeNode } from "../../TreeNode.js";
import { createTreeNode, type TestMonteCarloTreeNodeParams } from "./setup.js";

const shouldBeAnInstanceOfItsClass = <
  G extends Game<G, S, M, Sl, P>,
  S extends State<G, S, M, Sl, P>,
  M extends Move<G, S, M, Sl, P>,
  Sl extends Slot<G, S, M, Sl, P>,
  P extends Player<G, S, M, Sl, P>,
>({
  testDescriptor,
  treeNode,
}: TestMonteCarloTreeNodeParams<G, S, M, Sl, P>): void => {
  test(`${testDescriptor}: game should be an instance of the class {TreeNode}`, () => {
    expect(treeNode).toBeInstanceOf(TreeNode);
  });
};

const testInstance = (): void => {
  const { game } = createTreeNode({});
  shouldBeAnInstanceOfItsClass({ game, testDescriptor: "common" });
};

testInstance();
