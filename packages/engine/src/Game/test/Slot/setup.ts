import { QUANTITY_OF_SLOTS } from "../Game.js";
import { IndexOfTestingPlayer } from "../Player/setup.js";
import TestingSlot from "../Slot.js";

enum CategoryOfTestingOccupyingPlayer {
  Null,
  One,
  Two,
}

enum IndexOfTestingSlot {
  NorthwestOfNorthwest,
  NorthOfNorthwest,
  NortheastOfNorthwest,
  WestOfNorthwest,
  CenterOfNorthwest,
  EastOfNorthwest,
  SouthwestOfNorthwest,
  SouthOfNorthwest,
  SoutheastOfNorthwest,

  NorthwestOfNorth,
  NorthOfNorth,
  NortheastOfNorth,
  WestOfNorth,
  CenterOfNorth,
  EastOfNorth,
  SouthwestOfNorth,
  SouthOfNorth,
  SoutheastOfNorth,

  NorthwestOfNortheast,
  NorthOfNortheast,
  NortheastOfNortheast,
  WestOfNortheast,
  CenterOfNortheast,
  EastOfNortheast,
  SouthwestOfNortheast,
  SouthOfNortheast,
  SoutheastOfNortheast,

  NorthwestOfWest,
  NorthOfWest,
  NortheastOfWest,
  WestOfWest,
  CenterOfWest,
  EastOfWest,
  SouthwestOfWest,
  SouthOfWest,
  SoutheastOfWest,

  NorthwestOfCenter,
  NorthOfCenter,
  NortheastOfCenter,
  WestOfCenter,
  CenterOfCenter,
  EastOfCenter,
  SouthwestOfCenter,
  SouthOfCenter,
  SoutheastOfCenter,

  NorthwestOfEast,
  NorthOfEast,
  NortheastOfEast,
  WestOfEast,
  CenterOfEast,
  EastOfEast,
  SouthwestOfEast,
  SouthOfEast,
  SoutheastOfEast,

  NorthwestOfSouthwest,
  NorthOfSouthwest,
  NortheastOfSouthwest,
  WestOfSouthwest,
  CenterOfSouthwest,
  EastOfSouthwest,
  SouthwestOfSouthwest,
  SouthOfSouthwest,
  SoutheastOfSouthwest,

  NorthwestOfSouth,
  NorthOfSouth,
  NortheastOfSouth,
  WestOfSouth,
  CenterOfSouth,
  EastOfSouth,
  SouthwestOfSouth,
  SouthOfSouth,
  SoutheastOfSouth,

  NorthwestOfSoutheast,
  NorthOfSoutheast,
  NortheastOfSoutheast,
  WestOfSoutheast,
  CenterOfSoutheast,
  EastOfSoutheast,
  SouthwestOfSoutheast,
  SouthOfSoutheast,
  SoutheastOfSoutheast,
}

interface CreatedSlotAndRelatedData {
  dataRelatedToCreatedSlot: DataRelatedToCreatedSlot;
  slot: TestingSlot;
}

interface DataRelatedToCreatedSlot {
  index: IndexOfTestingSlot;
  indexOfOccupyingPlayer: TestingSlot["indexOfOccupyingPlayer"];
  nameOfIndex: NameOfIndexOfTestingSlot;
}

type NameOfIndexOfTestingSlot = keyof typeof IndexOfTestingSlot;

interface RecordOfSlotDTO {
  data: SlotDTO;
  index: IndexOfTestingSlot;
}

interface SlotDTO {
  indexOfOccupyingPlayer: IndexOfTestingPlayer | null;
}

const createSlot = ({
  recordOfSlotDTO,
}: {
  recordOfSlotDTO: RecordOfSlotDTO;
}): CreatedSlotAndRelatedData => {
  const {
    data: { indexOfOccupyingPlayer },
    index: indexOfTestingSlot,
  } = recordOfSlotDTO;

  const slot = new TestingSlot({
    indexOfOccupyingPlayer,
  });

  return {
    dataRelatedToCreatedSlot: {
      index: indexOfTestingSlot,
      indexOfOccupyingPlayer,
      nameOfIndex: IndexOfTestingSlot[
        indexOfTestingSlot
      ] as NameOfIndexOfTestingSlot,
    },
    slot,
  };
};

type CreatedSlotsAndRelatedData = ReadonlyMap<
  IndexOfTestingSlot,
  CreatedSlotAndRelatedData
>;

const createSlots = ({
  listOfSlotsDTOs,
}: {
  listOfSlotsDTOs: readonly SlotDTO[];
}): CreatedSlotsAndRelatedData => {
  const slots = listOfSlotsDTOs.map((slotDTO, index) => ({
    data: slotDTO,
    index,
  }));

  return new Map(
    slots.map(({ data, index }) => [
      index,
      createSlot({ recordOfSlotDTO: { data, index } }),
    ]),
  );
};

const createOneSlotForEachOccupyingPlayer = (): CreatedSlotsAndRelatedData => {
  const slotsDTOs = {
    [CategoryOfTestingOccupyingPlayer.Null]: {
      indexOfOccupyingPlayer: null,
    },
    [CategoryOfTestingOccupyingPlayer.One]: {
      indexOfOccupyingPlayer: IndexOfTestingPlayer.One,
    },
    [CategoryOfTestingOccupyingPlayer.Two]: {
      indexOfOccupyingPlayer: IndexOfTestingPlayer.Two,
    },
  } as const;

  const listOfSlotsDTOs = [
    slotsDTOs[CategoryOfTestingOccupyingPlayer.Null],
    slotsDTOs[CategoryOfTestingOccupyingPlayer.One],
    slotsDTOs[CategoryOfTestingOccupyingPlayer.Two],
  ] as const;

  return createSlots({
    listOfSlotsDTOs,
  });
};

const createSlotsForInitialState = (): CreatedSlotsAndRelatedData => {
  const listOfSlotsDTOs = new Array<SlotDTO>(QUANTITY_OF_SLOTS).fill({
    indexOfOccupyingPlayer: null,
  });
  return createSlots({
    listOfSlotsDTOs,
  });
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
export {
  createOneSlotForEachOccupyingPlayer,
  createSlots,
  createSlotsForInitialState,
  IndexOfTestingSlot,
};
