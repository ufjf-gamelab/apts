/* Common */
export enum GameName {
  TicTacToe = "tictactoe",
  ConnectFour = "connect4",
}

/// Interface
export enum GameMode {
  PvP = "Player vs. Player",
  PvC = "Player vs. Computer",
  CvC = "Computer vs. Computer",
}

/* Tensorflow */
export type TensorLikeArray =
  | number
  | number[]
  | number[][]
  | number[][][]
  | number[][][][]
  | number[][][][][]
  | number[][][][][][];
