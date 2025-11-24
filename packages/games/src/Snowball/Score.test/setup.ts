import {
  createScoresWithData,
  type DerivedScoreParams,
  deriveScoreParams,
  type RequiredScoreParams,
  type ScoreWithData,
} from "@repo/game/Score.test/setup.js";

import type { SnowballPlayer } from "../Player.js";
import type { RecordOfRequiredSnowballScoreParams } from "./records.js";

import { SnowballScore } from "../Score.js";

type DerivedSnowballScoreParams = Pick<
  DerivedScoreParams<SnowballPlayer>,
  "pointsOfEachPlayer"
>;

type RequiredSnowballScoreParams = Pick<
  RequiredScoreParams<SnowballPlayer>,
  "pointsOfEachPlayer"
>;

type SnowballScoreWithData = ScoreWithData<
  SnowballPlayer,
  SnowballScore,
  RequiredSnowballScoreParams
>;

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

type ExtendedSnowballScoresWithData<
  ExtendedRecordOfRequiredSnowballScoreParams extends
    RecordOfRequiredSnowballScoreParams,
> = {
  [K in keyof ExtendedRecordOfRequiredSnowballScoreParams]: {
    keyOfScore: keyof ExtendedRecordOfRequiredSnowballScoreParams;
    params: RequiredSnowballScoreParams;
    score: SnowballScore;
  };
};

const createSnowballScoresWithData = <
  ExtendedRecordOfRequiredSnowballScoreParams extends
    RecordOfRequiredSnowballScoreParams,
>({
  recordOfRequiredParams,
}: {
  recordOfRequiredParams: ExtendedRecordOfRequiredSnowballScoreParams;
}): ExtendedSnowballScoresWithData<ExtendedRecordOfRequiredSnowballScoreParams> =>
  createScoresWithData({
    create: createSnowballScore,
    deriveParams: deriveSnowballScoreParams,
    recordOfRequiredParams,
  });

export type {
  DerivedSnowballScoreParams,
  RequiredSnowballScoreParams,
  SnowballScoreWithData,
};
export {
  createSnowballScore,
  createSnowballScoresWithData,
  deriveSnowballScoreParams,
};
