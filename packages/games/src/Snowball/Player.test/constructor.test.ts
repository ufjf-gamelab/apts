import {
  createDescriptionForTest,
  createDescriptionForTestsOfConstructor,
} from "@repo/engine_core/test.js";
import type { Char } from "@repo/engine_core/types.js";
import { validateConstructor } from "@repo/game/Player.test/constructor.test.js";
import { expect, test } from "vitest";

import { SnowballPlayer } from "../Player.js";
import { playersWithParams } from "./setup.js";

const createDescription = ({ affix }: { affix: string }) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestsOfConstructor({
      className: "SnowballPlayer",
    }),
  });

Object.values(playersWithParams).forEach(({ params }) => {
  const description = createDescription({
    affix: params.name,
  });
  test(description, () => {
    let { name, symbol } = params;
    const newPlayer = new SnowballPlayer({
      name,
      symbol,
    });

    validateConstructor({ params: { name, symbol }, player: newPlayer });
    expect(newPlayer).toBeInstanceOf(SnowballPlayer);

    // Ensure that the object does not keep references to the original parameters
    name = `${newPlayer.getName()} (modified)`;
    symbol = `${newPlayer.getSymbol()} (modified)` as Char;

    expect(newPlayer.getName()).toBe(params.name);
    expect(newPlayer.getName()).not.toBe(name);
    expect(newPlayer.getSymbol()).toBe(params.symbol);
    expect(newPlayer.getSymbol()).not.toBe(symbol);
  });
});
