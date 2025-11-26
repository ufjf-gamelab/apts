import type { Points } from "@repo/game/Score.js";

import type { recordOfRequiredParamsOfPlayersInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO as recordOfRequiredParamsOfPlayers } from "../Player.test/records.js";

import {
  playersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO as playersWithDataAndIndex,
  type SnowballPlayerWithDataAndIndex,
} from "../Player.test/indexedRecords.js";
import {
  createSnowballScoresWithData,
  type RequiredParamsOfSnowballScore,
} from "./setup.js";

type PointsOfEachPlayer = ReturnType<
  ReturnType<
    RequiredParamsOfSnowballScore["pointsOfEachPlayer"]["entries"]
  >["toArray"]
>[number];

type RecordOfRequiredParamsOfSnowballScores = Record<
  string,
  RequiredParamsOfSnowballScore
>;

const constructTupleForPlayer = ({
  player,
  points,
}: {
  player: SnowballPlayerWithDataAndIndex<
    typeof recordOfRequiredParamsOfPlayers
  >;
  points: Points;
}): PointsOfEachPlayer => [
  player.indexOfPlayer,
  { player: player.player, points },
];

const recordOfRequiredParamsOfScores = {
  aliceWith0PointsAndBrunoWith0Points: {
    pointsOfEachPlayer: new Map([
      constructTupleForPlayer({
        player: playersWithDataAndIndex.alice,
        points: 0,
      }),
      constructTupleForPlayer({
        player: playersWithDataAndIndex.bruno,
        points: 0,
      }),
    ]),
  },
  aliceWith0PointsAndBrunoWith1Point: {
    pointsOfEachPlayer: new Map([
      constructTupleForPlayer({
        player: playersWithDataAndIndex.alice,
        points: 0,
      }),
      constructTupleForPlayer({
        player: playersWithDataAndIndex.bruno,
        points: 1,
      }),
    ]),
  },
  aliceWith1PointAndBrunoWith0Points: {
    pointsOfEachPlayer: new Map([
      constructTupleForPlayer({
        player: playersWithDataAndIndex.alice,
        points: 1,
      }),
      constructTupleForPlayer({
        player: playersWithDataAndIndex.bruno,
        points: 0,
      }),
    ]),
  },
  aliceWith5PointsAndBrunoWith10Points: {
    pointsOfEachPlayer: new Map([
      constructTupleForPlayer({
        player: playersWithDataAndIndex.alice,
        points: 5,
      }),
      constructTupleForPlayer({
        player: playersWithDataAndIndex.bruno,
        points: 10,
      }),
    ]),
  },
  aliceWith14PointsAndBrunoWith14Points: {
    pointsOfEachPlayer: new Map([
      constructTupleForPlayer({
        player: playersWithDataAndIndex.alice,
        points: 14,
      }),
      constructTupleForPlayer({
        player: playersWithDataAndIndex.bruno,
        points: 14,
      }),
    ]),
  },
  aliceWith15PointsAndBrunoWith14Points: {
    pointsOfEachPlayer: new Map([
      constructTupleForPlayer({
        player: playersWithDataAndIndex.alice,
        points: 15,
      }),
      constructTupleForPlayer({
        player: playersWithDataAndIndex.bruno,
        points: 14,
      }),
    ]),
  },
  aliceWith38PointsAndBrunoWith26Points: {
    pointsOfEachPlayer: new Map([
      constructTupleForPlayer({
        player: playersWithDataAndIndex.alice,
        points: 38,
      }),
      constructTupleForPlayer({
        player: playersWithDataAndIndex.bruno,
        points: 26,
      }),
    ]),
  },
} as const satisfies RecordOfRequiredParamsOfSnowballScores;

const scoresWithData = createSnowballScoresWithData({
  recordOfRequiredParams: recordOfRequiredParamsOfScores,
});

export type { RecordOfRequiredParamsOfSnowballScores };
export { recordOfRequiredParamsOfScores, scoresWithData };
