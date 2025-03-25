import type { Char, Integer } from "../types.js";
import type Game from "./Game.js";
import type Move from "./Move.js";
import type State from "./State.js";

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

export interface PlayerParams<
  P extends Player<P, M, S, G>,
  M extends Move<P, M, S, G>,
  S extends State<P, M, S, G>,
  G extends Game<P, M, S, G>,
> {
  readonly name: string;
  readonly symbol: Char;
}

export default abstract class Player<
  P extends Player<P, M, S, G>,
  M extends Move<P, M, S, G>,
  S extends State<P, M, S, G>,
  G extends Game<P, M, S, G>,
> {
  private readonly name: PlayerParams<P, M, S, G>["name"];
  private readonly symbol: PlayerParams<P, M, S, G>["symbol"];

  constructor({ name, symbol }: PlayerParams<P, M, S, G>) {
    this.symbol = symbol;
    this.name = name;
  }

  public getName(): PlayerParams<P, M, S, G>["name"] {
    return this.name;
  }

  public getSymbol(): PlayerParams<P, M, S, G>["symbol"] {
    return this.symbol;
  }
}
