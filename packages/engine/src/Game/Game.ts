import type { Integer } from "../types.js";
import type Move from "./Move.js";
import type { MoveKey } from "./Move.js";
import type Player from "./Player.js";
import type { PlayerKey } from "./Player.js";
import type State from "./State.js";

export enum Pixel {
  Off = 0,
  On = 1,
}
export type EncodedState = Pixel[][][];
export interface GameParams<
  P extends Player<P, M, S, G>,
  M extends Move<P, M, S, G>,
  S extends State<P, M, S, G>,
  G extends Game<P, M, S, G>,
> {
  readonly moves: M[];
  readonly name: string;
  readonly players: P[];
  readonly quantityOfSlots: Integer;
}

type Channel = Integer;

export default abstract class Game<
  P extends Player<P, M, S, G>,
  M extends Move<P, M, S, G>,
  S extends State<P, M, S, G>,
  G extends Game<P, M, S, G>,
> {
  private readonly moves: GameParams<P, M, S, G>["moves"];
  private readonly name: GameParams<P, M, S, G>["name"];
  private readonly players: GameParams<P, M, S, G>["players"];
  private readonly quantityOfSlots: GameParams<P, M, S, G>["quantityOfSlots"];

  constructor({
    moves,
    name,
    players,
    quantityOfSlots,
  }: GameParams<P, M, S, G>) {
    this.name = name;
    this.quantityOfSlots = quantityOfSlots;
    this.players = [...players];
    this.moves = [...moves];
  }

  /* Getters */

  protected static setSlotInEncodedState({
    channel,
    columnIndex,
    encodedState,
    rowIndex,
  }: {
    channel: Channel;
    columnIndex: Integer;
    encodedState: EncodedState;
    rowIndex: Integer;
  }): void {
    const row = encodedState[rowIndex];
    if (typeof row === "undefined") {
      return;
    }

    const column = row[columnIndex];
    if (typeof column === "undefined") {
      return;
    }

    column[channel] = Pixel.On;
  }

  public abstract getEndOfGameMessage(state: S): string;

  public abstract getInitialState(): S;

  public getMove(key: MoveKey): M {
    const move = this.moves[key];
    if (typeof move === "undefined") {
      throw new Error(`Move with key ${key} not found`);
    }
    return move;
  }

  public getMoves(): GameParams<P, M, S, G>["moves"] {
    return [...this.moves];
  }

  public getName(): GameParams<P, M, S, G>["name"] {
    return this.name;
  }

  public getPlayer(key: PlayerKey): P {
    const player = this.players[key];
    if (typeof player === "undefined") {
      throw new Error(`Player with key ${key} not found`);
    }
    return player;
  }

  public getQuantityOfMoves(): Integer {
    return this.moves.length;
  }

  protected abstract getNextPlayerKey(playerKey: PlayerKey): PlayerKey;

  /* Setters */

  protected getQuantityOfSlots(): GameParams<P, M, S, G>["quantityOfSlots"] {
    return this.quantityOfSlots;
  }
}
