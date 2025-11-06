import {
  createDescriptionForTest,
  createDescriptionForTestsOfConstructor,
} from "@repo/engine_core/test.js";
import { validateConstructor } from "@repo/game/Player.test/constructor.test.js";
import { expect, test } from "vitest";

import { SnowballPlayer } from "../Player.js";
import { playersWithData } from "./setup.js";

const createDescription = ({ affix }: { affix: string }) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestsOfConstructor({
      className: "SnowballPlayer",
    }),
  });

Object.values(playersWithData).forEach(({ keyOfPlayer, params }) => {
  test(
    createDescription({
      affix: keyOfPlayer,
    }),
    () => {
      const { name, symbol } = params;
      const newPlayer = new SnowballPlayer({
        name,
        symbol,
      });

      validateConstructor({ params: { name, symbol }, player: newPlayer });
      expect(newPlayer).toBeInstanceOf(SnowballPlayer);
    },
  );
});
