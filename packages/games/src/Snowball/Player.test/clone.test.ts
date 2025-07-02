import { descriptionOfTestsOfCloneMethod } from "@repo/engine_core/constants.js";
import { expect, test } from "vitest";

import { type default as Player, players } from "../Player.js";

const testPlayer = (player: Player): void => {
  test(descriptionOfTestsOfCloneMethod, () => {
    const clone = player.clone();
    expect(clone).not.toBe(player);
    expect(clone.name).toStrictEqual(player.name);
    expect(clone.symbol).toStrictEqual(player.symbol);
    expect(clone.clone).toBeInstanceOf(Function);
  });
};

Object.values(players).forEach(player => {
  testPlayer(player);
});
