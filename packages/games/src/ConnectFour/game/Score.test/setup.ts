import {
  createRecordOfScoresWithData,
  type DerivedParamsOfScore,
  deriveParamsOfScore,
  type RecordOfScoresWithData,
  type RequiredParamsOfScore,
  type ScoreWithData,
} from "@repo/game/Score.test/setup.js";

import type { ConnectFourPlayer } from "../Player.js";
import type { RequiredParamsOfConnectFourPlayer } from "../Player.test/setup.js";

import { ConnectFourScore } from "../Score.js";

type DerivedParamsOfConnectFourScore = DerivedParamsOfScore;

type RecordOfRequiredParamsOfConnectFourScores = Record<
  string,
  RequiredParamsOfConnectFourScore
>;

type RecordOfConnectFourScoresWithData<
  GenericRecordOfRequiredParamsOfConnectFourScores extends
    RecordOfRequiredParamsOfConnectFourScores,
> = RecordOfScoresWithData<
  ConnectFourPlayer,
  ConnectFourScore,
  RequiredParamsOfConnectFourScore,
  GenericRecordOfRequiredParamsOfConnectFourScores
>;

type RequiredParamsOfConnectFourScore = RequiredParamsOfScore<
  ConnectFourPlayer,
  RequiredParamsOfConnectFourPlayer
>;

type ConnectFourScoreWithData<
  GenericKeyOfConnectFourScore extends string = string,
> = ScoreWithData<
  ConnectFourPlayer,
  ConnectFourScore,
  RequiredParamsOfConnectFourScore,
  GenericKeyOfConnectFourScore
>;

const deriveParamsOfConnectFourScore = ({
  pointsOfEachPlayerWithData,
}: RequiredParamsOfConnectFourScore): DerivedParamsOfConnectFourScore =>
  deriveParamsOfScore({
    pointsOfEachPlayerWithData,
  });

const createConnectFourScore = ({
  pointsOfEachPlayer,
}: DerivedParamsOfConnectFourScore): ConnectFourScore =>
  new ConnectFourScore({
    pointsOfEachPlayer,
  });

const createRecordOfConnectFourScoresWithData = <
  GenericRecordOfRequiredParamsOfConnectFourScores extends
    RecordOfRequiredParamsOfConnectFourScores,
>({
  recordOfRequiredParamsOfScores,
}: {
  recordOfRequiredParamsOfScores: GenericRecordOfRequiredParamsOfConnectFourScores;
}) =>
  createRecordOfScoresWithData<
    ConnectFourPlayer,
    ConnectFourScore,
    DerivedParamsOfConnectFourScore,
    RequiredParamsOfConnectFourScore,
    RecordOfConnectFourScoresWithData<GenericRecordOfRequiredParamsOfConnectFourScores>
  >({
    create: createConnectFourScore,
    deriveParams: deriveParamsOfConnectFourScore,
    recordOfRequiredParamsOfScores,
  });

export type {
  DerivedParamsOfConnectFourScore,
  RecordOfRequiredParamsOfConnectFourScores,
  RecordOfConnectFourScoresWithData,
  RequiredParamsOfConnectFourScore,
  ConnectFourScoreWithData,
};
export {
  createRecordOfConnectFourScoresWithData,
  createConnectFourScore,
  deriveParamsOfConnectFourScore,
};
