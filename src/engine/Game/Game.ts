import { Char, Integer } from "../../types";
import State, { Move, Player } from "./State";

export enum Outcome {
  Win = 1,
  Draw = 0,
  Loss = -1,
}

export interface OutcomeOfMove {
  gameHasEnded: boolean;
  // Points achieved or lost by the player who made the move.
  points: number;
  winner: Player | null;
}

export interface PlayerData {
  symbol: Char;
  name: string;
}

interface GameParams {
  name: string;
  players: Map<Player, PlayerData>;
  quantityOfPositions: Integer;
}

export default abstract class Game {
  private readonly name: GameParams["name"];
  private readonly players: GameParams["players"];
  protected readonly quantityOfPositions: GameParams["quantityOfPositions"];

  constructor({ name, players, quantityOfPositions }: GameParams) {
    this.name = name;
    this.players = players;
    this.quantityOfPositions = quantityOfPositions;
  }

  /* Getters */

  public abstract getInitialState(): State<Game>;

  public getName() {
    return this.name;
  }

  public getPlayerData(player: Player) {
    const playerData = this.players.get(player);
    if (typeof playerData === "undefined")
      throw Error(`Player ${player} does not exist`);
    return playerData;
  }

  public abstract getQuantityOfPlayers(): number;

  public getQuantityOfPositions() {
    return this.quantityOfPositions;
  }

  /* Static methods */

  /// Returns whether the game is over and the quality of the victory (or loss).
  public static getOutcomeOfMove(
    state: State<Game>,
    move: Move,
  ): OutcomeOfMove {
    // Check if the player has won
    const winner = state.getWinner(move);

    if (winner !== null)
      return { gameHasEnded: true, points: Outcome.Win, winner };

    // Check if the game is a draw
    const validMoves = state.getValidMoves();
    if (validMoves.some(validMove => validMove))
      return { gameHasEnded: true, points: Outcome.Draw, winner: null };

    // No terminal state
    return { gameHasEnded: false, points: Outcome.Draw, winner: null };
  }
}
