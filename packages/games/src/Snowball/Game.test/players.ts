import type { IndexOfPlayer } from "@repo/game/Player.js";

import {
  playersWithData,
  type SnowballPlayerWithData,
} from "../Player.test/setup.js";

const NOT_FOUND_INDEX = -1;

const getIndexedSnowballPlayersWithData = () =>
  [
    playersWithData.alice,
    playersWithData.bruno,
  ] satisfies SnowballPlayerWithData[];

const getIndexOfPlayer = ({ keyOfPlayer }: { keyOfPlayer: string }) => {
  const indexOfPlayer = getIndexedSnowballPlayersWithData().findIndex(
    (player) => player.keyOfPlayer === keyOfPlayer,
  );
  if (indexOfPlayer === NOT_FOUND_INDEX) {
    throw new Error(`There is no player with the key ${keyOfPlayer}.`);
  }
  return indexOfPlayer;
};

const getKeyOfPlayer = ({
  indexOfPlayer,
}: {
  indexOfPlayer: IndexOfPlayer;
}) => {
  const player = getIndexedSnowballPlayersWithData()[indexOfPlayer];
  if (typeof player === "undefined") {
    throw new Error(`There is no player with the index ${indexOfPlayer}.`);
  }
  return player.keyOfPlayer;
};

export { getIndexedSnowballPlayersWithData, getIndexOfPlayer, getKeyOfPlayer };
