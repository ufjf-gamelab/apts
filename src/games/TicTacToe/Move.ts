import Move, { MoveParams } from "src/engine/Game/Move";
import { Position } from "./types";

export interface TicTacToeMoveParams extends MoveParams {
  position: Position;
}

export class TicTacToeMove extends Move {
  readonly position: TicTacToeMoveParams["position"];

  constructor({ title, description, position }: TicTacToeMoveParams) {
    super({ description, title });
    this.position = position;
  }

  /* Getters */

  public getPosition(): Position {
    return this.position;
  }
}
