import { expect } from "vitest";

import { type ParamsOfPlayer, Player } from "../Player.js";

const validateConstructor = <P extends Player<P>>({
  params,
  player,
}: {
  params: ParamsOfPlayer;
  player: P;
}) => {
  expect(player).toBeInstanceOf(Player);
  expect(player.getName()).toBe(params.name);
  expect(player.getSymbol()).toBe(params.symbol);
};

export { validateConstructor };
