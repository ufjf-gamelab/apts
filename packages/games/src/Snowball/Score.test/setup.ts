import type { IndexOfScore } from "@repo/game/Score.js";
import {
  createScoreParams,
  createScoresWithData,
} from "@repo/game/Score.test/setup.js";

import { playersWithData } from "../Player.test/setup.js";
import { SnowballScore } from "../Score.js";

const ZERO_POINTS = 0;
const FIVE_POINTS = 5;
const TEN_POINTS = 10;

type RequiredSnowballScoreParams = Pick<
  SnowballScoreParams,
  "pointsOfEachPlayer"
>;

type SnowballScoreParams = ConstructorParameters<typeof SnowballScore>[number];

const createSnowballScoreParams = ({
  pointsOfEachPlayer,
}: RequiredSnowballScoreParams): SnowballScoreParams =>
  createScoreParams({ pointsOfEachPlayer });

const createSnowballScore = ({
  pointsOfEachPlayer,
}: SnowballScoreParams): SnowballScore =>
  new SnowballScore({
    pointsOfEachPlayer,
  });

const paramsOfScores = {
  aliceWith0PointsAndBrunoWith0Points: {
    pointsOfEachPlayer: new Map(
      Object.values(playersWithData).map(({ indexOfPlayer }) => [
        indexOfPlayer,
        ZERO_POINTS,
      ]),
    ),
  },
  aliceWith5PointsAndBrunoWith10Points: {
    pointsOfEachPlayer: new Map([
      [playersWithData.alice.indexOfPlayer, FIVE_POINTS],
      [playersWithData.bruno.indexOfPlayer, TEN_POINTS],
    ]),
  },
} as const satisfies Record<string, SnowballScoreParams>;

type RecordOfScoresWithData = {
  [K in keyof typeof paramsOfScores]: {
    indexOfScore: IndexOfScore;
    keyOfScore: keyof typeof paramsOfScores;
    params: SnowballScoreParams;
    score: SnowballScore;
  };
};

const scoresWithDataForUnitTest = createScoresWithData({
  createScore: createSnowballScore,
  createScoreParams: createSnowballScoreParams,
  partialParamsOfScores: paramsOfScores,
}) as RecordOfScoresWithData;

export { scoresWithDataForUnitTest };
