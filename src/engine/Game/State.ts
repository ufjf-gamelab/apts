import { Integer } from "../../types";
import Game from "./Game";
import Move from "./Move";
import Player, { PlayerKey } from "./Player";

// Content of a slot in the state.
export type Slot = Integer;
// Index of a slot in the state.
export type SlotIndex = Integer;

export type Points = number;
export type Scoreboard = Map<PlayerKey, Points>;

export interface StateParams<
  P extends Player,
  M extends Move<P, M, S, G>,
  S extends State<P, M, S, G>,
  G extends Game<P, M, S, G>,
> {
  readonly game: G;
  readonly slots: Slot[];
  readonly playerKey: PlayerKey;
}

export default abstract class State<
  P extends Player,
  M extends Move<P, M, S, G>,
  S extends State<P, M, S, G>,
  G extends Game<P, M, S, G>,
> {
  private readonly game: StateParams<P, M, S, G>["game"];
  private readonly slots: StateParams<P, M, S, G>["slots"];
  private readonly playerKey: StateParams<P, M, S, G>["playerKey"];

  constructor({ game, slots, playerKey }: StateParams<P, M, S, G>) {
    this.game = game;
    this.slots = slots;
    this.playerKey = playerKey;
  }

  /* Getters */

  public getGame(): StateParams<P, M, S, G>["game"] {
    return this.game;
  }

  public getPlayerKey(): StateParams<P, M, S, G>["playerKey"] {
    return this.playerKey;
  }

  public getSlot(index: SlotIndex): Slot {
    const slot = this.slots[index];
    if (typeof slot === "undefined")
      throw new Error(`Slot with index ${index} not found`);
    return slot;
  }

  public getSlots(): Slot[] {
    return [...this.slots];
  }

  /* Methods */

  public abstract toString(): string;
}
