import { Char, Integer } from "../../types";
import State from "./State";

export type Player = Integer;

export interface PlayerData {
  symbol: Char;
  name: string;
}

interface GameParams {
  name: string;
  players: Map<Player, PlayerData>;
  quantityOfSlots: Integer;
}

export default abstract class Game {
  private readonly name: GameParams["name"];
  private readonly players: GameParams["players"];
  protected readonly quantityOfSlots: GameParams["quantityOfSlots"];

  constructor({ name, players, quantityOfSlots }: GameParams) {
    this.name = name;
    this.players = players;
    this.quantityOfSlots = quantityOfSlots;
  }

  /* Getters */

  public abstract getInitialState(): State<this>;

  public getName(): string {
    return this.name;
  }

  public getPlayerData(player: Player): PlayerData {
    const playerData = this.players.get(player);
    if (typeof playerData === "undefined")
      throw Error(`Player ${player} does not exist`);
    return { ...playerData };
  }

  public getPlayers(): Map<Player, PlayerData> {
    return { ...this.players };
  }

  public abstract getQuantityOfPlayers(): Integer;

  public getQuantityOfSlots(): Integer {
    return this.quantityOfSlots;
  }
}
