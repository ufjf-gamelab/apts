import {
  createTestDescription,
  descriptionOfTestsOfCloneMethod,
} from "@repo/engine_core/test.js";
import { validateClonedPlayer } from "@repo/game/Player.test/clone.test.js";
import { expect, test } from "vitest";

import { SnowballPlayer } from "../Player.js";
import { playersWithParams } from "./setup.js";

const description = createTestDescription({
  description: descriptionOfTestsOfCloneMethod({
    className: "SnowballPlayer",
  }),
});

Object.values(playersWithParams).forEach(({ player }) => {
  test(description, () => {
    const clonedPlayer = player.clone();
    validateClonedPlayer({ clonedPlayer, player });
    expect(clonedPlayer).toBeInstanceOf(SnowballPlayer);
  });
});
