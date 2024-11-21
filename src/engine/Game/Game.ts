import { Char, Integer } from "../../types";
import Move, { MoveKey } from "./Move";
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
  moves: M[];
}

export default abstract class Game<M extends Move> {
  private readonly name: GameParams<M>["name"];
  private readonly players: GameParams<M>["players"];
  protected readonly quantityOfSlots: GameParams<M>["quantityOfSlots"];
  protected readonly moves: Map<MoveKey, M>;

  constructor({ name, players, quantityOfSlots, moves }: GameParams<M>) {
    this.name = name;
    this.players = players;
    this.quantityOfSlots = quantityOfSlots;
    this.moves = new Map(moves.map((move, index) => [index, move]));
  }

  /* Getters */

  public abstract getInitialState(): State<this, M>;

  public abstract getKeysOfTheValidMoves(state: State<this, M>): Set<MoveKey>;

  public getMove(key: MoveKey): M {
    const move = this.moves.get(key);
    if (typeof move === "undefined")
      throw Error(`Move with key ${key} does not exist`);
    return move;
  }

  public getMoves(): Map<MoveKey, M> {
    return new Map(this.moves);
  }

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

  public getQuantityOfMoves(): Integer {
    return this.moves.size;
  }

  public getQuantityOfSlots(): GameParams<M>["quantityOfSlots"] {
    return this.quantityOfSlots;
  }
}
