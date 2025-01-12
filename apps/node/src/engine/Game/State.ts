import { Integer } from "@repo/engine/types";
import Game from "./Game";
import Move from "./Move";
import Player, { PlayerKey } from "./Player";

const NO_REMAINING_VALID_MOVES = 0;

// Content of a slot in the state.
export type Slot = Integer;
// Index of a slot in the state.
export type SlotKey = Integer;

export type Points = number;
export type Score = Points[];

export interface StateParams<
  P extends Player,
  M extends Move<P, M, S, G>,
  S extends State<P, M, S, G>,
  G extends Game<P, M, S, G>,
> {
  readonly game: G;
  readonly slots: Slot[];
  readonly playerKey: PlayerKey;
  readonly score: Score;
  readonly validMovesKeys: Integer[];
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
  private readonly score: StateParams<P, M, S, G>["score"];
  private readonly validMovesKeys: StateParams<P, M, S, G>["validMovesKeys"];

  constructor({
    game,
    slots,
    playerKey,
    score,
    validMovesKeys,
  }: StateParams<P, M, S, G>) {
    this.game = game;
    this.slots = slots;
    this.playerKey = playerKey;
    this.score = [...score];
    this.validMovesKeys = [...validMovesKeys];
  }

  /* Getters */

  public getGame(): StateParams<P, M, S, G>["game"] {
    return this.game;
  }

  public getPlayer(): P {
    return this.game.getPlayer(this.playerKey);
  }

  public getPlayerKey(): StateParams<P, M, S, G>["playerKey"] {
    return this.playerKey;
  }

  public getScore(): StateParams<P, M, S, G>["score"] {
    return [...this.score];
  }

  public getSlot(index: SlotKey): Slot {
    const slot = this.slots[index];
    if (typeof slot === "undefined") {
      throw new Error(`Slot with index ${index} not found`);
    }
    return slot;
  }

  public getSlots(): StateParams<P, M, S, G>["slots"] {
    return [...this.slots];
  }

  public getValidMoves(): M[] {
    // If it is final, no move is valid.
    return this.validMovesKeys.map(key => this.game.getMove(key));
  }

  public getValidMovesKeys(): StateParams<P, M, S, G>["validMovesKeys"] {
    return [...this.validMovesKeys];
  }

  public isFinal(): boolean {
    return this.validMovesKeys.length === NO_REMAINING_VALID_MOVES;
  }

  /* Methods */

  public abstract changePerspective(playerKey: PlayerKey): S;

  public clone(): S {
    const prototype = Object.getPrototypeOf(this) as object | null;
    const clone = Object.create(prototype) as S;
    return Object.assign(clone, this);
  }

  public abstract toString(): string;
}
