import {
  createScoresWithData,
  deriveScoreParams,
  type RequiredScoreParams,
} from "@repo/game/Score.test/setup.js";

import { getIndexOfPlayer } from "../Game.test/players.js";
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
      Object.values(playersWithData).map(({ keyOfPlayer }) => [
        getIndexOfPlayer({ keyOfPlayer }),
        ZERO_POINTS,
      ]),
    ),
  },
  aliceWith5PointsAndBrunoWith10Points: {
    pointsOfEachPlayer: new Map([
      [getIndexOfPlayer({ keyOfPlayer: "alice" }), FIVE_POINTS],
      [getIndexOfPlayer({ keyOfPlayer: "bruno" }), TEN_POINTS],
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
