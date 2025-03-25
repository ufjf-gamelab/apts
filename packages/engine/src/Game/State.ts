import type { Integer } from "../types.js";
import type Game from "./Game.js";
import type Move from "./Move.js";
import type Player from "./Player.js";
import type { PlayerKey } from "./Player.js";

const NO_REMAINING_VALID_MOVES = 0;

export type Points = number;
export type Score = Points[];

// Content of a slot in the state.
export type Slot = Integer;
// Index of a slot in the state.
export type SlotKey = Integer;

export interface StateParams<
  P extends Player<P, M, S, G>,
  M extends Move<P, M, S, G>,
  S extends State<P, M, S, G>,
  G extends Game<P, M, S, G>,
> {
  readonly game: G;
  readonly playerKey: PlayerKey;
  readonly score: Score;
  readonly slots: Slot[];
  readonly validMovesKeys: Integer[];
}

export default abstract class State<
  P extends Player<P, M, S, G>,
  M extends Move<P, M, S, G>,
  S extends State<P, M, S, G>,
  G extends Game<P, M, S, G>,
> {
  private readonly game: StateParams<P, M, S, G>["game"];
  private readonly playerKey: StateParams<P, M, S, G>["playerKey"];
  private readonly score: StateParams<P, M, S, G>["score"];
  private readonly slots: StateParams<P, M, S, G>["slots"];
  private readonly validMovesKeys: StateParams<P, M, S, G>["validMovesKeys"];

  constructor({
    game,
    playerKey,
    score,
    slots,
    validMovesKeys,
  }: StateParams<P, M, S, G>) {
    this.game = game;
    this.slots = slots;
    this.playerKey = playerKey;
    this.score = [...score];
    this.validMovesKeys = [...validMovesKeys];
  }

  /* Getters */

  public abstract changePerspective(playerKey: PlayerKey): S;

  // public getPlayer(): P {
  //   return this.game.getPlayer(this.playerKey);
  // }

  public clone(): S {
    const prototype = Object.getPrototypeOf(this) as null | object;
    const clone = Object.create(prototype) as S;
    return Object.assign(clone, this);
  }

  public getGame(): StateParams<P, M, S, G>["game"] {
    return this.game;
  }

  public getPlayerKey(): StateParams<P, M, S, G>["playerKey"] {
    return this.playerKey;
  }

  public getScore(): StateParams<P, M, S, G>["score"] {
    return [...this.score];
  }

  // public getValidMoves(): M[] {
  //   // If it is final, no move is valid.
  //   return this.validMovesKeys.map(key => this.game.getMove(key));
  // }

  // public getValidMovesKeys(): StateParams<P, M, S, G>["validMovesKeys"] {
  //   return [...this.validMovesKeys];
  // }

  public getSlot(index: SlotKey): Slot {
    const slot = this.slots[index];
    if (typeof slot === "undefined") {
      throw new Error(`Slot with index ${index} not found`);
    }
    return slot;
  }

  /* Methods */

  public getSlots(): StateParams<P, M, S, G>["slots"] {
    return [...this.slots];
  }

  public isFinal(): boolean {
    return this.validMovesKeys.length === NO_REMAINING_VALID_MOVES;
  }

  public abstract toString(): string;
}
