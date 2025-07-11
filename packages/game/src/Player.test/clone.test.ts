import { descriptionOfTestsOfCloneMethod } from "@repo/engine_core/constants.js";
import { expect, test } from "vitest";

import { default as Player } from "../Player.js";

const shouldClonePlayer = (player: Player): void => {
  test(descriptionOfTestsOfCloneMethod({ className: "Player" }), () => {
    const clonedPlayer = player.clone();
    expect(clonedPlayer).not.toBe(player);
    expect(clonedPlayer).toBeInstanceOf(Player);
    expect(clonedPlayer).toStrictEqual(player);
  });
};

export { shouldClonePlayer };
