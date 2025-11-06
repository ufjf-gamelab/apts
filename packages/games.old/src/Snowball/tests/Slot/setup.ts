/* eslint-disable perfectionist/sort-enums */
import { QUANTITY_OF_SLOTS } from "../../Game.js";
import TestingSlot from "../../Slot.js";
import { IndexOfTestingPlayer } from "../Player/setup.js";

enum CategoryOfTestingOccupyingPlayer {
  Null,
  One,
  Two,
}

enum IndexOfTestingSlot {
  NorthwestOfNorthwest = 0,
  NorthOfNorthwest = 1,
  NortheastOfNorthwest = 2,
  WestOfNorthwest = 9,
  CenterOfNorthwest = 10,
  EastOfNorthwest = 11,
  SouthwestOfNorthwest = 18,
  SouthOfNorthwest = 19,
  SoutheastOfNorthwest = 20,

  NorthwestOfNorth = 3,
  NorthOfNorth = 4,
  NortheastOfNorth = 5,
  WestOfNorth = 12,
  CenterOfNorth = 13,
  EastOfNorth = 14,
  SouthwestOfNorth = 21,
  SouthOfNorth = 22,
  SoutheastOfNorth = 23,

  NorthwestOfNortheast = 6,
  NorthOfNortheast = 7,
  NortheastOfNortheast = 8,
  WestOfNortheast = 15,
  CenterOfNortheast = 16,
  EastOfNortheast = 17,
  SouthwestOfNortheast = 24,
  SouthOfNortheast = 25,
  SoutheastOfNortheast = 26,

  NorthwestOfWest = 27,
  NorthOfWest = 28,
  NortheastOfWest = 29,
  WestOfWest = 36,
  CenterOfWest = 37,
  EastOfWest = 38,
  SouthwestOfWest = 45,
  SouthOfWest = 46,
  SoutheastOfWest = 47,

  NorthwestOfCenter = 30,
  NorthOfCenter = 31,
  NortheastOfCenter = 32,
  WestOfCenter = 39,
  CenterOfCenter = 40,
  EastOfCenter = 41,
  SouthwestOfCenter = 48,
  SouthOfCenter = 49,
  SoutheastOfCenter = 50,

  NorthwestOfEast = 33,
  NorthOfEast = 34,
  NortheastOfEast = 35,
  WestOfEast = 42,
  CenterOfEast = 43,
  EastOfEast = 44,
  SouthwestOfEast = 51,
  SouthOfEast = 52,
  SoutheastOfEast = 53,

  NorthwestOfSouthwest = 54,
  NorthOfSouthwest = 55,
  NortheastOfSouthwest = 56,
  WestOfSouthwest = 63,
  CenterOfSouthwest = 64,
  EastOfSouthwest = 65,
  SouthwestOfSouthwest = 72,
  SouthOfSouthwest = 73,
  SoutheastOfSouthwest = 74,

  NorthwestOfSouth = 57,
  NorthOfSouth = 58,
  NortheastOfSouth = 59,
  WestOfSouth = 66,
  CenterOfSouth = 67,
  EastOfSouth = 68,
  SouthwestOfSouth = 75,
  SouthOfSouth = 76,
  SoutheastOfSouth = 77,

  NorthwestOfSoutheast = 60,
  NorthOfSoutheast = 61,
  NortheastOfSoutheast = 62,
  WestOfSoutheast = 69,
  CenterOfSoutheast = 70,
  EastOfSoutheast = 71,
  SouthwestOfSoutheast = 78,
  SouthOfSoutheast = 79,
  SoutheastOfSoutheast = 80,
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

const convertCreatedSlotsAndRelatedDataToSlots = (
  createdSlotsAndRelatedData: CreatedSlotsAndRelatedData,
): TestingSlot[] =>
  Array.from(createdSlotsAndRelatedData.values()).map(({ slot }) => slot);

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
  convertCreatedSlotsAndRelatedDataToSlots,
  createOneSlotForEachOccupyingPlayer,
  createSlots,
  createSlotsForInitialState,
  IndexOfTestingSlot,
};
