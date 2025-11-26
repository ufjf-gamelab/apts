import { expect } from "vitest";

import { Player } from "../Player.js";

const validateClone = <GenericPlayer extends Player<GenericPlayer>>({
  clonedPlayer,
  player,
}: {
  clonedPlayer: unknown;
  player: GenericPlayer;
}) => {
  expect(clonedPlayer).toBeInstanceOf(Player);
  expect(clonedPlayer).not.toBe(player);
  expect(clonedPlayer).toStrictEqual(player);
};

export { validateClone };
