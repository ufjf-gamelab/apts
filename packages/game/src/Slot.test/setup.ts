import { type IndexOfSlot, type Slot } from "../Slot.js";

const createSlotsWithData = <PartialParams, DerivedSlotParams>({
  createSlot: create,
  createSlotParams: createParams,
  partialParamsOfSlots,
}: {
  createSlot: (params: DerivedSlotParams) => Slot;
  createSlotParams: (partialParams: PartialParams) => DerivedSlotParams;
  partialParamsOfSlots: Record<string, PartialParams>;
}) =>
  Object.entries(partialParamsOfSlots).reduce<{
    [K in keyof typeof partialParamsOfSlots]: {
      indexOfSlot: IndexOfSlot;
      keyOfSlot: string;
      params: DerivedSlotParams;
      slot: Slot;
    };
  }>((slotsWithData, [key, partialParams], index) => {
    const params = createParams(partialParams);
    slotsWithData[key] = {
      indexOfSlot: index,
      keyOfSlot: key,
      params,
      slot: create(params),
    };
    return slotsWithData;
  }, {});

export { createSlotsWithData };
