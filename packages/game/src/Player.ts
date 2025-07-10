import type { Char, Integer } from "@repo/engine_core/types.js";

type IndexOfPlayer = Integer;

interface PlayerParams {
  readonly name: string;
  readonly symbol: Char;
}

abstract class Player {
  private readonly name: PlayerParams["name"];
  private readonly symbol: PlayerParams["symbol"];

  constructor({ name, symbol }: PlayerParams) {
    this.symbol = symbol;
    this.name = name;
  }

  public abstract clone(): Player;

  public getName(): typeof this.name {
    return this.name;
  }

  public getSymbol(): typeof this.symbol {
    return this.symbol;
  }
}

export type { IndexOfPlayer, PlayerParams };
export { Player as default };
