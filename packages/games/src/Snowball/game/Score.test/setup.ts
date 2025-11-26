import {
  createScoresWithData,
  type DerivedParamsOfScore,
  deriveParamsOfScore,
  type RequiredParamsOfScore,
  type ScoreWithData,
} from "@repo/game/Score.test/setup.js";

import type { SnowballPlayer } from "../Player.js";
import type { RecordOfRequiredParamsOfSnowballScores } from "./records.js";

import { SnowballScore } from "../Score.js";

type DerivedParamsOfSnowballScore = DerivedParamsOfScore;

type RequiredParamsOfSnowballScore = RequiredParamsOfScore<SnowballPlayer>;

type SnowballScoreWithData = ScoreWithData<
  SnowballPlayer,
  SnowballScore,
  RequiredParamsOfSnowballScore
>;

const deriveParamsOfSnowballScore = ({
  pointsOfEachPlayer,
}: RequiredParamsOfSnowballScore): DerivedParamsOfSnowballScore =>
  deriveParamsOfScore({
    pointsOfEachPlayer,
  });

const createSnowballScore = ({
  pointsOfEachPlayer,
}: DerivedParamsOfSnowballScore): SnowballScore =>
  new SnowballScore({
    pointsOfEachPlayer,
  });

type ExtendedSnowballScoresWithData<
  ExtendedRecordOfRequiredParamsOfSnowballScores extends
    RecordOfRequiredParamsOfSnowballScores,
> = {
  [K in keyof ExtendedRecordOfRequiredParamsOfSnowballScores]: {
    keyOfScore: keyof ExtendedRecordOfRequiredParamsOfSnowballScores;
    params: RequiredParamsOfSnowballScore;
    score: SnowballScore;
  };
};

const createSnowballScoresWithData = <
  ExtendedRecordOfRequiredParamsOfSnowballScores extends
    RecordOfRequiredParamsOfSnowballScores,
>({
  recordOfRequiredParams,
}: {
  recordOfRequiredParams: ExtendedRecordOfRequiredParamsOfSnowballScores;
}): ExtendedSnowballScoresWithData<ExtendedRecordOfRequiredParamsOfSnowballScores> =>
  createScoresWithData({
    create: createSnowballScore,
    deriveParams: deriveParamsOfSnowballScore,
    recordOfRequiredParams,
  });

export type {
  DerivedParamsOfSnowballScore,
  RequiredParamsOfSnowballScore,
  SnowballScoreWithData,
};
export {
  createSnowballScore,
  createSnowballScoresWithData,
  deriveParamsOfSnowballScore,
};
