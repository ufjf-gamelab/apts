import type { Points } from "@repo/game/Score.js";

import {
  recordOfConnectFourPlayersWithDataAndIndex,
  type ConnectFourPlayerWithDataAndIndex,
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
  aliceWith5PointsAndBrunoWith10Points: {
    pointsOfEachPlayerWithData: new Map([
      constructTupleForPlayer({
        playerWithDataAndIndex:
          recordOfConnectFourPlayersWithDataAndIndex.alice,
        points: 5,
      }),
      constructTupleForPlayer({
        playerWithDataAndIndex:
          recordOfConnectFourPlayersWithDataAndIndex.bruno,
        points: 10,
      }),
    ]),
  },
  aliceWith14PointsAndBrunoWith14Points: {
    pointsOfEachPlayerWithData: new Map([
      constructTupleForPlayer({
        playerWithDataAndIndex:
          recordOfConnectFourPlayersWithDataAndIndex.alice,
        points: 14,
      }),
      constructTupleForPlayer({
        playerWithDataAndIndex:
          recordOfConnectFourPlayersWithDataAndIndex.bruno,
        points: 14,
      }),
    ]),
  },
  aliceWith15PointsAndBrunoWith14Points: {
    pointsOfEachPlayerWithData: new Map([
      constructTupleForPlayer({
        playerWithDataAndIndex:
          recordOfConnectFourPlayersWithDataAndIndex.alice,
        points: 15,
      }),
      constructTupleForPlayer({
        playerWithDataAndIndex:
          recordOfConnectFourPlayersWithDataAndIndex.bruno,
        points: 14,
      }),
    ]),
  },
  aliceWith38PointsAndBrunoWith26Points: {
    pointsOfEachPlayerWithData: new Map([
      constructTupleForPlayer({
        playerWithDataAndIndex:
          recordOfConnectFourPlayersWithDataAndIndex.alice,
        points: 38,
      }),
      constructTupleForPlayer({
        playerWithDataAndIndex:
          recordOfConnectFourPlayersWithDataAndIndex.bruno,
        points: 26,
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
  recordOfRequiredParamsOfConnectFourScores,
  recordOfConnectFourScoresWithData,
};
