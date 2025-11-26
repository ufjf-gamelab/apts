import {
  createRecordOfScoresWithData,
  type DerivedParamsOfScore,
  deriveParamsOfScore,
  type RecordOfScoresWithData,
  type RequiredParamsOfScore,
  type ScoreWithData,
} from "@repo/game/Score.test/setup.js";

import type { SnowballPlayer } from "../Player.js";
import type { RequiredParamsOfSnowballPlayer } from "../Player.test/setup.js";

import { SnowballScore } from "../Score.js";

type DerivedParamsOfSnowballScore = DerivedParamsOfScore;

type RecordOfRequiredParamsOfSnowballScores = Record<
  string,
  RequiredParamsOfSnowballScore
>;

type RecordOfSnowballScoresWithData<
  GenericRecordOfRequiredParamsOfSnowballScores extends
    RecordOfRequiredParamsOfSnowballScores,
> = RecordOfScoresWithData<
  SnowballPlayer,
  SnowballScore,
  RequiredParamsOfSnowballScore,
  GenericRecordOfRequiredParamsOfSnowballScores
>;

type RequiredParamsOfSnowballScore = RequiredParamsOfScore<
  SnowballPlayer,
  RequiredParamsOfSnowballPlayer
>;

type SnowballScoreWithData<GenericKeyOfSnowballScore extends string = string> =
  ScoreWithData<
    SnowballPlayer,
    SnowballScore,
    RequiredParamsOfSnowballScore,
    GenericKeyOfSnowballScore
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

const createRecordOfSnowballScoresWithData = <
  GenericRecordOfRequiredParamsOfSnowballScores extends
    RecordOfRequiredParamsOfSnowballScores,
>({
  recordOfRequiredParamsOfScores,
}: {
  recordOfRequiredParamsOfScores: GenericRecordOfRequiredParamsOfSnowballScores;
}) =>
  createRecordOfScoresWithData<
    SnowballPlayer,
    SnowballScore,
    DerivedParamsOfSnowballScore,
    RequiredParamsOfSnowballScore,
    RecordOfSnowballScoresWithData<GenericRecordOfRequiredParamsOfSnowballScores>
  >({
    create: createSnowballScore,
    deriveParams: deriveParamsOfSnowballScore,
    recordOfRequiredParamsOfScores,
  });

export type {
  DerivedParamsOfSnowballScore,
  RecordOfRequiredParamsOfSnowballScores,
  RecordOfSnowballScoresWithData,
  RequiredParamsOfSnowballScore,
  SnowballScoreWithData,
};
export {
  createRecordOfSnowballScoresWithData,
  createSnowballScore,
  deriveParamsOfSnowballScore,
};
