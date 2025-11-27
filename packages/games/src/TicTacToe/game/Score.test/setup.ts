import {
  createRecordOfScoresWithData,
  type DerivedParamsOfScore,
  deriveParamsOfScore,
  type RecordOfScoresWithData,
  type RequiredParamsOfScore,
  type ScoreWithData,
} from "@repo/game/Score.test/setup.js";

import type { TicTacToePlayer } from "../Player.js";
import type { RequiredParamsOfTicTacToePlayer } from "../Player.test/setup.js";

import { TicTacToeScore } from "../Score.js";

type DerivedParamsOfTicTacToeScore = DerivedParamsOfScore;

type RecordOfRequiredParamsOfTicTacToeScores = Record<
  string,
  RequiredParamsOfTicTacToeScore
>;

type RecordOfTicTacToeScoresWithData<
  GenericRecordOfRequiredParamsOfTicTacToeScores extends
    RecordOfRequiredParamsOfTicTacToeScores,
> = RecordOfScoresWithData<
  TicTacToePlayer,
  TicTacToeScore,
  RequiredParamsOfTicTacToeScore,
  GenericRecordOfRequiredParamsOfTicTacToeScores
>;

type RequiredParamsOfTicTacToeScore = RequiredParamsOfScore<
  TicTacToePlayer,
  RequiredParamsOfTicTacToePlayer
>;

type TicTacToeScoreWithData<
  GenericKeyOfTicTacToeScore extends string = string,
> = ScoreWithData<
  TicTacToePlayer,
  TicTacToeScore,
  RequiredParamsOfTicTacToeScore,
  GenericKeyOfTicTacToeScore
>;

const deriveParamsOfTicTacToeScore = ({
  pointsOfEachPlayerWithData,
}: RequiredParamsOfTicTacToeScore): DerivedParamsOfTicTacToeScore =>
  deriveParamsOfScore({
    pointsOfEachPlayerWithData,
  });

const createTicTacToeScore = ({
  pointsOfEachPlayer,
}: DerivedParamsOfTicTacToeScore): TicTacToeScore =>
  new TicTacToeScore({
    pointsOfEachPlayer,
  });

const createRecordOfTicTacToeScoresWithData = <
  GenericRecordOfRequiredParamsOfTicTacToeScores extends
    RecordOfRequiredParamsOfTicTacToeScores,
>({
  recordOfRequiredParamsOfScores,
}: {
  recordOfRequiredParamsOfScores: GenericRecordOfRequiredParamsOfTicTacToeScores;
}) =>
  createRecordOfScoresWithData<
    TicTacToePlayer,
    TicTacToeScore,
    DerivedParamsOfTicTacToeScore,
    RequiredParamsOfTicTacToeScore,
    RecordOfTicTacToeScoresWithData<GenericRecordOfRequiredParamsOfTicTacToeScores>
  >({
    create: createTicTacToeScore,
    deriveParams: deriveParamsOfTicTacToeScore,
    recordOfRequiredParamsOfScores,
  });

export type {
  DerivedParamsOfTicTacToeScore,
  RecordOfRequiredParamsOfTicTacToeScores,
  RecordOfTicTacToeScoresWithData,
  RequiredParamsOfTicTacToeScore,
  TicTacToeScoreWithData,
};
export {
  createRecordOfTicTacToeScoresWithData,
  createTicTacToeScore,
  deriveParamsOfTicTacToeScore,
};
