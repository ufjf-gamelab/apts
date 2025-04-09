import type { Char, Integer } from "../types.js";
import type Game from "./Game.js";
import type Move from "./Move.js";
import type State from "./State.js";

type IndexOfPlayer = Integer;

interface PlayerParams<
  P extends Player<P, M, S, G>,
  M extends Move<P, M, S, G>,
  S extends State<P, M, S, G>,
  G extends Game<P, M, S, G>,
> {
  readonly name: string;
  readonly symbol: Char;
}

type Players<
  P extends Player<P, M, S, G>,
  M extends Move<P, M, S, G>,
  S extends State<P, M, S, G>,
  G extends Game<P, M, S, G>,
> = readonly P[];

abstract class Player<
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

  public abstract clone(): P;

  public getName(): typeof this.name {
    return this.name;
  }

  public getSymbol(): typeof this.symbol {
    return this.symbol;
  }
}

export type { IndexOfPlayer, PlayerParams, Players };
export { Player as default };
