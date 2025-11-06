import type { IndexOfScore } from "@repo/game/Score.js";

import {
  createScoresWithData,
  deriveScoreParams,
  type RequiredScoreParams,
} from "@repo/game/Score.test/setup.js";

import { playersWithData } from "../Player.test/setup.js";
import { SnowballScore } from "../Score.js";

const ZERO_POINTS = 0;
const FIVE_POINTS = 5;
const TEN_POINTS = 10;

type DerivedSnowballScoreParams = RequiredSnowballScoreParams;

type RequiredSnowballScoreParams = Pick<
  RequiredScoreParams,
  "pointsOfEachPlayer"
>;

interface SnowballScoreWithData<
  Params extends RequiredSnowballScoreParams = RequiredSnowballScoreParams,
> {
  indexOfScore: IndexOfScore;
  keyOfScore: string;
  params: Params;
  player: SnowballScore;
}

const deriveSnowballScoreParams = ({
  pointsOfEachPlayer,
}: RequiredSnowballScoreParams): DerivedSnowballScoreParams =>
  deriveScoreParams({
    pointsOfEachPlayer,
  });

const createSnowballScore = ({
  pointsOfEachPlayer,
}: DerivedSnowballScoreParams): SnowballScore =>
  new SnowballScore({
    pointsOfEachPlayer,
  });

const recordOfRequiredParamsOfScores = {
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
} as const satisfies Record<string, RequiredSnowballScoreParams>;

const scoresWithDataForUnitTest = createScoresWithData({
  create: createSnowballScore,
  deriveParams: deriveSnowballScoreParams,
  recordOfRequiredParams: recordOfRequiredParamsOfScores,
});

export type {
  DerivedSnowballScoreParams,
  RequiredSnowballScoreParams,
  SnowballScoreWithData,
};
export {
  createSnowballScore,
  deriveSnowballScoreParams,
  scoresWithDataForUnitTest,
};
