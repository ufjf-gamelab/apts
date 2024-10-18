import { Char, Integer } from "../../types";
import State, { Player } from "./State";

export enum Outcome {
  Win = 1,
  Draw = 0,
  Loss = -1,
}

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

  public getName() {
    return this.name;
  }

  public getPlayerData(player: Player) {
    const playerData = this.players.get(player);
    if (typeof playerData === "undefined")
      throw Error(`Player ${player} does not exist`);
    return { ...playerData };
  }

  public getPlayers() {
    return { ...this.players };
  }

  public abstract getQuantityOfPlayers(): number;

  public getQuantityOfSlots() {
    return this.quantityOfSlots;
  }
}
