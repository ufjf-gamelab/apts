import { recordOfConnectFourPlayersWithDataAndIndex } from "../ConnectFourPlayer.test/indexedRecords.js";
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
  recordOfRequiredParamsOfConnectFourSlotsInWhichSlotR5C0IsFilledByAlice: {
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
      indexOfOccupyingPlayer:
        recordOfConnectFourPlayersWithDataAndIndex.alice.indexOfPlayer,
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
  recordOfRequiredParamsOfConnectFourSlotsInWhichSlotsR5C0AndR4C0AndR3C0AndR2C0AreFilledByAliceAndR5C1AndR4C1AndR3C1AreFilledByBruno:
    {
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
        indexOfOccupyingPlayer:
          recordOfConnectFourPlayersWithDataAndIndex.alice.indexOfPlayer,
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
        indexOfOccupyingPlayer:
          recordOfConnectFourPlayersWithDataAndIndex.alice.indexOfPlayer,
      },
      r3c1: {
        indexOfOccupyingPlayer:
          recordOfConnectFourPlayersWithDataAndIndex.bruno.indexOfPlayer,
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
        indexOfOccupyingPlayer:
          recordOfConnectFourPlayersWithDataAndIndex.alice.indexOfPlayer,
      },
      r4c1: {
        indexOfOccupyingPlayer:
          recordOfConnectFourPlayersWithDataAndIndex.bruno.indexOfPlayer,
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
        indexOfOccupyingPlayer:
          recordOfConnectFourPlayersWithDataAndIndex.alice.indexOfPlayer,
      },
      r5c1: {
        indexOfOccupyingPlayer:
          recordOfConnectFourPlayersWithDataAndIndex.bruno.indexOfPlayer,
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
  recordOfRequiredParamsOfConnectFourSlotsInWhichSlotsR5C0AndR4C0AndR3C0AndR2C1AndR1C1AndR0C1AreFilledByAliceAndR5C1AndR4C1AndR3C1AndR2C0AndR1C0AreFilledByBruno:
    {
      r0c0: {
        indexOfOccupyingPlayer: null,
      },
      r0c1: {
        indexOfOccupyingPlayer:
          recordOfConnectFourPlayersWithDataAndIndex.alice.indexOfPlayer,
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
        indexOfOccupyingPlayer:
          recordOfConnectFourPlayersWithDataAndIndex.bruno.indexOfPlayer,
      },
      r1c1: {
        indexOfOccupyingPlayer:
          recordOfConnectFourPlayersWithDataAndIndex.alice.indexOfPlayer,
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
        indexOfOccupyingPlayer:
          recordOfConnectFourPlayersWithDataAndIndex.bruno.indexOfPlayer,
      },
      r2c1: {
        indexOfOccupyingPlayer:
          recordOfConnectFourPlayersWithDataAndIndex.alice.indexOfPlayer,
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
        indexOfOccupyingPlayer:
          recordOfConnectFourPlayersWithDataAndIndex.alice.indexOfPlayer,
      },
      r3c1: {
        indexOfOccupyingPlayer:
          recordOfConnectFourPlayersWithDataAndIndex.bruno.indexOfPlayer,
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
        indexOfOccupyingPlayer:
          recordOfConnectFourPlayersWithDataAndIndex.alice.indexOfPlayer,
      },
      r4c1: {
        indexOfOccupyingPlayer:
          recordOfConnectFourPlayersWithDataAndIndex.bruno.indexOfPlayer,
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
        indexOfOccupyingPlayer:
          recordOfConnectFourPlayersWithDataAndIndex.alice.indexOfPlayer,
      },
      r5c1: {
        indexOfOccupyingPlayer:
          recordOfConnectFourPlayersWithDataAndIndex.bruno.indexOfPlayer,
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
  recordOfRequiredParamsOfConnectFourSlotsInWhichSlotsR5C0AndR4C0AndR3C0AndR2C1AndR1C1AreFilledByAliceAndR5C1AndR4C1AndR3C1AndR2C0AndR1C0AreFilledByBruno:
    {
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
        indexOfOccupyingPlayer:
          recordOfConnectFourPlayersWithDataAndIndex.bruno.indexOfPlayer,
      },
      r1c1: {
        indexOfOccupyingPlayer:
          recordOfConnectFourPlayersWithDataAndIndex.alice.indexOfPlayer,
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
        indexOfOccupyingPlayer:
          recordOfConnectFourPlayersWithDataAndIndex.bruno.indexOfPlayer,
      },
      r2c1: {
        indexOfOccupyingPlayer:
          recordOfConnectFourPlayersWithDataAndIndex.alice.indexOfPlayer,
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
        indexOfOccupyingPlayer:
          recordOfConnectFourPlayersWithDataAndIndex.alice.indexOfPlayer,
      },
      r3c1: {
        indexOfOccupyingPlayer:
          recordOfConnectFourPlayersWithDataAndIndex.bruno.indexOfPlayer,
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
        indexOfOccupyingPlayer:
          recordOfConnectFourPlayersWithDataAndIndex.alice.indexOfPlayer,
      },
      r4c1: {
        indexOfOccupyingPlayer:
          recordOfConnectFourPlayersWithDataAndIndex.bruno.indexOfPlayer,
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
        indexOfOccupyingPlayer:
          recordOfConnectFourPlayersWithDataAndIndex.alice.indexOfPlayer,
      },
      r5c1: {
        indexOfOccupyingPlayer:
          recordOfConnectFourPlayersWithDataAndIndex.bruno.indexOfPlayer,
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
  recordOfRequiredParamsOfConnectFourSlotsInWhichSlotsR5C0AndR4C0AndR3C0AreFilledByAliceAndR5C1AndR4C1AndR3C1AreFilledByBruno:
    {
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
        indexOfOccupyingPlayer:
          recordOfConnectFourPlayersWithDataAndIndex.alice.indexOfPlayer,
      },
      r3c1: {
        indexOfOccupyingPlayer:
          recordOfConnectFourPlayersWithDataAndIndex.bruno.indexOfPlayer,
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
        indexOfOccupyingPlayer:
          recordOfConnectFourPlayersWithDataAndIndex.alice.indexOfPlayer,
      },
      r4c1: {
        indexOfOccupyingPlayer:
          recordOfConnectFourPlayersWithDataAndIndex.bruno.indexOfPlayer,
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
        indexOfOccupyingPlayer:
          recordOfConnectFourPlayersWithDataAndIndex.alice.indexOfPlayer,
      },
      r5c1: {
        indexOfOccupyingPlayer:
          recordOfConnectFourPlayersWithDataAndIndex.bruno.indexOfPlayer,
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
  recordOfRequiredParamsOfConnectFourSlotsInWhichSlotsR5C2AndR5C3AndR5C4AndR5C6AndR4C0AndR4C4AndR4C5AndR4C6AndR3C3AndR3C5AndR3C6AndR2C1AreFilledByAliceAndR5C0AndR5C1AndR5C5AndR4C1AndR4C2AndR4C3AndR3C0AndR3C1AndR3C4AndR2C3AndR1C1AreFilledByBruno:
    {
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
        indexOfOccupyingPlayer:
          recordOfConnectFourPlayersWithDataAndIndex.bruno.indexOfPlayer,
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
        indexOfOccupyingPlayer:
          recordOfConnectFourPlayersWithDataAndIndex.alice.indexOfPlayer,
      },
      r2c2: {
        indexOfOccupyingPlayer: null,
      },
      r2c3: {
        indexOfOccupyingPlayer:
          recordOfConnectFourPlayersWithDataAndIndex.bruno.indexOfPlayer,
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
        indexOfOccupyingPlayer:
          recordOfConnectFourPlayersWithDataAndIndex.bruno.indexOfPlayer,
      },
      r3c1: {
        indexOfOccupyingPlayer:
          recordOfConnectFourPlayersWithDataAndIndex.bruno.indexOfPlayer,
      },
      r3c2: {
        indexOfOccupyingPlayer: null,
      },
      r3c3: {
        indexOfOccupyingPlayer:
          recordOfConnectFourPlayersWithDataAndIndex.alice.indexOfPlayer,
      },
      r3c4: {
        indexOfOccupyingPlayer:
          recordOfConnectFourPlayersWithDataAndIndex.bruno.indexOfPlayer,
      },
      r3c5: {
        indexOfOccupyingPlayer:
          recordOfConnectFourPlayersWithDataAndIndex.alice.indexOfPlayer,
      },
      r3c6: {
        indexOfOccupyingPlayer:
          recordOfConnectFourPlayersWithDataAndIndex.alice.indexOfPlayer,
      },
      r4c0: {
        indexOfOccupyingPlayer:
          recordOfConnectFourPlayersWithDataAndIndex.alice.indexOfPlayer,
      },
      r4c1: {
        indexOfOccupyingPlayer:
          recordOfConnectFourPlayersWithDataAndIndex.bruno.indexOfPlayer,
      },
      r4c2: {
        indexOfOccupyingPlayer:
          recordOfConnectFourPlayersWithDataAndIndex.bruno.indexOfPlayer,
      },
      r4c3: {
        indexOfOccupyingPlayer:
          recordOfConnectFourPlayersWithDataAndIndex.bruno.indexOfPlayer,
      },
      r4c4: {
        indexOfOccupyingPlayer:
          recordOfConnectFourPlayersWithDataAndIndex.alice.indexOfPlayer,
      },
      r4c5: {
        indexOfOccupyingPlayer:
          recordOfConnectFourPlayersWithDataAndIndex.alice.indexOfPlayer,
      },
      r4c6: {
        indexOfOccupyingPlayer:
          recordOfConnectFourPlayersWithDataAndIndex.alice.indexOfPlayer,
      },
      r5c0: {
        indexOfOccupyingPlayer:
          recordOfConnectFourPlayersWithDataAndIndex.bruno.indexOfPlayer,
      },
      r5c1: {
        indexOfOccupyingPlayer:
          recordOfConnectFourPlayersWithDataAndIndex.bruno.indexOfPlayer,
      },
      r5c2: {
        indexOfOccupyingPlayer:
          recordOfConnectFourPlayersWithDataAndIndex.alice.indexOfPlayer,
      },
      r5c3: {
        indexOfOccupyingPlayer:
          recordOfConnectFourPlayersWithDataAndIndex.alice.indexOfPlayer,
      },
      r5c4: {
        indexOfOccupyingPlayer:
          recordOfConnectFourPlayersWithDataAndIndex.alice.indexOfPlayer,
      },
      r5c5: {
        indexOfOccupyingPlayer:
          recordOfConnectFourPlayersWithDataAndIndex.bruno.indexOfPlayer,
      },
      r5c6: {
        indexOfOccupyingPlayer:
          recordOfConnectFourPlayersWithDataAndIndex.alice.indexOfPlayer,
      },
    },
} satisfies Record<string, RecordOfRequiredParamsOfConnectFourSlots>;

const recordsOfTicTacTocSlotsWithData = {
  recordOfConnectFourSlotsWithDataInWhichAllSlotsAreEmpty:
    createRecordOfConnectFourSlotsWithData({
      recordOfRequiredParamsOfSlots:
        recordsOfRequiredParamsOfSlots.recordOfRequiredParamsOfConnectFourSlotsInWhichAllSlotsAreEmpty,
    }),
  recordOfConnectFourSlotsWithDataInWhichSlotR5C0IsFilledByAlice:
    createRecordOfConnectFourSlotsWithData({
      recordOfRequiredParamsOfSlots:
        recordsOfRequiredParamsOfSlots.recordOfRequiredParamsOfConnectFourSlotsInWhichSlotR5C0IsFilledByAlice,
    }),
  recordOfConnectFourSlotsWithDataInWhichSlotsR5C0AndR4C0AndR3C0AndR2C0AreFilledByAliceAndR5C1AndR4C1AndR3C1AreFilledByBruno:
    createRecordOfConnectFourSlotsWithData({
      recordOfRequiredParamsOfSlots:
        recordsOfRequiredParamsOfSlots.recordOfRequiredParamsOfConnectFourSlotsInWhichSlotsR5C0AndR4C0AndR3C0AndR2C0AreFilledByAliceAndR5C1AndR4C1AndR3C1AreFilledByBruno,
    }),
  recordOfConnectFourSlotsWithDataInWhichSlotsR5C0AndR4C0AndR3C0AndR2C1AndR1C1AndR0C1AreFilledByAliceAndR5C1AndR4C1AndR3C1AndR2C0AndR1C0AreFilledByBruno:
    createRecordOfConnectFourSlotsWithData({
      recordOfRequiredParamsOfSlots:
        recordsOfRequiredParamsOfSlots.recordOfRequiredParamsOfConnectFourSlotsInWhichSlotsR5C0AndR4C0AndR3C0AndR2C1AndR1C1AndR0C1AreFilledByAliceAndR5C1AndR4C1AndR3C1AndR2C0AndR1C0AreFilledByBruno,
    }),
  recordOfConnectFourSlotsWithDataInWhichSlotsR5C0AndR4C0AndR3C0AndR2C1AndR1C1AreFilledByAliceAndR5C1AndR4C1AndR3C1AndR2C0AndR1C0AreFilledByBruno:
    createRecordOfConnectFourSlotsWithData({
      recordOfRequiredParamsOfSlots:
        recordsOfRequiredParamsOfSlots.recordOfRequiredParamsOfConnectFourSlotsInWhichSlotsR5C0AndR4C0AndR3C0AndR2C1AndR1C1AreFilledByAliceAndR5C1AndR4C1AndR3C1AndR2C0AndR1C0AreFilledByBruno,
    }),
  recordOfConnectFourSlotsWithDataInWhichSlotsR5C0AndR4C0AndR3C0AreFilledByAliceAndR5C1AndR4C1AndR3C1AreFilledByBruno:
    createRecordOfConnectFourSlotsWithData({
      recordOfRequiredParamsOfSlots:
        recordsOfRequiredParamsOfSlots.recordOfRequiredParamsOfConnectFourSlotsInWhichSlotsR5C0AndR4C0AndR3C0AreFilledByAliceAndR5C1AndR4C1AndR3C1AreFilledByBruno,
    }),
  recordOfConnectFourSlotsWithDataInWhichSlotsR5C2AndR5C3AndR5C4AndR5C6AndR4C0AndR4C4AndR4C5AndR4C6AndR3C3AndR3C5AndR3C6AndR2C1AreFilledByAliceAndR5C0AndR5C1AndR5C5AndR4C1AndR4C2AndR4C3AndR3C0AndR3C1AndR3C4AndR2C3AndR1C1AreFilledByBruno:
    createRecordOfConnectFourSlotsWithData({
      recordOfRequiredParamsOfSlots:
        recordsOfRequiredParamsOfSlots.recordOfRequiredParamsOfConnectFourSlotsInWhichSlotsR5C2AndR5C3AndR5C4AndR5C6AndR4C0AndR4C4AndR4C5AndR4C6AndR3C3AndR3C5AndR3C6AndR2C1AreFilledByAliceAndR5C0AndR5C1AndR5C5AndR4C1AndR4C2AndR4C3AndR3C0AndR3C1AndR3C4AndR2C3AndR1C1AreFilledByBruno,
    }),
} satisfies Record<
  string,
  RecordOfConnectFourSlotsWithData<RecordOfRequiredParamsOfConnectFourSlots>
>;

const {
  recordOfConnectFourSlotsWithDataInWhichAllSlotsAreEmpty,
  recordOfConnectFourSlotsWithDataInWhichSlotR5C0IsFilledByAlice,
  recordOfConnectFourSlotsWithDataInWhichSlotsR5C0AndR4C0AndR3C0AndR2C0AreFilledByAliceAndR5C1AndR4C1AndR3C1AreFilledByBruno,
  recordOfConnectFourSlotsWithDataInWhichSlotsR5C0AndR4C0AndR3C0AndR2C1AndR1C1AndR0C1AreFilledByAliceAndR5C1AndR4C1AndR3C1AndR2C0AndR1C0AreFilledByBruno,
  recordOfConnectFourSlotsWithDataInWhichSlotsR5C0AndR4C0AndR3C0AndR2C1AndR1C1AreFilledByAliceAndR5C1AndR4C1AndR3C1AndR2C0AndR1C0AreFilledByBruno,
  recordOfConnectFourSlotsWithDataInWhichSlotsR5C0AndR4C0AndR3C0AreFilledByAliceAndR5C1AndR4C1AndR3C1AreFilledByBruno,
  recordOfConnectFourSlotsWithDataInWhichSlotsR5C2AndR5C3AndR5C4AndR5C6AndR4C0AndR4C4AndR4C5AndR4C6AndR3C3AndR3C5AndR3C6AndR2C1AreFilledByAliceAndR5C0AndR5C1AndR5C5AndR4C1AndR4C2AndR4C3AndR3C0AndR3C1AndR3C4AndR2C3AndR1C1AreFilledByBruno,
} = recordsOfTicTacTocSlotsWithData;

export {
  recordOfConnectFourSlotsWithDataInWhichAllSlotsAreEmpty,
  recordOfConnectFourSlotsWithDataInWhichSlotR5C0IsFilledByAlice,
  recordOfConnectFourSlotsWithDataInWhichSlotsR5C0AndR4C0AndR3C0AndR2C0AreFilledByAliceAndR5C1AndR4C1AndR3C1AreFilledByBruno,
  recordOfConnectFourSlotsWithDataInWhichSlotsR5C0AndR4C0AndR3C0AndR2C1AndR1C1AndR0C1AreFilledByAliceAndR5C1AndR4C1AndR3C1AndR2C0AndR1C0AreFilledByBruno,
  recordOfConnectFourSlotsWithDataInWhichSlotsR5C0AndR4C0AndR3C0AndR2C1AndR1C1AreFilledByAliceAndR5C1AndR4C1AndR3C1AndR2C0AndR1C0AreFilledByBruno,
  recordOfConnectFourSlotsWithDataInWhichSlotsR5C0AndR4C0AndR3C0AreFilledByAliceAndR5C1AndR4C1AndR3C1AreFilledByBruno,
  recordOfConnectFourSlotsWithDataInWhichSlotsR5C2AndR5C3AndR5C4AndR5C6AndR4C0AndR4C4AndR4C5AndR4C6AndR3C3AndR3C5AndR3C6AndR2C1AreFilledByAliceAndR5C0AndR5C1AndR5C5AndR4C1AndR4C2AndR4C3AndR3C0AndR3C1AndR3C4AndR2C3AndR1C1AreFilledByBruno,
};
