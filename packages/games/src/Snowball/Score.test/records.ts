/* eslint-disable @typescript-eslint/no-magic-numbers */
import type { RequiredSnowballScoreParams } from "./setup.js";

import { getIndexOfPlayer } from "../Game.test/players.js";
import { playersWithData } from "../Player.test/setup.js";

const recordOfRequiredParamsOfScores = {
  aliceWith0PointsAndBrunoWith0Points: {
    pointsOfEachPlayer: new Map(
      Object.values(playersWithData).map(({ keyOfPlayer }) => [
        getIndexOfPlayer({ keyOfPlayer }),
        0,
      ]),
    ),
  },
  aliceWith0PointsAndBrunoWith1Point: {
    pointsOfEachPlayer: new Map([
      [getIndexOfPlayer({ keyOfPlayer: "alice" }), 0],
      [getIndexOfPlayer({ keyOfPlayer: "bruno" }), 1],
    ]),
  },
  aliceWith1PointAndBrunoWith0Points: {
    pointsOfEachPlayer: new Map([
      [getIndexOfPlayer({ keyOfPlayer: "alice" }), 1],
      [getIndexOfPlayer({ keyOfPlayer: "bruno" }), 0],
    ]),
  },
  aliceWith5PointsAndBrunoWith10Points: {
    pointsOfEachPlayer: new Map([
      [getIndexOfPlayer({ keyOfPlayer: "alice" }), 5],
      [getIndexOfPlayer({ keyOfPlayer: "bruno" }), 10],
    ]),
  },
  aliceWith38PointsAndBrunoWith26Points: {
    pointsOfEachPlayer: new Map([
      [getIndexOfPlayer({ keyOfPlayer: "alice" }), 38],
      [getIndexOfPlayer({ keyOfPlayer: "bruno" }), 26],
    ]),
  },
} as const satisfies Record<string, RequiredSnowballScoreParams>;

export { recordOfRequiredParamsOfScores };
