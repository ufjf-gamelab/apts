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
  readonly players: { readonly [key in PlayerKey]: P };
  readonly moves: { readonly [key in MoveKey]: M };
}

export default abstract class Game<
  P extends Player,
  M extends Move<P, M, S, G>,
  S extends State<P, M, S, G>,
  G extends Game<P, M, S, G>,
> {
  private readonly name: GameParams<P, M, S, G>["name"];
  private readonly quantityOfSlots: GameParams<P, M, S, G>["quantityOfSlots"];
  private readonly players: Map<PlayerKey, P>;
  private readonly moves: Map<MoveKey, M>;

  constructor({
    players,
    moves,
    name,
    quantityOfSlots,
  }: GameParams<P, M, S, G>) {
    this.name = name;
    this.quantityOfSlots = quantityOfSlots;
    this.players = new Map();
    for (const key in players) {
      this.players.set(key, players[key]);
    }
  }

  /* Getters */

  public abstract getInitialState(): S;

  public getMove(key: MoveKey): M {
    const move = this.moves[key];
    if (typeof move === "undefined")
      throw new Error(`Move with key ${key} not found`);
    return move;
  }

  public getName(): GameParams<P, M, S, G>["name"] {
    return this.name;
  }

  public abstract getNextPlayerKey(playerKey: PlayerKey): PlayerKey;

  public getPlayer(key: PlayerKey): P {
    const player = this.players[key];
    if (typeof player === "undefined")
      throw new Error(`Player with key ${key} not found`);
    return player;
  }

  public getQuantityOfSlots(): GameParams<P, M, S, G>["quantityOfSlots"] {
    return this.quantityOfSlots;
  }

  public abstract isStateFinal(state: S): boolean;

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
