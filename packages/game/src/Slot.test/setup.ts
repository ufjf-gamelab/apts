import type { IndexOfSlot, ParamsOfSlot, Slot } from "../Slot.js";

type DerivedParamsOfSlot = ParamsOfSlot;

type RecordOfRequiredParamsOfSlots<GenericRequiredParamsOfSlot> = Record<
  string,
  GenericRequiredParamsOfSlot
>;

type RecordOfSlotsWithData<
  GenericSlot extends Slot<GenericSlot>,
  GenericRequiredParamsOfSlot,
  GenericRecordOfRequiredParamsOfSlots extends
    RecordOfRequiredParamsOfSlots<GenericRequiredParamsOfSlot> =
    RecordOfRequiredParamsOfSlots<GenericRequiredParamsOfSlot>,
> = {
  [GenericKeyOfSlot in keyof GenericRecordOfRequiredParamsOfSlots]: SlotWithData<
    GenericSlot,
    GenericRequiredParamsOfSlot,
    GenericKeyOfSlot & string
  >;
};

type RecordOfSlotsWithDataAndIndex<
  GenericSlot extends Slot<GenericSlot>,
  GenericRequiredParamsOfSlot,
  GenericRecordOfRequiredParamsOfSlots extends
    RecordOfRequiredParamsOfSlots<GenericRequiredParamsOfSlot> =
    RecordOfRequiredParamsOfSlots<GenericRequiredParamsOfSlot>,
  GenericSlotWithData extends SlotWithData<
    GenericSlot,
    GenericRequiredParamsOfSlot
  > = SlotWithData<GenericSlot, GenericRequiredParamsOfSlot>,
> = {
  [GenericKeyOfSlot in keyof GenericRecordOfRequiredParamsOfSlots]: SlotWithDataAndIndex<
    GenericSlot,
    GenericRequiredParamsOfSlot,
    GenericSlotWithData
  >;
};

type RequiredParamsOfSlot = ParamsOfSlot;

interface SlotWithData<
  GenericSlot extends Slot<GenericSlot>,
  GenericRequiredParamsOfSlot,
  GenericKeyOfSlot extends string = string,
> {
  keyOfSlot: GenericKeyOfSlot;
  requiredParams: GenericRequiredParamsOfSlot;
  slot: GenericSlot;
}

interface SlotWithDataAndIndex<
  GenericSlot extends Slot<GenericSlot>,
  GenericRequiredParamsOfSlot,
  GenericSlotWithData extends SlotWithData<
    GenericSlot,
    GenericRequiredParamsOfSlot
  >,
> {
  indexOfSlot: IndexOfSlot;
  slotWithData: GenericSlotWithData;
}

const deriveParamsOfSlot = (
  requiredParamsOfSlot: RequiredParamsOfSlot,
): DerivedParamsOfSlot => requiredParamsOfSlot;

const createRecordOfSlotsWithData = <
  GenericSlot extends Slot<GenericSlot>,
  GenericDerivedParamsOfSlot extends DerivedParamsOfSlot,
  GenericRequiredParamsOfSlot,
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-parameters
  GenericRecordOfSlotsWithData extends RecordOfSlotsWithData<
    GenericSlot,
    GenericRequiredParamsOfSlot
  >,
>({
  create,
  deriveParams,
  recordOfRequiredParamsOfSlots,
}: {
  create: (derivedParams: GenericDerivedParamsOfSlot) => GenericSlot;
  deriveParams: (
    requiredParams: GenericRequiredParamsOfSlot,
  ) => GenericDerivedParamsOfSlot;
  recordOfRequiredParamsOfSlots: RecordOfRequiredParamsOfSlots<GenericRequiredParamsOfSlot>;
}) =>
  /**
   * TypeScript cannot statically verify that Object.fromEntries produces all required keys since the operation happens at runtime.
   * This assertion is safe because we're iterating over all entries from recordOfRequiredParamsOfSlots, which RecordOfRequiredParams is derived from.
   */
  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
  Object.fromEntries(
    Object.entries(recordOfRequiredParamsOfSlots).map(
      ([keyOfSlot, requiredParams]) =>
        [
          keyOfSlot,
          {
            keyOfSlot,
            requiredParams,
            slot: create(deriveParams(requiredParams)),
          } satisfies SlotWithData<GenericSlot, GenericRequiredParamsOfSlot>,
        ] as const,
    ),
  ) as GenericRecordOfSlotsWithData;

export type {
  DerivedParamsOfSlot,
  RecordOfSlotsWithData,
  RecordOfSlotsWithDataAndIndex,
  RequiredParamsOfSlot,
  SlotWithData,
  SlotWithDataAndIndex,
};
export { createRecordOfSlotsWithData, deriveParamsOfSlot };
