import Player, { PlayerPair, PlayerParams } from "@repo/engine/Game/Player.js";
import TicTacToeGame from "./Game.js";
import TicTacToeMove from "./Move.js";
import TicTacToeState from "./State.js";

export type TicTacToePlayerPair = PlayerPair<
  TicTacToePlayer,
  TicTacToeMove,
  TicTacToeState,
  TicTacToeGame
>;

export type TicTacToePlayerParams = PlayerParams<
  TicTacToePlayer,
  TicTacToeMove,
  TicTacToeState,
  TicTacToeGame
>;

export default class TicTacToePlayer extends Player<
  TicTacToePlayer,
  TicTacToeMove,
  TicTacToeState,
  TicTacToeGame
> {}
