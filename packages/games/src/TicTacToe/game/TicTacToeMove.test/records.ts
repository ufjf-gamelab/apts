import { recordOfTicTacToeSlotsWithDataAndIndexInWhichAllSlotsAreEmpty as recordOfTicTacToeSlotsWithDataAndIndex } from "../TicTacToeSlot.test/indexedRecords.js";
import {
  createRecordOfTicTacToeMovesWithData,
  type RecordOfRequiredParamsOfTicTacToeMoves,
} from "./setup.js";

const recordOfRequiredParamsOfTicTacToeMoves = {
  center: {
    indexOfSlotInWhichPlacePiece:
      recordOfTicTacToeSlotsWithDataAndIndex.center.indexOfSlot,
    title: "Center",
  },
  east: {
    indexOfSlotInWhichPlacePiece:
      recordOfTicTacToeSlotsWithDataAndIndex.east.indexOfSlot,
    title: "East",
  },
  north: {
    indexOfSlotInWhichPlacePiece:
      recordOfTicTacToeSlotsWithDataAndIndex.north.indexOfSlot,
    title: "North",
  },
  northeast: {
    indexOfSlotInWhichPlacePiece:
      recordOfTicTacToeSlotsWithDataAndIndex.northeast.indexOfSlot,
    title: "Northeast",
  },
  northwest: {
    indexOfSlotInWhichPlacePiece:
      recordOfTicTacToeSlotsWithDataAndIndex.northwest.indexOfSlot,
    title: "Northwest",
  },
  south: {
    indexOfSlotInWhichPlacePiece:
      recordOfTicTacToeSlotsWithDataAndIndex.south.indexOfSlot,
    title: "South",
  },
  southeast: {
    indexOfSlotInWhichPlacePiece:
      recordOfTicTacToeSlotsWithDataAndIndex.southeast.indexOfSlot,
    title: "Southeast",
  },
  southwest: {
    indexOfSlotInWhichPlacePiece:
      recordOfTicTacToeSlotsWithDataAndIndex.southwest.indexOfSlot,
    title: "Southwest",
  },
  west: {
    indexOfSlotInWhichPlacePiece:
      recordOfTicTacToeSlotsWithDataAndIndex.west.indexOfSlot,
    title: "West",
  },
} as const satisfies RecordOfRequiredParamsOfTicTacToeMoves;

const recordOfTicTacToeMovesWithData = createRecordOfTicTacToeMovesWithData({
  recordOfRequiredParamsOfMoves: recordOfRequiredParamsOfTicTacToeMoves,
});

export {
  recordOfRequiredParamsOfTicTacToeMoves,
  recordOfTicTacToeMovesWithData,
};
