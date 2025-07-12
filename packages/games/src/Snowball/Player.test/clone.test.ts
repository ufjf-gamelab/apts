import {
  createDescriptionForTest,
  createDescriptionForTestsOfCloneMethod,
} from "@repo/engine_core/test.js";
import { validateClone } from "@repo/game/Player.test/clone.test.js";
import { expect, test } from "vitest";

import { SnowballPlayer } from "../Player.js";
import { playersWithData } from "./setup.js";

const createDescription = ({ affix }: { affix: string }) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestsOfCloneMethod({
      className: "SnowballPlayer",
    }),
  });

Object.values(playersWithData).forEach(({ keyOfPlayer, player }) => {
  test(
    createDescription({
      affix: keyOfPlayer,
    }),
    () => {
      const clonedPlayer = player.clone();
      validateClone({ clonedPlayer, player });
      expect(clonedPlayer).toBeInstanceOf(SnowballPlayer);
    },
  );
});
