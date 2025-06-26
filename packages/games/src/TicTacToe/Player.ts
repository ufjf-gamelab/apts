import type { PlayerPair, PlayerParams } from "@repo/engine_game/Player.js";
import Player from "@repo/engine_game/Player.js";

import type TicTacToeGame from "./Game.js";
import type TicTacToeMove from "./Move.js";
import type TicTacToeState from "./State.js";

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
