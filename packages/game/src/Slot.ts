import type { Integer } from "@repo/engine_core/types.js";

type IndexOfSlot = Integer;

abstract class Slot {
  public static getSlot(
    indexOfSlot: IndexOfSlot,
    slots: readonly Slot[],
  ): null | Slot {
    const slot = slots[indexOfSlot];
    if (typeof slot === "undefined") {
      return null;
    }
    return slot;
  }

  public abstract clone(): this;
}

export type { IndexOfSlot };
export { Slot };
