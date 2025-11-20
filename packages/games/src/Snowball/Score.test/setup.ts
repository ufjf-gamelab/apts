import {
  createScoresWithData,
  deriveScoreParams,
  type RequiredScoreParams,
} from "@repo/game/Score.test/setup.js";

import { SnowballScore } from "../Score.js";
import { recordOfRequiredParamsOfScores } from "./records.js";

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
