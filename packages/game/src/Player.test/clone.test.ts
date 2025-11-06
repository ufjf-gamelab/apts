import { expect } from "vitest";

import { Player } from "../Player.js";

const validateClone = <P extends Player<P>>({
  clonedPlayer,
  player,
}: {
  clonedPlayer: unknown;
  player: P;
}) => {
  expect(clonedPlayer).toBeInstanceOf(Player);
  expect(clonedPlayer).not.toBe(player);
  expect(clonedPlayer).toStrictEqual(player);
};

export { validateClone };
