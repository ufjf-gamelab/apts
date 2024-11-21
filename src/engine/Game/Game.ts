import { Integer } from "../../types";
import Move, { MoveKey } from "./Move";
import Player, { PlayerKey } from "./Player";
import State from "./State";

type Channel = Integer;
export type EncodedState = Pixel[][][];
export enum Pixel {
  Off = 0,
  On = 1,
}

export interface GameParams<P extends Player, M extends Move> {
  readonly name: string;
  readonly quantityOfSlots: Integer;
  readonly players: { [key in PlayerKey]: P };
  readonly moves: { [key in MoveKey]: M };
}

export default abstract class Game<
  P extends Player,
  M extends Move,
  S extends State<P, M>,
> {
  private readonly name: GameParams<P, M>["name"];
  protected readonly quantityOfSlots: GameParams<P, M>["quantityOfSlots"];
  protected readonly players: GameParams<P, M>["players"];
  protected readonly moves: GameParams<P, M>["moves"];

  constructor({ players, moves, name, quantityOfSlots }: GameParams<P, M>) {
    this.name = name;
    this.quantityOfSlots = quantityOfSlots;
    this.players = players;
    this.moves = moves;
  }

  /* Getters */

  public abstract getInitialState(): S;

  public getMove(key: MoveKey): M {
    const move = this.moves[key];
    if (typeof move === "undefined")
      throw new Error(`Move with key ${key} not found`);
    return move;
  }

  public getName(): GameParams<P, M>["name"] {
    return this.name;
  }

  public getPlayer(key: PlayerKey): P {
    const player = this.players[key];
    if (typeof player === "undefined")
      throw new Error(`Player with key ${key} not found`);
    return player;
  }

  public getQuantityOfSlots(): GameParams<P, M>["quantityOfSlots"] {
    return this.quantityOfSlots;
  }

  /* Setters */

  protected static setSlotInEncodedState({
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
