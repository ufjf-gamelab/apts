import { recordOfTicTacToePlayersWithDataAndIndex } from "../Player.test/indexedRecords.js";
import {
  createRecordOfTicTacToeSlotsWithData,
  type RecordOfRequiredParamsOfTicTacToeSlots,
} from "./setup.js";

const recordOfRequiredParamsOfTicTacToeSlotsInWhichAllSlotsAreEmpty = {
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
} as const satisfies RecordOfRequiredParamsOfTicTacToeSlots;

const recordOfRequiredParamsOfTicTacToeSlotsInWhichSlotR0C0IsFilledByAlice = {
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
} as const satisfies RecordOfRequiredParamsOfTicTacToeSlots;

const recordOfRequiredParamsOfTicTacToeSlotsInWhichSlotR1C1IsFilledByAlice = {
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
} as const satisfies RecordOfRequiredParamsOfTicTacToeSlots;

const recordOfRequiredParamsOfTicTacToeSlotsInWhichSlotR2C1IsFilledByAlice = {
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
} as const satisfies RecordOfRequiredParamsOfTicTacToeSlots;

const recordOfRequiredParamsOfTicTacToeSlotsInWhichSlotR0C0AndR0C2AndR1C1AndR1C2AndR2C1AreFilledByAliceAndR0C1AndR1C0AndR2C0AndR2C2AreFilledByBruno =
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
  } as const satisfies RecordOfRequiredParamsOfTicTacToeSlots;

const recordOfRequiredParamsOfTicTacToeSlotsInWhichSlotR0C0AndR0C2AndR1C1AndR2C1AndR2C2AreFilledByAliceAndR0C1AndR1C0AndR1C2AndR2C0AreFilledByBruno =
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
  } as const satisfies RecordOfRequiredParamsOfTicTacToeSlots;

const recordOfTicTacToeSlotsWithDataInWhichAllSlotsAreEmpty =
  createRecordOfTicTacToeSlotsWithData({
    recordOfRequiredParamsOfSlots:
      recordOfRequiredParamsOfTicTacToeSlotsInWhichAllSlotsAreEmpty,
  });

const recordOfTicTacToeSlotsWithDataInWhichSlotR0C0IsFilledByAlice =
  createRecordOfTicTacToeSlotsWithData({
    recordOfRequiredParamsOfSlots:
      recordOfRequiredParamsOfTicTacToeSlotsInWhichSlotR0C0IsFilledByAlice,
  });

const recordOfTicTacToeSlotsWithDataInWhichSlotR1C1IsFilledByAlice =
  createRecordOfTicTacToeSlotsWithData({
    recordOfRequiredParamsOfSlots:
      recordOfRequiredParamsOfTicTacToeSlotsInWhichSlotR1C1IsFilledByAlice,
  });

const recordOfTicTacToeSlotsWithDataInWhichSlotR2C1IsFilledByAlice =
  createRecordOfTicTacToeSlotsWithData({
    recordOfRequiredParamsOfSlots:
      recordOfRequiredParamsOfTicTacToeSlotsInWhichSlotR2C1IsFilledByAlice,
  });

const recordOfTicTacToeSlotsWithDataInWhichSlotR0C0AndR0C2AndR1C1AndR1C2AndR2C1AreFilledByAliceAndR0C1AndR1C0AndR2C0AndR2C2AreFilledByBruno =
  createRecordOfTicTacToeSlotsWithData({
    recordOfRequiredParamsOfSlots:
      recordOfRequiredParamsOfTicTacToeSlotsInWhichSlotR0C0AndR0C2AndR1C1AndR1C2AndR2C1AreFilledByAliceAndR0C1AndR1C0AndR2C0AndR2C2AreFilledByBruno,
  });

const recordOfTicTacToeSlotsWithDataInWhichSlotR0C0AndR0C2AndR1C1AndR2C1AndR2C2AreFilledByAliceAndR0C1AndR1C0AndR1C2AndR2C0AreFilledByBruno =
  createRecordOfTicTacToeSlotsWithData({
    recordOfRequiredParamsOfSlots:
      recordOfRequiredParamsOfTicTacToeSlotsInWhichSlotR0C0AndR0C2AndR1C1AndR2C1AndR2C2AreFilledByAliceAndR0C1AndR1C0AndR1C2AndR2C0AreFilledByBruno,
  });

export {
  recordOfRequiredParamsOfTicTacToeSlotsInWhichAllSlotsAreEmpty,
  recordOfRequiredParamsOfTicTacToeSlotsInWhichSlotR0C0AndR0C2AndR1C1AndR1C2AndR2C1AreFilledByAliceAndR0C1AndR1C0AndR2C0AndR2C2AreFilledByBruno,
  recordOfRequiredParamsOfTicTacToeSlotsInWhichSlotR0C0AndR0C2AndR1C1AndR2C1AndR2C2AreFilledByAliceAndR0C1AndR1C0AndR1C2AndR2C0AreFilledByBruno,
  recordOfRequiredParamsOfTicTacToeSlotsInWhichSlotR0C0IsFilledByAlice,
  recordOfRequiredParamsOfTicTacToeSlotsInWhichSlotR1C1IsFilledByAlice,
  recordOfRequiredParamsOfTicTacToeSlotsInWhichSlotR2C1IsFilledByAlice,
  recordOfTicTacToeSlotsWithDataInWhichAllSlotsAreEmpty,
  recordOfTicTacToeSlotsWithDataInWhichSlotR0C0AndR0C2AndR1C1AndR1C2AndR2C1AreFilledByAliceAndR0C1AndR1C0AndR2C0AndR2C2AreFilledByBruno,
  recordOfTicTacToeSlotsWithDataInWhichSlotR0C0AndR0C2AndR1C1AndR2C1AndR2C2AreFilledByAliceAndR0C1AndR1C0AndR1C2AndR2C0AreFilledByBruno,
  recordOfTicTacToeSlotsWithDataInWhichSlotR0C0IsFilledByAlice,
  recordOfTicTacToeSlotsWithDataInWhichSlotR1C1IsFilledByAlice,
  recordOfTicTacToeSlotsWithDataInWhichSlotR2C1IsFilledByAlice,
};
