export enum GameName {
    "TicTacToe" = "TicTacToe",
    "ConnectFour" = "ConnectFour",
}

export type LogMessage = (message: string) => void;

export type TensorLikeArray =
    | number
    | number[]
    | number[][]
    | number[][][]
    | number[][][][]
    | number[][][][][]
    | number[][][][][][];
