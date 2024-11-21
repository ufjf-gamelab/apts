import Move, { MoveParams } from "src/engine/Game/Move";
import { Integer } from "src/types";

export interface Position {
  readonly rowIndex: Integer;
  readonly columnIndex: Integer;
}

export interface TicTacToeMoveParams extends MoveParams {
  readonly position: Position;
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
