import type { Points } from "@repo/game/Score.js";

import {
  recordOfSnowballPlayersWithDataAndIndex,
  type SnowballPlayerWithDataAndIndex,
} from "../Player.test/indexedRecords.js";
import {
  createRecordOfSnowballScoresWithData,
  type RecordOfRequiredParamsOfSnowballScores,
  type RequiredParamsOfSnowballScore,
} from "./setup.js";

type PointsOfEachPlayer = ReturnType<
  ReturnType<
    RequiredParamsOfSnowballScore["pointsOfEachPlayer"]["entries"]
  >["toArray"]
>[number];

const constructTupleForPlayer = ({
  playerWithDataAndIndex,
  points,
}: {
  playerWithDataAndIndex: SnowballPlayerWithDataAndIndex;
  points: Points;
}): PointsOfEachPlayer => [
  playerWithDataAndIndex.indexOfPlayer,
  { playerWithData: playerWithDataAndIndex.playerWithData, points },
];

const recordOfRequiredParamsOfSnowballScores = {
  aliceWith0PointsAndBrunoWith0Points: {
    pointsOfEachPlayer: new Map([
      constructTupleForPlayer({
        playerWithDataAndIndex: recordOfSnowballPlayersWithDataAndIndex.alice,
        points: 0,
      }),
      constructTupleForPlayer({
        playerWithDataAndIndex: recordOfSnowballPlayersWithDataAndIndex.bruno,
        points: 0,
      }),
    ]),
  },
  aliceWith0PointsAndBrunoWith1Point: {
    pointsOfEachPlayer: new Map([
      constructTupleForPlayer({
        playerWithDataAndIndex: recordOfSnowballPlayersWithDataAndIndex.alice,
        points: 0,
      }),
      constructTupleForPlayer({
        playerWithDataAndIndex: recordOfSnowballPlayersWithDataAndIndex.bruno,
        points: 1,
      }),
    ]),
  },
  aliceWith1PointAndBrunoWith0Points: {
    pointsOfEachPlayer: new Map([
      constructTupleForPlayer({
        playerWithDataAndIndex: recordOfSnowballPlayersWithDataAndIndex.alice,
        points: 1,
      }),
      constructTupleForPlayer({
        playerWithDataAndIndex: recordOfSnowballPlayersWithDataAndIndex.bruno,
        points: 0,
      }),
    ]),
  },
  aliceWith5PointsAndBrunoWith10Points: {
    pointsOfEachPlayer: new Map([
      constructTupleForPlayer({
        playerWithDataAndIndex: recordOfSnowballPlayersWithDataAndIndex.alice,
        points: 5,
      }),
      constructTupleForPlayer({
        playerWithDataAndIndex: recordOfSnowballPlayersWithDataAndIndex.bruno,
        points: 10,
      }),
    ]),
  },
  aliceWith14PointsAndBrunoWith14Points: {
    pointsOfEachPlayer: new Map([
      constructTupleForPlayer({
        playerWithDataAndIndex: recordOfSnowballPlayersWithDataAndIndex.alice,
        points: 14,
      }),
      constructTupleForPlayer({
        playerWithDataAndIndex: recordOfSnowballPlayersWithDataAndIndex.bruno,
        points: 14,
      }),
    ]),
  },
  aliceWith15PointsAndBrunoWith14Points: {
    pointsOfEachPlayer: new Map([
      constructTupleForPlayer({
        playerWithDataAndIndex: recordOfSnowballPlayersWithDataAndIndex.alice,
        points: 15,
      }),
      constructTupleForPlayer({
        playerWithDataAndIndex: recordOfSnowballPlayersWithDataAndIndex.bruno,
        points: 14,
      }),
    ]),
  },
  aliceWith38PointsAndBrunoWith26Points: {
    pointsOfEachPlayer: new Map([
      constructTupleForPlayer({
        playerWithDataAndIndex: recordOfSnowballPlayersWithDataAndIndex.alice,
        points: 38,
      }),
      constructTupleForPlayer({
        playerWithDataAndIndex: recordOfSnowballPlayersWithDataAndIndex.bruno,
        points: 26,
      }),
    ]),
  },
} as const satisfies RecordOfRequiredParamsOfSnowballScores;

const recordOfSnowballScoresWithData = createRecordOfSnowballScoresWithData({
  recordOfRequiredParamsOfScores: recordOfRequiredParamsOfSnowballScores,
});

export type { RecordOfRequiredParamsOfSnowballScores };
export {
  recordOfRequiredParamsOfSnowballScores,
  recordOfSnowballScoresWithData,
};
