import type { Char, Integer } from "@repo/engine_core/types.js";

type IndexOfPlayer = Integer;

interface ParamsOfPlayer {
  readonly name: string;
  readonly symbol: Char;
}

abstract class Player<P extends Player<P>> {
  private readonly name: ParamsOfPlayer["name"];
  private readonly symbol: ParamsOfPlayer["symbol"];

  public constructor({ name, symbol }: ParamsOfPlayer) {
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

export type { IndexOfPlayer, ParamsOfPlayer };
export { Player };
