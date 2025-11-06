import type { Integer } from "@repo/engine_core/types.js";

import type Game from "./Game.js";
import type Move from "./Move.js";
import type Player from "./Player.js";
import type State from "./State.js";

type IndexOfSlot = Integer;

type SlotParams<
  G extends Game<G, S, M, Sl, P>,
  S extends State<G, S, M, Sl, P>,
  M extends Move<G, S, M, Sl, P>,
  Sl extends Slot<G, S, M, Sl, P>,
  P extends Player<G, S, M, Sl, P>,
> = object;

abstract class Slot<
  G extends Game<G, S, M, Sl, P>,
  S extends State<G, S, M, Sl, P>,
  M extends Move<G, S, M, Sl, P>,
  Sl extends Slot<G, S, M, Sl, P>,
  P extends Player<G, S, M, Sl, P>,
> {
  public static getSlot<
    G extends Game<G, S, M, Sl, P>,
    S extends State<G, S, M, Sl, P>,
    M extends Move<G, S, M, Sl, P>,
    Sl extends Slot<G, S, M, Sl, P>,
    P extends Player<G, S, M, Sl, P>,
  >({
    indexOfSlot,
    slots,
  }: {
    indexOfSlot: IndexOfSlot;
    slots: readonly Sl[];
  }): null | Sl {
    const slot = slots[indexOfSlot];
    if (typeof slot === "undefined") {
      return null;
    }
    return slot;
  }

  public abstract clone(): Sl;
}

export type { IndexOfSlot, SlotParams };
export default Slot;
