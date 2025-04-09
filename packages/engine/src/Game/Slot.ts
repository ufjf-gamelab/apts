import type { Integer } from "../types.js";
import type Game from "./Game.js";
import type Move from "./Move.js";
import type Player from "./Player.js";
import type State from "./State.js";

type IndexOfSlot = Integer;

type SlotParams<
  P extends Player<P, M, S, G>,
  M extends Move<P, M, S, G>,
  S extends State<P, M, S, G>,
  G extends Game<P, M, S, G>,
> = object;

type Slots<
  P extends Player<P, M, S, G>,
  M extends Move<P, M, S, G>,
  S extends State<P, M, S, G>,
  G extends Game<P, M, S, G>,
> = readonly Slot<P, M, S, G>[];

abstract class Slot<
  P extends Player<P, M, S, G>,
  M extends Move<P, M, S, G>,
  S extends State<P, M, S, G>,
  G extends Game<P, M, S, G>,
> {
  public abstract clone(): Slot<P, M, S, G>;
}

export type { IndexOfSlot, SlotParams, Slots };
export default Slot;
