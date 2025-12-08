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

type ConnectFourScoreWithData<
  GenericKeyOfConnectFourScore extends string = string,
> = ScoreWithData<
  ConnectFourPlayer,
  ConnectFourScore,
  RequiredParamsOfConnectFourScore,
  GenericKeyOfConnectFourScore
>;

type DerivedParamsOfConnectFourScore = DerivedParamsOfScore;

type RecordOfConnectFourScoresWithData<
  GenericRecordOfRequiredParamsOfConnectFourScores extends
    RecordOfRequiredParamsOfConnectFourScores,
> = RecordOfScoresWithData<
  ConnectFourPlayer,
  ConnectFourScore,
  RequiredParamsOfConnectFourScore,
  GenericRecordOfRequiredParamsOfConnectFourScores
>;

type RecordOfRequiredParamsOfConnectFourScores = Record<
  string,
  RequiredParamsOfConnectFourScore
>;

type RequiredParamsOfConnectFourScore = RequiredParamsOfScore<
  ConnectFourPlayer,
  RequiredParamsOfConnectFourPlayer
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
  ConnectFourScoreWithData,
  DerivedParamsOfConnectFourScore,
  RecordOfConnectFourScoresWithData,
  RecordOfRequiredParamsOfConnectFourScores,
  RequiredParamsOfConnectFourScore,
};
export {
  createConnectFourScore,
  createRecordOfConnectFourScoresWithData,
  deriveParamsOfConnectFourScore,
};
