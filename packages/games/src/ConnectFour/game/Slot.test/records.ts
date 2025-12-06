import { recordOfConnectFourPlayersWithDataAndIndex } from "../Player.test/indexedRecords.js";
import {
  createRecordOfConnectFourSlotsWithData,
  type RecordOfConnectFourSlotsWithData,
  type RecordOfRequiredParamsOfConnectFourSlots,
} from "./setup.js";

const recordsOfRequiredParamsOfSlots = {
  recordOfRequiredParamsOfConnectFourSlotsInWhichAllSlotsAreEmpty: {
    r0c0: {
      indexOfOccupyingPlayer: null,
    },
    r0c1: {
      indexOfOccupyingPlayer: null,
    },
    r0c2: {
      indexOfOccupyingPlayer: null,
    },
    r0c3: {
      indexOfOccupyingPlayer: null,
    },
    r0c4: {
      indexOfOccupyingPlayer: null,
    },
    r0c5: {
      indexOfOccupyingPlayer: null,
    },
    r0c6: {
      indexOfOccupyingPlayer: null,
    },
    r1c0: {
      indexOfOccupyingPlayer: null,
    },
    r1c1: {
      indexOfOccupyingPlayer: null,
    },
    r1c2: {
      indexOfOccupyingPlayer: null,
    },
    r1c3: {
      indexOfOccupyingPlayer: null,
    },
    r1c4: {
      indexOfOccupyingPlayer: null,
    },
    r1c5: {
      indexOfOccupyingPlayer: null,
    },
    r1c6: {
      indexOfOccupyingPlayer: null,
    },
    r2c0: {
      indexOfOccupyingPlayer: null,
    },
    r2c1: {
      indexOfOccupyingPlayer: null,
    },
    r2c2: {
      indexOfOccupyingPlayer: null,
    },
    r2c3: {
      indexOfOccupyingPlayer: null,
    },
    r2c4: {
      indexOfOccupyingPlayer: null,
    },
    r2c5: {
      indexOfOccupyingPlayer: null,
    },
    r2c6: {
      indexOfOccupyingPlayer: null,
    },
    r3c0: {
      indexOfOccupyingPlayer: null,
    },
    r3c1: {
      indexOfOccupyingPlayer: null,
    },
    r3c2: {
      indexOfOccupyingPlayer: null,
    },
    r3c3: {
      indexOfOccupyingPlayer: null,
    },
    r3c4: {
      indexOfOccupyingPlayer: null,
    },
    r3c5: {
      indexOfOccupyingPlayer: null,
    },
    r3c6: {
      indexOfOccupyingPlayer: null,
    },
    r4c0: {
      indexOfOccupyingPlayer: null,
    },
    r4c1: {
      indexOfOccupyingPlayer: null,
    },
    r4c2: {
      indexOfOccupyingPlayer: null,
    },
    r4c3: {
      indexOfOccupyingPlayer: null,
    },
    r4c4: {
      indexOfOccupyingPlayer: null,
    },
    r4c5: {
      indexOfOccupyingPlayer: null,
    },
    r4c6: {
      indexOfOccupyingPlayer: null,
    },
    r5c0: {
      indexOfOccupyingPlayer: null,
    },
    r5c1: {
      indexOfOccupyingPlayer: null,
    },
    r5c2: {
      indexOfOccupyingPlayer: null,
    },
    r5c3: {
      indexOfOccupyingPlayer: null,
    },
    r5c4: {
      indexOfOccupyingPlayer: null,
    },
    r5c5: {
      indexOfOccupyingPlayer: null,
    },
    r5c6: {
      indexOfOccupyingPlayer: null,
    },
  },
  recordOfRequiredParamsOfConnectFourSlotsInWhichSlotR0C0IsFilledByAlice: {
    r0c0: {
      indexOfOccupyingPlayer:
        recordOfConnectFourPlayersWithDataAndIndex.alice.indexOfPlayer,
    },
    r0c1: {
      indexOfOccupyingPlayer: null,
    },
    r0c2: {
      indexOfOccupyingPlayer: null,
    },
    r0c3: {
      indexOfOccupyingPlayer: null,
    },
    r0c4: {
      indexOfOccupyingPlayer: null,
    },
    r0c5: {
      indexOfOccupyingPlayer: null,
    },
    r0c6: {
      indexOfOccupyingPlayer: null,
    },
    r1c0: {
      indexOfOccupyingPlayer: null,
    },
    r1c1: {
      indexOfOccupyingPlayer: null,
    },
    r1c2: {
      indexOfOccupyingPlayer: null,
    },
    r1c3: {
      indexOfOccupyingPlayer: null,
    },
    r1c4: {
      indexOfOccupyingPlayer: null,
    },
    r1c5: {
      indexOfOccupyingPlayer: null,
    },
    r1c6: {
      indexOfOccupyingPlayer: null,
    },
    r2c0: {
      indexOfOccupyingPlayer: null,
    },
    r2c1: {
      indexOfOccupyingPlayer: null,
    },
    r2c2: {
      indexOfOccupyingPlayer: null,
    },
    r2c3: {
      indexOfOccupyingPlayer: null,
    },
    r2c4: {
      indexOfOccupyingPlayer: null,
    },
    r2c5: {
      indexOfOccupyingPlayer: null,
    },
    r2c6: {
      indexOfOccupyingPlayer: null,
    },
    r3c0: {
      indexOfOccupyingPlayer: null,
    },
    r3c1: {
      indexOfOccupyingPlayer: null,
    },
    r3c2: {
      indexOfOccupyingPlayer: null,
    },
    r3c3: {
      indexOfOccupyingPlayer: null,
    },
    r3c4: {
      indexOfOccupyingPlayer: null,
    },
    r3c5: {
      indexOfOccupyingPlayer: null,
    },
    r3c6: {
      indexOfOccupyingPlayer: null,
    },
    r4c0: {
      indexOfOccupyingPlayer: null,
    },
    r4c1: {
      indexOfOccupyingPlayer: null,
    },
    r4c2: {
      indexOfOccupyingPlayer: null,
    },
    r4c3: {
      indexOfOccupyingPlayer: null,
    },
    r4c4: {
      indexOfOccupyingPlayer: null,
    },
    r4c5: {
      indexOfOccupyingPlayer: null,
    },
    r4c6: {
      indexOfOccupyingPlayer: null,
    },
    r5c0: {
      indexOfOccupyingPlayer: null,
    },
    r5c1: {
      indexOfOccupyingPlayer: null,
    },
    r5c2: {
      indexOfOccupyingPlayer: null,
    },
    r5c3: {
      indexOfOccupyingPlayer: null,
    },
    r5c4: {
      indexOfOccupyingPlayer: null,
    },
    r5c5: {
      indexOfOccupyingPlayer: null,
    },
    r5c6: {
      indexOfOccupyingPlayer: null,
    },
  },
} satisfies Record<string, RecordOfRequiredParamsOfConnectFourSlots>;

const recordsOfTicTacTocSlotsWithData = {
  recordOfConnectFourSlotsWithDataInWhichAllSlotsAreEmpty:
    createRecordOfConnectFourSlotsWithData({
      recordOfRequiredParamsOfSlots:
        recordsOfRequiredParamsOfSlots.recordOfRequiredParamsOfConnectFourSlotsInWhichAllSlotsAreEmpty,
    }),
  recordOfConnectFourSlotsWithDataInWhichSlotR0C0IsFilledByAlice:
    createRecordOfConnectFourSlotsWithData({
      recordOfRequiredParamsOfSlots:
        recordsOfRequiredParamsOfSlots.recordOfRequiredParamsOfConnectFourSlotsInWhichSlotR0C0IsFilledByAlice,
    }),
} satisfies Record<
  string,
  RecordOfConnectFourSlotsWithData<RecordOfRequiredParamsOfConnectFourSlots>
>;

const {
  recordOfConnectFourSlotsWithDataInWhichAllSlotsAreEmpty,
  recordOfConnectFourSlotsWithDataInWhichSlotR0C0IsFilledByAlice,
} = recordsOfTicTacTocSlotsWithData;

export {
  recordOfConnectFourSlotsWithDataInWhichAllSlotsAreEmpty,
  recordOfConnectFourSlotsWithDataInWhichSlotR0C0IsFilledByAlice,
};
