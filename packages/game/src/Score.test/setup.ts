import type { IndexOfPlayer, Player } from "../Player.js";
import type { PlayerWithData } from "../Player.test/setup.js";
import type { ParamsOfScore, Points, Score } from "../Score.js";

const createDescriptionForPlayerAndItsPoints = <
  GenericPlayer extends Player<GenericPlayer>,
>({
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

interface RequiredParamsOfScore<
  GenericPlayer extends Player<GenericPlayer>,
  GenericRequiredParamsOfPlayer,
> {
  pointsOfEachPlayer: Map<
    IndexOfPlayer,
    PlayerWithDataAndPoints<GenericPlayer, GenericRequiredParamsOfPlayer>
  >;
}

interface ScoreWithData<
  GenericPlayer extends Player<GenericPlayer>,
  Sc extends Score<Sc>,
  Params extends
    RequiredParamsOfScore<GenericPlayer> = RequiredParamsOfScore<GenericPlayer>,
> {
  keyOfScore: string;
  params: Params;
  score: Sc;
}
const deriveParamsOfScore = <GenericPlayer extends Player<GenericPlayer>>({
  pointsOfEachPlayer,
}: RequiredParamsOfScore<GenericPlayer>): DerivedParamsOfScore => ({
  pointsOfEachPlayer: new Map(
    pointsOfEachPlayer
      .entries()
      .map(([indexOfPlayer, playerWithData]) => [
        indexOfPlayer,
        playerWithData.points,
      ]),
  ),
});

const createScoresWithData = <
  GenericPlayer extends Player<GenericPlayer>,
  Sc extends Score<Sc>,
  RequiredParams extends RequiredParamsOfScore<GenericPlayer>,
  DerivedParams extends DerivedParamsOfScore,
  RecordOfRequiredParams extends Record<string, RequiredParams>,
>({
  create,
  deriveParams,
  recordOfRequiredParams,
}: {
  create: (params: DerivedParams) => Sc;
  deriveParams: (partialParams: RequiredParams) => DerivedParams;
  recordOfRequiredParams: RecordOfRequiredParams;
}): {
  [K in keyof RecordOfRequiredParams]: {
    keyOfScore: keyof RecordOfRequiredParams;
    params: RequiredParams;
    score: Sc;
  };
} => {
  type ResultType = {
    [K in keyof RecordOfRequiredParams]: {
      keyOfScore: keyof RecordOfRequiredParams;
      params: RequiredParams;
      score: Sc;
    };
  };

  /**
   * TypeScript cannot statically verify that Object.fromEntries produces all required keys since the operation happens at runtime.
   * This assertion is safe because we're iterating over all entries from recordOfRequiredParams, which RecordOfRequiredParams is derived from.
   */
  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion -- Object.fromEntries cannot preserve mapped type keys
  return Object.fromEntries(
    Object.entries(recordOfRequiredParams).map(
      ([keyOfScore, requiredParams]) =>
        [
          keyOfScore,
          {
            keyOfScore,
            params: requiredParams,
            score: create(deriveParams(requiredParams)),
          } satisfies ScoreWithData<GenericPlayer, Sc, RequiredParams>,
        ] as const,
    ),
  ) as ResultType;
};

export type {
  DerivedParamsOfScore,
  PlayerWithDataAndPoints,
  RequiredParamsOfScore,
  ScoreWithData,
};
export {
  createDescriptionForPlayerAndItsPoints,
  createScoresWithData,
  deriveParamsOfScore,
};
