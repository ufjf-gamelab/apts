import { Char, Integer } from "@repo/engine/types";

export interface PlayerParams {
  readonly symbol: Char;
  readonly name: string;
}

export default abstract class Player {
  private readonly symbol: PlayerParams["symbol"];
  private readonly name: PlayerParams["name"];

  constructor({ symbol, name }: PlayerParams) {
    this.symbol = symbol;
    this.name = name;
  }

  public getSymbol(): PlayerParams["symbol"] {
    return this.symbol;
  }

  public getName(): PlayerParams["name"] {
    return this.name;
  }
}

export type PlayerKey = Integer;

export interface PlayerPair {
  key: PlayerKey;
  player: Player;
}
