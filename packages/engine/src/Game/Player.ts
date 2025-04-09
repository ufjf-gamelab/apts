import type { Char, Integer } from "../types.js";
import type Game from "./Game.js";
import type Move from "./Move.js";
import type Slot from "./Slot.js";
import type State from "./State.js";

type IndexOfPlayer = Integer;

interface PlayerParams<
  G extends Game<G, S, M, Sl, P>,
  S extends State<G, S, M, Sl, P>,
  M extends Move<G, S, M, Sl, P>,
  Sl extends Slot<G, S, M, Sl, P>,
  P extends Player<G, S, M, Sl, P>,
> {
  readonly name: string;
  readonly symbol: Char;
}

abstract class Player<
  G extends Game<G, S, M, Sl, P>,
  S extends State<G, S, M, Sl, P>,
  M extends Move<G, S, M, Sl, P>,
  Sl extends Slot<G, S, M, Sl, P>,
  P extends Player<G, S, M, Sl, P>,
> {
  private readonly name: PlayerParams<G, S, M, Sl, P>["name"];
  private readonly symbol: PlayerParams<G, S, M, Sl, P>["symbol"];

  constructor({ name, symbol }: PlayerParams<G, S, M, Sl, P>) {
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

export type { IndexOfPlayer, PlayerParams };
export { Player as default };
