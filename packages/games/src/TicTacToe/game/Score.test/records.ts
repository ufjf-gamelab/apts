import type { Points } from "@repo/game/Score.js";

import {
  recordOfTicTacToePlayersWithDataAndIndex,
  type TicTacToePlayerWithDataAndIndex,
} from "../Player.test/indexedRecords.js";
import {
  createRecordOfTicTacToeScoresWithData,
  type RecordOfRequiredParamsOfTicTacToeScores,
  type RequiredParamsOfTicTacToeScore,
} from "./setup.js";

type PointsOfEachPlayer = ReturnType<
  ReturnType<
    RequiredParamsOfTicTacToeScore["pointsOfEachPlayerWithData"]["entries"]
  >["toArray"]
>[number];

const constructTupleForPlayer = ({
  playerWithDataAndIndex,
  points,
}: {
  playerWithDataAndIndex: TicTacToePlayerWithDataAndIndex;
  points: Points;
}): PointsOfEachPlayer => [
  playerWithDataAndIndex.indexOfPlayer,
  { playerWithData: playerWithDataAndIndex.playerWithData, points },
];

const recordOfRequiredParamsOfTicTacToeScores = {
  aliceWith0PointsAndBrunoWith0Points: {
    pointsOfEachPlayerWithData: new Map([
      constructTupleForPlayer({
        playerWithDataAndIndex: recordOfTicTacToePlayersWithDataAndIndex.alice,
        points: 0,
      }),
      constructTupleForPlayer({
        playerWithDataAndIndex: recordOfTicTacToePlayersWithDataAndIndex.bruno,
        points: 0,
      }),
    ]),
  },
  aliceWith0PointsAndBrunoWith1Point: {
    pointsOfEachPlayerWithData: new Map([
      constructTupleForPlayer({
        playerWithDataAndIndex: recordOfTicTacToePlayersWithDataAndIndex.alice,
        points: 0,
      }),
      constructTupleForPlayer({
        playerWithDataAndIndex: recordOfTicTacToePlayersWithDataAndIndex.bruno,
        points: 1,
      }),
    ]),
  },
  aliceWith1PointAndBrunoWith0Points: {
    pointsOfEachPlayerWithData: new Map([
      constructTupleForPlayer({
        playerWithDataAndIndex: recordOfTicTacToePlayersWithDataAndIndex.alice,
        points: 1,
      }),
      constructTupleForPlayer({
        playerWithDataAndIndex: recordOfTicTacToePlayersWithDataAndIndex.bruno,
        points: 0,
      }),
    ]),
  },
} as const satisfies RecordOfRequiredParamsOfTicTacToeScores;

const recordOfTicTacToeScoresWithData = createRecordOfTicTacToeScoresWithData({
  recordOfRequiredParamsOfScores: recordOfRequiredParamsOfTicTacToeScores,
});

export type { RecordOfRequiredParamsOfTicTacToeScores };
export {
  recordOfRequiredParamsOfTicTacToeScores,
  recordOfTicTacToeScoresWithData,
};
