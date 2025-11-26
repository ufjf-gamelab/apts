import type { IndexOfPlayer, Player } from "../Player.js";
import type { PlayerWithData } from "../Player.test/setup.js";
import type { ParamsOfScore, Points, Score } from "../Score.js";

const createDescriptionForPlayerAndItsPoints = ({
  keyOfPlayer,
  points,
}: {
  keyOfPlayer: string;
  points: Points;
}): string => `${keyOfPlayer}: ${points}`;

type DerivedParamsOfScore = ParamsOfScore;

interface PlayerWithDataAndPoints<
  GenericPlayer extends Player<GenericPlayer>,
  GenericRequiredParamsOfPlayer,
> {
  playerWithData: PlayerWithData<GenericPlayer, GenericRequiredParamsOfPlayer>;
  points: Points;
}

type RecordOfRequiredParamsOfScores<GenericRequiredParamsOfScore> = Record<
  string,
  GenericRequiredParamsOfScore
>;

type RecordOfScoresWithData<
  GenericPlayer extends Player<GenericPlayer>,
  GenericScore extends Score<GenericScore>,
  GenericRequiredParamsOfScore,
  GenericRecordOfRequiredParamsOfScores extends
    RecordOfRequiredParamsOfScores<GenericRequiredParamsOfScore> = RecordOfRequiredParamsOfScores<GenericRequiredParamsOfScore>,
> = {
  [GenericKeyOfScore in keyof GenericRecordOfRequiredParamsOfScores]: ScoreWithData<
    GenericPlayer,
    GenericScore,
    GenericRequiredParamsOfScore,
    GenericKeyOfScore & string
  >;
};

interface RequiredParamsOfScore<
  GenericPlayer extends Player<GenericPlayer>,
  GenericRequiredParamsOfPlayer,
> {
  pointsOfEachPlayerWithData: ReadonlyMap<
    IndexOfPlayer,
    PlayerWithDataAndPoints<GenericPlayer, GenericRequiredParamsOfPlayer>
  >;
}

interface ScoreWithData<
  GenericPlayer extends Player<GenericPlayer>,
  GenericScore extends Score<GenericScore>,
  GenericRequiredParamsOfScore,
  GenericKeyOfScore extends string = string,
> {
  keyOfScore: GenericKeyOfScore;
  requiredParams: GenericRequiredParamsOfScore;
  score: GenericScore;
}

const deriveParamsOfScore = <
  GenericPlayer extends Player<GenericPlayer>,
  GenericRequiredParamsOfPlayer,
>({
  pointsOfEachPlayerWithData,
}: RequiredParamsOfScore<
  GenericPlayer,
  GenericRequiredParamsOfPlayer
>): DerivedParamsOfScore => ({
  pointsOfEachPlayer: new Map(
    pointsOfEachPlayerWithData
      .entries()
      .map(([indexOfPlayer, playerWithData]) => [
        indexOfPlayer,
        playerWithData.points,
      ]),
  ),
});

const createRecordOfScoresWithData = <
  GenericPlayer extends Player<GenericPlayer>,
  GenericScore extends Score<GenericScore>,
  GenericDerivedParamsOfScore extends DerivedParamsOfScore,
  GenericRequiredParamsOfScore,
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-parameters
  GenericRecordOfScoresWithData extends RecordOfScoresWithData<
    GenericPlayer,
    GenericScore,
    GenericRequiredParamsOfScore
  >,
>({
  create,
  deriveParams,
  recordOfRequiredParamsOfScores,
}: {
  create: (derivedParams: GenericDerivedParamsOfScore) => GenericScore;
  deriveParams: (
    requiredParams: GenericRequiredParamsOfScore,
  ) => GenericDerivedParamsOfScore;
  recordOfRequiredParamsOfScores: RecordOfRequiredParamsOfScores<GenericRequiredParamsOfScore>;
}) =>
  /**
   * TypeScript cannot statically verify that Object.fromEntries produces all required keys since the operation happens at runtime.
   * This assertion is safe because we're iterating over all entries from recordOfRequiredParamsOfScores, which RecordOfRequiredParams is derived from.
   */
  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
  Object.fromEntries(
    Object.entries(recordOfRequiredParamsOfScores).map(
      ([keyOfScore, requiredParams]) =>
        [
          keyOfScore,
          {
            keyOfScore,
            requiredParams,
            score: create(deriveParams(requiredParams)),
          } satisfies ScoreWithData<
            GenericPlayer,
            GenericScore,
            GenericRequiredParamsOfScore
          >,
        ] as const,
    ),
  ) as GenericRecordOfScoresWithData;

export type {
  DerivedParamsOfScore,
  PlayerWithDataAndPoints,
  RecordOfScoresWithData,
  RequiredParamsOfScore,
  ScoreWithData,
};
export {
  createDescriptionForPlayerAndItsPoints,
  createRecordOfScoresWithData,
  deriveParamsOfScore,
};
