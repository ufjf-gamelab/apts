import { type IndexOfScore, type Score } from "../Score.js";

type ScoreParams = ConstructorParameters<typeof Score>[number];

const createScoreParams = ({
  pointsOfEachPlayer,
}: Pick<ScoreParams, "pointsOfEachPlayer">): ScoreParams => ({
  pointsOfEachPlayer,
});

const createScoresWithData = <PartialParams, DerivedScoreParams>({
  createScore: create,
  createScoreParams: createParams,
  partialParamsOfScores,
}: {
  createScore: (params: DerivedScoreParams) => Score;
  createScoreParams: (partialParams: PartialParams) => DerivedScoreParams;
  partialParamsOfScores: Record<string, PartialParams>;
}) =>
  Object.entries(partialParamsOfScores).reduce<{
    [K in keyof typeof partialParamsOfScores]: {
      indexOfScore: IndexOfScore;
      keyOfScore: string;
      params: DerivedScoreParams;
      score: Score;
    };
  }>((scoresWithData, [key, partialParams], index) => {
    const params = createParams(partialParams);
    scoresWithData[key] = {
      indexOfScore: index,
      keyOfScore: key,
      params,
      score: create(params),
    };
    return scoresWithData;
  }, {});

export { createScoreParams, createScoresWithData };
