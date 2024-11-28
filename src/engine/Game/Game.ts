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

export interface GameParams<
  P extends Player,
  M extends Move<P, M, S, G>,
  S extends State<P, M, S, G>,
  G extends Game<P, M, S, G>,
> {
  readonly name: string;
  readonly quantityOfSlots: Integer;
  readonly players: P[];
  readonly moves: M[];
}

export default abstract class Game<
  P extends Player,
  M extends Move<P, M, S, G>,
  S extends State<P, M, S, G>,
  G extends Game<P, M, S, G>,
> {
  private readonly name: GameParams<P, M, S, G>["name"];
  private readonly quantityOfSlots: GameParams<P, M, S, G>["quantityOfSlots"];
  private readonly players: GameParams<P, M, S, G>["players"];
  private readonly moves: GameParams<P, M, S, G>["moves"];

  constructor({
    players,
    moves,
    name,
    quantityOfSlots,
  }: GameParams<P, M, S, G>) {
    this.name = name;
    this.quantityOfSlots = quantityOfSlots;
    this.players = [...players];
    this.moves = [...moves];
  }

  /* Getters */

  public abstract getInitialState(): S;

  public abstract getGameOverMessage(state: S): string;

  public getMove(key: MoveKey): M {
    const move = this.moves[key];
    if (typeof move === "undefined")
      throw new Error(`Move with key ${key} not found`);
    return move;
  }

  protected getMoves(): GameParams<P, M, S, G>["moves"] {
    return [...this.moves];
  }

  public getName(): GameParams<P, M, S, G>["name"] {
    return this.name;
  }

  protected abstract getNextPlayerKey(playerKey: PlayerKey): PlayerKey;

  public getPlayer(key: PlayerKey): P {
    const player = this.players[key];
    if (typeof player === "undefined")
      throw new Error(`Player with key ${key} not found`);
    return player;
  }

  protected getQuantityOfSlots(): GameParams<P, M, S, G>["quantityOfSlots"] {
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
