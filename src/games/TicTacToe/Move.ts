import Game from "src/engine/Game/Game";
import Move, { MoveParams } from "src/engine/Game/Move";
import State from "src/engine/Game/State";
import { Position } from "./types";
import { TicTacToeState } from "./State";

export interface TicTacToeMoveParams extends MoveParams {
  position: Position;
}

export class TicTacToeMove extends Move {
  position: TicTacToeMoveParams["position"];

  constructor({ title, description, position }: TicTacToeMoveParams) {
    super({ description, title });
    this.position = position;
  }

  /* Getters */

  public getPosition(): Position {
    return this.position;
  }

  /* Methods */

  public play(
    state: TicTacToeState,
  ): TicTacToeState {
    const lastAssertedPosition = state.getLastAssertedPosition();
    if (lastAssertedPosition !== null) {
      return 

}

// private getTurnOutcome(): TurnOutcome {
//   if (this.lastAssertedPosition === null) {
//     return {
//       gameHasEnded: false,
//       scoreboard: new Map<Player, number>([
//         [Player.X, Outcome.Draw],
//         [Player.O, Outcome.Draw],
//       ]),
//       winner: null,
//     };
//   }

//   const rowIndex = Math.floor(
//     this.lastAssertedPosition / this.getQuantityOfColumns(),
//   );
//   const columnIndex = this.lastAssertedPosition % this.getQuantityOfColumns();

//   const playerHasWon = this.hasThePlayerWon(rowIndex, columnIndex);
//   if (playerHasWon) {
//     const scoreboard = new Map<Player, number>([
//       [Player.X, Outcome.Loss],
//       [Player.O, Outcome.Loss],
//     ]);
//     scoreboard.set(this.player, Outcome.Win);
//     return { gameHasEnded: true, scoreboard, winner: this.player };
//   }

//   const scoreboard = new Map<Player, number>([
//     [Player.X, Outcome.Draw],
//     [Player.O, Outcome.Draw],
//   ]);

//   const maskFromValidMoves = this.getMaskFromValidMoves();
//   if (maskFromValidMoves.every((validMove: boolean) => !validMove)) {
//     return { gameHasEnded: true, scoreboard, winner: null };
//   }

//   return {
//     gameHasEnded: false,
//     scoreboard,
//     winner: null,
//   };
// }
