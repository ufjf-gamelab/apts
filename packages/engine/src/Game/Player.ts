import { Char, Integer } from "../types.js";
import Game from "./Game.js";
import Move from "./Move.js";
import State from "./State.js";

export interface PlayerParams<
  P extends Player<P, M, S, G>,
  M extends Move<P, M, S, G>,
  S extends State<P, M, S, G>,
  G extends Game<P, M, S, G>,
> {
  readonly symbol: Char;
  readonly name: string;
}

export default abstract class Player<
  P extends Player<P, M, S, G>,
  M extends Move<P, M, S, G>,
  S extends State<P, M, S, G>,
  G extends Game<P, M, S, G>,
> {
  private readonly symbol: PlayerParams<P, M, S, G>["symbol"];
  private readonly name: PlayerParams<P, M, S, G>["name"];

  constructor({ symbol, name }: PlayerParams<P, M, S, G>) {
    this.symbol = symbol;
    this.name = name;
  }

  public getSymbol(): PlayerParams<P, M, S, G>["symbol"] {
    return this.symbol;
  }

  public getName(): PlayerParams<P, M, S, G>["name"] {
    return this.name;
  }
}

export type PlayerKey = Integer;

export interface PlayerPair<
  P extends Player<P, M, S, G>,
  M extends Move<P, M, S, G>,
  S extends State<P, M, S, G>,
  G extends Game<P, M, S, G>,
> {
  key: PlayerKey;
  player: Player<P, M, S, G>;
}
