import type { Char, Integer } from "@repo/engine_core/types.js";

type IndexOfPlayer = Integer;

interface PlayerParams {
  readonly name: string;
  readonly symbol: Char;
}

abstract class Player<P extends Player<P>> {
  private readonly name: PlayerParams["name"];
  private readonly symbol: PlayerParams["symbol"];

  public constructor({ name, symbol }: PlayerParams) {
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
export { Player };
