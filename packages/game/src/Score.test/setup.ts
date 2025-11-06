import { type IndexOfScore, type Score, type ScoreParams } from "../Score.js";

interface ScoreWithData<
  Sc extends Score<Sc>,
  PartialParams,
  DerivedScoreParams,
  ParamsRecord extends Record<string, PartialParams>,
> {
  indexOfScore: IndexOfScore;
  keyOfScore: keyof ParamsRecord;
  params: DerivedScoreParams;
  score: Sc;
}

const createScoreParams = ({
  pointsOfEachPlayer,
}: Pick<ScoreParams, "pointsOfEachPlayer">): ScoreParams => ({
  pointsOfEachPlayer,
});

const createScoresWithData = <
  Sc extends Score<Sc>,
  PartialParams,
  DerivedScoreParams,
  ParamsRecord extends Record<string, PartialParams>,
>({
  createScore: create,
  createScoreParams: createParams,
  partialParamsOfScores,
}: {
  createScore: (params: DerivedScoreParams) => Sc;
  createScoreParams: (partialParams: PartialParams) => DerivedScoreParams;
  partialParamsOfScores: ParamsRecord;
}): {
  [K in keyof ParamsRecord]: ScoreWithData<
    Sc,
    PartialParams,
    DerivedScoreParams,
    ParamsRecord
  >;
} => {
  type ResultType = {
    [K in keyof ParamsRecord]: ScoreWithData<
      Sc,
      PartialParams,
      DerivedScoreParams,
      ParamsRecord
    >;
  };

  /**
   * TypeScript cannot statically verify that Object.fromEntries produces all required keys since the operation happens at runtime.
   * This assertion is safe because we're iterating over all entries from partialParamsOfScores, which ParamsRecord is derived from.
   */
  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion -- Object.fromEntries cannot preserve mapped type keys
  return Object.fromEntries(
    Object.entries(partialParamsOfScores).map(([key, partialParams], index) => {
      const params = createParams(partialParams);
      return [
        key,
        {
          indexOfScore: index,
          keyOfScore: key,
          params,
          score: create(params),
        },
      ] as const;
    }),
  ) as ResultType;
};

export type { ScoreWithData };
export { createScoreParams, createScoresWithData };
