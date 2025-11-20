import type { RequiredSnowballScoreParams } from "./setup.js";

import { getIndexOfPlayer } from "../Game.test/players.js";
import { playersWithData } from "../Player.test/setup.js";

const ZERO_POINTS = 0;
const ONE_POINT = 1;
const FIVE_POINTS = 5;
const TEN_POINTS = 10;

const recordOfRequiredParamsOfScores = {
  aliceWith0PointsAndBrunoWith0Points: {
    pointsOfEachPlayer: new Map(
      Object.values(playersWithData).map(({ keyOfPlayer }) => [
        getIndexOfPlayer({ keyOfPlayer }),
        ZERO_POINTS,
      ]),
    ),
  },
  aliceWith0PointsAndBrunoWith1Point: {
    pointsOfEachPlayer: new Map([
      [getIndexOfPlayer({ keyOfPlayer: "alice" }), ZERO_POINTS],
      [getIndexOfPlayer({ keyOfPlayer: "bruno" }), ONE_POINT],
    ]),
  },
  aliceWith1PointAndBrunoWith0Points: {
    pointsOfEachPlayer: new Map([
      [getIndexOfPlayer({ keyOfPlayer: "alice" }), ONE_POINT],
      [getIndexOfPlayer({ keyOfPlayer: "bruno" }), ZERO_POINTS],
    ]),
  },
  aliceWith5PointsAndBrunoWith10Points: {
    pointsOfEachPlayer: new Map([
      [getIndexOfPlayer({ keyOfPlayer: "alice" }), FIVE_POINTS],
      [getIndexOfPlayer({ keyOfPlayer: "bruno" }), TEN_POINTS],
    ]),
  },
} as const satisfies Record<string, RequiredSnowballScoreParams>;

export { recordOfRequiredParamsOfScores };
