import { expect } from "vitest";

import { Player, type PlayerParams } from "../Player.js";

const validateConstructor = <P extends Player<P>>({
  params,
  player,
}: {
  params: PlayerParams;
  player: P;
}) => {
  expect(player).toBeInstanceOf(Player);
  expect(player.getName()).toBe(params.name);
  expect(player.getSymbol()).toBe(params.symbol);
};

export { validateConstructor };
