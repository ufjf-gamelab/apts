import {
  createTestDescription,
  descriptionOfTestsOfConstructor,
} from "@repo/engine_core/test.js";
import type { Char } from "@repo/engine_core/types.js";
import { validateConstructedPlayer } from "@repo/game/Player.test/constructor.test.js";
import { expect, test } from "vitest";

import { SnowballPlayer } from "../Player.js";
import { playersWithParams } from "./setup.js";

const description = createTestDescription({
  description: descriptionOfTestsOfConstructor({
    className: "SnowballPlayer",
  }),
});

Object.values(playersWithParams).forEach(({ params }) => {
  test(description, () => {
    let { name, symbol } = params;
    const newPlayer = new SnowballPlayer({
      name,
      symbol,
    });

    validateConstructedPlayer({ params: { name, symbol }, player: newPlayer });
    expect(newPlayer).toBeInstanceOf(SnowballPlayer);

    // Change parameters used on the constructor
    name = `${newPlayer.getName()} (modified)`;

    symbol = `${newPlayer.getSymbol()} (modified)` as Char;
    expect(newPlayer.getName()).toBe(params.name);
    expect(newPlayer.getName()).not.toBe(name);
    expect(newPlayer.getSymbol()).toBe(params.symbol);
    expect(newPlayer.getSymbol()).not.toBe(symbol);
  });
});
