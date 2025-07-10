import { descriptionOfTestsOfCloneMethod } from "@repo/engine_core/constants.js";
import { expect, test } from "vitest";

import { default as Player } from "../Player.js";
import { players } from "./setup.js";

const testPlayer = (player: Player): void => {
  test(descriptionOfTestsOfCloneMethod, () => {
    const clonedPlayer = player.clone();
    expect(clonedPlayer).not.toBe(player);
    expect(clonedPlayer).toBeInstanceOf(Player);
    expect(clonedPlayer).toStrictEqual(player);
  });
};

Object.values(players).forEach(player => {
  testPlayer(player);
});
