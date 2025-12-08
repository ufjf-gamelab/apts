import type { Points } from "@repo/game/Score.js";

import {
  type ConnectFourPlayerWithDataAndIndex,
  recordOfConnectFourPlayersWithDataAndIndex,
} from "../Player.test/indexedRecords.js";
import {
  createRecordOfConnectFourScoresWithData,
  type RecordOfRequiredParamsOfConnectFourScores,
  type RequiredParamsOfConnectFourScore,
} from "./setup.js";

type PointsOfEachPlayer = ReturnType<
  ReturnType<
    RequiredParamsOfConnectFourScore["pointsOfEachPlayerWithData"]["entries"]
  >["toArray"]
>[number];

const constructTupleForPlayer = ({
  playerWithDataAndIndex,
  points,
}: {
  playerWithDataAndIndex: ConnectFourPlayerWithDataAndIndex;
  points: Points;
}): PointsOfEachPlayer => [
  playerWithDataAndIndex.indexOfPlayer,
  { playerWithData: playerWithDataAndIndex.playerWithData, points },
];

const recordOfRequiredParamsOfConnectFourScores = {
  aliceWith0PointsAndBrunoWith0Points: {
    pointsOfEachPlayerWithData: new Map([
      constructTupleForPlayer({
        playerWithDataAndIndex:
          recordOfConnectFourPlayersWithDataAndIndex.alice,
        points: 0,
      }),
      constructTupleForPlayer({
        playerWithDataAndIndex:
          recordOfConnectFourPlayersWithDataAndIndex.bruno,
        points: 0,
      }),
    ]),
  },
  aliceWith0PointsAndBrunoWith1Point: {
    pointsOfEachPlayerWithData: new Map([
      constructTupleForPlayer({
        playerWithDataAndIndex:
          recordOfConnectFourPlayersWithDataAndIndex.alice,
        points: 0,
      }),
      constructTupleForPlayer({
        playerWithDataAndIndex:
          recordOfConnectFourPlayersWithDataAndIndex.bruno,
        points: 1,
      }),
    ]),
  },
  aliceWith1PointAndBrunoWith0Points: {
    pointsOfEachPlayerWithData: new Map([
      constructTupleForPlayer({
        playerWithDataAndIndex:
          recordOfConnectFourPlayersWithDataAndIndex.alice,
        points: 1,
      }),
      constructTupleForPlayer({
        playerWithDataAndIndex:
          recordOfConnectFourPlayersWithDataAndIndex.bruno,
        points: 0,
      }),
    ]),
  },
} as const satisfies RecordOfRequiredParamsOfConnectFourScores;

const recordOfConnectFourScoresWithData =
  createRecordOfConnectFourScoresWithData({
    recordOfRequiredParamsOfScores: recordOfRequiredParamsOfConnectFourScores,
  });

export type { RecordOfRequiredParamsOfConnectFourScores };
export {
  recordOfConnectFourScoresWithData,
  recordOfRequiredParamsOfConnectFourScores,
};
