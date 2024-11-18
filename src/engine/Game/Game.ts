import { Char, Integer } from "../../types";
import Move from "./Move";
import State from "./State";

export type Player = Integer;

export interface PlayerData {
  symbol: Char;
  name: string;
}

interface GameParams<M extends Move> {
  name: string;
  players: Map<Player, PlayerData>;
  quantityOfSlots: Integer;
  moves: Map<Integer, M>;
}

export default abstract class Game<M extends Move> {
  private readonly name: GameParams<M>["name"];
  private readonly players: GameParams<M>["players"];
  protected readonly quantityOfSlots: GameParams<M>["quantityOfSlots"];
  protected readonly moves: GameParams<M>["moves"];

  constructor({ name, players, quantityOfSlots, moves }: GameParams<M>) {
    this.name = name;
    this.players = players;
    this.quantityOfSlots = quantityOfSlots;
    this.moves = moves;
  }

  /* Getters */

  public abstract getInitialState(): State<this, M>;

  public getName(): GameParams<M>["name"] {
    return this.name;
  }

  public getPlayerData(player: Player): PlayerData {
    const playerData = this.players.get(player);
    if (typeof playerData === "undefined")
      throw Error(`Player ${player} does not exist`);
    return { ...playerData };
  }

  public getPlayers(): GameParams<M>["players"] {
    return { ...this.players };
  }

  public getQuantityOfSlots(): GameParams<M>["quantityOfSlots"] {
    return this.quantityOfSlots;
  }

  public getMoves(): GameParams<M>["moves"] {
    return { ...this.moves };
  }
}
