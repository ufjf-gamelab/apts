import {
  createDescriptionForTest,
  createDescriptionForTestsOfConstructor,
} from "@repo/engine_core/test.js";
import { validateConstructor } from "@repo/game/Score.test/constructor.test.js";
import { expect, test } from "vitest";

import { SnowballScore } from "../Score.js";
import { scoresWithDataForUnitTest } from "./setup.js";

const createDescription = ({ affix }: { affix: string }) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestsOfConstructor({
      className: "SnowballScore",
    }),
  });

Object.values(scoresWithDataForUnitTest).forEach(({ keyOfScore, params }) => {
  test(
    createDescription({
      affix: keyOfScore,
    }),
    () => {
      const { pointsOfEachPlayer } = params;
      const newScore = new SnowballScore({
        pointsOfEachPlayer,
      });

      validateConstructor({ params: { pointsOfEachPlayer }, score: newScore });
      expect(newScore).toBeInstanceOf(SnowballScore);
    },
  );
});
