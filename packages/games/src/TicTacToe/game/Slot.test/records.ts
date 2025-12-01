import { recordOfTicTacToePlayersWithDataAndIndex } from "../Player.test/indexedRecords.js";
import {
  createRecordOfTicTacToeSlotsWithData,
  type RecordOfRequiredParamsOfTicTacToeSlots,
  type RecordOfTicTacToeSlotsWithData,
} from "./setup.js";

const recordsOfRequiredParamsOfSlots = {
  recordOfRequiredParamsOfTicTacToeSlotsInWhichAllSlotsAreEmpty: {
    center: {
      indexOfOccupyingPlayer: null,
    },
    east: {
      indexOfOccupyingPlayer: null,
    },
    north: {
      indexOfOccupyingPlayer: null,
    },
    northeast: {
      indexOfOccupyingPlayer: null,
    },
    northwest: {
      indexOfOccupyingPlayer: null,
    },
    south: {
      indexOfOccupyingPlayer: null,
    },
    southeast: {
      indexOfOccupyingPlayer: null,
    },
    southwest: {
      indexOfOccupyingPlayer: null,
    },
    west: {
      indexOfOccupyingPlayer: null,
    },
  },
  recordOfRequiredParamsOfTicTacToeSlotsInWhichSlotR0C0IsFilledByAlice: {
    center: {
      indexOfOccupyingPlayer: null,
    },
    east: {
      indexOfOccupyingPlayer: null,
    },
    north: {
      indexOfOccupyingPlayer: null,
    },
    northeast: {
      indexOfOccupyingPlayer: null,
    },
    northwest: {
      indexOfOccupyingPlayer:
        recordOfTicTacToePlayersWithDataAndIndex.alice.indexOfPlayer,
    },
    south: {
      indexOfOccupyingPlayer: null,
    },
    southeast: {
      indexOfOccupyingPlayer: null,
    },
    southwest: {
      indexOfOccupyingPlayer: null,
    },
    west: {
      indexOfOccupyingPlayer: null,
    },
  },
  recordOfRequiredParamsOfTicTacToeSlotsInWhichSlotR0C1IsFilledByAlice: {
    center: {
      indexOfOccupyingPlayer: null,
    },
    east: {
      indexOfOccupyingPlayer: null,
    },
    north: {
      indexOfOccupyingPlayer:
        recordOfTicTacToePlayersWithDataAndIndex.alice.indexOfPlayer,
    },
    northeast: {
      indexOfOccupyingPlayer: null,
    },
    northwest: {
      indexOfOccupyingPlayer: null,
    },
    south: {
      indexOfOccupyingPlayer: null,
    },
    southeast: {
      indexOfOccupyingPlayer: null,
    },
    southwest: {
      indexOfOccupyingPlayer: null,
    },
    west: {
      indexOfOccupyingPlayer: null,
    },
  },
  recordOfRequiredParamsOfTicTacToeSlotsInWhichSlotR0C2IsFilledByAlice: {
    center: {
      indexOfOccupyingPlayer: null,
    },
    east: {
      indexOfOccupyingPlayer: null,
    },
    north: {
      indexOfOccupyingPlayer: null,
    },
    northeast: {
      indexOfOccupyingPlayer:
        recordOfTicTacToePlayersWithDataAndIndex.alice.indexOfPlayer,
    },
    northwest: {
      indexOfOccupyingPlayer: null,
    },
    south: {
      indexOfOccupyingPlayer: null,
    },
    southeast: {
      indexOfOccupyingPlayer: null,
    },
    southwest: {
      indexOfOccupyingPlayer: null,
    },
    west: {
      indexOfOccupyingPlayer: null,
    },
  },
  recordOfRequiredParamsOfTicTacToeSlotsInWhichSlotR1C0IsFilledByAlice: {
    center: {
      indexOfOccupyingPlayer: null,
    },
    east: {
      indexOfOccupyingPlayer: null,
    },
    north: {
      indexOfOccupyingPlayer: null,
    },
    northeast: {
      indexOfOccupyingPlayer: null,
    },
    northwest: {
      indexOfOccupyingPlayer: null,
    },
    south: {
      indexOfOccupyingPlayer: null,
    },
    southeast: {
      indexOfOccupyingPlayer: null,
    },
    southwest: {
      indexOfOccupyingPlayer: null,
    },
    west: {
      indexOfOccupyingPlayer:
        recordOfTicTacToePlayersWithDataAndIndex.alice.indexOfPlayer,
    },
  },
  recordOfRequiredParamsOfTicTacToeSlotsInWhichSlotR1C1IsFilledByAlice: {
    center: {
      indexOfOccupyingPlayer:
        recordOfTicTacToePlayersWithDataAndIndex.alice.indexOfPlayer,
    },
    east: {
      indexOfOccupyingPlayer: null,
    },
    north: {
      indexOfOccupyingPlayer: null,
    },
    northeast: {
      indexOfOccupyingPlayer: null,
    },
    northwest: {
      indexOfOccupyingPlayer: null,
    },
    south: {
      indexOfOccupyingPlayer: null,
    },
    southeast: {
      indexOfOccupyingPlayer: null,
    },
    southwest: {
      indexOfOccupyingPlayer: null,
    },
    west: {
      indexOfOccupyingPlayer: null,
    },
  },
  recordOfRequiredParamsOfTicTacToeSlotsInWhichSlotR1C2IsFilledByAlice: {
    center: {
      indexOfOccupyingPlayer: null,
    },
    east: {
      indexOfOccupyingPlayer:
        recordOfTicTacToePlayersWithDataAndIndex.alice.indexOfPlayer,
    },
    north: {
      indexOfOccupyingPlayer: null,
    },
    northeast: {
      indexOfOccupyingPlayer: null,
    },
    northwest: {
      indexOfOccupyingPlayer: null,
    },
    south: {
      indexOfOccupyingPlayer: null,
    },
    southeast: {
      indexOfOccupyingPlayer: null,
    },
    southwest: {
      indexOfOccupyingPlayer: null,
    },
    west: {
      indexOfOccupyingPlayer: null,
    },
  },
  recordOfRequiredParamsOfTicTacToeSlotsInWhichSlotR2C0IsFilledByAlice: {
    center: {
      indexOfOccupyingPlayer: null,
    },
    east: {
      indexOfOccupyingPlayer: null,
    },
    north: {
      indexOfOccupyingPlayer: null,
    },
    northeast: {
      indexOfOccupyingPlayer: null,
    },
    northwest: {
      indexOfOccupyingPlayer: null,
    },
    south: {
      indexOfOccupyingPlayer: null,
    },
    southeast: {
      indexOfOccupyingPlayer: null,
    },
    southwest: {
      indexOfOccupyingPlayer:
        recordOfTicTacToePlayersWithDataAndIndex.alice.indexOfPlayer,
    },
    west: {
      indexOfOccupyingPlayer: null,
    },
  },
  recordOfRequiredParamsOfTicTacToeSlotsInWhichSlotR2C1IsFilledByAlice: {
    center: {
      indexOfOccupyingPlayer: null,
    },
    east: {
      indexOfOccupyingPlayer: null,
    },
    north: {
      indexOfOccupyingPlayer: null,
    },
    northeast: {
      indexOfOccupyingPlayer: null,
    },
    northwest: {
      indexOfOccupyingPlayer: null,
    },
    south: {
      indexOfOccupyingPlayer:
        recordOfTicTacToePlayersWithDataAndIndex.alice.indexOfPlayer,
    },
    southeast: {
      indexOfOccupyingPlayer: null,
    },
    southwest: {
      indexOfOccupyingPlayer: null,
    },
    west: {
      indexOfOccupyingPlayer: null,
    },
  },
  recordOfRequiredParamsOfTicTacToeSlotsInWhichSlotR2C2IsFilledByAlice: {
    center: {
      indexOfOccupyingPlayer: null,
    },
    east: {
      indexOfOccupyingPlayer: null,
    },
    north: {
      indexOfOccupyingPlayer: null,
    },
    northeast: {
      indexOfOccupyingPlayer: null,
    },
    northwest: {
      indexOfOccupyingPlayer: null,
    },
    south: {
      indexOfOccupyingPlayer: null,
    },
    southeast: {
      indexOfOccupyingPlayer:
        recordOfTicTacToePlayersWithDataAndIndex.alice.indexOfPlayer,
    },
    southwest: {
      indexOfOccupyingPlayer: null,
    },
    west: {
      indexOfOccupyingPlayer: null,
    },
  },
  recordOfRequiredParamsOfTicTacToeSlotsInWhichSlotsR0C0AndR0C1AndR1C0AreFilledByAliceAndR0C2AndR1C1AreFilledByBruno:
    {
      center: {
        indexOfOccupyingPlayer:
          recordOfTicTacToePlayersWithDataAndIndex.bruno.indexOfPlayer,
      },
      east: {
        indexOfOccupyingPlayer: null,
      },
      north: {
        indexOfOccupyingPlayer:
          recordOfTicTacToePlayersWithDataAndIndex.alice.indexOfPlayer,
      },
      northeast: {
        indexOfOccupyingPlayer:
          recordOfTicTacToePlayersWithDataAndIndex.bruno.indexOfPlayer,
      },
      northwest: {
        indexOfOccupyingPlayer:
          recordOfTicTacToePlayersWithDataAndIndex.alice.indexOfPlayer,
      },
      south: {
        indexOfOccupyingPlayer: null,
      },
      southeast: {
        indexOfOccupyingPlayer: null,
      },
      southwest: {
        indexOfOccupyingPlayer: null,
      },
      west: {
        indexOfOccupyingPlayer:
          recordOfTicTacToePlayersWithDataAndIndex.alice.indexOfPlayer,
      },
    },
  recordOfRequiredParamsOfTicTacToeSlotsInWhichSlotsR0C0AndR0C1AndR1C2AndR2C0AreFilledByAliceAndR0C2AndR1C0AndR1C1AreFilledByBruno:
    {
      center: {
        indexOfOccupyingPlayer:
          recordOfTicTacToePlayersWithDataAndIndex.bruno.indexOfPlayer,
      },
      east: {
        indexOfOccupyingPlayer:
          recordOfTicTacToePlayersWithDataAndIndex.alice.indexOfPlayer,
      },
      north: {
        indexOfOccupyingPlayer:
          recordOfTicTacToePlayersWithDataAndIndex.alice.indexOfPlayer,
      },
      northeast: {
        indexOfOccupyingPlayer:
          recordOfTicTacToePlayersWithDataAndIndex.bruno.indexOfPlayer,
      },
      northwest: {
        indexOfOccupyingPlayer:
          recordOfTicTacToePlayersWithDataAndIndex.alice.indexOfPlayer,
      },
      south: {
        indexOfOccupyingPlayer: null,
      },
      southeast: {
        indexOfOccupyingPlayer: null,
      },
      southwest: {
        indexOfOccupyingPlayer:
          recordOfTicTacToePlayersWithDataAndIndex.alice.indexOfPlayer,
      },
      west: {
        indexOfOccupyingPlayer:
          recordOfTicTacToePlayersWithDataAndIndex.bruno.indexOfPlayer,
      },
    },
  recordOfRequiredParamsOfTicTacToeSlotsInWhichSlotsR0C0AndR0C1AreFilledByAliceAndR1C1IsFilledByBruno:
    {
      center: {
        indexOfOccupyingPlayer:
          recordOfTicTacToePlayersWithDataAndIndex.bruno.indexOfPlayer,
      },
      east: {
        indexOfOccupyingPlayer: null,
      },
      north: {
        indexOfOccupyingPlayer:
          recordOfTicTacToePlayersWithDataAndIndex.alice.indexOfPlayer,
      },
      northeast: {
        indexOfOccupyingPlayer: null,
      },
      northwest: {
        indexOfOccupyingPlayer:
          recordOfTicTacToePlayersWithDataAndIndex.alice.indexOfPlayer,
      },
      south: {
        indexOfOccupyingPlayer: null,
      },
      southeast: {
        indexOfOccupyingPlayer: null,
      },
      southwest: {
        indexOfOccupyingPlayer: null,
      },
      west: {
        indexOfOccupyingPlayer: null,
      },
    },
  recordOfRequiredParamsOfTicTacToeSlotsInWhichSlotsR0C0AndR0C1AreFilledByAliceAndR2C0IsFilledByBruno:
    {
      center: {
        indexOfOccupyingPlayer: null,
      },
      east: {
        indexOfOccupyingPlayer: null,
      },
      north: {
        indexOfOccupyingPlayer:
          recordOfTicTacToePlayersWithDataAndIndex.alice.indexOfPlayer,
      },
      northeast: {
        indexOfOccupyingPlayer: null,
      },
      northwest: {
        indexOfOccupyingPlayer:
          recordOfTicTacToePlayersWithDataAndIndex.alice.indexOfPlayer,
      },
      south: {
        indexOfOccupyingPlayer: null,
      },
      southeast: {
        indexOfOccupyingPlayer: null,
      },
      southwest: {
        indexOfOccupyingPlayer:
          recordOfTicTacToePlayersWithDataAndIndex.bruno.indexOfPlayer,
      },
      west: {
        indexOfOccupyingPlayer: null,
      },
    },
  recordOfRequiredParamsOfTicTacToeSlotsInWhichSlotsR0C0AndR0C2AndR1C1AndR1C2AndR2C1AreFilledByAliceAndR0C1AndR1C0AndR2C0AndR2C2AreFilledByBruno:
    {
      center: {
        indexOfOccupyingPlayer:
          recordOfTicTacToePlayersWithDataAndIndex.alice.indexOfPlayer,
      },
      east: {
        indexOfOccupyingPlayer:
          recordOfTicTacToePlayersWithDataAndIndex.alice.indexOfPlayer,
      },
      north: {
        indexOfOccupyingPlayer:
          recordOfTicTacToePlayersWithDataAndIndex.bruno.indexOfPlayer,
      },
      northeast: {
        indexOfOccupyingPlayer:
          recordOfTicTacToePlayersWithDataAndIndex.alice.indexOfPlayer,
      },
      northwest: {
        indexOfOccupyingPlayer:
          recordOfTicTacToePlayersWithDataAndIndex.alice.indexOfPlayer,
      },
      south: {
        indexOfOccupyingPlayer:
          recordOfTicTacToePlayersWithDataAndIndex.alice.indexOfPlayer,
      },
      southeast: {
        indexOfOccupyingPlayer:
          recordOfTicTacToePlayersWithDataAndIndex.bruno.indexOfPlayer,
      },
      southwest: {
        indexOfOccupyingPlayer:
          recordOfTicTacToePlayersWithDataAndIndex.bruno.indexOfPlayer,
      },
      west: {
        indexOfOccupyingPlayer:
          recordOfTicTacToePlayersWithDataAndIndex.bruno.indexOfPlayer,
      },
    },
  recordOfRequiredParamsOfTicTacToeSlotsInWhichSlotsR0C0AndR0C2AndR1C1AndR2C1AndR2C2AreFilledByAliceAndR0C1AndR1C0AndR1C2AndR2C0AreFilledByBruno:
    {
      center: {
        indexOfOccupyingPlayer:
          recordOfTicTacToePlayersWithDataAndIndex.alice.indexOfPlayer,
      },
      east: {
        indexOfOccupyingPlayer:
          recordOfTicTacToePlayersWithDataAndIndex.bruno.indexOfPlayer,
      },
      north: {
        indexOfOccupyingPlayer:
          recordOfTicTacToePlayersWithDataAndIndex.bruno.indexOfPlayer,
      },
      northeast: {
        indexOfOccupyingPlayer:
          recordOfTicTacToePlayersWithDataAndIndex.alice.indexOfPlayer,
      },
      northwest: {
        indexOfOccupyingPlayer:
          recordOfTicTacToePlayersWithDataAndIndex.alice.indexOfPlayer,
      },
      south: {
        indexOfOccupyingPlayer:
          recordOfTicTacToePlayersWithDataAndIndex.alice.indexOfPlayer,
      },
      southeast: {
        indexOfOccupyingPlayer:
          recordOfTicTacToePlayersWithDataAndIndex.alice.indexOfPlayer,
      },
      southwest: {
        indexOfOccupyingPlayer:
          recordOfTicTacToePlayersWithDataAndIndex.bruno.indexOfPlayer,
      },
      west: {
        indexOfOccupyingPlayer:
          recordOfTicTacToePlayersWithDataAndIndex.bruno.indexOfPlayer,
      },
    },
  recordOfRequiredParamsOfTicTacToeSlotsInWhichSlotsR0C0AndR0C2AndR1C1AndR2C1AreFilledByAliceAndR0C1AndR1C0AndR1C2AndR2C0AreFilledByBruno:
    {
      center: {
        indexOfOccupyingPlayer:
          recordOfTicTacToePlayersWithDataAndIndex.alice.indexOfPlayer,
      },
      east: {
        indexOfOccupyingPlayer:
          recordOfTicTacToePlayersWithDataAndIndex.bruno.indexOfPlayer,
      },
      north: {
        indexOfOccupyingPlayer:
          recordOfTicTacToePlayersWithDataAndIndex.bruno.indexOfPlayer,
      },
      northeast: {
        indexOfOccupyingPlayer:
          recordOfTicTacToePlayersWithDataAndIndex.alice.indexOfPlayer,
      },
      northwest: {
        indexOfOccupyingPlayer:
          recordOfTicTacToePlayersWithDataAndIndex.alice.indexOfPlayer,
      },
      south: {
        indexOfOccupyingPlayer:
          recordOfTicTacToePlayersWithDataAndIndex.alice.indexOfPlayer,
      },
      southeast: {
        indexOfOccupyingPlayer: null,
      },
      southwest: {
        indexOfOccupyingPlayer:
          recordOfTicTacToePlayersWithDataAndIndex.bruno.indexOfPlayer,
      },
      west: {
        indexOfOccupyingPlayer:
          recordOfTicTacToePlayersWithDataAndIndex.bruno.indexOfPlayer,
      },
    },
  recordOfRequiredParamsOfTicTacToeSlotsInWhichSlotsR0C0AndR1C0AreFilledByAliceAndR0C1IsFilledByBruno:
    {
      center: {
        indexOfOccupyingPlayer: null,
      },
      east: {
        indexOfOccupyingPlayer: null,
      },
      north: {
        indexOfOccupyingPlayer:
          recordOfTicTacToePlayersWithDataAndIndex.bruno.indexOfPlayer,
      },
      northeast: {
        indexOfOccupyingPlayer: null,
      },
      northwest: {
        indexOfOccupyingPlayer:
          recordOfTicTacToePlayersWithDataAndIndex.alice.indexOfPlayer,
      },
      south: {
        indexOfOccupyingPlayer: null,
      },
      southeast: {
        indexOfOccupyingPlayer: null,
      },
      southwest: {
        indexOfOccupyingPlayer: null,
      },
      west: {
        indexOfOccupyingPlayer:
          recordOfTicTacToePlayersWithDataAndIndex.alice.indexOfPlayer,
      },
    },
  recordOfRequiredParamsOfTicTacToeSlotsInWhichSlotsR1C0AndR1C2AndR2C0AreFilledByAliceAndR0C0AndR1C1AreFilledByBruno:
    {
      center: {
        indexOfOccupyingPlayer:
          recordOfTicTacToePlayersWithDataAndIndex.bruno.indexOfPlayer,
      },
      east: {
        indexOfOccupyingPlayer:
          recordOfTicTacToePlayersWithDataAndIndex.alice.indexOfPlayer,
      },
      north: {
        indexOfOccupyingPlayer: null,
      },
      northeast: {
        indexOfOccupyingPlayer:
          recordOfTicTacToePlayersWithDataAndIndex.bruno.indexOfPlayer,
      },
      northwest: {
        indexOfOccupyingPlayer:
          recordOfTicTacToePlayersWithDataAndIndex.bruno.indexOfPlayer,
      },
      south: {
        indexOfOccupyingPlayer: null,
      },
      southeast: {
        indexOfOccupyingPlayer: null,
      },
      southwest: {
        indexOfOccupyingPlayer:
          recordOfTicTacToePlayersWithDataAndIndex.alice.indexOfPlayer,
      },
      west: {
        indexOfOccupyingPlayer:
          recordOfTicTacToePlayersWithDataAndIndex.alice.indexOfPlayer,
      },
    },
} satisfies Record<string, RecordOfRequiredParamsOfTicTacToeSlots>;

const recordsOfTicTacTocSlotsWithData = {
  recordOfTicTacToeSlotsWithDataInWhichAllSlotsAreEmpty:
    createRecordOfTicTacToeSlotsWithData({
      recordOfRequiredParamsOfSlots:
        recordsOfRequiredParamsOfSlots.recordOfRequiredParamsOfTicTacToeSlotsInWhichAllSlotsAreEmpty,
    }),
  recordOfTicTacToeSlotsWithDataInWhichSlotR0C0IsFilledByAlice:
    createRecordOfTicTacToeSlotsWithData({
      recordOfRequiredParamsOfSlots:
        recordsOfRequiredParamsOfSlots.recordOfRequiredParamsOfTicTacToeSlotsInWhichSlotR0C0IsFilledByAlice,
    }),
  recordOfTicTacToeSlotsWithDataInWhichSlotR0C1IsFilledByAlice:
    createRecordOfTicTacToeSlotsWithData({
      recordOfRequiredParamsOfSlots:
        recordsOfRequiredParamsOfSlots.recordOfRequiredParamsOfTicTacToeSlotsInWhichSlotR0C1IsFilledByAlice,
    }),
  recordOfTicTacToeSlotsWithDataInWhichSlotR0C2IsFilledByAlice:
    createRecordOfTicTacToeSlotsWithData({
      recordOfRequiredParamsOfSlots:
        recordsOfRequiredParamsOfSlots.recordOfRequiredParamsOfTicTacToeSlotsInWhichSlotR0C2IsFilledByAlice,
    }),
  recordOfTicTacToeSlotsWithDataInWhichSlotR1C0IsFilledByAlice:
    createRecordOfTicTacToeSlotsWithData({
      recordOfRequiredParamsOfSlots:
        recordsOfRequiredParamsOfSlots.recordOfRequiredParamsOfTicTacToeSlotsInWhichSlotR1C0IsFilledByAlice,
    }),
  recordOfTicTacToeSlotsWithDataInWhichSlotR1C1IsFilledByAlice:
    createRecordOfTicTacToeSlotsWithData({
      recordOfRequiredParamsOfSlots:
        recordsOfRequiredParamsOfSlots.recordOfRequiredParamsOfTicTacToeSlotsInWhichSlotR1C1IsFilledByAlice,
    }),
  recordOfTicTacToeSlotsWithDataInWhichSlotR1C2IsFilledByAlice:
    createRecordOfTicTacToeSlotsWithData({
      recordOfRequiredParamsOfSlots:
        recordsOfRequiredParamsOfSlots.recordOfRequiredParamsOfTicTacToeSlotsInWhichSlotR1C2IsFilledByAlice,
    }),
  recordOfTicTacToeSlotsWithDataInWhichSlotR2C0IsFilledByAlice:
    createRecordOfTicTacToeSlotsWithData({
      recordOfRequiredParamsOfSlots:
        recordsOfRequiredParamsOfSlots.recordOfRequiredParamsOfTicTacToeSlotsInWhichSlotR2C0IsFilledByAlice,
    }),
  recordOfTicTacToeSlotsWithDataInWhichSlotR2C1IsFilledByAlice:
    createRecordOfTicTacToeSlotsWithData({
      recordOfRequiredParamsOfSlots:
        recordsOfRequiredParamsOfSlots.recordOfRequiredParamsOfTicTacToeSlotsInWhichSlotR2C1IsFilledByAlice,
    }),
  recordOfTicTacToeSlotsWithDataInWhichSlotR2C2IsFilledByAlice:
    createRecordOfTicTacToeSlotsWithData({
      recordOfRequiredParamsOfSlots:
        recordsOfRequiredParamsOfSlots.recordOfRequiredParamsOfTicTacToeSlotsInWhichSlotR2C2IsFilledByAlice,
    }),
  recordOfTicTacToeSlotsWithDataInWhichSlotsR0C0AndR0C1AndR1C0AreFilledByAliceAndR0C2AndR1C1AreFilledByBruno:
    createRecordOfTicTacToeSlotsWithData({
      recordOfRequiredParamsOfSlots:
        recordsOfRequiredParamsOfSlots.recordOfRequiredParamsOfTicTacToeSlotsInWhichSlotsR0C0AndR0C1AndR1C0AreFilledByAliceAndR0C2AndR1C1AreFilledByBruno,
    }),
  recordOfTicTacToeSlotsWithDataInWhichSlotsR0C0AndR0C1AndR1C2AndR2C0AreFilledByAliceAndR0C2AndR1C0AndR1C1AreFilledByBruno:
    createRecordOfTicTacToeSlotsWithData({
      recordOfRequiredParamsOfSlots:
        recordsOfRequiredParamsOfSlots.recordOfRequiredParamsOfTicTacToeSlotsInWhichSlotsR0C0AndR0C1AndR1C2AndR2C0AreFilledByAliceAndR0C2AndR1C0AndR1C1AreFilledByBruno,
    }),
  recordOfTicTacToeSlotsWithDataInWhichSlotsR0C0AndR0C1AreFilledByAliceAndR1C1IsFilledByBruno:
    createRecordOfTicTacToeSlotsWithData({
      recordOfRequiredParamsOfSlots:
        recordsOfRequiredParamsOfSlots.recordOfRequiredParamsOfTicTacToeSlotsInWhichSlotsR0C0AndR0C1AreFilledByAliceAndR1C1IsFilledByBruno,
    }),
  recordOfTicTacToeSlotsWithDataInWhichSlotsR0C0AndR0C1AreFilledByAliceAndR2C0IsFilledByBruno:
    createRecordOfTicTacToeSlotsWithData({
      recordOfRequiredParamsOfSlots:
        recordsOfRequiredParamsOfSlots.recordOfRequiredParamsOfTicTacToeSlotsInWhichSlotsR0C0AndR0C1AreFilledByAliceAndR2C0IsFilledByBruno,
    }),
  recordOfTicTacToeSlotsWithDataInWhichSlotsR0C0AndR0C2AndR1C1AndR1C2AndR2C1AreFilledByAliceAndR0C1AndR1C0AndR2C0AndR2C2AreFilledByBruno:
    createRecordOfTicTacToeSlotsWithData({
      recordOfRequiredParamsOfSlots:
        recordsOfRequiredParamsOfSlots.recordOfRequiredParamsOfTicTacToeSlotsInWhichSlotsR0C0AndR0C2AndR1C1AndR1C2AndR2C1AreFilledByAliceAndR0C1AndR1C0AndR2C0AndR2C2AreFilledByBruno,
    }),
  recordOfTicTacToeSlotsWithDataInWhichSlotsR0C0AndR0C2AndR1C1AndR2C1AndR2C2AreFilledByAliceAndR0C1AndR1C0AndR1C2AndR2C0AreFilledByBruno:
    createRecordOfTicTacToeSlotsWithData({
      recordOfRequiredParamsOfSlots:
        recordsOfRequiredParamsOfSlots.recordOfRequiredParamsOfTicTacToeSlotsInWhichSlotsR0C0AndR0C2AndR1C1AndR2C1AndR2C2AreFilledByAliceAndR0C1AndR1C0AndR1C2AndR2C0AreFilledByBruno,
    }),
  recordOfTicTacToeSlotsWithDataInWhichSlotsR0C0AndR0C2AndR1C1AndR2C1AreFilledByAliceAndR0C1AndR1C0AndR1C2AndR2C0AreFilledByBruno:
    createRecordOfTicTacToeSlotsWithData({
      recordOfRequiredParamsOfSlots:
        recordsOfRequiredParamsOfSlots.recordOfRequiredParamsOfTicTacToeSlotsInWhichSlotsR0C0AndR0C2AndR1C1AndR2C1AreFilledByAliceAndR0C1AndR1C0AndR1C2AndR2C0AreFilledByBruno,
    }),
  recordOfTicTacToeSlotsWithDataInWhichSlotsR0C0AndR1C0AreFilledByAliceAndR0C1IsFilledByBruno:
    createRecordOfTicTacToeSlotsWithData({
      recordOfRequiredParamsOfSlots:
        recordsOfRequiredParamsOfSlots.recordOfRequiredParamsOfTicTacToeSlotsInWhichSlotsR0C0AndR1C0AreFilledByAliceAndR0C1IsFilledByBruno,
    }),
  recordOfTicTacToeSlotsWithDataInWhichSlotsR1C0AndR1C2AndR2C0AreFilledByAliceAndR0C0AndR1C1AreFilledByBruno:
    createRecordOfTicTacToeSlotsWithData({
      recordOfRequiredParamsOfSlots:
        recordsOfRequiredParamsOfSlots.recordOfRequiredParamsOfTicTacToeSlotsInWhichSlotsR1C0AndR1C2AndR2C0AreFilledByAliceAndR0C0AndR1C1AreFilledByBruno,
    }),
} satisfies Record<
  string,
  RecordOfTicTacToeSlotsWithData<RecordOfRequiredParamsOfTicTacToeSlots>
>;

const {
  recordOfTicTacToeSlotsWithDataInWhichAllSlotsAreEmpty,
  recordOfTicTacToeSlotsWithDataInWhichSlotR0C0IsFilledByAlice,
  recordOfTicTacToeSlotsWithDataInWhichSlotR0C1IsFilledByAlice,
  recordOfTicTacToeSlotsWithDataInWhichSlotR0C2IsFilledByAlice,
  recordOfTicTacToeSlotsWithDataInWhichSlotR1C0IsFilledByAlice,
  recordOfTicTacToeSlotsWithDataInWhichSlotR1C1IsFilledByAlice,
  recordOfTicTacToeSlotsWithDataInWhichSlotR1C2IsFilledByAlice,
  recordOfTicTacToeSlotsWithDataInWhichSlotR2C0IsFilledByAlice,
  recordOfTicTacToeSlotsWithDataInWhichSlotR2C1IsFilledByAlice,
  recordOfTicTacToeSlotsWithDataInWhichSlotR2C2IsFilledByAlice,
  recordOfTicTacToeSlotsWithDataInWhichSlotsR0C0AndR0C1AndR1C0AreFilledByAliceAndR0C2AndR1C1AreFilledByBruno,
  recordOfTicTacToeSlotsWithDataInWhichSlotsR0C0AndR0C1AndR1C2AndR2C0AreFilledByAliceAndR0C2AndR1C0AndR1C1AreFilledByBruno,
  recordOfTicTacToeSlotsWithDataInWhichSlotsR0C0AndR0C1AreFilledByAliceAndR1C1IsFilledByBruno,
  recordOfTicTacToeSlotsWithDataInWhichSlotsR0C0AndR0C1AreFilledByAliceAndR2C0IsFilledByBruno,
  recordOfTicTacToeSlotsWithDataInWhichSlotsR0C0AndR0C2AndR1C1AndR1C2AndR2C1AreFilledByAliceAndR0C1AndR1C0AndR2C0AndR2C2AreFilledByBruno,
  recordOfTicTacToeSlotsWithDataInWhichSlotsR0C0AndR0C2AndR1C1AndR2C1AndR2C2AreFilledByAliceAndR0C1AndR1C0AndR1C2AndR2C0AreFilledByBruno,
  recordOfTicTacToeSlotsWithDataInWhichSlotsR0C0AndR0C2AndR1C1AndR2C1AreFilledByAliceAndR0C1AndR1C0AndR1C2AndR2C0AreFilledByBruno,
  recordOfTicTacToeSlotsWithDataInWhichSlotsR0C0AndR1C0AreFilledByAliceAndR0C1IsFilledByBruno,
  recordOfTicTacToeSlotsWithDataInWhichSlotsR1C0AndR1C2AndR2C0AreFilledByAliceAndR0C0AndR1C1AreFilledByBruno,
} = recordsOfTicTacTocSlotsWithData;

export {
  recordOfTicTacToeSlotsWithDataInWhichAllSlotsAreEmpty,
  recordOfTicTacToeSlotsWithDataInWhichSlotR0C0IsFilledByAlice,
  recordOfTicTacToeSlotsWithDataInWhichSlotR0C1IsFilledByAlice,
  recordOfTicTacToeSlotsWithDataInWhichSlotR0C2IsFilledByAlice,
  recordOfTicTacToeSlotsWithDataInWhichSlotR1C0IsFilledByAlice,
  recordOfTicTacToeSlotsWithDataInWhichSlotR1C1IsFilledByAlice,
  recordOfTicTacToeSlotsWithDataInWhichSlotR1C2IsFilledByAlice,
  recordOfTicTacToeSlotsWithDataInWhichSlotR2C0IsFilledByAlice,
  recordOfTicTacToeSlotsWithDataInWhichSlotR2C1IsFilledByAlice,
  recordOfTicTacToeSlotsWithDataInWhichSlotR2C2IsFilledByAlice,
  recordOfTicTacToeSlotsWithDataInWhichSlotsR0C0AndR0C1AndR1C0AreFilledByAliceAndR0C2AndR1C1AreFilledByBruno,
  recordOfTicTacToeSlotsWithDataInWhichSlotsR0C0AndR0C1AndR1C2AndR2C0AreFilledByAliceAndR0C2AndR1C0AndR1C1AreFilledByBruno,
  recordOfTicTacToeSlotsWithDataInWhichSlotsR0C0AndR0C1AreFilledByAliceAndR1C1IsFilledByBruno,
  recordOfTicTacToeSlotsWithDataInWhichSlotsR0C0AndR0C1AreFilledByAliceAndR2C0IsFilledByBruno,
  recordOfTicTacToeSlotsWithDataInWhichSlotsR0C0AndR0C2AndR1C1AndR1C2AndR2C1AreFilledByAliceAndR0C1AndR1C0AndR2C0AndR2C2AreFilledByBruno,
  recordOfTicTacToeSlotsWithDataInWhichSlotsR0C0AndR0C2AndR1C1AndR2C1AndR2C2AreFilledByAliceAndR0C1AndR1C0AndR1C2AndR2C0AreFilledByBruno,
  recordOfTicTacToeSlotsWithDataInWhichSlotsR0C0AndR0C2AndR1C1AndR2C1AreFilledByAliceAndR0C1AndR1C0AndR1C2AndR2C0AreFilledByBruno,
  recordOfTicTacToeSlotsWithDataInWhichSlotsR0C0AndR1C0AreFilledByAliceAndR0C1IsFilledByBruno,
  recordOfTicTacToeSlotsWithDataInWhichSlotsR1C0AndR1C2AndR2C0AreFilledByAliceAndR0C0AndR1C1AreFilledByBruno,
};
