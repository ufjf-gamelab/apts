import Move, { MoveParams } from "src/engine/Game/Move";
import { Integer } from "src/types";
import { Position } from "./types";

export interface TicTacToeMoveParams extends MoveParams {
  position: Position;
}

export class TicTacToeMove extends Move {
  private readonly position: TicTacToeMoveParams["position"];

  constructor({
    index,
    title,
    description,
    position,
  }: TicTacToeMoveParams & { index: Integer }) {
    super({ description, index, title });
    this.position = position;
  }

  public getPosition(): TicTacToeMoveParams["position"] {
    return this.position;
  }

  public static instantiateMoves(moves: TicTacToeMoveParams[]) {
    return moves.map((move, index) => new TicTacToeMove({ ...move, index }));
  }
}
