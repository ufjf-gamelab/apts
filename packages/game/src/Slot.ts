import type { Integer } from "@repo/core/types.js";

type IndexOfSlot = Integer;

type ParamsOfSlot = object;

abstract class Slot<GenericSlot extends Slot<GenericSlot>> {
  public static getSlot<GenericSlot extends Slot<GenericSlot>>({
    indexOfSlot,
    slots,
  }: {
    indexOfSlot: IndexOfSlot;
    slots: readonly GenericSlot[];
  }): GenericSlot | null {
    const slot = slots[indexOfSlot];
    if (typeof slot === "undefined") {
      return null;
    }
    return slot;
  }

  public abstract clone(): GenericSlot;
}

export type { IndexOfSlot, ParamsOfSlot };
export { Slot };
