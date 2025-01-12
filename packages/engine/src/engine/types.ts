export type LogMessage = (message: string) => void;

export type TensorLikeArray =
  | number
  | number[]
  | number[][]
  | number[][][]
  | number[][][][]
  | number[][][][][]
  | number[][][][][][];
