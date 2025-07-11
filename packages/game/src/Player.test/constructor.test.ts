import { expect } from "vitest";

import { Player, type PlayerParams } from "../Player.js";

const validateConstructor = ({
  params,
  player,
}: {
  params: PlayerParams;
  player: Player;
}) => {
  expect(player).toBeInstanceOf(Player);
  expect(player.getName()).toBe(params.name);
  expect(player.getSymbol()).toBe(params.symbol);
};

export { validateConstructor };
