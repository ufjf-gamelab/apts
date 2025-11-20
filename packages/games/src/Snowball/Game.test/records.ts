import type { RequiredSnowballGameParams } from "./setup.js";

import { getIndexedSnowballMovesWithData } from "./moves.js";
import { getIndexedSnowballPlayersWithData } from "./players.js";
import { getIndexedSnowballSlotsWithData } from "./slots.js";

const recordOfRequiredParamsOfGamesForUnitTest = {
  snowballWith9RowsAnd9Columns: {
    moves: getIndexedSnowballMovesWithData(),
    name: "Snowball",
    players: getIndexedSnowballPlayersWithData(),
    slots: getIndexedSnowballSlotsWithData(),
  },
} as const satisfies Record<string, RequiredSnowballGameParams>;

export { recordOfRequiredParamsOfGamesForUnitTest };
