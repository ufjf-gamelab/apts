import { expect } from "vitest";

import { type ParamsOfPlayer, Player } from "../Player.js";

const validateConstructor = <GenericPlayer extends Player<GenericPlayer>>({
  params,
  player,
}: {
  params: ParamsOfPlayer;
  player: GenericPlayer;
}) => {
  expect(player).toBeInstanceOf(Player);
  expect(player.getName()).toBe(params.name);
  expect(player.getSymbol()).toBe(params.symbol);
};

export { validateConstructor };
