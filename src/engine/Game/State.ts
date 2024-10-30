import { Integer } from "../../types";
import Game, { Player } from "./Game";
import Move from "./Move";

type Channel = Integer;
export type EncodedState = Pixel[][][];
export interface TurnOutcome {
  gameHasEnded: boolean;
  winner: Player | null;
  // Points achieved by each player after this turn.
  points: Map<Player, Points>;
}
export enum Pixel {
  Off = 0,
  On = 1,
}
export type Points = number;
// Index of a slot in the state.
export type Position = Integer;
// Content of a slot in the state.
export type Slot = Integer;

const MINIMUM_POSITION = 0;

export interface StateParams<G extends Game<M>, M extends Move> {
  game: G;
  lastPlayer: Player | null;
  lastTakenMove: M | null;
  lastPoints: Map<Player, Points>;
  slots: Slot[];
}

export default abstract class State<G extends Game<M>, M extends Move> {
  protected readonly game: StateParams<G, M>["game"];
  private readonly slots: StateParams<G, M>["slots"];

  // The player that played the last move, which resulted in the current state.
  protected readonly lastPlayer: StateParams<G, M>["lastPlayer"];
  protected readonly lastTakenMove: StateParams<G, M>["lastTakenMove"];
  protected readonly lastPoints: StateParams<G, M>["lastPoints"];

  constructor({
    game,
    lastPlayer,
    lastTakenMove,
    lastPoints,
    slots,
  }: StateParams<G, M>) {
    this.game = game;
    this.lastPlayer = lastPlayer;
    this.lastTakenMove = lastTakenMove;
    this.lastPoints = lastPoints;

    const quantityOfSlots = this.game.getQuantityOfSlots();
    if (slots.length !== quantityOfSlots)
      throw Error(`The quantity of slots given must be ${quantityOfSlots}`);
    this.slots = slots;
  }

  /* Getters */

  public abstract getCurrentPlayer(): Player;

  /**
   * Creates a representation of the state as many perspectives of its slots.
   * Each perspective is encoded as a channel, similar to an RGB image.
   * Each cell of the matrix is called a Pixel. If a pixel is on, it means that the respective slot is filled in that perspective.
   *
   * @returns {EncodedState} A series of 2D-arrays representing the state.
   */
  public abstract getEncodedState(): EncodedState;

  public getGame(): StateParams<G, M>["game"] {
    return this.game;
  }

  public getLastPlayer(): StateParams<G, M>["lastPlayer"] {
    return this.lastPlayer;
  }

  public getLastTakenMove(): StateParams<G, M>["lastTakenMove"] {
    return this.lastTakenMove;
  }

  public abstract getTurnOutcome(): TurnOutcome;

  /// Return a copy of the slots.
  public getSlots(): StateParams<G, M>["slots"] {
    return this.slots.slice();
  }

  public getSlotAt(position: Position): Slot {
    if (position < MINIMUM_POSITION || position >= this.slots.length)
      throw Error(`Position ${position} is out of bounds`);
    const slot = this.slots[position];

    if (typeof slot === "undefined")
      throw Error(`Slot ${position} is undefined`);
    return slot;
  }

  public abstract getValidMoves(): Move[];

  public getMaskFromValidMoves(): boolean[] {
    const validMoves = this.getValidMoves();
    const moves = this.game.getMoves();
    const mask = Array<boolean>(moves.length).fill(false);
    for (const move of validMoves) {
      mask[move.getIndex()] = true;
    }
    return mask;
  }

  public abstract getWinner(): Player | null;

  /* Methods */

  /// Return the state with the perspective changed relative to the informed player.
  public abstract changePerspective(player: Player): State<G, M>;

  public abstract clone(): State<G, M>;

  public abstract playMove(move: M): State<G, M>;

  public abstract toString(): string;

  /* Static methods */

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
}
