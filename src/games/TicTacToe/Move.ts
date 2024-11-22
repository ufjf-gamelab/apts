import Move, { MoveParams } from "src/engine/Game/Move";
import { Integer } from "src/types";
import TicTacToeGame from "./Game";
import { TicTacToePlayer } from "./Player";
import { TicTacToeState } from "./State";
import { PlayerKey } from "./constants";
import { Slot } from "./types";

export interface Position {
  readonly rowIndex: Integer;
  readonly columnIndex: Integer;
}

export interface TicTacToeMoveParams extends MoveParams {
  readonly position: Position;
}

export class TicTacToeMove extends Move<
  TicTacToePlayer,
  TicTacToeMove,
  TicTacToeState,
  TicTacToeGame
> {
  readonly position: TicTacToeMoveParams["position"];

  constructor({ title, description, position }: TicTacToeMoveParams) {
    super({ description, title });
    this.position = position;
  }

  /* Getters */

  public getPosition(): Position {
    return this.position;
  }

  /* Methods */

  public play(state: TicTacToeState): TicTacToeState {
    const game = state.getGame();
    const playerKey: PlayerKey = state.getPlayerKey();
    const slotFilledByPlayer = playerKey === PlayerKey.X ? Slot.X : Slot.O;

    const slots = state.getSlots();
    const { rowIndex, columnIndex } = this.position;

    const slotIndex = rowIndex * game.getQuantityOfColumns() + columnIndex;
    const updatedSlots = [...slots];
    updatedSlots[slotIndex] = slotFilledByPlayer;

    return new TicTacToeState({
      game,
      lastAssertedPosition: this.position,
      playerKey: game.getNextPlayerKey(playerKey),
      slots: updatedSlots,
    });
  }
}
