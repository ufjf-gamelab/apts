import { expect } from "vitest";

import { Player } from "../Player.js";

const validateClonedPlayer = ({
  clonedPlayer,
  player,
}: {
  clonedPlayer: unknown;
  player: Player;
}) => {
  expect(clonedPlayer).toBeInstanceOf(Player);
  expect(clonedPlayer).not.toBe(player);
  expect(clonedPlayer).toStrictEqual(player);
};

export { validateClonedPlayer };
