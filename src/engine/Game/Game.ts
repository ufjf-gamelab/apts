import { Integer } from "../../types";
import Move, { MoveKey } from "./Move";
import Player, { PlayerKey } from "./Player";
import State, { Scoreboard } from "./State";

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
  readonly players: Map<PlayerKey, P>;
  readonly moves: Map<MoveKey, M>;
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
    this.players = players;
    this.moves = moves;
  }

  /* Getters */

  public abstract getEndGameMessage(state: S): string;

  public abstract getInitialState(): S;

  public getMove(key: MoveKey): M {
    const move = this.moves.get(key);
    if (typeof move === "undefined")
      throw new Error(`Move with key ${key} not found`);
    return move;
  }

  public getName(): GameParams<P, M, S, G>["name"] {
    return this.name;
  }

  public abstract getNextPlayerKey(playerKey: PlayerKey): PlayerKey;

  public getPlayer(key: PlayerKey): P {
    const player = this.players.get(key);
    if (typeof player === "undefined")
      throw new Error(`Player with key ${key} not found`);
    return player;
  }

  public getPlayers(): GameParams<P, M, S, G>["players"] {
    return this.players;
  }

  public getQuantityOfSlots(): GameParams<P, M, S, G>["quantityOfSlots"] {
    return this.quantityOfSlots;
  }

  public abstract getScoreboard(state: S): Scoreboard;

  public getPrettyScoreboard(state: S): string {
    const scoreboard = this.getScoreboard(state);
    return Array.from(scoreboard.entries())
      .map(([playerKey, points]) => {
        const player = this.getPlayer(playerKey);
        return `${player.getName()}: ${points}`;
      })
      .join(", ");
  }

  public abstract getValidMoves(state: S): M[];

  public abstract isFinal(state: S): boolean;

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
