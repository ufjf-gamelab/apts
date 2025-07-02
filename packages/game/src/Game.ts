import type { Integer } from "@repo/engine_core/types.js";

import type Move from "./Move.js";
import type { IndexOfPlayer, default as Player } from "./Player.js";
import type { State } from "./State.js";

interface Game {
  readonly clone: () => this;
  readonly getIndexOfNextPlayer: (state: State) => IndexOfPlayer;
  readonly getInitialState: () => State;
  readonly moves: GameParams["moves"];
  readonly name: GameParams["name"];
  readonly players: GameParams["players"];
  readonly quantityOfSlots: GameParams["quantityOfSlots"];
}

interface GameParams {
  readonly moves: readonly Move[];
  readonly name: string;
  readonly players: readonly Player[];
  readonly quantityOfSlots: Integer;
}

export type { Game, GameParams };
