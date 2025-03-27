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
  private readonly moves: Map<MoveKey, M>;
  private readonly name: GameParams<P, M, S, G>["name"];
  private readonly players: Map<PlayerKey, P>;
  private readonly quantityOfSlots: GameParams<P, M, S, G>["quantityOfSlots"];

  constructor({
    moves,
    name,
    players,
    quantityOfSlots,
  }: GameParams<P, M, S, G>) {
    this.moves = new Map(moves.map((move, index) => [index, move]));
    this.name = name;
    this.players = new Map(players.map((player, index) => [index, player]));
    this.quantityOfSlots = quantityOfSlots;
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
    // TODO: Possibly, each entry should be cloned.
    return [...this.moves.values()];
  }

  public getName(): GameParams<P, M, S, G>["name"] {
    return this.name;
  }

  public getPlayer(playerKey: PlayerKey): null | P {
    const player = this.players.get(playerKey);
    if (typeof player === "undefined") {
      return null;
    }
    return player;
  }

  public getPlayers(): typeof this.players {
    // TODO: Possibly, each entry should be cloned.
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
