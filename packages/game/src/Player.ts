import type { Char, Integer } from "@repo/core/types.js";

type IndexOfPlayer = Integer;

interface ParamsOfPlayer {
  readonly name: string;
  readonly symbol: Char;
}

abstract class Player<GenericPlayer extends Player<GenericPlayer>> {
  private readonly name: ParamsOfPlayer["name"];
  private readonly symbol: ParamsOfPlayer["symbol"];

  public constructor({ name, symbol }: ParamsOfPlayer) {
    this.symbol = symbol;
    this.name = name;
  }

  public abstract clone(): GenericPlayer;

  public getName(): typeof this.name {
    return this.name;
  }

  public getSymbol(): typeof this.symbol {
    return this.symbol;
  }
}

export type { IndexOfPlayer, ParamsOfPlayer };
export { Player };
