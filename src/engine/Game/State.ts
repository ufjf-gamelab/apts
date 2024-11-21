import { Integer } from "../../types";
import Game, { Player } from "./Game";
import Move, { Scoreboard, Slot } from "./Move";

type Channel = Integer;
export type EncodedState = Pixel[][][];
export enum Pixel {
  Off = 0,
  On = 1,
}

// Index of a slot in the state.
export type Position = Integer;

const MINIMUM_POSITION = 0;

export interface StateParams<G extends Game<M>, M extends Move> {
  game: G;
  player: Player;
  scoreboard: Scoreboard;
  slots: Slot[];
}

export default abstract class State<G extends Game<M>, M extends Move> {
  private readonly game: StateParams<G, M>["game"];
  private readonly slots: StateParams<G, M>["slots"];

  // The player that played the is about to play, after this state.
  private readonly player: StateParams<G, M>["player"];
  // The scoreboard after this state.
  private readonly scoreboard: StateParams<G, M>["scoreboard"];

  constructor({ game, player, scoreboard, slots }: StateParams<G, M>) {
    this.game = game;
    this.player = player;
    this.scoreboard = scoreboard;

    const quantityOfSlots = this.game.getQuantityOfSlots();
    if (slots.length !== quantityOfSlots)
      throw Error(`The quantity of slots given must be ${quantityOfSlots}`);
    this.slots = slots;
  }

  /* Getters */

  public getGame(): StateParams<G, M>["game"] {
    return this.game;
  }

  public getMaskFromTheValidMoves(): boolean[] {
    const moves = this.game.getMoves();
    const mask = Array<boolean>(moves.size).fill(false);
    moves.forEach((_, key) => {
      if (this.game.getKeysOfTheValidMoves(this).has(key)) mask[key] = true;
    });
    return mask;
  }

  public getPlayer(): StateParams<G, M>["player"] {
    return this.player;
  }

  public getScoreboard(): StateParams<G, M>["scoreboard"] {
    return new Map(this.scoreboard);
  }

  public getSlotAt(position: Position): Slot {
    if (position < MINIMUM_POSITION || position >= this.slots.length)
      throw Error(`Position ${position} is out of bounds`);
    const slot = this.slots[position];

    if (typeof slot === "undefined")
      throw Error(`Slot ${position} is undefined`);
    return slot;
  }

  public getSlots(): Slot[] {
    return this.slots.slice();
  }

  /**
   * Creates a representation of the state as many perspectives of its slots.
   * Each perspective is encoded as a channel, similar to an RGB image.
   * Each cell of the matrix is called a Pixel. If a pixel is on, it means that the respective slot is filled in that perspective.
   *
   * @returns {EncodedState} A series of 2D-arrays representing the state.
   */
  public abstract getEncodedState(): EncodedState;

  /* Setters */

  public static setSlotInEncodedState({
    rowIndex,
    columnIndex,
    channel,
    encodedState,
  }: {
    rowIndex: Integer;
    columnIndex: Integer;
    channel: Channel;
    encodedState: EncodedState;
  }): void {
    const row = encodedState[rowIndex];
    if (typeof row === "undefined") return;

    const column = row[columnIndex];
    if (typeof column === "undefined") return;

    column[channel] = Pixel.On;
  }

  /* Methods */

  /// Return the state with the perspective changed relative to the informed player.
  public abstract changePerspective(player: Player): State<G, M>;

  public abstract clone(): State<G, M>;

  public abstract toString(): string;
}
