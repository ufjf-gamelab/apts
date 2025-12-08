import { recordOfTicTacToeGamesWithData } from "../TicTacToeGame.test/records.js";
import {
  recordOfTicTacToeMovesWithDataAndIndex,
  type TicTacToeMoveWithDataAndIndex,
} from "../TicTacToeMove.test/indexedRecords.js";
import { type TicTacToeMoveWithData } from "../TicTacToeMove.test/setup.js";
import { recordOfTicTacToePlayersWithDataAndIndex } from "../TicTacToePlayer.test/indexedRecords.js";
import { recordOfTicTacToeScoresWithData } from "../TicTacToeScore.test/records.js";
import {
  indexedTicTacToeSlotsWithDataInWhichAllSlotsAreEmpty,
  indexedTicTacToeSlotsWithDataInWhichSlotR0C0IsFilledByAlice,
  indexedTicTacToeSlotsWithDataInWhichSlotR0C1IsFilledByAlice,
  indexedTicTacToeSlotsWithDataInWhichSlotR0C2IsFilledByAlice,
  indexedTicTacToeSlotsWithDataInWhichSlotR1C0IsFilledByAlice,
  indexedTicTacToeSlotsWithDataInWhichSlotR1C1IsFilledByAlice,
  indexedTicTacToeSlotsWithDataInWhichSlotR1C2IsFilledByAlice,
  indexedTicTacToeSlotsWithDataInWhichSlotR2C0IsFilledByAlice,
  indexedTicTacToeSlotsWithDataInWhichSlotR2C1IsFilledByAlice,
  indexedTicTacToeSlotsWithDataInWhichSlotR2C2IsFilledByAlice,
  indexedTicTacToeSlotsWithDataInWhichSlotsR0C0AndR0C1AndR1C0AreFilledByAliceAndR0C2AndR1C1AreFilledByBruno,
  indexedTicTacToeSlotsWithDataInWhichSlotsR0C0AndR0C1AndR1C2AndR2C0AreFilledByAliceAndR0C2AndR1C0AndR1C1AreFilledByBruno,
  indexedTicTacToeSlotsWithDataInWhichSlotsR0C0AndR0C1AreFilledByAliceAndR1C0IsFilledByBruno,
  indexedTicTacToeSlotsWithDataInWhichSlotsR0C0AndR0C1AreFilledByAliceAndR1C1IsFilledByBruno,
  indexedTicTacToeSlotsWithDataInWhichSlotsR0C0AndR0C1AreFilledByAliceAndR2C0IsFilledByBruno,
  indexedTicTacToeSlotsWithDataInWhichSlotsR0C0AndR0C2AndR1C1AndR1C2AndR2C1AreFilledByAliceAndR0C1AndR1C0AndR2C0AndR2C2AreFilledByBruno,
  indexedTicTacToeSlotsWithDataInWhichSlotsR0C0AndR0C2AndR1C1AndR2C1AndR2C2AreFilledByAliceAndR0C1AndR1C0AndR1C2AndR2C0AreFilledByBruno,
  indexedTicTacToeSlotsWithDataInWhichSlotsR0C0AndR0C2AndR1C1AndR2C1AreFilledByAliceAndR0C1AndR1C0AndR1C2AndR2C0AreFilledByBruno,
  indexedTicTacToeSlotsWithDataInWhichSlotsR0C0AndR1C0AreFilledByAliceAndR0C1IsFilledByBruno,
  indexedTicTacToeSlotsWithDataInWhichSlotsR0C0AndR1C0AreFilledByAliceAndR2C2IsFilledByBruno,
  indexedTicTacToeSlotsWithDataInWhichSlotsR0C1AndR1C0AndR1C1AreFilledByAliceAndR0C0AndR2C1AreFilledByBruno,
  indexedTicTacToeSlotsWithDataInWhichSlotsR1C0AndR1C2AndR2C0AreFilledByAliceAndR0C0AndR1C1AreFilledByBruno,
} from "../TicTacToeSlot.test/indexedRecords.js";
import {
  createRecordOfTicTacToeStatesWithData,
  type RecordOfRequiredParamsOfTicTacToeStates,
} from "./setup.js";

const constructTupleForMove = ({
  moveWithDataAndIndex,
}: {
  moveWithDataAndIndex: TicTacToeMoveWithDataAndIndex;
}): [number, TicTacToeMoveWithData] => [
  moveWithDataAndIndex.indexOfMove,
  moveWithDataAndIndex.moveWithData,
];

const recordOfRequiredParamsOfTicTacToeStates = {
  allSlotsAreEmptyAndAliceHas0PointsAndBrunoHas0PointsAndAliceIsTheCurrentPlayer:
    {
      gameWithData:
        recordOfTicTacToeGamesWithData.ticTacToeWith3RowsAnd3Columns,
      isFinal: false,
      nextPlayerWithDataAndIndex:
        recordOfTicTacToePlayersWithDataAndIndex.bruno,
      playerWithDataAndIndex: recordOfTicTacToePlayersWithDataAndIndex.alice,
      scoreWithData:
        recordOfTicTacToeScoresWithData.aliceWith0PointsAndBrunoWith0Points,
      slotsWithData: indexedTicTacToeSlotsWithDataInWhichAllSlotsAreEmpty,
      validMovesWithData: new Map([
        constructTupleForMove({
          moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.center,
        }),
        constructTupleForMove({
          moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.east,
        }),
        constructTupleForMove({
          moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.north,
        }),
        constructTupleForMove({
          moveWithDataAndIndex:
            recordOfTicTacToeMovesWithDataAndIndex.northeast,
        }),
        constructTupleForMove({
          moveWithDataAndIndex:
            recordOfTicTacToeMovesWithDataAndIndex.northwest,
        }),
        constructTupleForMove({
          moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.south,
        }),
        constructTupleForMove({
          moveWithDataAndIndex:
            recordOfTicTacToeMovesWithDataAndIndex.southeast,
        }),
        constructTupleForMove({
          moveWithDataAndIndex:
            recordOfTicTacToeMovesWithDataAndIndex.southwest,
        }),
        constructTupleForMove({
          moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.west,
        }),
      ]),
    },
  slotR0C0IsFilledByAliceAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer:
    {
      gameWithData:
        recordOfTicTacToeGamesWithData.ticTacToeWith3RowsAnd3Columns,
      isFinal: false,
      nextPlayerWithDataAndIndex:
        recordOfTicTacToePlayersWithDataAndIndex.alice,
      playerWithDataAndIndex: recordOfTicTacToePlayersWithDataAndIndex.bruno,
      scoreWithData:
        recordOfTicTacToeScoresWithData.aliceWith0PointsAndBrunoWith0Points,
      slotsWithData:
        indexedTicTacToeSlotsWithDataInWhichSlotR0C0IsFilledByAlice,
      validMovesWithData: new Map([
        constructTupleForMove({
          moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.center,
        }),
        constructTupleForMove({
          moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.east,
        }),
        constructTupleForMove({
          moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.north,
        }),
        constructTupleForMove({
          moveWithDataAndIndex:
            recordOfTicTacToeMovesWithDataAndIndex.northeast,
        }),
        constructTupleForMove({
          moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.south,
        }),
        constructTupleForMove({
          moveWithDataAndIndex:
            recordOfTicTacToeMovesWithDataAndIndex.southeast,
        }),
        constructTupleForMove({
          moveWithDataAndIndex:
            recordOfTicTacToeMovesWithDataAndIndex.southwest,
        }),
        constructTupleForMove({
          moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.west,
        }),
      ]),
    },
  slotR0C1IsFilledByAliceAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer:
    {
      gameWithData:
        recordOfTicTacToeGamesWithData.ticTacToeWith3RowsAnd3Columns,
      isFinal: false,
      nextPlayerWithDataAndIndex:
        recordOfTicTacToePlayersWithDataAndIndex.alice,
      playerWithDataAndIndex: recordOfTicTacToePlayersWithDataAndIndex.bruno,
      scoreWithData:
        recordOfTicTacToeScoresWithData.aliceWith0PointsAndBrunoWith0Points,
      slotsWithData:
        indexedTicTacToeSlotsWithDataInWhichSlotR0C1IsFilledByAlice,
      validMovesWithData: new Map([
        constructTupleForMove({
          moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.center,
        }),
        constructTupleForMove({
          moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.east,
        }),
        constructTupleForMove({
          moveWithDataAndIndex:
            recordOfTicTacToeMovesWithDataAndIndex.northeast,
        }),
        constructTupleForMove({
          moveWithDataAndIndex:
            recordOfTicTacToeMovesWithDataAndIndex.northwest,
        }),
        constructTupleForMove({
          moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.south,
        }),
        constructTupleForMove({
          moveWithDataAndIndex:
            recordOfTicTacToeMovesWithDataAndIndex.southeast,
        }),
        constructTupleForMove({
          moveWithDataAndIndex:
            recordOfTicTacToeMovesWithDataAndIndex.southwest,
        }),
        constructTupleForMove({
          moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.west,
        }),
      ]),
    },
  slotR0C2IsFilledByAliceAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer:
    {
      gameWithData:
        recordOfTicTacToeGamesWithData.ticTacToeWith3RowsAnd3Columns,
      isFinal: false,
      nextPlayerWithDataAndIndex:
        recordOfTicTacToePlayersWithDataAndIndex.alice,
      playerWithDataAndIndex: recordOfTicTacToePlayersWithDataAndIndex.bruno,
      scoreWithData:
        recordOfTicTacToeScoresWithData.aliceWith0PointsAndBrunoWith0Points,
      slotsWithData:
        indexedTicTacToeSlotsWithDataInWhichSlotR0C2IsFilledByAlice,
      validMovesWithData: new Map([
        constructTupleForMove({
          moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.center,
        }),
        constructTupleForMove({
          moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.east,
        }),
        constructTupleForMove({
          moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.north,
        }),
        constructTupleForMove({
          moveWithDataAndIndex:
            recordOfTicTacToeMovesWithDataAndIndex.northwest,
        }),
        constructTupleForMove({
          moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.south,
        }),
        constructTupleForMove({
          moveWithDataAndIndex:
            recordOfTicTacToeMovesWithDataAndIndex.southeast,
        }),
        constructTupleForMove({
          moveWithDataAndIndex:
            recordOfTicTacToeMovesWithDataAndIndex.southwest,
        }),
        constructTupleForMove({
          moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.west,
        }),
      ]),
    },
  slotR1C0IsFilledByAliceAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer:
    {
      gameWithData:
        recordOfTicTacToeGamesWithData.ticTacToeWith3RowsAnd3Columns,
      isFinal: false,
      nextPlayerWithDataAndIndex:
        recordOfTicTacToePlayersWithDataAndIndex.alice,
      playerWithDataAndIndex: recordOfTicTacToePlayersWithDataAndIndex.bruno,
      scoreWithData:
        recordOfTicTacToeScoresWithData.aliceWith0PointsAndBrunoWith0Points,
      slotsWithData:
        indexedTicTacToeSlotsWithDataInWhichSlotR1C0IsFilledByAlice,
      validMovesWithData: new Map([
        constructTupleForMove({
          moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.center,
        }),
        constructTupleForMove({
          moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.east,
        }),
        constructTupleForMove({
          moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.north,
        }),
        constructTupleForMove({
          moveWithDataAndIndex:
            recordOfTicTacToeMovesWithDataAndIndex.northeast,
        }),
        constructTupleForMove({
          moveWithDataAndIndex:
            recordOfTicTacToeMovesWithDataAndIndex.northwest,
        }),
        constructTupleForMove({
          moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.south,
        }),
        constructTupleForMove({
          moveWithDataAndIndex:
            recordOfTicTacToeMovesWithDataAndIndex.southeast,
        }),
        constructTupleForMove({
          moveWithDataAndIndex:
            recordOfTicTacToeMovesWithDataAndIndex.southwest,
        }),
      ]),
    },
  slotR1C1IsFilledByAliceAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer:
    {
      gameWithData:
        recordOfTicTacToeGamesWithData.ticTacToeWith3RowsAnd3Columns,
      isFinal: false,
      nextPlayerWithDataAndIndex:
        recordOfTicTacToePlayersWithDataAndIndex.alice,
      playerWithDataAndIndex: recordOfTicTacToePlayersWithDataAndIndex.bruno,
      scoreWithData:
        recordOfTicTacToeScoresWithData.aliceWith0PointsAndBrunoWith0Points,
      slotsWithData:
        indexedTicTacToeSlotsWithDataInWhichSlotR1C1IsFilledByAlice,
      validMovesWithData: new Map([
        constructTupleForMove({
          moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.east,
        }),
        constructTupleForMove({
          moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.north,
        }),
        constructTupleForMove({
          moveWithDataAndIndex:
            recordOfTicTacToeMovesWithDataAndIndex.northeast,
        }),
        constructTupleForMove({
          moveWithDataAndIndex:
            recordOfTicTacToeMovesWithDataAndIndex.northwest,
        }),
        constructTupleForMove({
          moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.south,
        }),
        constructTupleForMove({
          moveWithDataAndIndex:
            recordOfTicTacToeMovesWithDataAndIndex.southeast,
        }),
        constructTupleForMove({
          moveWithDataAndIndex:
            recordOfTicTacToeMovesWithDataAndIndex.southwest,
        }),
        constructTupleForMove({
          moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.west,
        }),
      ]),
    },
  slotR1C2IsFilledByAliceAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer:
    {
      gameWithData:
        recordOfTicTacToeGamesWithData.ticTacToeWith3RowsAnd3Columns,
      isFinal: false,
      nextPlayerWithDataAndIndex:
        recordOfTicTacToePlayersWithDataAndIndex.alice,
      playerWithDataAndIndex: recordOfTicTacToePlayersWithDataAndIndex.bruno,
      scoreWithData:
        recordOfTicTacToeScoresWithData.aliceWith0PointsAndBrunoWith0Points,
      slotsWithData:
        indexedTicTacToeSlotsWithDataInWhichSlotR1C2IsFilledByAlice,
      validMovesWithData: new Map([
        constructTupleForMove({
          moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.center,
        }),
        constructTupleForMove({
          moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.north,
        }),
        constructTupleForMove({
          moveWithDataAndIndex:
            recordOfTicTacToeMovesWithDataAndIndex.northeast,
        }),
        constructTupleForMove({
          moveWithDataAndIndex:
            recordOfTicTacToeMovesWithDataAndIndex.northwest,
        }),
        constructTupleForMove({
          moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.south,
        }),
        constructTupleForMove({
          moveWithDataAndIndex:
            recordOfTicTacToeMovesWithDataAndIndex.southeast,
        }),
        constructTupleForMove({
          moveWithDataAndIndex:
            recordOfTicTacToeMovesWithDataAndIndex.southwest,
        }),
        constructTupleForMove({
          moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.west,
        }),
      ]),
    },
  slotR2C0IsFilledByAliceAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer:
    {
      gameWithData:
        recordOfTicTacToeGamesWithData.ticTacToeWith3RowsAnd3Columns,
      isFinal: false,
      nextPlayerWithDataAndIndex:
        recordOfTicTacToePlayersWithDataAndIndex.alice,
      playerWithDataAndIndex: recordOfTicTacToePlayersWithDataAndIndex.bruno,
      scoreWithData:
        recordOfTicTacToeScoresWithData.aliceWith0PointsAndBrunoWith0Points,
      slotsWithData:
        indexedTicTacToeSlotsWithDataInWhichSlotR2C0IsFilledByAlice,
      validMovesWithData: new Map([
        constructTupleForMove({
          moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.center,
        }),
        constructTupleForMove({
          moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.east,
        }),
        constructTupleForMove({
          moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.north,
        }),
        constructTupleForMove({
          moveWithDataAndIndex:
            recordOfTicTacToeMovesWithDataAndIndex.northeast,
        }),
        constructTupleForMove({
          moveWithDataAndIndex:
            recordOfTicTacToeMovesWithDataAndIndex.northwest,
        }),
        constructTupleForMove({
          moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.south,
        }),
        constructTupleForMove({
          moveWithDataAndIndex:
            recordOfTicTacToeMovesWithDataAndIndex.southeast,
        }),
        constructTupleForMove({
          moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.west,
        }),
      ]),
    },
  slotR2C1IsFilledByAliceAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer:
    {
      gameWithData:
        recordOfTicTacToeGamesWithData.ticTacToeWith3RowsAnd3Columns,
      isFinal: false,
      nextPlayerWithDataAndIndex:
        recordOfTicTacToePlayersWithDataAndIndex.alice,
      playerWithDataAndIndex: recordOfTicTacToePlayersWithDataAndIndex.bruno,
      scoreWithData:
        recordOfTicTacToeScoresWithData.aliceWith0PointsAndBrunoWith0Points,
      slotsWithData:
        indexedTicTacToeSlotsWithDataInWhichSlotR2C1IsFilledByAlice,
      validMovesWithData: new Map([
        constructTupleForMove({
          moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.center,
        }),
        constructTupleForMove({
          moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.east,
        }),
        constructTupleForMove({
          moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.north,
        }),
        constructTupleForMove({
          moveWithDataAndIndex:
            recordOfTicTacToeMovesWithDataAndIndex.northeast,
        }),
        constructTupleForMove({
          moveWithDataAndIndex:
            recordOfTicTacToeMovesWithDataAndIndex.northwest,
        }),
        constructTupleForMove({
          moveWithDataAndIndex:
            recordOfTicTacToeMovesWithDataAndIndex.southeast,
        }),
        constructTupleForMove({
          moveWithDataAndIndex:
            recordOfTicTacToeMovesWithDataAndIndex.southwest,
        }),
        constructTupleForMove({
          moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.west,
        }),
      ]),
    },
  slotR2C2IsFilledByAliceAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer:
    {
      gameWithData:
        recordOfTicTacToeGamesWithData.ticTacToeWith3RowsAnd3Columns,
      isFinal: false,
      nextPlayerWithDataAndIndex:
        recordOfTicTacToePlayersWithDataAndIndex.alice,
      playerWithDataAndIndex: recordOfTicTacToePlayersWithDataAndIndex.bruno,
      scoreWithData:
        recordOfTicTacToeScoresWithData.aliceWith0PointsAndBrunoWith0Points,
      slotsWithData:
        indexedTicTacToeSlotsWithDataInWhichSlotR2C2IsFilledByAlice,
      validMovesWithData: new Map([
        constructTupleForMove({
          moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.center,
        }),
        constructTupleForMove({
          moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.east,
        }),
        constructTupleForMove({
          moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.north,
        }),
        constructTupleForMove({
          moveWithDataAndIndex:
            recordOfTicTacToeMovesWithDataAndIndex.northeast,
        }),
        constructTupleForMove({
          moveWithDataAndIndex:
            recordOfTicTacToeMovesWithDataAndIndex.northwest,
        }),
        constructTupleForMove({
          moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.south,
        }),
        constructTupleForMove({
          moveWithDataAndIndex:
            recordOfTicTacToeMovesWithDataAndIndex.southwest,
        }),
        constructTupleForMove({
          moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.west,
        }),
      ]),
    },
  slotsR0C0AndR0C1AndR1C0AreFilledByAliceAndR0C2AndR1C1AreFilledByBrunoAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer:
    {
      gameWithData:
        recordOfTicTacToeGamesWithData.ticTacToeWith3RowsAnd3Columns,
      isFinal: false,
      nextPlayerWithDataAndIndex:
        recordOfTicTacToePlayersWithDataAndIndex.alice,
      playerWithDataAndIndex: recordOfTicTacToePlayersWithDataAndIndex.bruno,
      scoreWithData:
        recordOfTicTacToeScoresWithData.aliceWith0PointsAndBrunoWith0Points,
      slotsWithData:
        indexedTicTacToeSlotsWithDataInWhichSlotsR0C0AndR0C1AndR1C0AreFilledByAliceAndR0C2AndR1C1AreFilledByBruno,
      validMovesWithData: new Map([
        constructTupleForMove({
          moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.east,
        }),
        constructTupleForMove({
          moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.south,
        }),
        constructTupleForMove({
          moveWithDataAndIndex:
            recordOfTicTacToeMovesWithDataAndIndex.southeast,
        }),
        constructTupleForMove({
          moveWithDataAndIndex:
            recordOfTicTacToeMovesWithDataAndIndex.southwest,
        }),
      ]),
    },
  slotsR0C0AndR0C1AndR1C2AndR2C0AreFilledByAliceAndR0C2AndR1C0AndR1C1AreFilledByBrunoAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer:
    {
      gameWithData:
        recordOfTicTacToeGamesWithData.ticTacToeWith3RowsAnd3Columns,
      isFinal: false,
      nextPlayerWithDataAndIndex:
        recordOfTicTacToePlayersWithDataAndIndex.alice,
      playerWithDataAndIndex: recordOfTicTacToePlayersWithDataAndIndex.bruno,
      scoreWithData:
        recordOfTicTacToeScoresWithData.aliceWith0PointsAndBrunoWith0Points,
      slotsWithData:
        indexedTicTacToeSlotsWithDataInWhichSlotsR0C0AndR0C1AndR1C2AndR2C0AreFilledByAliceAndR0C2AndR1C0AndR1C1AreFilledByBruno,
      validMovesWithData: new Map([
        constructTupleForMove({
          moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.south,
        }),
        constructTupleForMove({
          moveWithDataAndIndex:
            recordOfTicTacToeMovesWithDataAndIndex.southeast,
        }),
      ]),
    },
  slotsR0C0AndR0C1AreFilledByAliceAndR1C0IsFilledByBrunoAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer:
    {
      gameWithData:
        recordOfTicTacToeGamesWithData.ticTacToeWith3RowsAnd3Columns,
      isFinal: false,
      nextPlayerWithDataAndIndex:
        recordOfTicTacToePlayersWithDataAndIndex.alice,
      playerWithDataAndIndex: recordOfTicTacToePlayersWithDataAndIndex.bruno,
      scoreWithData:
        recordOfTicTacToeScoresWithData.aliceWith0PointsAndBrunoWith0Points,
      slotsWithData:
        indexedTicTacToeSlotsWithDataInWhichSlotsR0C0AndR0C1AreFilledByAliceAndR1C0IsFilledByBruno,
      validMovesWithData: new Map([
        constructTupleForMove({
          moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.center,
        }),
        constructTupleForMove({
          moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.east,
        }),
        constructTupleForMove({
          moveWithDataAndIndex:
            recordOfTicTacToeMovesWithDataAndIndex.northeast,
        }),
        constructTupleForMove({
          moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.south,
        }),
        constructTupleForMove({
          moveWithDataAndIndex:
            recordOfTicTacToeMovesWithDataAndIndex.southeast,
        }),
        constructTupleForMove({
          moveWithDataAndIndex:
            recordOfTicTacToeMovesWithDataAndIndex.southwest,
        }),
      ]),
    },
  slotsR0C0AndR0C1AreFilledByAliceAndR1C1IsFilledByBrunoAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer:
    {
      gameWithData:
        recordOfTicTacToeGamesWithData.ticTacToeWith3RowsAnd3Columns,
      isFinal: false,
      nextPlayerWithDataAndIndex:
        recordOfTicTacToePlayersWithDataAndIndex.alice,
      playerWithDataAndIndex: recordOfTicTacToePlayersWithDataAndIndex.bruno,
      scoreWithData:
        recordOfTicTacToeScoresWithData.aliceWith0PointsAndBrunoWith0Points,
      slotsWithData:
        indexedTicTacToeSlotsWithDataInWhichSlotsR0C0AndR0C1AreFilledByAliceAndR1C1IsFilledByBruno,
      validMovesWithData: new Map([
        constructTupleForMove({
          moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.east,
        }),
        constructTupleForMove({
          moveWithDataAndIndex:
            recordOfTicTacToeMovesWithDataAndIndex.northeast,
        }),
        constructTupleForMove({
          moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.south,
        }),
        constructTupleForMove({
          moveWithDataAndIndex:
            recordOfTicTacToeMovesWithDataAndIndex.southeast,
        }),
        constructTupleForMove({
          moveWithDataAndIndex:
            recordOfTicTacToeMovesWithDataAndIndex.southwest,
        }),
        constructTupleForMove({
          moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.west,
        }),
      ]),
    },
  slotsR0C0AndR0C1AreFilledByAliceAndR2C0IsFilledByBrunoAndAliceHas0PointsAndBrunoHas0PointsAndAliceIsTheCurrentPlayer:
    {
      gameWithData:
        recordOfTicTacToeGamesWithData.ticTacToeWith3RowsAnd3Columns,
      isFinal: false,
      nextPlayerWithDataAndIndex:
        recordOfTicTacToePlayersWithDataAndIndex.alice,
      playerWithDataAndIndex: recordOfTicTacToePlayersWithDataAndIndex.bruno,
      scoreWithData:
        recordOfTicTacToeScoresWithData.aliceWith0PointsAndBrunoWith0Points,
      slotsWithData:
        indexedTicTacToeSlotsWithDataInWhichSlotsR0C0AndR0C1AreFilledByAliceAndR2C0IsFilledByBruno,
      validMovesWithData: new Map([
        constructTupleForMove({
          moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.center,
        }),
        constructTupleForMove({
          moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.east,
        }),
        constructTupleForMove({
          moveWithDataAndIndex:
            recordOfTicTacToeMovesWithDataAndIndex.northeast,
        }),
        constructTupleForMove({
          moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.south,
        }),
        constructTupleForMove({
          moveWithDataAndIndex:
            recordOfTicTacToeMovesWithDataAndIndex.southeast,
        }),
        constructTupleForMove({
          moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.west,
        }),
      ]),
    },
  slotsR0C0AndR0C2AndR1C1AndR1C2AndR2C1AreFilledByAliceAndR0C1AndR1C0AndR2C0AndR2C2AreFilledByBrunoAndAliceHas1PointAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer:
    {
      gameWithData:
        recordOfTicTacToeGamesWithData.ticTacToeWith3RowsAnd3Columns,
      isFinal: true,
      nextPlayerWithDataAndIndex:
        recordOfTicTacToePlayersWithDataAndIndex.alice,
      playerWithDataAndIndex: recordOfTicTacToePlayersWithDataAndIndex.bruno,
      scoreWithData:
        recordOfTicTacToeScoresWithData.aliceWith0PointsAndBrunoWith0Points,
      slotsWithData:
        indexedTicTacToeSlotsWithDataInWhichSlotsR0C0AndR0C2AndR1C1AndR1C2AndR2C1AreFilledByAliceAndR0C1AndR1C0AndR2C0AndR2C2AreFilledByBruno,
      validMovesWithData: new Map([]),
    },
  slotsR0C0AndR0C2AndR1C1AndR2C1AndR2C2AreFilledByAliceAndR0C1AndR1C0AndR1C2AndR2C0AreFilledByBrunoAndAliceHas1PointAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer:
    {
      gameWithData:
        recordOfTicTacToeGamesWithData.ticTacToeWith3RowsAnd3Columns,
      isFinal: true,
      nextPlayerWithDataAndIndex:
        recordOfTicTacToePlayersWithDataAndIndex.alice,
      playerWithDataAndIndex: recordOfTicTacToePlayersWithDataAndIndex.bruno,
      scoreWithData:
        recordOfTicTacToeScoresWithData.aliceWith1PointAndBrunoWith0Points,
      slotsWithData:
        indexedTicTacToeSlotsWithDataInWhichSlotsR0C0AndR0C2AndR1C1AndR2C1AndR2C2AreFilledByAliceAndR0C1AndR1C0AndR1C2AndR2C0AreFilledByBruno,
      validMovesWithData: new Map([]),
    },
  slotsR0C0AndR0C2AndR1C1AndR2C1AreFilledByAliceAndR0C1AndR1C0AndR1C2AndR2C0AreFilledByBrunoAndAliceHas0PointsAndBrunoHas0PointsAndAliceIsTheCurrentPlayer:
    {
      gameWithData:
        recordOfTicTacToeGamesWithData.ticTacToeWith3RowsAnd3Columns,
      isFinal: false,
      nextPlayerWithDataAndIndex:
        recordOfTicTacToePlayersWithDataAndIndex.bruno,
      playerWithDataAndIndex: recordOfTicTacToePlayersWithDataAndIndex.alice,
      scoreWithData:
        recordOfTicTacToeScoresWithData.aliceWith0PointsAndBrunoWith0Points,
      slotsWithData:
        indexedTicTacToeSlotsWithDataInWhichSlotsR0C0AndR0C2AndR1C1AndR2C1AreFilledByAliceAndR0C1AndR1C0AndR1C2AndR2C0AreFilledByBruno,
      validMovesWithData: new Map([
        constructTupleForMove({
          moveWithDataAndIndex:
            recordOfTicTacToeMovesWithDataAndIndex.southeast,
        }),
      ]),
    },
  slotsR0C0AndR1C0AreFilledByAliceAndR0C1IsFilledByBrunoAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer:
    {
      gameWithData:
        recordOfTicTacToeGamesWithData.ticTacToeWith3RowsAnd3Columns,
      isFinal: false,
      nextPlayerWithDataAndIndex:
        recordOfTicTacToePlayersWithDataAndIndex.alice,
      playerWithDataAndIndex: recordOfTicTacToePlayersWithDataAndIndex.bruno,
      scoreWithData:
        recordOfTicTacToeScoresWithData.aliceWith0PointsAndBrunoWith0Points,
      slotsWithData:
        indexedTicTacToeSlotsWithDataInWhichSlotsR0C0AndR1C0AreFilledByAliceAndR0C1IsFilledByBruno,
      validMovesWithData: new Map([
        constructTupleForMove({
          moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.center,
        }),
        constructTupleForMove({
          moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.east,
        }),
        constructTupleForMove({
          moveWithDataAndIndex:
            recordOfTicTacToeMovesWithDataAndIndex.northeast,
        }),
        constructTupleForMove({
          moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.south,
        }),
        constructTupleForMove({
          moveWithDataAndIndex:
            recordOfTicTacToeMovesWithDataAndIndex.southeast,
        }),
        constructTupleForMove({
          moveWithDataAndIndex:
            recordOfTicTacToeMovesWithDataAndIndex.southwest,
        }),
      ]),
    },
  slotsR0C0AndR1C0AreFilledByAliceAndR2C2IsFilledByBrunoAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer:
    {
      gameWithData:
        recordOfTicTacToeGamesWithData.ticTacToeWith3RowsAnd3Columns,
      isFinal: false,
      nextPlayerWithDataAndIndex:
        recordOfTicTacToePlayersWithDataAndIndex.alice,
      playerWithDataAndIndex: recordOfTicTacToePlayersWithDataAndIndex.bruno,
      scoreWithData:
        recordOfTicTacToeScoresWithData.aliceWith0PointsAndBrunoWith0Points,
      slotsWithData:
        indexedTicTacToeSlotsWithDataInWhichSlotsR0C0AndR1C0AreFilledByAliceAndR2C2IsFilledByBruno,
      validMovesWithData: new Map([
        constructTupleForMove({
          moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.center,
        }),
        constructTupleForMove({
          moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.east,
        }),
        constructTupleForMove({
          moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.north,
        }),
        constructTupleForMove({
          moveWithDataAndIndex:
            recordOfTicTacToeMovesWithDataAndIndex.northeast,
        }),
        constructTupleForMove({
          moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.south,
        }),
        constructTupleForMove({
          moveWithDataAndIndex:
            recordOfTicTacToeMovesWithDataAndIndex.southwest,
        }),
      ]),
    },
  slotsR0C1AndR1C0AndR1C1AreFilledByAliceAndR0C0AndR2C1AreFilledByBrunoAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer:
    {
      gameWithData:
        recordOfTicTacToeGamesWithData.ticTacToeWith3RowsAnd3Columns,
      isFinal: false,
      nextPlayerWithDataAndIndex:
        recordOfTicTacToePlayersWithDataAndIndex.alice,
      playerWithDataAndIndex: recordOfTicTacToePlayersWithDataAndIndex.bruno,
      scoreWithData:
        recordOfTicTacToeScoresWithData.aliceWith0PointsAndBrunoWith0Points,
      slotsWithData:
        indexedTicTacToeSlotsWithDataInWhichSlotsR0C1AndR1C0AndR1C1AreFilledByAliceAndR0C0AndR2C1AreFilledByBruno,
      validMovesWithData: new Map([
        constructTupleForMove({
          moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.east,
        }),
        constructTupleForMove({
          moveWithDataAndIndex:
            recordOfTicTacToeMovesWithDataAndIndex.northeast,
        }),
        constructTupleForMove({
          moveWithDataAndIndex:
            recordOfTicTacToeMovesWithDataAndIndex.southeast,
        }),
        constructTupleForMove({
          moveWithDataAndIndex:
            recordOfTicTacToeMovesWithDataAndIndex.southwest,
        }),
      ]),
    },
  slotsR1C0AndR1C2AndR2C0AreFilledByAliceAndR0C0AndR1C1AreFilledByBrunoAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer:
    {
      gameWithData:
        recordOfTicTacToeGamesWithData.ticTacToeWith3RowsAnd3Columns,
      isFinal: false,
      nextPlayerWithDataAndIndex:
        recordOfTicTacToePlayersWithDataAndIndex.alice,
      playerWithDataAndIndex: recordOfTicTacToePlayersWithDataAndIndex.bruno,
      scoreWithData:
        recordOfTicTacToeScoresWithData.aliceWith0PointsAndBrunoWith0Points,
      slotsWithData:
        indexedTicTacToeSlotsWithDataInWhichSlotsR1C0AndR1C2AndR2C0AreFilledByAliceAndR0C0AndR1C1AreFilledByBruno,
      validMovesWithData: new Map([
        constructTupleForMove({
          moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.north,
        }),
        constructTupleForMove({
          moveWithDataAndIndex:
            recordOfTicTacToeMovesWithDataAndIndex.northeast,
        }),
        constructTupleForMove({
          moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.south,
        }),
        constructTupleForMove({
          moveWithDataAndIndex:
            recordOfTicTacToeMovesWithDataAndIndex.southeast,
        }),
      ]),
    },
} as const satisfies RecordOfRequiredParamsOfTicTacToeStates;

const recordOfTicTacToeStatesWithData = createRecordOfTicTacToeStatesWithData({
  recordOfRequiredParamsOfStates: recordOfRequiredParamsOfTicTacToeStates,
});

export type { RecordOfRequiredParamsOfTicTacToeStates };
export {
  recordOfRequiredParamsOfTicTacToeStates,
  recordOfTicTacToeStatesWithData,
};
