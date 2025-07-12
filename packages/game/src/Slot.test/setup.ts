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
      params: DerivedSlotParams;
      slot: Slot;
    };
  }>((slotsWithParams, [key, partialParams], index) => {
    const params = createParams(partialParams);
    slotsWithParams[key] = {
      indexOfSlot: index,
      params,
      slot: create(params),
    };
    return slotsWithParams;
  }, {});

export { createSlotsWithData };
