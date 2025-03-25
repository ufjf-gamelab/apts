import type { Integer } from "../types.js";
import type { default as Move, MoveKey } from "./Move.js";
import type { default as Player, PlayerKey } from "./Player.js";
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
  readonly moves: Map<MoveKey, M>;
  readonly name: string;
  readonly players: Map<PlayerKey, P>;
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
    this.players = new Map(players);
    this.moves = new Map(moves);
  }

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

  public abstract clone(): G;

  public abstract getEndOfGameMessage(state: S): string;

  public abstract getInitialState(): S;

  public getMoves(): GameParams<P, M, S, G>["moves"] {
    return new Map(this.moves);
  }

  public getName(): GameParams<P, M, S, G>["name"] {
    return this.name;
  }

  public getPlayers(): GameParams<P, M, S, G>["players"] {
    return new Map(this.players);
  }

  public getQuantityOfMoves(): Integer {
    return this.moves.size;
  }

  protected abstract getNextPlayerKey(playerKey: PlayerKey): PlayerKey;

  protected getQuantityOfSlots(): GameParams<P, M, S, G>["quantityOfSlots"] {
    return this.quantityOfSlots;
  }
}
