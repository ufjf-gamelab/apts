import { IndexOfTestingPlayer } from "../Player/setup.js";
import TestingSlot from "../Slot.js";

enum IndexOfTestingSlot {
  Null,
  PlayerOne,
  PlayerTwo,
}

type NameOfIndexOfTestingSlot = keyof typeof IndexOfTestingSlot;

const slotsDTOs = {
  [IndexOfTestingSlot.Null]: {
    indexOfOccupyingPlayer: null,
  },
  [IndexOfTestingSlot.PlayerOne]: {
    indexOfOccupyingPlayer: IndexOfTestingPlayer.One,
  },
  [IndexOfTestingSlot.PlayerTwo]: {
    indexOfOccupyingPlayer: IndexOfTestingPlayer.Two,
  },
} as const;

interface RecordOfSlotDTO {
  data: SlotDTO;
  index: IndexOfTestingSlot;
}

type SlotDTO = (typeof slotsDTOs)[IndexOfTestingSlot];

const listOfSlotsDTOs = [
  slotsDTOs[IndexOfTestingSlot.Null],
  slotsDTOs[IndexOfTestingSlot.PlayerOne],
  slotsDTOs[IndexOfTestingSlot.PlayerTwo],
] as const;

interface CreatedSlotAndRelatedData {
  dataRelatedToCreatedSlot: DataRelatedToCreatedSlot;
  slot: TestingSlot;
}

interface DataRelatedToCreatedSlot {
  index: IndexOfTestingSlot;
  indexOfOccupyingPlayer: TestingSlot["indexOfOccupyingPlayer"];
  nameOfIndex: NameOfIndexOfTestingSlot;
}

const createSlot = ({
  recordOfSlotDTO,
}: {
  recordOfSlotDTO: RecordOfSlotDTO;
}): CreatedSlotAndRelatedData => {
  const {
    data: { indexOfOccupyingPlayer },
    index: indexOfSlotDTO,
  } = recordOfSlotDTO;

  const slot = new TestingSlot({
    indexOfOccupyingPlayer,
  });

  return {
    dataRelatedToCreatedSlot: {
      index: indexOfSlotDTO,
      indexOfOccupyingPlayer,
      nameOfIndex: IndexOfTestingSlot[
        indexOfSlotDTO
      ] as NameOfIndexOfTestingSlot,
    },
    slot,
  };
};

type CreatedSlotsAndRelatedData = ReadonlyMap<
  IndexOfTestingSlot,
  CreatedSlotAndRelatedData
>;

const createSlots = (): CreatedSlotsAndRelatedData => {
  const slots = listOfSlotsDTOs.map((slotDTO, index) =>
    createSlot({
      recordOfSlotDTO: {
        data: slotDTO,
        index,
      },
    }),
  );

  return new Map(
    slots.map(
      ({ dataRelatedToCreatedSlot, slot }: CreatedSlotAndRelatedData) => [
        dataRelatedToCreatedSlot.index,
        {
          dataRelatedToCreatedSlot,
          slot,
        },
      ],
    ),
  );
};

interface TestSlotParams {
  slot: TestingSlot;
  testDescriptor: string;
}

export type {
  CreatedSlotAndRelatedData,
  CreatedSlotsAndRelatedData,
  TestSlotParams,
};
export { createSlots, IndexOfTestingSlot };
